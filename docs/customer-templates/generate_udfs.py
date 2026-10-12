"""Prepare the Uganda Duty Free Stores quote in both available styles."""
from pathlib import Path
from datetime import date
import re
from generate_pdfs import document

ROOT = Path(__file__).resolve().parent
ISSUE_DATE = date(2026, 10, 12).strftime('%d %b %Y')
VALID_UNTIL = date(2026, 11, 12).strftime('%d %b %Y')

for style in ('website', 'retailer'):
    source = (ROOT / f'{style}-quote.html').read_text()
    replacements = {
        '[Client business name]': 'Uganda Duty Free Stores (UDFS)',
        '[Street / building / plot]': 'Plot 1A, 1C Windsor Loop Rd',
        '[City / district / country]': 'Kololo, Kampala, Uganda',
        '[Contact name / department]': 'Mary Sempala',
        '[Client email / phone]': 'mary_nalumansi@yahoo.com',
    }
    for old, new in replacements.items():
        assert source.count(old) == 1, old
        source = source.replace(old, new, 1)
    source = source.replace('[DD MMM YYYY]', ISSUE_DATE, 1)
    source = source.replace('[DD MMM YYYY]', VALID_UNTIL, 1)
    source = source.replace('[QUO-YYYY-0001]', '10', 1)
    for value in (*replacements.values(), ISSUE_DATE, VALID_UNTIL, '10'):
        source, count = re.subn(
            r'(<[^>]+) class="placeholder"([^>]*>' + re.escape(value) + r'</[^>]+>)',
            r'\1\2', source, count=1,
        )
        assert count == 1, value
    start = source.index('<tbody id="items">')
    end = source.index('</tbody>', start)
    body = source[start:end]
    row = re.search(r'<tr>.*?</tr>', body, re.S).group()
    row = row.replace('[Item name]', 'Raw honey', 1)
    row = row.replace('[Size / SKU / description]', '350g jar', 1)
    row = row.replace('data-qty min="1" step="1"', 'data-qty min="1" step="1" value="36"', 1)
    row = row.replace('data-unit min="0" step="1"', 'data-unit min="0" step="1" value="24000"', 1)
    source = source[:start] + '<tbody id="items">' + row + source[end:]
    source, count = re.subn(r'<div class="total-row"><label class="tax-label".*?</div>\n', '', source, count=1, flags=re.S)
    assert count == 1, 'tax row'
    source, count = re.subn(r'<p contenteditable="true" spellcheck="false" class="placeholder"\s+data-required\s*>\[Price validity, payment terms, delivery lead time, and availability\.\]</p>', '', source, count=1)
    assert count == 1, 'terms placeholder'
    source = source.replace('Humble Beeing · Quote ·', 'Humble Beeing · UDFS Quote ·', 1)
    target = ROOT / f'{style}-quote-udfs.html'
    target.write_text(source)
    print(target.name)
    document(style, 'quote', order=True)
