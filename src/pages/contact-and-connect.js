import SEO from '@/components/SEO';
import { useState } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import PageLayout from '@/components/layouts/PageLayout';
import StyledCard from '@/components/StyledCard';
// Layout supplies Navbar/Footer

const hanken = 'var(--font-hanken)'

const headingLg = {
  fontSize: '1.125rem',
  lineHeight: '1.75rem',
  fontWeight: 600,
  fontFamily: hanken,
}

const inputStyle = {
  height: '40px',
  padding: '0 12px',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  borderRadius: '4px',
  border: '1px solid #1A2234',
  backgroundColor: 'white',
  color: '#000819',
  width: '100%',
  outline: 'none',
}

const darkBtn = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '40px',
  padding: '0 16px',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  fontWeight: 500,
  borderRadius: '4px',
  backgroundColor: '#000819',
  color: 'white',
  whiteSpace: 'nowrap',
}

function ToggleSwitch({ id, checked, onChange }) {
  return (
    <button
      type="button"
      id={id}
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      style={{
        position: 'relative',
        width: '36px',
        height: '20px',
        borderRadius: '9999px',
        backgroundColor: checked ? '#000819' : '#d4d4d8',
        transition: 'background-color 150ms ease',
        flex: 'none',
        padding: 0,
      }}
    >
      <span
        aria-hidden
        style={{
          position: 'absolute',
          top: '2px',
          left: checked ? '18px' : '2px',
          width: '16px',
          height: '16px',
          borderRadius: '9999px',
          backgroundColor: 'white',
          boxShadow: '0px 2px 4px rgba(24, 24, 27, 0.1), 0px 0px 1px rgba(24, 24, 27, 0.3)',
          transition: 'left 150ms ease',
        }}
      />
    </button>
  )
}

export default function ContactConnectPage() {
  const [isWholesale, setIsWholesale] = useState(false);

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
          '--px': '48px',
          '--px-md': '80px',
          '--py': '48px',
          '--py-md': '80px',
          '--br': '0px',
          '--br-lg': '2rem',
          '--mt': '0px',
          '--mt-md': '24px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
          <p className="rt" style={{ color: '#000819', '--fs': '1.125rem', '--lh': '1.75rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem' }}>
            We’d love to hear from you. Toggle between consumer and wholesale inquiries. Our team responds within 1–2 business days.
          </p>

          {/* Feature image for visual consistency */}
          <div style={{ paddingBottom: '16px', width: '100%' }}>
            <img
              src="https://cdn.sanity.io/images/wf5e366r/production/536a0d144a6196619310c04ede39ee01395494cf-5184x3456.jpg"
              alt="Raw Ugandan honey tasting with the Humble Beeing team in Kampala"
              className="rh"
              style={{ borderRadius: '1.5rem', objectFit: 'cover', width: '100%', '--h': '260px', '--h-md': '380px' }}
            />
          </div>

          {/* Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <label htmlFor="wholesale" style={{ marginBottom: 0 }}>Wholesale inquiry</label>
            <ToggleSwitch id="wholesale" checked={isWholesale} onChange={setIsWholesale} />
          </div>

          {/* Contact Form */}
          <StyledCard style={{ width: '100%' }}>
            <div className="rp" style={{ '--p': '16px', '--p-md': '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', width: '100%' }}>
                <h2 style={headingLg}>Send us a message</h2>
                <input placeholder="Full Name" style={inputStyle} />
                <input placeholder="Email" type="email" style={inputStyle} />
                {isWholesale && <input placeholder="Company / Organization" style={inputStyle} />}
                <textarea
                  placeholder="Your message…"
                  rows={5}
                  style={{ ...inputStyle, height: 'auto', padding: '8px 12px', resize: 'vertical' }}
                />
                <button className="hover-op9" style={darkBtn}>Send Message</button>
              </div>
            </div>
          </StyledCard>

          {/* Social Links */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
            <h2 style={headingLg}>Connect</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <a className="hover-underline" href="https://www.instagram.com/humble_beeing_ug/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a className="hover-underline" href="https://www.linkedin.com/company/humble-beeing" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="hover-underline" href="#" target="_blank" rel="noopener noreferrer">TikTok</a>
            </div>
          </div>

          {/* HQ / Find Us */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', width: '100%' }}>
            <h2 style={headingLg}>Find Our HQ</h2>
            <p style={{ color: '#000819', fontSize: '0.875rem', lineHeight: '1.25rem' }}>
              Visit us at the Humble Beeing Honey HQ in Kampala.
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
          </div>

          {/* Newsletter */}
          <StyledCard style={{ width: '100%' }}>
            <div className="rp" style={{ '--p': '16px', '--p-md': '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', width: '100%' }}>
                <h2 style={headingLg}>Newsletter</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}>
                  <input placeholder="Your email" type="email" style={inputStyle} />
                  <button className="hover-op9" style={darkBtn}>Sign Up</button>
                </div>
                <p style={{ color: '#000819', fontSize: '0.875rem', lineHeight: '1.25rem' }}>Offers, new releases, and impact updates.</p>
              </div>
            </div>
          </StyledCard>
        </div>
      </div>
    </div>
  );
}

ContactConnectPage.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
)
