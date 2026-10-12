# Humble Beeing customer templates

Open `index.html` locally to choose a template. Each editable HTML file is standalone and works offline. PDFs are blank A4 reference templates, not interactive PDF forms.

The prepared Uganda Duty Free Stores quote is available in both styles as `website-quote-udfs.html` / `.pdf` and `retailer-quote-udfs.html` / `.pdf`. It contains one line for 36 × UGX 24,000 Raw Honey 350g jars, addressed to Mary Sempala. Quote number 10 is dated 12 Oct 2026 and valid until 12 Nov 2026. The prepared quote has no tax row or editable terms placeholder. Run `python3 docs/customer-templates/generate_udfs.py` after rebuilding the blank templates to refresh these customer copies.

| Design system | Invoice | Quote |
| --- | --- | --- |
| Website | `website-invoice.html` / `.pdf` | `website-quote.html` / `.pdf` |
| Retailer pitch deck | `retailer-invoice.html` / `.pdf` | `retailer-quote.html` / `.pdf` |

Click text to edit it. Replace bracketed fields, enter quantities and unit prices, and remove unused rows. Add rows as needed. Choose **Save editable copy** to retain changes; opening or refreshing the original file resets unsaved edits. Use **Print / Save PDF** after completing the HTML, selecting A4, background graphics on, and browser headers/footers off.

The default currency is UGX; change the currency label if needed. Amounts display as whole currency units. Use nonnegative whole-unit prices and paid amounts, positive whole-item quantities, and tax percentages from 0–100. Negative balance means overpayment.

- Line total = quantity × unit price.
- Subtotal = sum of line totals.
- Tax = subtotal × entered tax percentage.
- Invoice total / quote total = subtotal + tax.
- Balance due = invoice total − amount paid.

The tax field defaults to zero as a configurable placeholder. Set pricing, tax, payment, and quote validity terms for the actual transaction. The seller’s legal name, BRN, TIN, two email addresses, and WhatsApp number were supplied by the business owner. No bank account, client identity, dates, or commercial terms have been invented. Confirm the prefilled business address before issuing a document. Optional fields can be replaced with “N/A”. Review every page before sending; added content can extend beyond one page. Both quote designs use a white page background and the footer “Uganda’s Finest Honey”.

## Design sources

- Website: `src/styles/base.css`, `src/styles/fonts.js`, `src/components/Footer.js`. Cream `#FFF2D7`, navy `#000819`, honey `#F5CB81`, Hanken Grotesk / Poppins, rounded cards and pills.
- Retailer: `/home/obi/dev/pitchDeck-retailer/humble-beeing-design-system.css`. Parchment `#F6F0E4`, ink `#1F2419`, forest `#2C3A2A`, amber `#C8862E`, Fraunces / Inter / JetBrains Mono, square edges and fine rules.
- Wordmark copied from the retailer deck. Business address and email copied from `src/lib/siteMeta.js`.
- Google Fonts sources are recorded in `assets/fonts.json`; font assets are embedded into HTML at generation time.

## Regenerate

Edit `template.css`, `template.js`, or `generate.py`, then run `python3 docs/customer-templates/generate.py` from the repository root. This replaces the four original HTML templates; retain completed customer copies elsewhere. The gallery is maintained separately. PDFs need to be exported again after regeneration.
