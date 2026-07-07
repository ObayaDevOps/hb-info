import SEO from '@/components/SEO';
import HeroSection from '@/components/sections/HeroSection';
import Section from '@/components/sections/Section';
import PageLayout from '@/components/layouts/PageLayout';

const headingMd = {
  fontSize: '1rem',
  lineHeight: '1.5rem',
  fontWeight: 600,
  fontFamily: 'var(--font-hanken)',
}

const pillarCard = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  border: '1px solid #1A2234',
  borderRadius: '0.375rem',
  padding: '24px',
}

export default function ImpactPage() {
  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh' }}>
      <SEO
        title="Impact & Sustainability — Ethical Beekeeping in Uganda"
        description="Regenerative, ethical beekeeping in Uganda: poverty alleviation, biodiversity, gender inclusion, and full traceability behind every jar of pure Ugandan honey."
      />
      {/* Hero */}
      <HeroSection
        title="Impact & Sustainability"
        subtitle="Traceable quality and measurable outcomes across people and planet."
        bgImage={'https://cdn.sanity.io/images/wf5e366r/production/745c75b930ef6de7de4178d0bff5f5fd956c9393-5184x3456.jpg'}
        overlay
        py={{ base: 16, md: 24 }}
      >
        <p style={{ marginTop: '16px', maxWidth: '42rem', color: 'white' }}>
          From beekeeper training to biodiversity corridors, every jar you enjoy funds lasting change.
        </p>
      </HeroSection>

      <Section
        py={{ base: 10, md: 16 }}
        px={{ base: 12, md: 20 }}
        className="rbr rpx rpy"
        style={{ backgroundColor: '#FFF2D7', '--br': '0px', '--br-lg': '2rem' }}
      >
        {/* Impact pillars */}
        <div className="rgtc" style={{ display: 'grid', '--gtc': '1fr', '--gtc-md': 'repeat(2, 1fr)', paddingBottom: '32px' }}>
          {[
            ['Poverty Alleviation', '5,000 farmers trained and supported with income uplift through fair, consistent purchasing.'],
            ['Environmental Conservation', 'Preservation of Shea trees and biodiversity corridors across priority landscapes.'],
            ['Traceability & Quality', 'Fighting adulteration with QR-enabled traceability and rigorous testing protocols.'],
            ['Gender & Inclusion', 'Focused training and recruitment driving a higher percentage of women beekeepers.'],
          ].map(([title, text]) => (
            <div key={title} style={pillarCard}>
              <h2 style={headingMd}>{title}</h2>
              <p style={{ color: '#000819' }}>{text}</p>
            </div>
          ))}
        </div>

        {/* UN SDG Alignment (placeholder infographic area) */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', paddingBottom: '32px' }}>
          <h2 style={headingMd}>UN SDG Alignment</h2>
          <p style={{ color: '#000819' }}>Visual summary of aligned SDGs and outcomes (infographic placeholder).</p>
          <img
            src="/globe.svg"
            alt="UN Sustainable Development Goals supported by Humble Beeing's ethical beekeeping in Uganda"
            className="rw rh"
            style={{ '--w': '200px', '--h': '200px', '--w-md': '280px', '--h-md': '280px', objectFit: 'contain' }}
          />
        </div>

        {/* KPI Dashboard (snapshot) */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', paddingBottom: '24px' }}>
          <h2 style={headingMd}>Impact Dashboard</h2>
          <p style={{ color: '#000819' }}>Quarterly KPIs: farmer count, hectares conserved, % women trained, units traceable.</p>
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <a
            href="#"
            target="_blank"
            className="hover-op9 rh rpx rt"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              '--h': '32px',
              '--h-md': '44px',
              '--px': '10px',
              '--px-md': '20px',
              '--fs': '0.75rem',
              '--lh': '1rem',
              '--fs-md': '1rem',
              '--lh-md': '1.5rem',
              fontWeight: 500,
              borderRadius: '4px',
              backgroundColor: '#000819',
              color: 'white',
              whiteSpace: 'nowrap',
            }}
          >
            Download our Impact Deck
          </a>
          <a
            href="/wholesale-and-partnerships"
            className="hover-bg-navy rh rpx rt"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              '--h': '32px',
              '--h-md': '44px',
              '--px': '10px',
              '--px-md': '20px',
              '--fs': '0.75rem',
              '--lh': '1rem',
              '--fs-md': '1rem',
              '--lh-md': '1.5rem',
              fontWeight: 500,
              borderRadius: '4px',
              border: '1px solid #000819',
              color: '#000819',
              whiteSpace: 'nowrap',
            }}
          >
            Partner with us
          </a>
        </div>
      </Section>
    </div>
  );
}

ImpactPage.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
)
