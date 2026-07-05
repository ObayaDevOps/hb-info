import Head from 'next/head';
import HeroSection from '@/components/sections/HeroSection';
import PageLayout from '@/components/layouts/PageLayout';

const bodyText = {
  color: '#000819',
}

const teamCard = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '8px',
  border: '1px solid #1A2234',
  borderRadius: '0.375rem',
  padding: '16px',
  marginRight: '16px',
  marginTop: '16px',
}

const avatar = {
  width: '40px',
  height: '40px',
  flex: 'none',
  borderRadius: '9999px',
  backgroundColor: '#e4e4e7',
  color: '#000819',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.875rem',
  fontWeight: 500,
}

const roleBadge = {
  display: 'inline-flex',
  alignItems: 'center',
  minHeight: '20px',
  padding: '0 6px',
  borderRadius: '0.25rem',
  border: '1px solid #000819',
  color: '#000819',
  fontSize: '0.75rem',
  lineHeight: '1rem',
  fontWeight: 500,
}

const h2Style = {
  fontSize: '1.125rem',
  lineHeight: '1.75rem',
  fontWeight: 600,
  fontFamily: 'var(--font-hanken)',
}

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh' }}>
      <Head>
        <title>Our Story | Humble Beeing</title>
        <meta name="description" content="Our story, mission & vision, team, and milestones at Humble Beeing." />
      </Head>
      {/* Hero */}
      <HeroSection
        title="Our Story"
        subtitle="A Ugandan family brand crafting luxury honey with purpose."
        bgImage={'https://cdn.sanity.io/images/wf5e366r/production/291f49cddd44907c1c209a4b77b446bf521d47b7-5184x3456.jpg'}
        overlay
        py={{ base: 16, md: 24 }}
      >
        <p style={{ marginTop: '16px', maxWidth: '42rem', color: 'white', fontSize: '1.125rem', lineHeight: '1.75rem' }}>
          From hive to table, we pair elevated taste with measurable impact across communities and ecosystems.
        </p>
      </HeroSection>

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
        {/* Our Story */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', paddingBottom: '48px' }}>
          <p className="rt" style={{ ...bodyText, '--fs': '1.125rem', '--lh': '1.75rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem' }}>
            From London finance to Uganda’s wild landscapes: our founder set out to build a luxury brand that regenerates nature and livelihoods. Humble Beeing pairs elevated taste with measurable impact, working directly with beekeepers across biodiverse regions to bring you single-origin and infused honeys, and pure beeswax candles.
          </p>
          <p className="rt" style={{ ...bodyText, '--fs': '1.125rem', '--lh': '1.75rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem' }}>
            Today, we’re proud to remain 100% Ugandan-owned, championing traceability, fair pricing, and long-term partnerships with smallholder farmers.
          </p>
        </div>

        <div style={{ paddingBottom: '32px' }}>
          <img
            src="https://cdn.sanity.io/images/wf5e366r/production/02ba87ce8d01924bdc2efb2f0783ed412df06753-903x1200.png"
            alt="Honey tasting at Humble Beeing HQ"
            className="rh"
            style={{ borderRadius: '1.5rem', objectFit: 'cover', width: '100%', '--h': '280px', '--h-md': '420px' }}
          />
        </div>

        {/* Mission & Vision and Our Why */}
        <div className="rgtc" style={{ display: 'grid', '--gtc': '1fr', '--gtc-md': 'repeat(3, 1fr)', paddingBottom: '48px' }}>
          {[
            ['Mission', 'Craft luxury products that deliver sustainable income for beekeepers while restoring ecosystems.'],
            ['Vision', 'Become Africa’s most trusted luxury honey and beeswax brand, synonymous with quality, traceability, and regeneration.'],
            ['Our Why', 'We believe commerce can fund conservation. Every jar supports biodiversity corridors, protects Shea trees, and uplifts communities.'],
          ].map(([title, text]) => (
            <div key={title} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', padding: '8px' }}>
              <h2 style={h2Style}>{title}</h2>
              <p className="rt" style={{ ...bodyText, '--fs': '1.125rem', '--lh': '1.75rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem' }}>{text}</p>
            </div>
          ))}
        </div>

        {/* Meet the Team */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', paddingBottom: '48px' }}>
          <h2
            className="rt"
            style={{ '--fs': '1.125rem', '--lh': '1.75rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}
          >
            Meet the Team
          </h2>
          <div className="rgtc" style={{ display: 'grid', width: '100%', '--gtc': '1fr', '--gtc-sm': 'repeat(2, 1fr)', '--gtc-md': 'repeat(3, 1fr)' }}>
            {[
              ['OD', 'Obaya', 'CEO'],
              ['LD', 'Letaru', 'Business Development'],
              ['AD', 'Anguyo', 'Strategic Advisor'],
              ['RO', 'Rogers', 'Production Assistant'],
            ].map(([initials, name, role]) => (
              <div key={name} style={teamCard}>
                <span style={avatar}>{initials}</span>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
                  <p style={{ fontWeight: 600 }}>{name}</p>
                  <span style={roleBadge}>{role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline of Milestones */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', paddingBottom: '16px' }}>
          <h2 style={h2Style}>Timeline of Milestones</h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
            {[
              { year: '2019', text: 'Obaya quit his job in London and moved back to Uganda during covid lockdowns, set up his first beehives and got started.' },
              { year: '2021', text: 'Introduced single-origin range with full traceability and infused ranges' },
              { year: '2023', text: 'Officially Registered the company and started selling in larger stores and got our first Hotel contract' },
              { year: '2025', text: 'Got UNBS Q-Mark to enable us to sell in supermarkets and export internationally' },
            ].map((item) => (
              <div key={item.year} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    minHeight: '20px',
                    padding: '0 6px',
                    borderRadius: '0.25rem',
                    backgroundColor: '#f4f4f5',
                    color: '#18181b',
                    fontSize: '0.75rem',
                    lineHeight: '1rem',
                    fontWeight: 500,
                    flex: 'none',
                  }}
                >
                  {item.year}
                </span>
                <p className="rt" style={{ ...bodyText, '--fs': '1.125rem', '--lh': '1.75rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

AboutPage.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
)
