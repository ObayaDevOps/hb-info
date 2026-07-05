import Head from 'next/head';
import HeroSection from '@/components/sections/HeroSection';
import PageLayout from '@/components/layouts/PageLayout';
import StyledCard from '@/components/StyledCard';

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

export default function WholesalePartnershipsPage() {
  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh', fontFamily: hanken }}>
      <Head>
        <title>Wholesale & Partnerships | Humble Beeing</title>
        <meta name="description" content="Bulk orders for chefs and retailers, corporate gifting, and NGO/donor partnerships." />
      </Head>
      {/* Hero */}
      <HeroSection
        title="Wholesale & Partnerships"
        subtitle="Chefs, retailers, events, and corporate gifting — let’s collaborate."
        bgImage={'https://cdn.sanity.io/images/wf5e366r/production/fe1376a20f4c8693c806a9308a0c2d5bdd66271a-5184x3456.jpg'}
        overlay
        py={{ base: 16, md: 24 }}
      />

      {/* Content container using Our Story styling */}
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
        {/* Intro copy */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', paddingBottom: '32px' }}>
          <p className="rt" style={{ color: '#000819', '--fs': '1.125rem', '--lh': '1.75rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem' }}>
            We partner with chefs, retailers, and organizations to deliver luxury honey and beeswax products with traceability and impact. From custom gift boxes to bulk formats, we tailor solutions to your needs.
          </p>
        </div>

        {/* Optional feature image */}
        <div style={{ paddingBottom: '32px' }}>
          <img
            src="https://cdn.sanity.io/images/wf5e366r/production/02ba87ce8d01924bdc2efb2f0783ed412df06753-903x1200.png"
            alt="Humble Beeing tasting and wholesale presentation"
            className="rh"
            style={{ borderRadius: '1.5rem', objectFit: 'cover', width: '100%', '--h': '280px', '--h-md': '420px' }}
          />
        </div>

        {/* Use Cases + Product Range */}
        <div className="rgtc" style={{ display: 'grid', '--gtc': '1fr', '--gtc-md': 'repeat(2, 1fr)', paddingBottom: '48px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', padding: '8px' }}>
            <h2 style={headingLg}>Use Cases</h2>
            <p className="rt" style={{ color: '#000819', '--fs': '1.125rem', '--lh': '1.75rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem' }}>
              Chefs and restaurants, weddings and events, retail and specialty stores.
            </p>
            <p className="rt" style={{ color: '#000819', '--fs': '1.125rem', '--lh': '1.75rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem' }}>
              Corporate gifts and co-branded sets available seasonally.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', padding: '8px' }}>
            <h2 style={headingLg}>Product Range</h2>
            <p className="rt" style={{ color: '#000819', '--fs': '1.125rem', '--lh': '1.75rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem' }}>
              Single-origin honey, infused collection, luxury gift boxes, and beeswax candles.
            </p>
          </div>
        </div>

        {/* Inquiry Form (Styled Card) */}
        <StyledCard>
          <div className="rp" style={{ '--p': '16px', '--p-md': '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
              <h2 style={headingLg}>Request a Quote</h2>
              <div className="rgtc" style={{ display: 'grid', width: '100%', '--gtc': '1fr', '--gtc-md': 'repeat(2, 1fr)' }}>
                <input placeholder="Full Name" style={inputStyle} />
                <input placeholder="Email" type="email" style={inputStyle} />
                <input placeholder="Company / Organization" style={inputStyle} />
                <select
                  defaultValue=""
                  style={{
                    border: '1px solid #1A2234',
                    borderRadius: '0.375rem',
                    padding: '8px',
                    backgroundColor: 'white',
                    color: '#000819',
                    width: '100%',
                  }}
                >
                  <option value="" disabled>Inquiry Type</option>
                  <option value="chef">Chef / Restaurant</option>
                  <option value="retail">Retail / Specialty</option>
                  <option value="events">Events / Weddings</option>
                  <option value="corporate">Corporate Gifting</option>
                  <option value="ngo">NGO / Donor / Grant</option>
                </select>
                <input placeholder="Estimated Volume (e.g., 200 units)" style={inputStyle} />
                <input placeholder="Timeline (e.g., Q4)" style={inputStyle} />
              </div>
              <textarea
                placeholder="Tell us about your needs…"
                rows={2}
                style={{
                  ...inputStyle,
                  height: '58px',
                  padding: '8px 12px',
                  resize: 'vertical',
                }}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  className="hover-op9"
                  style={{
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
                  }}
                >
                  Submit Inquiry
                </button>
                <a
                  href="https://shop.humble-beeing.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-bg-navy"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '40px',
                    padding: '0 16px',
                    fontSize: '0.875rem',
                    lineHeight: '1.25rem',
                    fontWeight: 500,
                    borderRadius: '4px',
                    border: '1px solid #000819',
                    color: '#000819',
                  }}
                >
                  See Gift Boxes
                </a>
              </div>
            </div>
          </div>
        </StyledCard>
      </div>
    </div>
  );
}

WholesalePartnershipsPage.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
)
