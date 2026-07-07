import SEO from '@/components/SEO'
import { CircleCheck } from 'lucide-react'

import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'

const hanken = 'var(--font-hanken)'

const headingLg = {
  fontSize: '1.125rem',
  lineHeight: '1.75rem',
  fontWeight: 600,
  fontFamily: hanken,
}

const headingMd = {
  fontSize: '1rem',
  lineHeight: '1.5rem',
  fontWeight: 600,
  fontFamily: hanken,
}

const textLg = {
  fontSize: '1.125rem',
  lineHeight: '1.75rem',
}

const grayBadge = {
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
}

const col = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
}

function OurProcessPage() {
  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh' }}>
      <SEO
        title="How We Harvest Pure Raw Honey in Uganda — Our Process"
        description="From hive to jar: how Humble Beeing harvests raw, unprocessed Ugandan honey and beeswax with smallholder farmers — cold-extracted, lab-tested, and traceable."
      />

      <HeroSection
        title="Our Process"
        subtitle="From hive to jar with uncompromising care."
        bgImage="/images/our-process/beekeeper-field.jpg"
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
          '--px': '40px',
          '--px-md': '80px',
          '--py': '48px',
          '--py-md': '80px',
          '--br': '0px',
          '--br-lg': '2rem',
          '--mt': '0px',
          '--mt-md': '24px',
        }}
      >
        <div style={{ ...col, paddingBottom: '48px' }}>
          <h1 style={headingLg}>Purposeful Sourcing</h1>
          <p className="rt" style={{ '--fs': '1.125rem', '--lh': '1.75rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem' }}>
            We partner with smallholder beekeepers across Uganda, purchasing directly at fair, transparent rates that sustain
            their craft. Farmers receive training, equipment, and a guaranteed market so every harvest is handled with pride.
          </p>
          <p className="rt" style={{ '--fs': '1.125rem', '--lh': '1.75rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem' }}>
            Our field team visits each cooperative throughout the season to monitor hive health, flowering cycles, and post-
            harvest handling. This close collaboration keeps terroir intact and ensures every jar tells the story of the
            beekeeper who raised it.
          </p>
        </div>

        <div className="rgtc" style={{ display: 'grid', '--gtc': '1fr', '--gtc-md': 'repeat(2, 1fr)', paddingBottom: '64px' }}>
          {[
            {
              title: 'Harvest & Collection',
              description:
                'Combs are lifted at peak bloom to protect nectar character. We supply food-grade buckets and cold chains so the honey arrives untouched.',
              image:
                '/images/our-process/harvest-collection.jpg',
              alt: 'Beekeeper harvesting raw honeycomb from hives in Uganda',
            },
            {
              title: 'Slow Extraction',
              description:
                'Our Kampala hub uses gentle, centrifugal extraction and gravity settling. No heat, no blends—just raw honey retaining enzymes and pollen.',
              image:
                '/images/our-process/pouring-honey.jpg',
              alt: 'Pure raw Ugandan honey being poured after gentle cold extraction',
            },
            {
              title: 'Wax Craftsmanship',
              description:
                'Beeswax caps are filtered through organic cotton, then poured into candles and balms that keep their natural golden sheen and aroma.',
              image:
                '/images/our-process/beeswax.jpg',
              alt: 'Golden natural beeswax filtered for hand-poured candles in Kampala',
            },
            {
              title: 'Quality Assurance',
              description:
                'Each batch is tested for moisture, pollen diversity, and sensory notes. Only lots that meet our premium benchmarks are bottled.',
              image:
                '/images/our-process/infused-honeys.jpg',
              alt: 'Jars of infused raw honey awaiting lab purity testing',
            },
          ].map((item) => (
            <div key={item.title} style={col}>
              <img
                src={item.image}
                alt={item.alt || item.title}
                className="rh"
                style={{
                  borderRadius: '1.5rem',
                  objectFit: 'cover',
                  width: '100%',
                  '--h': 'auto',
                  maxHeight: '280px',
                }}
              />
              <h2 style={headingMd}>{item.title}</h2>
              <p style={textLg}>{item.description}</p>
            </div>
          ))}
        </div>

        <div style={{ paddingBottom: '64px' }}>
          <h2 style={{ ...headingLg, marginBottom: '24px' }}>From Smallholder To Sanctuary</h2>
          <div className="rgtc" style={{ display: 'grid', '--gtc': '1fr', '--gtc-md': 'repeat(3, 1fr)' }}>
            {[
              {
                name: 'Direct Trade Guarantee',
                note: 'We pay farmers on collection day and reinvest a percentage into hive expansion and training.',
                badge: 'Fair Partnership',
              },
              {
                name: 'Traceable Batches',
                note: 'Every jar links back to the apiary, bloom cycle, and the beekeeper family who harvested it.',
                badge: 'Transparent',
              },
              {
                name: 'Cold Chain Logistics',
                note: 'Temperature-controlled transport prevents fermentation and preserves raw integrity.',
                badge: 'Freshness First',
              },
            ].map((item) => (
              <div key={item.name} style={{ ...col, border: '1px solid #1A2234', borderRadius: '0.75rem', padding: '24px' }}>
                <span style={grayBadge}>{item.badge}</span>
                <h3 style={headingMd}>{item.name}</h3>
                <p style={textLg}>{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ paddingBottom: '48px' }}>
          <h2 style={{ ...headingLg, marginBottom: '24px' }}>Health Benefits That Stay Intact</h2>
          <div className="rfd" style={{ display: 'flex', alignItems: 'stretch', gap: '8px', '--fd': 'column', '--fd-md': 'row' }}>
            <div style={{ ...col, flex: 1 }}>
              <p className="rt" style={{ '--fs': '1.125rem', '--lh': '1.75rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem' }}>
                Raw honey and beeswax deliver more than sweetness. Our low-intervention process preserves antioxidants, natural
                sugars, propolis, and micronutrients that support immunity and soothe digestion.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '8px' }}>
                {[
                  'Naturally antibacterial and antimicrobial, ideal for throat and skincare rituals.',
                  'Rich in amino acids and pollen that support everyday energy and recovery.',
                  'Beeswax burns cleanly, adding negative ions that can help purify indoor air.',
                  'Enzyme activity remains high thanks to zero heat pasteurization.',
                ].map((point) => (
                  <div key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <CircleCheck color="#c77b30" size={20} style={{ marginTop: '4px', flex: 'none' }} />
                    <p style={textLg}>{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ ...col, flex: 1, justifyContent: 'center' }}>
              <h3 style={headingMd}>Every Jar, Premium by Design</h3>
              <p style={textLg}>
                We bottle in micro-lots to celebrate harvest nuance. Labels include bloom notes, beekeeper collectives, and
                best-before dates so you always know exactly what you are pouring.
              </p>
              <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(0, 8, 25, 0.2)' }} />
              <p style={textLg}>
                Our wax artisans hand-finish each candle and balm, ensuring the same premium quality across our full range of
                hive goods.
              </p>
            </div>
          </div>
        </div>

        <div className="rp" style={{ backgroundColor: 'rgba(0, 8, 25, 0.06)', borderRadius: '1.5rem', '--p': '24px', '--p-md': '40px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', flexWrap: 'wrap' }}>
            <div style={{ ...col, flex: 1, minWidth: '240px' }}>
              <h2 style={headingLg}>Sustainability In Action</h2>
              <p style={textLg}>
                Reinvesting in small farms protects Shea corridors, boosts biodiversity, and keeps rural livelihoods thriving.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '8px', flex: 1, minWidth: '240px' }}>
              {[
                'Regenerative apiary training to reduce deforestation pressure.',
                'Pollinator-friendly planting kits supplied to partner farmers.',
                'Revenue shares support education and community health programs.',
              ].map((point) => (
                <div key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <CircleCheck color="#c77b30" size={20} style={{ marginTop: '4px', flex: 'none' }} />
                  <p className="rt" style={{ '--fs': '1rem', '--lh': '1.5rem', '--fs-md': '1.125rem', '--lh-md': '1.75rem' }}>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

OurProcessPage.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
)

export default OurProcessPage
