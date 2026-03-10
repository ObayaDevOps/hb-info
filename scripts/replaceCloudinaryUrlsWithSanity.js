#!/usr/bin/env node

/**
 * Replace Cloudinary URLs in source files using the upload manifest.
 *
 * Defaults to dry-run. Use --write to persist changes.
 */

const fs = require('fs/promises')
const path = require('path')

const DEFAULT_MANIFEST = path.resolve(process.cwd(), 'docs/cloudinary_to_sanity_manifest.json')
const DEFAULT_ROOT = path.resolve(process.cwd(), 'src')
const DEFAULT_REPORT = path.resolve(process.cwd(), 'docs/cloudinary_url_replacement_report.json')

function parseArgs(argv) {
  const args = {
    write: false,
    manifest: DEFAULT_MANIFEST,
    root: DEFAULT_ROOT,
    report: DEFAULT_REPORT,
  }

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]
    if (arg === '--write') args.write = true
    else if (arg === '--manifest') args.manifest = path.resolve(process.cwd(), argv[++i])
    else if (arg === '--root') args.root = path.resolve(process.cwd(), argv[++i])
    else if (arg === '--report') args.report = path.resolve(process.cwd(), argv[++i])
    else if (arg === '--help') {
      // eslint-disable-next-line no-console
      console.log(`Usage: node scripts/replaceCloudinaryUrlsWithSanity.js [options]

Options:
  --write               Persist replacements (default is dry-run)
  --manifest <path>     Manifest JSON (default: docs/cloudinary_to_sanity_manifest.json)
  --root <path>         Directory to update (default: src)
  --report <path>       JSON report output path
  --help                Show this help
`)
      process.exit(0)
    }
  }

  return args
}

async function walkFiles(rootDir) {
  const out = []
  async function walk(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true })
    for (const entry of entries) {
      const abs = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        await walk(abs)
        continue
      }
      if (!/\.(js|jsx|ts|tsx|mjs|cjs)$/.test(entry.name)) continue
      out.push(abs)
    }
  }
  await walk(rootDir)
  return out
}

function countOccurrences(text, needle) {
  if (!needle) return 0
  let count = 0
  let index = 0
  while (true) {
    index = text.indexOf(needle, index)
    if (index === -1) break
    count += 1
    index += needle.length
  }
  return count
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  const manifestRaw = await fs.readFile(args.manifest, 'utf8')
  const manifest = JSON.parse(manifestRaw)

  if (!manifest || !Array.isArray(manifest.entries)) {
    throw new Error(`Invalid manifest format at ${args.manifest}`)
  }

  const mapping = new Map()
  for (const entry of manifest.entries) {
    if (!entry || !entry.cloudinaryUrl || !entry.sanityAssetUrl) continue
    if (entry.action === 'error' || entry.action === 'dry_run') continue
    mapping.set(entry.cloudinaryUrl, entry.sanityAssetUrl)
  }

  if (mapping.size === 0) {
    throw new Error('No usable cloudinary->sanity URL mappings found. Run upload script first.')
  }

  const files = await walkFiles(args.root)
  const report = {
    generatedAt: new Date().toISOString(),
    write: args.write,
    root: args.root,
    manifest: args.manifest,
    totalFilesScanned: files.length,
    totalFilesChanged: 0,
    totalReplacements: 0,
    files: [],
  }

  for (const file of files) {
    const original = await fs.readFile(file, 'utf8')
    let updated = original
    let fileReplacements = 0

    for (const [fromUrl, toUrl] of mapping.entries()) {
      const hits = countOccurrences(updated, fromUrl)
      if (hits === 0) continue
      updated = updated.split(fromUrl).join(toUrl)
      fileReplacements += hits
    }

    if (fileReplacements > 0) {
      report.totalFilesChanged += 1
      report.totalReplacements += fileReplacements
      report.files.push({
        file: path.relative(process.cwd(), file),
        replacements: fileReplacements,
      })
      if (args.write) {
        await fs.writeFile(file, updated, 'utf8')
      }
    }
  }

  await fs.mkdir(path.dirname(args.report), { recursive: true })
  await fs.writeFile(args.report, `${JSON.stringify(report, null, 2)}\n`, 'utf8')

  // eslint-disable-next-line no-console
  console.log(JSON.stringify(report, null, 2))
  // eslint-disable-next-line no-console
  console.log(`Wrote ${args.report}`)
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(`Replacement run failed: ${err.message}`)
  process.exit(1)
})
