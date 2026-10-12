const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const numeric = input => Number(input.value || 0);
const money = value => Math.round(value).toLocaleString('en-UG');
const currency = () => $('#currency').textContent.trim() || 'UGX';
const rows = () => $$('#items tr');
const round = value => Math.round((value + Number.EPSILON) * 100) / 100;
function calculate() {
  let subtotal = 0, complete = 0;
  rows().forEach(row => {
    const unit = row.querySelector('[data-unit]');
    const qty = row.querySelector('[data-qty]');
    const valid = unit.value !== '' && qty.value !== '' && [...row.querySelectorAll('input')].every(input => input.checkValidity());
    const line = round(numeric(unit) * numeric(qty));
    row.querySelector('[data-line]').textContent = valid ? money(line) : '—';
    if (valid) { complete++; subtotal += line; }
  });
  const tax = round(subtotal * numeric($('#tax-rate') || {value:0}) / 100);
  const total = round(subtotal + tax);
  const amounts = {subtotal, tax, total, balance:total-numeric($('#paid') || {value:0})};
  for (const [key,value] of Object.entries(amounts)) {
    const node = $(`[data-total="${key}"]`);
    if (node) node.textContent = complete ? (key === 'total' || key === 'balance' ? currency() + ' ' : '') + money(value) : '—';
  }
  const invalid = $$('input').some(input => !input.checkValidity());
  const placeholders = $$('[data-required]').filter(node => !node.textContent.trim() || /\[.*?\]/.test(node.textContent));
  const unfinished = rows().some(row => !row.querySelector('[data-unit]').value || !row.querySelector('[data-qty]').value);
  $('#status').textContent = invalid ? 'Check numeric fields: use nonnegative amounts, whole quantities, and tax from 0–100%.' : placeholders.length || unfinished ? 'Template: replace bracketed fields and complete or remove unused item rows before sending.' : 'All required fields completed. Review the document, then save or print.';
}
document.addEventListener('input', event => {
  if (event.target.isContentEditable) event.target.classList.toggle('placeholder', /\[.*?\]/.test(event.target.textContent));
  calculate();
});
// Paste plain text only, keeping documents consistent and preventing imported markup.
document.addEventListener('paste', event => {
  if (!event.target.isContentEditable) return;
  event.preventDefault();
  document.execCommand('insertText', false, event.clipboardData.getData('text/plain'));
});
document.addEventListener('click', event => {
  if (event.target.closest('.remove')) { event.target.closest('tr').remove(); calculate(); }
});
$('#add-row').addEventListener('click', () => {
  const row = document.createElement('tr');
  row.innerHTML = $('#row-template').innerHTML;
  $('#items').append(row);
  calculate();
});
$('#print').addEventListener('click', () => {
  calculate();
  const invalid = $$('input').find(input => !input.checkValidity());
  if (invalid) { invalid.reportValidity(); return; }
  window.print();
});
$('#save').addEventListener('click', () => {
  calculate();
  // Input properties must become attributes so reopening a saved file retains values.
  $$('input').forEach(input => input.setAttribute('value', input.value));
  const source = '<!DOCTYPE html>\n' + document.documentElement.outerHTML;
  const url = URL.createObjectURL(new Blob([source], {type:'text/html;charset=utf-8'}));
  const link = document.createElement('a');
  link.href = url;
  const reference = $('#reference').textContent.trim().replace(/[^a-z0-9_-]+/gi, '-');
  link.download = `${document.body.dataset.style}-${document.body.dataset.type}-${reference}.html`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});
calculate();
