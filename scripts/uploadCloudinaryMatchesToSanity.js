#!/usr/bin/env node

/**
 * Upload matched local Cloudinary export files to Sanity assets.
 *
 * Inputs:
 * - docs/cloudinary_url_to_local_match.csv
 * - /media/obi/Seagate/Cloudinary_Bulk_Download_March_4_2026
 *
 * Output:
 * - docs/cloudinary_to_sanity_manifest.json
 * - docs/cloudinary_to_sanity_manifest.csv
 */

const fs = require('fs')
const fsp = require('fs/promises')
const path = require('path')
const { createClient } = require('@sanity/client')

try {
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  const dotenv = require('dotenv')
  dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })
  dotenv.config({ path: path.resolve(process.cwd(), '.env') })
} catch (err) {
  // Optional.
}

const DEFAULT_INPUT_CSV = path.resolve(process.cwd(), 'docs/cloudinary_url_to_local_match.csv')
const DEFAULT_DOWNLOAD_ROOT = '/media/obi/Seagate/Cloudinary_Bulk_Download_March_4_2026'
const DEFAULT_MANIFEST_JSON = path.resolve(process.cwd(), 'docs/cloudinary_to_sanity_manifest.json')
const DEFAULT_MANIFEST_CSV = path.resolve(process.cwd(), 'docs/cloudinary_to_sanity_manifest.csv')

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif'])

function parseArgs(argv) {
  const args = {
    dryRun: false,
    force: false,
    inputCsv: DEFAULT_INPUT_CSV,
    downloadRoot: DEFAULT_DOWNLOAD_ROOT,
    manifestJson: DEFAULT_MANIFEST_JSON,
    manifestCsv: DEFAULT_MANIFEST_CSV,
    limit: null,
    manifestJsonProvided: false,
    manifestCsvProvided: false,
  }

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]
    if (arg === '--dry-run') args.dryRun = true
    else if (arg === '--force') args.force = true
    else if (arg === '--input-csv') args.inputCsv = path.resolve(process.cwd(), argv[++i])
    else if (arg === '--download-root') args.downloadRoot = argv[++i]
    else if (arg === '--manifest-json') {
      args.manifestJson = path.resolve(process.cwd(), argv[++i])
      args.manifestJsonProvided = true
    } else if (arg === '--manifest-csv') {
      args.manifestCsv = path.resolve(process.cwd(), argv[++i])
      args.manifestCsvProvided = true
    }
    else if (arg === '--limit') args.limit = Number(argv[++i] || 0) || null
    else if (arg === '--help') {
      // eslint-disable-next-line no-console
      console.log(`Usage: node scripts/uploadCloudinaryMatchesToSanity.js [options]

Options:
  --dry-run                 Validate and plan uploads, no network writes
  --force                   Ignore prior manifest records and upload again
  --input-csv <path>        CSV mapping input (default: docs/cloudinary_url_to_local_match.csv)
  --download-root <path>    Root folder where local Cloudinary files are stored
  --manifest-json <path>    Output manifest JSON path
  --manifest-csv <path>     Output manifest CSV path
  --limit <n>               Process only first n matched rows
  --help                    Show this help
`)
      process.exit(0)
    }
  }

  return args
}

function parseCsv(content) {
  const rows = []
  const current = []
  let field = ''
  let inQuotes = false

  const pushField = () => {
    current.push(field)
    field = ''
  }
  const pushRow = () => {
    if (current.length > 1 || (current.length === 1 && current[0] !== '')) {
      rows.push([...current])
    }
    current.length = 0
  }

  for (let i = 0; i < content.length; i += 1) {
    const ch = content[i]
    const next = content[i + 1]

    if (inQuotes) {
      if (ch === '"' && next === '"') {
        field += '"'
        i += 1
      } else if (ch === '"') {
        inQuotes = false
      } else {
        field += ch
      }
      continue
    }

    if (ch === '"') {
      inQuotes = true
    } else if (ch === ',') {
      pushField()
    } else if (ch === '\n') {
      pushField()
      pushRow()
    } else if (ch === '\r') {
      // Ignore CR.
    } else {
      field += ch
    }
  }

  if (field.length > 0 || current.length > 0) {
    pushField()
    pushRow()
  }

  if (rows.length === 0) return []
  const header = rows[0]
  return rows.slice(1).map((cols) => {
    const obj = {}
    for (let i = 0; i < header.length; i += 1) {
      obj[header[i]] = cols[i] ?? ''
    }
    return obj
  })
}

function splitPipeList(value) {
  if (!value) return []
  return value
    .split('|')
    .map((part) => part.trim())
    .filter(Boolean)
}

function toCsvCell(value) {
  const stringValue = value == null ? '' : String(value)
  if (/[",\n\r]/.test(stringValue)) {
    return `"${stringValue.replace(/"/g, '""')}"`
  }
  return stringValue
}

async function fileExists(absPath) {
  try {
    await fsp.access(absPath, fs.constants.R_OK)
    return true
  } catch {
    return false
  }
}

async function readExistingManifest(manifestPath) {
  try {
    const text = await fsp.readFile(manifestPath, 'utf8')
    const data = JSON.parse(text)
    if (!data || !Array.isArray(data.entries)) return { entries: [] }
    return data
  } catch {
    return { entries: [] }
  }
}

function determineAssetType(filename) {
  const ext = path.extname(filename).toLowerCase()
  if (IMAGE_EXTENSIONS.has(ext)) return 'image'
  return 'file'
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  if (args.dryRun && !args.manifestJsonProvided) {
    args.manifestJson = path.resolve(process.cwd(), 'docs/cloudinary_to_sanity_manifest.dry-run.json')
  }
  if (args.dryRun && !args.manifestCsvProvided) {
    args.manifestCsv = path.resolve(process.cwd(), 'docs/cloudinary_to_sanity_manifest.dry-run.csv')
  }

  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.NEXT_PUBLIC_SANITY_DATASET) {
    throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET in environment.')
  }
  const authToken =
    process.env.SANITY_API_WRITE_TOKEN ||
    process.env.SANITY_API_READ_TOKEN ||
    process.env.SANITY_API_TOKEN

  if (!authToken) {
    throw new Error(
      'Missing SANITY_API_WRITE_TOKEN (or SANITY_API_READ_TOKEN / SANITY_API_TOKEN with write permissions).'
    )
  }

  const inputCsvText = await fsp.readFile(args.inputCsv, 'utf8')
  const parsedRows = parseCsv(inputCsvText)
  const matchedRows = parsedRows.filter((row) => row.match_type && row.match_type !== 'no_match')
  const workRows = args.limit ? matchedRows.slice(0, args.limit) : matchedRows

  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-03-27',
    useCdn: false,
    token: authToken,
  })

  const existingManifest = await readExistingManifest(args.manifestJson)
  const existingByUrl = new Map()
  const existingByLocalPath = new Map()
  for (const entry of existingManifest.entries || []) {
    if (entry.cloudinaryUrl && entry.sanityAssetId && entry.action !== 'error') {
      existingByUrl.set(entry.cloudinaryUrl, entry)
      if (entry.localFileAbsolute) existingByLocalPath.set(entry.localFileAbsolute, entry)
    }
  }

  const localPathAssetCache = new Map(existingByLocalPath)
  const nextEntries = []
  const summary = {
    totalRowsInCsv: parsedRows.length,
    matchedRowsInCsv: matchedRows.length,
    processedRows: workRows.length,
    uploaded: 0,
    reusedFromManifestByUrl: 0,
    reusedFromManifestByLocalPath: 0,
    dryRunRows: 0,
    skippedPermissionBlocked: 0,
    errors: 0,
  }
  let permissionBlocked = false

  for (let index = 0; index < workRows.length; index += 1) {
    const row = workRows[index]
    const matchedFiles = splitPipeList(row.matched_files)
    const repoRefs = splitPipeList(row.repo_references)
    const localRelative = matchedFiles[0]
    const localAbsolute = localRelative ? path.resolve(args.downloadRoot, localRelative) : null
    const filename = localRelative ? path.basename(localRelative) : null
    const assetType = filename ? determineAssetType(filename) : null

    const baseEntry = {
      index: index + 1,
      cloudinaryUrl: row.cloudinary_url,
      selectedCandidate: row.selected_candidate || '',
      matchType: row.match_type,
      matchedFileCount: Number(row.matched_file_count || 0),
      localFileRelative: localRelative || '',
      localFileAbsolute: localAbsolute || '',
      occurrenceCount: Number(row.occurrence_count || 0),
      repoReferences: repoRefs,
      assetType: assetType || '',
      sanityAssetId: '',
      sanityAssetUrl: '',
      action: '',
      error: '',
    }

    if (permissionBlocked) {
      nextEntries.push({
        ...baseEntry,
        action: 'skipped_permission_blocked',
        error: 'Skipped because prior upload returned insufficient permissions.',
      })
      summary.skippedPermissionBlocked += 1
      // eslint-disable-next-line no-console
      console.log(`[${index + 1}/${workRows.length}] SKIP permission blocked ${filename || row.cloudinary_url}`)
      continue
    }

    if (!row.cloudinary_url || !localRelative || !localAbsolute || !filename || !assetType) {
      nextEntries.push({
        ...baseEntry,
        action: 'error',
        error: 'Missing cloudinary URL or matched local file path in input row.',
      })
      summary.errors += 1
      // eslint-disable-next-line no-console
      console.error(`[${index + 1}/${workRows.length}] ERROR missing input data for row.`)
      continue
    }

    if (!args.force && existingByUrl.has(row.cloudinary_url)) {
      const previous = existingByUrl.get(row.cloudinary_url)
      nextEntries.push({
        ...baseEntry,
        sanityAssetId: previous.sanityAssetId,
        sanityAssetUrl: previous.sanityAssetUrl,
        action: 'reused_from_manifest_by_url',
      })
      localPathAssetCache.set(localAbsolute, {
        sanityAssetId: previous.sanityAssetId,
        sanityAssetUrl: previous.sanityAssetUrl,
      })
      summary.reusedFromManifestByUrl += 1
      // eslint-disable-next-line no-console
      console.log(`[${index + 1}/${workRows.length}] REUSE by URL ${filename}`)
      continue
    }

    if (!(await fileExists(localAbsolute))) {
      nextEntries.push({
        ...baseEntry,
        action: 'error',
        error: `Local file does not exist or is unreadable: ${localAbsolute}`,
      })
      summary.errors += 1
      // eslint-disable-next-line no-console
      console.error(`[${index + 1}/${workRows.length}] ERROR missing file ${localAbsolute}`)
      continue
    }

    if (!args.force && localPathAssetCache.has(localAbsolute)) {
      const previous = localPathAssetCache.get(localAbsolute)
      nextEntries.push({
        ...baseEntry,
        sanityAssetId: previous.sanityAssetId,
        sanityAssetUrl: previous.sanityAssetUrl,
        action: 'reused_from_manifest_by_local_path',
      })
      summary.reusedFromManifestByLocalPath += 1
      // eslint-disable-next-line no-console
      console.log(`[${index + 1}/${workRows.length}] REUSE by local path ${filename}`)
      continue
    }

    if (args.dryRun) {
      nextEntries.push({
        ...baseEntry,
        action: 'dry_run',
      })
      summary.dryRunRows += 1
      // eslint-disable-next-line no-console
      console.log(`[${index + 1}/${workRows.length}] DRY-RUN ${assetType} ${filename}`)
      continue
    }

    try {
      const uploaded = await client.assets.upload(assetType, fs.createReadStream(localAbsolute), {
        filename,
        source: {
          id: row.cloudinary_url,
          name: 'cloudinary-migration',
          url: row.cloudinary_url,
        },
        tag: 'cloudinary-migration',
      })

      nextEntries.push({
        ...baseEntry,
        sanityAssetId: uploaded._id,
        sanityAssetUrl: uploaded.url,
        action: 'uploaded',
      })

      localPathAssetCache.set(localAbsolute, {
        sanityAssetId: uploaded._id,
        sanityAssetUrl: uploaded.url,
      })
      summary.uploaded += 1
      // eslint-disable-next-line no-console
      console.log(`[${index + 1}/${workRows.length}] UPLOADED ${assetType} ${filename}`)
    } catch (error) {
      const message = error.message || String(error)
      if (/insufficient permissions|permission "create" required/i.test(message)) {
        permissionBlocked = true
      }
      nextEntries.push({
        ...baseEntry,
        action: 'error',
        error: message,
      })
      summary.errors += 1
      // eslint-disable-next-line no-console
      console.error(`[${index + 1}/${workRows.length}] ERROR upload failed ${filename}: ${message}`)
    }
  }

  const manifest = {
    generatedAt: new Date().toISOString(),
    dryRun: args.dryRun,
    force: args.force,
    inputCsv: path.relative(process.cwd(), args.inputCsv),
    downloadRoot: args.downloadRoot,
    sanity: {
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
      apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-03-27',
    },
    summary,
    entries: nextEntries,
  }

  await fsp.mkdir(path.dirname(args.manifestJson), { recursive: true })
  await fsp.writeFile(args.manifestJson, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')

  const csvHeader = [
    'cloudinary_url',
    'selected_candidate',
    'match_type',
    'local_file_relative',
    'local_file_absolute',
    'asset_type',
    'sanity_asset_id',
    'sanity_asset_url',
    'action',
    'error',
    'occurrence_count',
    'repo_references',
  ]

  const csvLines = [csvHeader.join(',')]
  for (const entry of nextEntries) {
    const values = [
      entry.cloudinaryUrl,
      entry.selectedCandidate,
      entry.matchType,
      entry.localFileRelative,
      entry.localFileAbsolute,
      entry.assetType,
      entry.sanityAssetId,
      entry.sanityAssetUrl,
      entry.action,
      entry.error,
      entry.occurrenceCount,
      (entry.repoReferences || []).join(' | '),
    ]
    csvLines.push(values.map(toCsvCell).join(','))
  }
  await fsp.writeFile(args.manifestCsv, `${csvLines.join('\n')}\n`, 'utf8')

  // eslint-disable-next-line no-console
  console.log('\nMigration summary:')
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(summary, null, 2))
  // eslint-disable-next-line no-console
  console.log(`Wrote ${args.manifestJson}`)
  // eslint-disable-next-line no-console
  console.log(`Wrote ${args.manifestCsv}`)
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(`Migration failed: ${err.message}`)
  process.exit(1)
})
