"""Generate matching blank A4 reference PDFs without relying on a browser."""
from pathlib import Path
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen.canvas import Canvas

ROOT = Path(__file__).resolve().parent
for index, name in [(1,'FrauncesLight'), (2,'Fraunces'), (3,'Hanken'), (5,'HankenBold'),
                    (7,'Inter'), (9,'InterBold'), (10,'Mono'), (12,'Poppins')]:
    pdfmetrics.registerFont(TTFont(name, str(ROOT / 'assets' / f'font-{index}.ttf')))

W, H = A4
LEFT, RIGHT = 44, W - 44

def color(c, hex_value): c.setFillColor(HexColor(hex_value))
def text(c, x, y, value, size=9, font='Inter', fill='#1F2419', align='left'):
    color(c, fill); c.setFont(font, size)
    if align == 'right': c.drawRightString(x, y, value)
    elif align == 'center': c.drawCentredString(x,y,value)
    else: c.drawString(x, y, value)

def line(c, x1,y1,x2,y2, shade='#C9C6B9', width=.6):
    c.setStrokeColor(HexColor(shade)); c.setLineWidth(width); c.line(x1,y1,x2,y2)

def rect(c,x,y,w,h,fill,stroke=None,radius=0):
    color(c,fill)
    if stroke: c.setStrokeColor(HexColor(stroke))
    if radius: c.roundRect(x,y,w,h,radius,fill=1,stroke=int(bool(stroke)))
    else: c.rect(x,y,w,h,fill=1,stroke=int(bool(stroke)))

def document(style, kind, order=None):
    invoice = kind == 'invoice'
    deck = style == 'retailer'
    paper = '#FFFFFF' if not invoice else ('#F6F0E4' if deck else '#FFF2D7')
    ink = '#1F2419' if deck else '#000819'
    forest = '#2C3A2A' if deck else ink
    accent = '#C8862E' if deck else '#F5CB81'
    pale = '#F7F5EF' if deck else ('#FAF8F2' if not invoice else '#FFF8E9')
    muted = '#6B6A5C' if deck else '#555B64'
    body = 'Inter' if deck else 'Poppins'
    bold = 'InterBold' if deck else 'HankenBold'
    head = 'FrauncesLight' if deck else 'HankenBold'
    micro = 'Mono' if deck else 'HankenBold'
    title = 'Invoice' if invoice else 'Quote'
    filename = f'{style}-{kind}-udfs.pdf' if order else f'{style}-{kind}.pdf'
    c = Canvas(str(ROOT / filename), pagesize=A4, pageCompression=1)
    c.setTitle(f'Humble Beeing {title} — {"Uganda Duty Free Stores" if order else style.title() + " template"}')
    c.setAuthor('Humble Beeing')
    rect(c,0,0,W,H,paper)
    c.drawImage(str(ROOT / 'assets/logo.png'),LEFT,726,width=124,height=72,preserveAspectRatio=True,mask='auto')
    text(c,LEFT,722,'HONEY · BEESWAX · GIFTS',7.3,micro,ink)
    text(c,RIGHT,744,title,49,head,ink,'right')
    if invoice:
        rect(c,RIGHT-130,706,130,17,forest if not deck else accent,radius=7 if not deck else 0)
        text(c,RIGHT-65,712,'CUSTOMER INVOICE',6.6,micro,paper if not deck else ink,'center')
    line(c,LEFT,700,RIGHT,700)

    text(c,LEFT,681,'FROM',7,micro,muted)
    text(c,316,681,'BILL TO' if invoice else 'PREPARED FOR',7,micro,muted)
    text(c,LEFT,661,'Humble Beeing',15,head,ink)
    text(c,316,661,'Uganda Duty Free Stores (UDFS)' if order else '[Client business name]',12.5 if order else 15,head,ink)
    seller = ['HB Fine Honey Suppliers Limited',
              '2nd Floor, Tools and Machinery Building,',
              'Kabalagala, Kampala, Uganda',
              'BRN  80034890575836',
              'TIN  1033372989',
              'humblebeeingug@gmail.com',
              'obaya@humble-beeing.com',
              'WhatsApp  +256 789062116']
    client = (['Plot 1A, 1C Windsor Loop Rd', 'Kololo, Kampala, Uganda',
               'Mary Sempala', 'mary_nalumansi@yahoo.com'] if order else
              ['[Street / building / plot]', '[City / district / country]',
               '[Contact name / department]', '[Client email / phone]'])
    for i,value in enumerate(seller): text(c,LEFT,647-i*11.5,value,8.3,body,ink)
    for i,value in enumerate(client): text(c,316,647-i*11.5,value,8.3,body,ink)

    meta_y=514
    rect(c,LEFT,meta_y,RIGHT-LEFT,45,pale,radius=9 if not deck else 0)
    if deck: rect(c,LEFT,meta_y+43,RIGHT-LEFT,2,accent)
    metas = [(('INVOICE NO.' if invoice else 'QUOTE NO.'),'10' if order else ('[INV-YYYY-0001]' if invoice else '[QUO-YYYY-0001]')),
             ('ISSUE DATE','12 Oct 2026' if order else '[DD MMM YYYY]'),('DUE DATE' if invoice else 'VALID UNTIL','12 Nov 2026' if order else '[DD MMM YYYY]'),('CURRENCY','UGX')]
    positions=[LEFT+13,LEFT+173,LEFT+300,LEFT+427]
    for x,(label,value) in zip(positions,metas):
        text(c,x,meta_y+29,label,6.6,micro,muted)
        text(c,x,meta_y+13,value,8.7,bold,ink)

    text(c,LEFT,491,'YOUR ORDER' if invoice else 'PROPOSED ORDER',13,head,ink)
    rect(c,LEFT,460,RIGHT-LEFT,22,forest,radius=5 if not deck else 0)
    columns=[(LEFT+10,'ITEM / DESCRIPTION'),(LEFT+332,'QTY'),(LEFT+390,'UNIT PRICE'),(RIGHT-7,'LINE TOTAL')]
    for x,label in columns: text(c,x,468,label,6.4,micro,paper if not deck else '#FFFFFF', 'right' if label.endswith('TOTAL') else 'left')
    for i in range(1 if order else 3):
        top=460-i*44
        text(c,LEFT+10,top-17,'Raw honey' if order else '[Item name]',9,bold,ink)
        text(c,LEFT+10,top-31,'350g jar' if order else '[Size / SKU / description]',7,body,muted)
        if order:
            text(c,LEFT+332,top-22,'36',9,body,ink)
            text(c,LEFT+390,top-22,'24,000',9,body,ink)
            text(c,RIGHT-7,top-22,'864,000',9,bold,ink,'right')
        else:
            for x in [LEFT+332,LEFT+390]: text(c,x,top-22,'—',9,body,muted)
            text(c,RIGHT-7,top-22,'—',9,bold,muted,'right')
        line(c,LEFT,top-44,RIGHT,top-44)
    if invoice:
        text(c,LEFT,276,'PAYMENT DETAILS',11,head,ink)
        for i,s in enumerate(['Payee       [Registered account name]', 'Bank / MoMo  [Bank or mobile money provider]',
                              'Account     [Account number / mobile number]', 'Reference   [Use document number]']):
            text(c,LEFT,255-i*14,s,8.2,body,ink)
    tx=RIGHT-195
    totals=['Subtotal'] if order else ['Subtotal','Tax (____ %)']
    for i,label in enumerate(totals):
        yy=(380 if order else 286)-i*21
        text(c,tx,yy,label,8.7,body,muted)
        text(c,RIGHT-8,yy,'864,000' if order else '—',9,bold,ink,'right')
    grand_y = 300 if order else 150
    rect(c,tx-10,grand_y,RIGHT-tx+10,31,forest,radius=6 if not deck else 0)
    text(c,tx,grand_y+11,'INVOICE TOTAL' if invoice else 'QUOTE TOTAL',7,micro,'#FFFFFF')
    text(c,RIGHT-8,grand_y+9,'UGX 864,000' if order else 'UGX —',15,head,'#FFFFFF','right')
    if invoice:
        text(c,tx,133,'Amount paid',8.7,body,muted)
        text(c,RIGHT-8,133,'—',9,bold,ink,'right')
        line(c,tx,124,RIGHT,124)
        text(c,tx,108,'Balance due',8.7,bold,ink)
        text(c,RIGHT-8,108,'—',9,bold,ink,'right')

    terms_y = 240 if order else 96
    line(c,LEFT,terms_y,RIGHT,terms_y)
    text(c,LEFT,terms_y-16,'TERMS & NOTES' if invoice else 'TERMS OF QUOTATION',10,head,ink)
    if not order:
        text(c,LEFT,terms_y-31,'[Payment terms, delivery arrangements, and order reference.]' if invoice else
             '[Price validity, payment terms, delivery lead time, and availability.]',8.2,body,ink)
    if not invoice: text(c,LEFT,terms_y-44,'This quotation becomes an order when accepted in writing and confirmed by Humble Beeing.',7.5,body,ink)
    line(c,LEFT,35,RIGHT,35)
    text(c,LEFT,21,'Thank you for your business.' if invoice else 'Uganda’s Finest Honey',11,head,ink)
    text(c,RIGHT,22,'humble-beeing.com · Kampala, Uganda',6.5,micro,muted,'right')
    c.showPage(); c.save()
    print(filename)

if __name__ == '__main__':
    for style in ('website','retailer'):
        for kind in ('invoice','quote'):
            document(style,kind)
