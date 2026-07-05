import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import FaqAccordion from '@/components/FaqAccordion'

export default function BestHoneyKampala() {
  const title = 'Which Honey in Kampala Should You Trust in 2025?'
  const description = 'Lab results, tasting flights, and sourcing notes from Humble Beeing’s beekeeping team to help Kampala shoppers pick truly premium honey this year.'
  const faqs = [
    {
      q: 'How do you decide which honey makes the “best” list?',
      a: 'We taste blind with chefs, validate moisture on a refractometer, screen for adulteration in ISO-accredited labs, and insist on full traceability to the apiary.'
    },
    {
      q: 'Are supermarket honeys in Kampala ever raw?',
      a: 'Most mass-market brands are blended and heat-treated. A few premium lines import raw honey, but Ugandan single-origin batches offer fresher terroir and shorter supply chains.'
    },
    {
      q: 'Why does price vary so widely?',
      a: 'Remote apiaries, cold filtration, and third-party testing add real cost. Ultra-cheap “premium” honey usually signals dilution, so scrutinise batch documentation.'
    },
    {
      q: 'How can I taste before buying a full jar?',
      a: 'We host quarterly tasting flights in Bugolobi and provide sample kits for chefs. Reach out via Contact & Connect to reserve a slot.'
    }
  ]

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished: '2025-01-10',
    dateModified: '2025-01-10',
    author: { '@type': 'Organization', name: 'Humble Beeing' },
    publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://cdn.sanity.io/images/wf5e366r/production/3049c86f8b48da4c3f32c4673e5bd000217e3c4e-5184x3456.jpg',
    mainEntityOfPage: { '@type': 'WebPage' },
  }

  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh', fontFamily: 'var(--font-hanken)' }}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd]} />

      <HeroSection
        title={title}
        subtitle="A beekeeper’s scorecard for purity, provenance, and flavour"
        bgImage={'https://cdn.sanity.io/images/wf5e366r/production/b7984b21e4eca856f7f7563aa2af6a89be4b5402-5184x3456.jpg'}
        overlay
        py={{ base: 16, md: 24 }}
      />

      <div className="rpx rpy rbr" style={{ position: 'relative', maxWidth: '72rem', width: '100%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#FFF2D7', '--px': '48px', '--px-md': '80px', '--py': '48px', '--py-md': '80px', '--br': '0px', '--br-lg': '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>How we benchmark honey in 2025</h2>
          <p>Every quarter we host a tasting flight with chefs from Kampala, Jinja, and Entebbe. We line up anonymised jars under neutral light, evaluate aroma, texture, and finish, and then compare notes with lab reports. Honey that survives this double scrutiny earns a place on our recommended list. The shortlist is dominated by raw, single-origin Ugandan batches because shorter supply chains mean fresher nectar and fewer opportunities for tampering.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Five questions to ask before you buy</h2>
          <ul style={{ paddingLeft: '24px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '8px' }}><b>Where was it harvested?</b> Names like Hoima, Kibaale, or Mt. Elgon indicate real apiaries, not marketing poetry.</li>
            <li style={{ marginBottom: '8px' }}><b>Is there lab proof?</b> Moisture should sit below 18.5%, HMF under 40 mg/kg, and adulteration markers should read “not detected.”</li>
            <li style={{ marginBottom: '8px' }}><b>How was it handled?</b> Cold filtration and no heat above 40°C keeps enzymes intact and flavours vibrant.</li>
            <li style={{ marginBottom: '8px' }}><b>What does it taste like?</b> Expect distinct botanical notes—coffee blossom, eucalyptus, or wildflower. A flat, sugary finish is a red flag.</li>
            <li style={{ marginBottom: '8px' }}><b>Who stands behind it?</b> Look for companies willing to share beekeeper names, batch logs, and delivery routes.</li>
          </ul>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Flavour profiles worth chasing</h2>
          <p>Kampala food lovers rave about the citrus brightness of Budongo forest honey on yoghurt, the caramel depth of eucalyptus drizzled over aged gouda, and the almost savoury shea blossom honey that chefs use to glaze roast plantain. We keep cupping notes from each harvest, so if you’re hunting for a particular flavour arc, just ask.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Where to shop with confidence</h2>
          <p>
            Our own jars are available via same-day delivery within Kampala or at partner stores like Good Glass Bugolobi, Endiro Coffee Kololo, and La Patisserie Muyenga. For a broader map, bookmark {' '}
            <Link href="/blog/where-to-buy-honey-in-kampala-stockists-and-delivery">Where to Buy Honey in Kampala</Link>. Restaurateurs can source wholesale through {' '}
            <Link href="/wholesale-and-partnerships">Wholesale & Partnerships</Link>.
          </p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>What to budget in 2025</h2>
          <p>The sweet spot (pun intended) for legitimate raw honey in Kampala this year is UGX 35,000–55,000 for a 500 g jar. Anything dramatically cheaper deserves serious interrogation; meanwhile, ultra-premium lots command more because of remote apiaries, certification, and micro-batch bottling. We publish price updates with each harvest so you can track trends rather than guess.</p>

          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>FAQs</h2>
          <FaqAccordion items={faqs} />

          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <p>
            Ready to taste the shortlist? Reserve a spot at our next flight via {' '}
            <Link href="/contact-and-connect">Contact & Connect</Link> {' '}
            or request wholesale samples through {' '}
            <Link href="/wholesale-and-partnerships">Wholesale & Partnerships</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}

BestHoneyKampala.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
)
