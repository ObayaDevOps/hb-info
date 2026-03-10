# Cloudinary -> Sanity Migration Plan

## Goal
Upload locally downloaded Cloudinary assets to Sanity using the deduplicated filename matches in `docs/cloudinary_url_to_local_match.csv`, then produce a deterministic manifest for replacing Cloudinary URLs in content.

## Inputs
- Full hit spreadsheet: `docs/cloudinary_usage_matches.csv`
- Deduplicated URL->file spreadsheet: `docs/cloudinary_url_to_local_match.csv`
- Summary: `docs/cloudinary_usage_summary.md`
- Local image source: `/media/obi/Seagate/Cloudinary_Bulk_Download_March_4_2026`
- Sanity config/env: `.env.local`, `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_API_WRITE_TOKEN`

## Current Audit Snapshot
- Cloudinary hit rows in repo: `108`
- Cloudinary URL rows: `97`
- URL rows with local exact filename match: `92`
- Unique Cloudinary URLs with local exact filename match: `45`
- URL rows without a local match: `5`

Unmatched URLs (from `src/pages/our-process.js`):
- `HB_Beekeeper_Field_yvm7dn.png`
- `HB_Single_Origin_vvfwce.png`
- `HB_Pouring_Honey_fypwmz.png`
- `HB_Beeswax_qonpwy.png`
- `HB_Infused_Honeys_zfy3c4.png`

## Execution Plan
1. Create a migration script `scripts/uploadCloudinaryMatchesToSanity.js`.
2. Read `docs/cloudinary_url_to_local_match.csv` and keep rows where `match_type != no_match`.
3. Resolve `matched_files` to absolute paths in `/media/obi/Seagate/Cloudinary_Bulk_Download_March_4_2026`.
4. Infer Sanity asset type from extension:
   - image: `jpg`, `jpeg`, `png`, `webp`, `gif`, `avif`, `svg`
   - file: everything else (for current data: PDFs from lab tests)
5. Upload via `client.assets.upload(type, streamOrBuffer, { filename, source, tag })`:
   - `source.id`: original Cloudinary URL
   - `source.name`: `cloudinary-migration`
   - `source.url`: original Cloudinary URL
   - `tag`: `cloudinary-migration`
6. Write `docs/cloudinary_to_sanity_manifest.json` containing:
   - `cloudinary_url`
   - `repo_path`, `line_number`
   - `local_file`
   - `sanity_asset_id`
   - `sanity_asset_url`
   - `asset_type`
7. Add dry-run mode:
   - `--dry-run` prints proposed uploads and validates readable files without uploading.
8. Add idempotency:
   - If manifest already has a `cloudinary_url`, skip re-upload unless `--force` is passed.
9. Resolve the 5 unmatched files manually, then rerun upload for full coverage.

## Suggested Commands
```bash
# 1) Refresh audit CSV (already done once)
python3 scripts/cloudinary_usage_audit.py

# 2) Dry run upload plan
node scripts/uploadCloudinaryMatchesToSanity.js --dry-run

# 3) Perform uploads
node scripts/uploadCloudinaryMatchesToSanity.js
```

## Implementation Status (March 10, 2026)
- Implemented:
  - `scripts/uploadCloudinaryMatchesToSanity.js`
  - `scripts/replaceCloudinaryUrlsWithSanity.js`
  - npm scripts in `package.json`:
    - `cloudinary:audit`
    - `cloudinary:upload:dry`
    - `cloudinary:upload`
    - `cloudinary:replace:dry`
    - `cloudinary:replace`
- Verified dry-run upload: `45/45` matched assets validated, `0` errors.
- Live upload result after token update:
  - Manifest summary: `uploaded=45`, `errors=0`.
  - Manifest files:
    - `docs/cloudinary_to_sanity_manifest.json`
    - `docs/cloudinary_to_sanity_manifest.csv`
- Source URL replacement result:
  - `92` Cloudinary URL replacements applied across `27` source files.
  - Replacement report: `docs/cloudinary_url_replacement_report.json`
  - Remaining Cloudinary URLs in app source: `5` unmatched URLs in `src/pages/our-process.js`
  - Additional intentional Cloudinary references still present:
    - `next.config.mjs` domain allowlist (`res.cloudinary.com`)
    - `src/pages/_document.js` preconnect to Cloudinary

## Unblock Steps
1. Resolve the 5 unmatched `our-process` Cloudinary images by adding those files to the local download folder (or mapping them manually).
2. Add rows for those files to `docs/cloudinary_url_to_local_match.csv`.
3. Rerun:
   - `npm run cloudinary:upload`
   - `npm run cloudinary:replace`

## Post-Upload Replacement Phase
1. Build `cloudinary_url -> sanity_asset_url` map from `docs/cloudinary_to_sanity_manifest.json`.
2. Update references in code/content using this mapping.
3. Run app checks (`npm run build`) and sanity content validation.
4. Keep fallback behavior for any still-unmatched Cloudinary URLs until resolved.
