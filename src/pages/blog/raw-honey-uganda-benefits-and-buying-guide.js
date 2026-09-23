import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import { breadcrumbJsonLd } from '@/lib/siteMeta'
import FaqAccordion from '@/components/FaqAccordion'

export default function RawHoneyUgandaGuide() {
  const title = 'Why Do Serious Food Lovers in Uganda Seek Out Raw Honey Instead of the Squeeze Bottle?'
  const description = 'A guide to raw honey handling, harvest origin, and the scope of published UNBS honey test reports in Uganda.'
  const faqs = [
    { q: 'How can I assess a raw honey claim?', a: 'Ask the producer how the honey was extracted and heated, where it was harvested, and what documentation applies to the jar. A lab report supports only its listed tests and sample.' },
    { q: 'Why does my raw honey crystallise so quickly?', a: 'Crystallisation is a natural signal that pollen and glucose are intact; sit the jar in 40–45°C water and stir, never microwave.' },
    { q: 'Is raw honey safe for children?', a: 'Raw honey is a delight for adults and kids over twelve months. Infants should wait because of botulism risk: no shortcuts there.' },
    { q: 'Where can I ask about raw honey in Kampala?', a: 'See our current product listings and store locator, then contact us or the stockist to confirm availability.' },
  ]

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished: '2025-01-12',
    dateModified: '2026-09-23',
    author: { '@type': 'Organization', name: 'Humble Beeing' },
    publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://cdn.sanity.io/images/wf5e366r/production/fe1376a20f4c8693c806a9308a0c2d5bdd66271a-5184x3456.jpg',
    mainEntityOfPage: { '@type': 'WebPage' },
  }

  const crumbs = breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: title, path: '/blog/raw-honey-uganda-benefits-and-buying-guide' }])

  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh', fontFamily: 'var(--font-hanken)' }}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd, crumbs]} />
      <HeroSection
        title={title}
        subtitle="Field-tested advice from Hoima apiaries to Kampala kitchens"
        bgImage={'https://cdn.sanity.io/images/wf5e366r/production/e19ff4b7f6b8a5b6342a833ef7ff61efa2efc905-5184x3456.jpg'}
        overlay
        py={{ base: 16, md: 24 }}
      />
      <div className="rpx rpy rbr subpage-article" style={{ position: 'relative', maxWidth: '72rem', width: '100%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#FFF2D7', '--px': '48px', '--px-md': '80px', '--py': '48px', '--py-md': '80px', '--br': '0px', '--br-lg': '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>What qualifies as “raw” honey in our Ugandan apiaries?</h2>
          <p>During harvest season we pull combs from Hoima and Kibaale at sunrise, when nectar is still cool. Each frame is uncapped by hand, spun once, and strained through food-grade mesh. No heat, no pressure filters, and definitely no corn syrup masquerading as floral notes. That minimal handling keeps enzymes, pollen, and terroir intact: think vinyl record warmth versus a compressed mp3.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>How does raw honey taste different?</h2>
          <p>Expect a layered profile: citrus blossom from Budongo forest apiaries, deeper molasses notes from eucalyptus stands near Fort Portal, and a finish that shifts with the season. Volatile aromatics survive because we refuse to overheat the harvest. Independent sensory panels in Kampala (yes, we invite chefs with notebooks) routinely score raw batches well above commercial blends on aroma intensity and mouthfeel.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>How we prove purity and safety</h2>
          <p>A test report is useful when you read its scope. Our <Link href="/lab-tests">published UNBS reports</Link> cover one raw honey sample tested for moisture, acidity, ash, HMF, coliforms, and yeast and moulds. They do not contain antibiotic or adulteration results and cannot establish the status of every harvest.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Where should you buy raw honey in Kampala?</h2>
          <p>Traceability matters. Browse our <Link href="/products">listed products</Link> and <Link href="/store-locator">stockists</Link>, then confirm stock and any lot-specific documentation before ordering.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>How to store raw honey in our climate</h2>
          <p>Kampala humidity can stage a coup against even the best honey. Keep jars sealed, off the sunny windowsill, and comfortably at room temperature. If crystals appear (and they will), rest the jar in a 40–45°C water bath and stir every few minutes. Anything hotter risks nuking the enzymes you were so careful to buy in the first place.</p>

          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>FAQs</h2>
          <FaqAccordion items={faqs} />

          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <p>
            Curious about the latest harvest notes? Send a message via {' '}
            <Link href="/contact-and-connect">Contact & Connect</Link> {' '}
            and we’ll share current tasting cards. Wholesale buyers can tap our vetted supply chain through {' '}
            <Link href="/wholesale-and-partnerships">Wholesale & Partnerships</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}

RawHoneyUgandaGuide.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
)
