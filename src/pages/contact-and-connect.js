import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { MessageCircle, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import SEO from '@/components/SEO';
import HeroSection from '@/components/sections/HeroSection';
import PageLayout from '@/components/layouts/PageLayout';
import StyledCard from '@/components/StyledCard';
import client from '../../sanity/lib/client';
// Layout supplies Navbar/Footer

const DEFAULT_WHATSAPP_NUMBER = '+256789062116'
const CONTACT_EMAIL = 'obaya@humble-beeing.com'
const HQ_ADDRESS = '2nd Floor, Tools and Machinery Building, Kabalagala, Kampala'
const DIRECTIONS_URL = 'https://www.google.com/maps/dir/?api=1&destination=Humble%20Beeing%20Honey%2C%20Kampala'

const hanken = 'var(--font-hanken)'

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

function SegmentedToggle({ value, onChange }) {
  const options = [
    { wholesale: false, label: 'Retail inquiry' },
    { wholesale: true, label: 'Wholesale inquiry' },
  ]
  return (
    <div
      role="group"
      aria-label="Inquiry type"
      style={{
        display: 'inline-flex',
        gap: '2px',
        padding: '3px',
        border: '1px solid #000819',
        borderRadius: '9999px',
        backgroundColor: 'white',
      }}
    >
      {options.map((opt) => {
        const selected = value === opt.wholesale
        return (
          <button
            key={opt.label}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(opt.wholesale)}
            style={{
              height: '36px',
              padding: '0 14px',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: 600,
              fontFamily: hanken,
              whiteSpace: 'nowrap',
              backgroundColor: selected ? '#000819' : 'transparent',
              color: selected ? '#f5cb81' : '#000819',
              transition: 'background-color 150ms ease, color 150ms ease',
            }}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}

export default function ContactConnectPage({ whatsappNumber }) {
  const router = useRouter();
  const [isWholesale, setIsWholesale] = useState(false);

  // Deep links like /contact-and-connect?type=wholesale preselect the wholesale segment
  useEffect(() => {
    if (router.isReady && router.query.type === 'wholesale') setIsWholesale(true)
  }, [router.isReady, router.query.type]);

  const waNumber = (whatsappNumber || DEFAULT_WHATSAPP_NUMBER).replace(/\D/g, '')
  const whatsappUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent("Hello Humble Beeing! I'd like to get in touch.")}`
  const customOrderUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent("Hello Humble Beeing! I'd like to ask about a custom-branded order for an event.")}`

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = data.get('name') || ''
    const email = data.get('email') || ''
    const company = data.get('company') || ''
    const message = data.get('message') || ''
    const subject = isWholesale
      ? `Wholesale inquiry${company ? ` — ${company}` : ''}`
      : `Message from ${name || 'the website'}`
    const body = [message, '', name && `— ${name}`, company && `${company}`, email && `${email}`]
      .filter(Boolean)
      .join('\n')
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh', fontFamily: hanken }}>
      <SEO
        title="Contact Us: Honey Delivery in Kampala"
        description="Get in touch with Humble Beeing to order pure raw Ugandan honey, beeswax candles, and luxury gift hampers with Kampala delivery, or ask about wholesale."
      />

      {/* Hero */}
      <HeroSection
        title="Contact & Connect"
        subtitle="We’d love to hear from you: drop us a note."
        bgImage={'https://cdn.sanity.io/images/wf5e366r/production/536a0d144a6196619310c04ede39ee01395494cf-5184x3456.jpg'}
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
          <p className="rt" style={{ color: '#000819', maxWidth: '46rem', '--fs': '1.125rem', '--lh': '1.75rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem' }}>
            Questions about an order, our honey, or stocking Humble Beeing? Send a message
            or reach us directly — we reply within 1–2 business days.
          </p>

          {/* Form + direct contact */}
          <div className="rgtc" style={{ display: 'grid', gap: '24px', alignItems: 'stretch', '--gtc': '1fr', '--gtc-md': 'minmax(0, 3fr) minmax(0, 2fr)' }}>
            {/* Contact Form */}
            <StyledCard style={{ width: '100%', marginLeft: 0, marginRight: 0 }}>
              <form onSubmit={handleSubmit} className="rp" style={{ '--p': '20px', '--p-md': '28px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px', width: '100%' }}>
                  <h2 style={cardHeading}>Send us a message</h2>
                  <SegmentedToggle value={isWholesale} onChange={setIsWholesale} />
                  {isWholesale && (
                    <p style={{ fontSize: '0.875rem', lineHeight: '1.375rem', color: '#000819' }}>
                      Buying for a shop, hotel, or restaurant?{' '}
                      <Link href="/wholesale-and-partnerships" className="hover-underline" style={{ fontWeight: 600, textDecoration: 'underline' }}>
                        See wholesale &amp; partnerships
                      </Link>
                      .
                    </p>
                  )}
                  <div style={fieldStyle}>
                    <label htmlFor="contact-name" style={labelStyle}>Full name</label>
                    <input id="contact-name" name="name" autoComplete="name" required style={inputStyle} />
                  </div>
                  <div style={fieldStyle}>
                    <label htmlFor="contact-email" style={labelStyle}>Email</label>
                    <input id="contact-email" name="email" type="email" autoComplete="email" required style={inputStyle} />
                  </div>
                  {isWholesale && (
                    <div style={fieldStyle}>
                      <label htmlFor="contact-company" style={labelStyle}>Company / organization</label>
                      <input id="contact-company" name="company" autoComplete="organization" style={inputStyle} />
                    </div>
                  )}
                  <div style={fieldStyle}>
                    <label htmlFor="contact-message" style={labelStyle}>Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="How can we help?"
                      rows={6}
                      required
                      style={{ ...inputStyle, height: 'auto', padding: '10px 14px', resize: 'vertical' }}
                    />
                  </div>
                  <button type="submit" className="btn-dark" style={pillBtn}>Send message</button>
                  <p style={{ fontSize: '0.875rem', lineHeight: '1.25rem', color: '#000819' }}>
                    We reply within 1–2 business days.
                  </p>
                </div>
              </form>
            </StyledCard>

            {/* Direct contact */}
            <StyledCard style={{ width: '100%', marginLeft: 0, marginRight: 0 }}>
              <div className="rp" style={{ '--p': '20px', '--p-md': '28px', flex: 1, display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px', width: '100%' }}>
                  <h2 style={cardHeading}>Reach us directly</h2>
                  <p style={{ fontSize: '0.9375rem', lineHeight: '1.5rem' }}>
                    The fastest way to order or ask a quick question is WhatsApp.
                  </p>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-dark" style={{ ...pillBtn, width: '100%' }}>
                    <MessageCircle size={18} /> Chat on WhatsApp
                  </a>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <Mail size={18} style={{ flex: 'none', marginTop: '3px' }} aria-hidden />
                    <a className="hover-underline" href={`mailto:${CONTACT_EMAIL}`} style={{ fontSize: '0.9375rem', lineHeight: '1.5rem', fontWeight: 500 }}>
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <MapPin size={18} style={{ flex: 'none', marginTop: '3px' }} aria-hidden />
                    <p style={{ fontSize: '0.9375rem', lineHeight: '1.5rem' }}>{HQ_ADDRESS}</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'auto' }}>
                    <p style={labelStyle}>Follow along</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <a
                        className="hover-bg-navy"
                        href="https://www.instagram.com/humble_beeing_ug/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', height: '34px', padding: '0 14px', borderRadius: '9999px', border: '1px solid #000819', fontSize: '0.875rem', fontWeight: 500 }}
                      >
                        Instagram
                      </a>
                      <a
                        className="hover-bg-navy"
                        href="https://www.linkedin.com/company/humble-beeing"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', height: '34px', padding: '0 14px', borderRadius: '9999px', border: '1px solid #000819', fontSize: '0.875rem', fontWeight: 500 }}
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </StyledCard>
          </div>

          {/* Custom orders */}
          <div className="rp" style={{ width: '100%', backgroundColor: '#000819', borderRadius: '1.5rem', '--p': '24px', '--p-md': '40px' }}>
            <div className="rfd rai" style={{ display: 'flex', justifyContent: 'space-between', gap: '24px', '--fd': 'column', '--fd-md': 'row', '--ai': 'flex-start', '--ai-md': 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '38rem' }}>
                <h2 className="rt" style={{ color: '#f5cb81', fontWeight: 600, fontFamily: hanken, '--fs': '1.5rem', '--lh': '2rem', '--ls': '-0.02em', '--fs-md': '1.75rem', '--lh-md': '2.25rem' }}>
                  Custom orders
                </h2>
                <p style={{ color: '#FFF2D7', fontSize: '0.9375rem', lineHeight: '1.5rem' }}>
                  Planning a wedding, corporate event, or conference? We make custom-branded
                  honey jars, beeswax candles, and gift hampers — your logo, your labels, your
                  message. Tell us about your event and we&rsquo;ll put together a quote.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px', flex: 'none' }}>
                <a
                  href={customOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-amber"
                  style={{ ...pillBtn, backgroundColor: '#f5cb81', color: '#000819' }}
                >
                  <MessageCircle size={18} /> Plan a custom order
                </a>
                <a className="hover-underline" href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Custom order inquiry')}`} style={{ color: '#FFF2D7', fontSize: '0.875rem' }}>
                  or email us
                </a>
              </div>
            </div>
          </div>

          {/* HQ / Find Us */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '12px', width: '100%' }}>
            <h2 className="rt" style={{ fontWeight: 600, fontFamily: hanken, '--fs': '1.5rem', '--lh': '2rem', '--ls': '-0.02em', '--fs-md': '1.75rem', '--lh-md': '2.25rem' }}>
              Find our HQ
            </h2>
            <p style={{ color: '#000819', fontSize: '0.9375rem', lineHeight: '1.5rem' }}>
              {HQ_ADDRESS}
              {' · '}
              <a className="hover-underline" href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '2px' }}>
                Get directions<ArrowUpRight size={16} aria-hidden />
              </a>
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.764797037328!2d32.601544374828116!3d0.2967788997003092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbddcecd0812d%3A0xa0e741273970b773!2sHumble%20Beeing%20Honey!5e0!3m2!1sen!2sse!4v1784721180897!5m2!1sen!2sse"
              title="Map showing the Humble Beeing Honey HQ location in Kampala"
              className="rh"
              style={{ border: 0, borderRadius: '1.5rem', width: '100%', '--h': '320px', '--h-md': '450px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <p style={{ fontSize: '0.875rem', lineHeight: '1.25rem' }}>
              Looking for shops that stock our honey? Visit the{' '}
              <Link href="/store-locator" className="hover-underline" style={{ fontWeight: 600, textDecoration: 'underline' }}>
                Store Locator
              </Link>
              .
            </p>
          </div>
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

ContactConnectPage.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
)
