import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import HeroSection from '@/components/sections/HeroSection';
import PageLayout from '@/components/layouts/PageLayout';
import StyledCard from '@/components/StyledCard';
import client from '../../sanity/lib/client';

const DEFAULT_WHATSAPP_NUMBER = '+256789062116'
const CONTACT_EMAIL = 'obaya@humble-beeing.com'

const hanken = 'var(--font-hanken)'

const sectionHeadingVars = {
  fontWeight: 600,
  fontFamily: hanken,
  '--fs': '1.5rem',
  '--lh': '2rem',
  '--ls': '-0.02em',
  '--fs-md': '1.75rem',
  '--lh-md': '2.25rem',
}

const cardHeading = {
  fontSize: '1.25rem',
  lineHeight: '1.75rem',
  fontWeight: 600,
  fontFamily: hanken,
}

const labelStyle = {
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  fontWeight: 600,
  fontFamily: hanken,
}

const fieldStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  width: '100%',
}

const inputStyle = {
  height: '44px',
  padding: '0 14px',
  fontSize: '0.9375rem',
  lineHeight: '1.375rem',
  borderRadius: '8px',
  border: '1px solid #1A2234',
  backgroundColor: 'white',
  color: '#000819',
  width: '100%',
}

const pillBtn = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  height: '44px',
  padding: '0 28px',
  fontSize: '0.9375rem',
  fontWeight: 600,
  fontFamily: hanken,
  borderRadius: '9999px',
  backgroundColor: '#000819',
  color: '#f5cb81',
  whiteSpace: 'nowrap',
}

const tileStyle = {
  backgroundColor: '#fff7e1',
  border: '1px solid #000819',
  borderRadius: '12px',
  padding: '18px 20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
}

const SEGMENTS = [
  {
    title: 'Chefs & restaurants',
    desc: 'Bulk raw honey in kitchen-friendly formats for menus and pairings.',
  },
  {
    title: 'Retail & specialty stores',
    desc: 'Retail-ready single-origin and infused jars, lab-tested every batch.',
  },
  {
    title: 'Events & weddings',
    desc: 'Custom-labelled favors and gifts branded for your day.',
  },
  {
    title: 'Corporate gifting',
    desc: 'Gift hampers and co-branded sets for teams, clients, and partners.',
  },
  {
    title: 'NGOs & development orgs',
    desc: 'Impact sourcing with full traceability to smallholder beekeepers.',
  },
]

const RANGE = [
  { title: 'Single-origin honey', desc: 'Raw, unblended honey traceable to one forest region.' },
  { title: 'Infused honeys', desc: 'Small-batch infusions from our Kampala kitchen.' },
  { title: 'Luxury gift hampers', desc: 'Curated boxes, ready to brand for your organization.' },
  { title: 'Beeswax candles', desc: 'Hand-poured from the same hives as our honey.' },
]

export default function WholesalePartnershipsPage({ whatsappNumber }) {
  const waNumber = (whatsappNumber || DEFAULT_WHATSAPP_NUMBER).replace(/\D/g, '')
  const whatsappUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent("Hello Humble Beeing! I'd like to talk about a wholesale order.")}`

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = data.get('name') || ''
    const email = data.get('email') || ''
    const company = data.get('company') || ''
    const inquiryType = data.get('inquiryType') || ''
    const volume = data.get('volume') || ''
    const timeline = data.get('timeline') || ''
    const message = data.get('message') || ''
    const subject = `Wholesale quote request${company ? ` — ${company}` : ''}`
    const body = [
      message,
      '',
      inquiryType && `Inquiry type: ${inquiryType}`,
      volume && `Estimated volume: ${volume}`,
      timeline && `Timeline: ${timeline}`,
      '',
      name && `— ${name}`,
      company && `${company}`,
      email && `${email}`,
    ]
      .filter(Boolean)
      .join('\n')
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh', fontFamily: hanken }}>
      <SEO
        title="Wholesale & Bulk Honey Supplier in Kampala: Corporate Gifts"
        description="Bulk raw honey for chefs, hotels, retailers, and NGOs, plus corporate gift hampers and branded gift sets made in Uganda. Delivery across Kampala."
      />
      {/* Hero */}
      <HeroSection
        title="Wholesale & Partnerships"
        subtitle="Chefs, retailers, events, and corporate gifting: let’s collaborate."
        bgImage={'https://cdn.sanity.io/images/wf5e366r/production/fe1376a20f4c8693c806a9308a0c2d5bdd66271a-5184x3456.jpg'}
        overlay
        py={{ base: 16, md: 24 }}
      />

      <div
        className="rpx rpy rbr rmt"
        style={{
          position: 'relative',
          maxWidth: '72rem',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: '#FFF2D7',
          '--px': '20px',
          '--px-md': '80px',
          '--py': '48px',
          '--py-md': '80px',
          '--br': '0px',
          '--br-lg': '2rem',
          '--mt': '0px',
          '--mt-md': '24px',
        }}
      >
        <div className="rg" style={{ display: 'flex', flexDirection: 'column', '--g': '40px', '--g-md': '56px' }}>
          {/* Intro + feature image */}
          <div className="rgtc" style={{ display: 'grid', gap: '24px', alignItems: 'center', '--gtc': '1fr', '--gtc-md': 'minmax(0, 3fr) minmax(0, 2fr)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p className="rt" style={{ color: '#000819', '--fs': '1.125rem', '--lh': '1.75rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem' }}>
                As a bulk honey supplier in Kampala, we partner with chefs, hotels, retailers,
                and NGOs to deliver luxury raw honey and beeswax products with traceability and
                impact. From corporate gift hampers and branded gift sets to bulk formats, we
                tailor solutions to your needs.
              </p>
            </div>
            <img
              src="https://cdn.sanity.io/images/wf5e366r/production/02ba87ce8d01924bdc2efb2f0783ed412df06753-903x1200.png"
              alt="Wholesale honey tasting presentation for Kampala chefs and retailers by Humble Beeing"
              className="rh"
              style={{ borderRadius: '1.5rem', objectFit: 'cover', width: '100%', '--h': '260px', '--h-md': '360px' }}
            />
          </div>

          {/* Who we work with */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2 className="rt" style={sectionHeadingVars}>Who we work with</h2>
            <div className="rgtc" style={{ display: 'grid', gap: '16px', '--gtc': '1fr', '--gtc-sm': 'repeat(2, minmax(0, 1fr))', '--gtc-md': 'repeat(3, minmax(0, 1fr))' }}>
              {SEGMENTS.map((seg) => (
                <div key={seg.title} style={tileStyle}>
                  <h3 style={{ fontSize: '1rem', lineHeight: '1.5rem', fontWeight: 600, fontFamily: hanken }}>{seg.title}</h3>
                  <p style={{ fontSize: '0.875rem', lineHeight: '1.375rem' }}>{seg.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What we supply */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2 className="rt" style={sectionHeadingVars}>What we supply</h2>
            <div className="rgtc" style={{ display: 'grid', gap: '16px', '--gtc': '1fr', '--gtc-sm': 'repeat(2, minmax(0, 1fr))', '--gtc-md': 'repeat(4, minmax(0, 1fr))' }}>
              {RANGE.map((item) => (
                <div key={item.title} style={{ display: 'flex', flexDirection: 'column', gap: '4px', borderTop: '2px solid #000819', paddingTop: '10px' }}>
                  <h3 style={{ fontSize: '1rem', lineHeight: '1.5rem', fontWeight: 600, fontFamily: hanken }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', lineHeight: '1.375rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.9375rem', lineHeight: '1.5rem' }}>
              <Link href="/products" className="hover-underline" style={{ fontWeight: 600, textDecoration: 'underline' }}>
                Browse the full product range
              </Link>
            </p>
          </div>

          {/* Inquiry Form */}
          <StyledCard style={{ width: '100%', marginLeft: 0, marginRight: 0 }}>
            <form onSubmit={handleSubmit} className="rp" style={{ '--p': '20px', '--p-md': '28px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px', width: '100%' }}>
                <h2 style={cardHeading}>Request a quote</h2>
                <div className="rgtc" style={{ display: 'grid', gap: '16px', width: '100%', '--gtc': '1fr', '--gtc-md': 'repeat(2, minmax(0, 1fr))' }}>
                  <div style={fieldStyle}>
                    <label htmlFor="wp-name" style={labelStyle}>Full name</label>
                    <input id="wp-name" name="name" autoComplete="name" required style={inputStyle} />
                  </div>
                  <div style={fieldStyle}>
                    <label htmlFor="wp-email" style={labelStyle}>Email</label>
                    <input id="wp-email" name="email" type="email" autoComplete="email" required style={inputStyle} />
                  </div>
                  <div style={fieldStyle}>
                    <label htmlFor="wp-company" style={labelStyle}>Company / organization</label>
                    <input id="wp-company" name="company" autoComplete="organization" style={inputStyle} />
                  </div>
                  <div style={fieldStyle}>
                    <label htmlFor="wp-type" style={labelStyle}>Inquiry type</label>
                    <select id="wp-type" name="inquiryType" defaultValue="" required style={{ ...inputStyle, padding: '0 10px' }}>
                      <option value="" disabled>Select one…</option>
                      <option value="Chef / Restaurant">Chef / Restaurant</option>
                      <option value="Retail / Specialty">Retail / Specialty</option>
                      <option value="Events / Weddings">Events / Weddings</option>
                      <option value="Corporate Gifting">Corporate Gifting</option>
                      <option value="NGO / Donor / Grant">NGO / Donor / Grant</option>
                    </select>
                  </div>
                  <div style={fieldStyle}>
                    <label htmlFor="wp-volume" style={labelStyle}>Estimated volume</label>
                    <input id="wp-volume" name="volume" placeholder="e.g. 200 units" style={inputStyle} />
                  </div>
                  <div style={fieldStyle}>
                    <label htmlFor="wp-timeline" style={labelStyle}>Timeline</label>
                    <input id="wp-timeline" name="timeline" placeholder="e.g. December, Q4" style={inputStyle} />
                  </div>
                </div>
                <div style={fieldStyle}>
                  <label htmlFor="wp-message" style={labelStyle}>Tell us about your needs</label>
                  <textarea
                    id="wp-message"
                    name="message"
                    placeholder="Products, quantities, branding, delivery…"
                    rows={4}
                    required
                    style={{ ...inputStyle, height: 'auto', padding: '10px 14px', resize: 'vertical' }}
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                  <button type="submit" className="btn-dark" style={pillBtn}>Request quote</button>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-bg-navy"
                    style={{ ...pillBtn, backgroundColor: 'transparent', border: '1px solid #000819', color: '#000819' }}
                  >
                    <MessageCircle size={18} /> Chat on WhatsApp
                  </a>
                </div>
                <p style={{ fontSize: '0.875rem', lineHeight: '1.25rem', color: '#000819' }}>
                  We reply within 1–2 business days. Prefer email?{' '}
                  <a className="hover-underline" href={`mailto:${CONTACT_EMAIL}`} style={{ fontWeight: 600, textDecoration: 'underline' }}>
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </div>
            </form>
          </StyledCard>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  let whatsappNumber = null
  try {
    whatsappNumber = await client.fetch(`*[_type == "siteSettings"][0].whatsappNumber`)
  } catch (err) {
    whatsappNumber = null
  }

  return {
    props: { whatsappNumber: whatsappNumber || null },
    revalidate: 60,
  }
}

WholesalePartnershipsPage.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
)
