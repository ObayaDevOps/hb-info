"""Rebuild four standalone customer templates using embedded brand assets."""
from pathlib import Path
import base64
import json
import re

ROOT = Path(__file__).resolve().parent

def editable(text, required=False, element='span', extra=''):
    classes = 'placeholder' if '[' in text else ''
    return f'<{element} contenteditable="true" spellcheck="false" class="{classes}" {"data-required" if required else ""} {extra}>{text}</{element}>'

def details(entries):
    return '<dl class="details">' + ''.join(f'<dt>{label}</dt><dd>{editable(value)}</dd>' for label, value in entries) + '</dl>'

ROW = '''<td><div class="item-name" contenteditable="true" data-required>[Item name]</div><div class="item-detail" contenteditable="true">[Size / SKU / description]</div><button class="remove" type="button" aria-label="Remove this item">Remove item</button></td>
<td><input type="number" data-qty min="1" step="1" placeholder="—" aria-label="Number of items"></td>
<td><input type="number" data-unit min="0" step="1" placeholder="—" aria-label="Unit price per item"></td>
<td><output data-line aria-label="Line total">—</output></td>'''

def fonts(style):
    families = ['Hanken Grotesk', 'Poppins'] if style == 'website' else ['Fraunces', 'Inter', 'JetBrains Mono']
    output = []
    for font in json.loads((ROOT / 'assets/fonts.json').read_text()):
        block = font['css']
        if not any(f"'{family}'" in block for family in families):
            continue
        data = base64.b64encode((ROOT / 'assets' / font['file']).read_bytes()).decode()
        output.append(re.sub(r'url\(.*?\)', f'url(data:font/ttf;base64,{data})', block))
    return '\n'.join(output)

def render(style, kind):
    invoice = kind == 'invoice'
    title = 'Invoice' if invoice else 'Quote'
    logo = base64.b64encode((ROOT / 'assets/logo.png').read_bytes()).decode()
    reference = '[INV-YYYY-0001]' if invoice else '[QUO-YYYY-0001]'
    deadline = 'Due date' if invoice else 'Valid until'
    meta = [('Invoice no.' if invoice else 'Quote no.', editable(reference, True, extra='id="reference"')),
            ('Issue date', editable('[DD MMM YYYY]', True)),
            (deadline, editable('[DD MMM YYYY]', True)),
            ('Currency', editable('UGX', True, extra='id="currency"'))]
    terms = '[Payment terms, delivery arrangements, and order reference.]' if invoice else '[Price validity, payment terms, delivery lead time, and availability.]'
    payment = details([('Payee', '[Registered account name]'), ('Bank / MoMo', '[Bank or mobile money provider]'), ('Account', '[Account number / mobile number]'), ('Reference', '[Use invoice number]' if invoice else '[Use quote number]')])
    return f"""<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Humble Beeing · {title} · {style.title()} style</title>
<style>{fonts(style)}\n{(ROOT / 'template.css').read_text()}</style></head>
<body class="{'deck' if style == 'retailer' else 'website'} {kind}" data-style="{style}" data-type="{kind}">
<nav class="toolbar" aria-label="Template controls"><a href="index.html">← All templates</a><button id="add-row" type="button">+ Add item</button><button id="save" type="button">Save editable copy</button><button id="print" class="primary" type="button">Print / Save PDF</button></nav>
<aside class="help"><p>Click text to edit. Enter each item's quantity and unit price; totals calculate automatically. Amounts use whole currency units.</p><p>Save an editable copy to keep your changes. To export, print on A4 with background graphics enabled and browser headers/footers disabled.</p><p id="status" role="status" aria-live="polite"></p></aside>
<main class="sheet" aria-label="{title}">
<header class="header"><div class="brand"><img src="data:image/png;base64,{logo}" alt="Humble Beeing"><p class="tagline">Honey · Beeswax · Gifts</p></div><div class="doc-heading"><h1>{title}</h1>{'<span class="badge">Customer invoice</span>' if invoice else ''}</div></header>
<section class="parties" aria-label="Business details"><div><p class="eyebrow">From</p>{editable('Humble Beeing', True, 'h2')}
{editable('HB Fine Honey Suppliers Limited', True, 'p')}
{editable('2nd Floor, Tools and Machinery Building,', False, 'p')}
{editable('Kabalagala, Kampala, Uganda', False, 'p')}
{details([('BRN','80034890575836'),('TIN','1033372989'),('Email','humblebeeingug@gmail.com'),('Email','obaya@humble-beeing.com'),('WhatsApp','+256 789062116')])}</div>
<div><p class="eyebrow">{'Bill to' if invoice else 'Prepared for'}</p>{editable('[Client business name]', True, 'h2')}
{editable('[Street / building / plot]', True, 'p')}{editable('[City / district / country]', True, 'p')}
{details([('Contact','[Contact name / department]'),('Email','[Client email / phone]')])}</div></section>
<section class="meta-grid" aria-label="Document details">{''.join(f'<div><p class="eyebrow">{label}</p><div class="value">{value}</div></div>' for label,value in meta)}</section>
<section aria-label="Items"><div class="section-heading"><h2>{'Your order' if invoice else 'Proposed order'}</h2></div>
<table><colgroup><col class="item"><col class="qty"><col class="unit"><col class="amount"></colgroup>
<thead><tr><th scope="col">Item / description</th><th scope="col">Qty<small>items</small></th><th scope="col">Unit price<small>per item</small></th><th scope="col">Line total<small>qty × unit price</small></th></tr></thead>
<tbody id="items">{''.join('<tr>'+ROW+'</tr>' for _ in range(3))}</tbody></table>
</section>
<section class="settlement" aria-label="Order totals and payment">{f'<div><div class="payment"><h2>Payment details</h2>{payment}</div></div>' if invoice else ''}
<div class="totals"><div class="total-row"><span>Subtotal</span><output data-total="subtotal">—</output></div>
<div class="total-row"><label class="tax-label" for="tax-rate">Tax (<input id="tax-rate" type="number" min="0" max="100" step="0.01" value="0" aria-label="Tax percentage">%)</label><output data-total="tax">—</output></div>
<div class="total-row grand"><span>{'Invoice total' if invoice else 'Quote total'}</span><output data-total="total">—</output></div>
{'''<div class="total-row"><label for="paid">Amount paid</label><input id="paid" type="number" min="0" step="1" value="0" aria-label="Amount already paid"></div><div class="total-row balance"><span>Balance due</span><output data-total="balance">—</output></div>''' if invoice else ''}</div></section>
<section class="terms"><h2>{'Terms & notes' if invoice else 'Terms of quotation'}</h2>{editable(terms, True, 'p')}{'' if invoice else '<p>This quotation becomes an order when accepted in writing and confirmed by Humble Beeing.</p>'}</section>
{'''<section class="acceptance" aria-label="Authorisation"><div><div class="signature" contenteditable="true">[Prepared by / signature]</div>Issued by Humble Beeing</div><div><div class="signature" contenteditable="true">[Purchase order / reference]</div>Customer reference</div></section>''' if invoice else ''}
<footer class="footer"><div class="footer-inner"><strong>{'Thank you for your business.' if invoice else 'Uganda’s Finest Honey'}</strong><span contenteditable="true">humble-beeing.com · Kampala, Uganda</span></div></footer>
</main><template id="row-template">{ROW}</template><script>{(ROOT / 'template.js').read_text()}</script></body></html>"""

for style in ('website', 'retailer'):
    for kind in ('invoice', 'quote'):
        target = ROOT / f'{style}-{kind}.html'
        target.write_text(render(style, kind))
        print(target.name)
