#!/usr/bin/env python3
"""Audit Cloudinary usage in repo and match URL-derived names to local files."""

from __future__ import annotations

import csv
import json
import re
import subprocess
from collections import defaultdict
from pathlib import Path
from typing import Dict, List, Tuple
from urllib.parse import unquote, urlparse

REPO_ROOT = Path(__file__).resolve().parents[1]
DOWNLOAD_ROOT = Path("/media/obi/Seagate/Cloudinary_Bulk_Download_March_4_2026")
OUTPUT_CSV = REPO_ROOT / "docs" / "cloudinary_usage_matches.csv"
UNIQUE_OUTPUT_CSV = REPO_ROOT / "docs" / "cloudinary_url_to_local_match.csv"
SUMMARY_MD = REPO_ROOT / "docs" / "cloudinary_usage_summary.md"

RG_PATTERN = r"cloudinary|res\.cloudinary\.com|cloudinary\.com"
URL_PATTERN = re.compile(r"https?://(?:res\.)?cloudinary\.com/[^\s\"'`)<>\]]+", re.IGNORECASE)
VERSION_PATTERN = re.compile(r"^v\d+$")
SUFFIX_PATTERN = re.compile(r"_[a-z0-9]{5,}$", re.IGNORECASE)
RG_EXCLUDE_GLOBS = [
    "!docs/cloudinary_*",
    "!scripts/cloudinary_usage_audit.py",
]


def run_rg_matches() -> List[dict]:
    cmd = ["rg", "--json", "-n", "-S", RG_PATTERN]
    for glob in RG_EXCLUDE_GLOBS:
        cmd.extend(["--glob", glob])
    cmd.append(".")
    proc = subprocess.run(cmd, cwd=REPO_ROOT, capture_output=True, text=True, check=True)
    rows = []
    for line in proc.stdout.splitlines():
        payload = json.loads(line)
        if payload.get("type") != "match":
            continue
        data = payload["data"]
        rows.append(
            {
                "repo_path": data["path"]["text"].lstrip("./"),
                "line_number": data["line_number"],
                "line_text": data["lines"]["text"].rstrip("\n"),
            }
        )
    return rows


def strip_cloudinary_suffix(stem: str) -> str:
    return SUFFIX_PATTERN.sub("", stem)


def extract_public_id_filename(url: str) -> str:
    parsed = urlparse(url)
    parts = [p for p in parsed.path.split("/") if p]
    if "upload" not in parts:
        return ""
    upload_idx = parts.index("upload")
    after_upload = parts[upload_idx + 1 :]
    if not after_upload:
        return ""
    version_idx = next((i for i, part in enumerate(after_upload) if VERSION_PATTERN.match(part)), None)
    if version_idx is not None:
        public_parts = after_upload[version_idx + 1 :]
        if not public_parts:
            return ""
        return unquote(public_parts[-1])
    return unquote(after_upload[-1])


def url_candidates(url: str) -> List[str]:
    parsed = urlparse(url)
    path_tail = unquote(Path(parsed.path).name)
    public_tail = extract_public_id_filename(url)
    values: List[str] = []
    for item in (path_tail, public_tail):
        if item and item not in values:
            values.append(item)
    for item in list(values):
        stem = Path(item).stem
        suffixless_stem = strip_cloudinary_suffix(stem)
        if suffixless_stem != stem:
            normalized = f"{suffixless_stem}{Path(item).suffix}"
            if normalized not in values:
                values.append(normalized)
    return values


def build_download_index(root: Path) -> Tuple[Dict[str, List[str]], Dict[str, List[str]], Dict[str, List[str]], int]:
    by_basename: Dict[str, List[str]] = defaultdict(list)
    by_stem: Dict[str, List[str]] = defaultdict(list)
    by_suffixless_stem: Dict[str, List[str]] = defaultdict(list)
    file_count = 0

    for path in root.rglob("*"):
        if not path.is_file():
            continue
        file_count += 1
        rel = str(path.relative_to(root))
        basename = path.name.lower()
        stem = path.stem.lower()
        suffixless = strip_cloudinary_suffix(stem).lower()
        by_basename[basename].append(rel)
        by_stem[stem].append(rel)
        by_suffixless_stem[suffixless].append(rel)

    return by_basename, by_stem, by_suffixless_stem, file_count


def find_match(
    candidates: List[str],
    by_basename: Dict[str, List[str]],
    by_stem: Dict[str, List[str]],
    by_suffixless_stem: Dict[str, List[str]],
) -> Tuple[str, str, List[str]]:
    for candidate in candidates:
        key = candidate.lower()
        if key in by_basename:
            return "exact_filename", candidate, by_basename[key]

    for candidate in candidates:
        stem = Path(candidate).stem.lower()
        if stem in by_stem:
            return "exact_stem", candidate, by_stem[stem]

    for candidate in candidates:
        stem = strip_cloudinary_suffix(Path(candidate).stem.lower())
        if stem in by_suffixless_stem:
            return "suffixless_stem", candidate, by_suffixless_stem[stem]

    return "no_match", "", []


def main() -> None:
    if not DOWNLOAD_ROOT.exists():
        raise SystemExit(f"Download folder not found: {DOWNLOAD_ROOT}")

    cloudinary_hits = run_rg_matches()
    by_basename, by_stem, by_suffixless_stem, download_count = build_download_index(DOWNLOAD_ROOT)
    OUTPUT_CSV.parent.mkdir(parents=True, exist_ok=True)

    rows_out = []
    total_url_rows = 0
    matched_rows = 0
    keyword_only_rows = 0

    for hit in cloudinary_hits:
        urls = []
        for m in URL_PATTERN.finditer(hit["line_text"]):
            raw_url = m.group(0).rstrip("',\" )]}")  # strip common trailing syntax chars
            urls.append(raw_url)

        if not urls:
            keyword_only_rows += 1
            rows_out.append(
                {
                    "repo_path": hit["repo_path"],
                    "line_number": hit["line_number"],
                    "usage_type": "keyword_only",
                    "line_text": hit["line_text"],
                    "cloudinary_url": "",
                    "candidate_names": "",
                    "selected_candidate": "",
                    "match_type": "n/a",
                    "matched_file_count": 0,
                    "matched_files": "",
                }
            )
            continue

        for url in urls:
            total_url_rows += 1
            candidates = url_candidates(url)
            match_type, selected_candidate, matched_files = find_match(
                candidates, by_basename, by_stem, by_suffixless_stem
            )
            if match_type != "no_match":
                matched_rows += 1

            rows_out.append(
                {
                    "repo_path": hit["repo_path"],
                    "line_number": hit["line_number"],
                    "usage_type": "cloudinary_url",
                    "line_text": hit["line_text"],
                    "cloudinary_url": url,
                    "candidate_names": " | ".join(candidates),
                    "selected_candidate": selected_candidate,
                    "match_type": match_type,
                    "matched_file_count": len(matched_files),
                    "matched_files": " | ".join(matched_files),
                }
            )

    rows_out.sort(key=lambda row: (row["repo_path"], int(row["line_number"]), row["cloudinary_url"]))
    with OUTPUT_CSV.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(
            f,
            fieldnames=[
                "repo_path",
                "line_number",
                "usage_type",
                "line_text",
                "cloudinary_url",
                "candidate_names",
                "selected_candidate",
                "match_type",
                "matched_file_count",
                "matched_files",
            ],
        )
        writer.writeheader()
        writer.writerows(rows_out)

    unique_rows: Dict[str, dict] = {}
    for row in rows_out:
        if row["usage_type"] != "cloudinary_url" or not row["cloudinary_url"]:
            continue
        key = row["cloudinary_url"]
        if key not in unique_rows:
            unique_rows[key] = {
                "cloudinary_url": row["cloudinary_url"],
                "selected_candidate": row["selected_candidate"],
                "match_type": row["match_type"],
                "matched_file_count": row["matched_file_count"],
                "matched_files": row["matched_files"],
                "occurrence_count": 0,
                "repo_references": [],
            }
        unique_rows[key]["occurrence_count"] += 1
        unique_rows[key]["repo_references"].append(f'{row["repo_path"]}:{row["line_number"]}')
        if unique_rows[key]["match_type"] == "no_match" and row["match_type"] != "no_match":
            unique_rows[key]["selected_candidate"] = row["selected_candidate"]
            unique_rows[key]["match_type"] = row["match_type"]
            unique_rows[key]["matched_file_count"] = row["matched_file_count"]
            unique_rows[key]["matched_files"] = row["matched_files"]

    with UNIQUE_OUTPUT_CSV.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(
            f,
            fieldnames=[
                "cloudinary_url",
                "selected_candidate",
                "match_type",
                "matched_file_count",
                "matched_files",
                "occurrence_count",
                "repo_references",
            ],
        )
        writer.writeheader()
        for key in sorted(unique_rows):
            row = unique_rows[key]
            writer.writerow(
                {
                    **row,
                    "repo_references": " | ".join(row["repo_references"]),
                }
            )

    unique_files_used = {
        file_path
        for row in rows_out
        if row["match_type"] != "no_match" and row["matched_files"]
        for file_path in row["matched_files"].split(" | ")
    }

    summary = [
        "# Cloudinary Usage Audit Summary",
        "",
        f"- Download directory: `{DOWNLOAD_ROOT}`",
        f"- Downloaded files indexed: `{download_count}`",
        f"- Cloudinary hit lines in repo: `{len(cloudinary_hits)}`",
        f"- URL rows emitted: `{total_url_rows}`",
        f"- URL rows with a local file match: `{matched_rows}`",
        f"- Keyword-only rows (no URL on line): `{keyword_only_rows}`",
        f"- Unique downloaded files matched at least once: `{len(unique_files_used)}`",
        "",
        f"- Spreadsheet CSV: `{OUTPUT_CSV.relative_to(REPO_ROOT)}`",
        f"- Unique URL mapping CSV: `{UNIQUE_OUTPUT_CSV.relative_to(REPO_ROOT)}`",
    ]
    SUMMARY_MD.write_text("\n".join(summary) + "\n", encoding="utf-8")

    print(f"Wrote {OUTPUT_CSV}")
    print(f"Wrote {UNIQUE_OUTPUT_CSV}")
    print(f"Wrote {SUMMARY_MD}")


if __name__ == "__main__":
    main()
