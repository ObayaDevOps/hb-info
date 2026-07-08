import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import { breadcrumbJsonLd } from '@/lib/siteMeta'
import FaqAccordion from '@/components/FaqAccordion'

export default function StoreHoneyKampala() {
  const title = 'How Should You Store Honey in Kampala’s Heat Without Losing Its Magic?'
  const description = 'Real-world storage tactics from Humble Beeing’s beekeepers to protect flavour, prevent fermentation, and manage crystallisation in Uganda’s humid climate.'
  const faqs = [
    { q: 'Does Kampala heat ruin honey?', a: 'Only if jars sit in direct sun or near stoves. Keep them between 18–25°C and aromas stay vibrant for years.' },
    { q: 'Is crystallised honey a sign of spoilage?', a: 'No. It is a badge of minimal processing. Re-liquefy slowly in a 40–45°C water bath and the crystals melt back into silk.' },
    { q: 'Should honey ever be refrigerated?', a: 'Skip the fridge. Cold accelerates crystallisation and humidity affects texture. Room temperature storage is ideal.' },
    { q: 'How do I avoid moisture contamination?', a: 'Use dry utensils, seal jars promptly, and keep them away from boiling kettles or dishwashers that fog the air.' },
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
    datePublished: '2025-01-14',
    dateModified: '2025-01-14',
    author: { '@type': 'Organization', name: 'Humble Beeing' },
    publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://cdn.sanity.io/images/wf5e366r/production/1bdb425b08c28f34c4c48fc739d2dff3fd2584d4-4032x2268.jpg',
    mainEntityOfPage: { '@type': 'WebPage' },
  }

  const crumbs = breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: title, path: '/blog/how-to-store-honey-in-kampala-heat-and-humidity-tips' }])

  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh', fontFamily: 'var(--font-hanken)' }}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd, crumbs]} />

      <HeroSection
        title={title}
        subtitle="Storage habits we swear by from Hoima harvests to Kampala kitchens"
        bgImage={'https://cdn.sanity.io/images/wf5e366r/production/291f49cddd44907c1c209a4b77b446bf521d47b7-5184x3456.jpg'}
        overlay
        py={{ base: 16, md: 24 }}
      />

      <div className="rpx rpy rbr" style={{ position: 'relative', maxWidth: '72rem', width: '100%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#FFF2D7', '--px': '48px', '--px-md': '80px', '--py': '48px', '--py-md': '80px', '--br': '0px', '--br-lg': '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Why climate control matters here</h2>
          <p>Our Kampala kitchens flirt with 30°C afternoons and humidity north of 70%. Honey is hygroscopic, meaning it pulls moisture the way journalists pull late nights. Too much water invites fermentation, so we rotate jars off the counter during service hours and keep them tucked into a cool cupboard, ideally on the wall opposite your cooker.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Daily habits that protect flavour</h2>
          <ul style={{ paddingLeft: '24px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '8px' }}>Use dry utensils only. We keep a dedicated honey spoon hanging beside the jar like a tiny security guard.</li>
            <li style={{ marginBottom: '8px' }}>Close lids immediately after serving; Kampala’s evening humidity is relentless.</li>
            <li style={{ marginBottom: '8px' }}>Store jars between 18–25°C. A pantry or shaded shelf beats a sunny breakfast nook every time.</li>
          </ul>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Managing crystallisation without panic</h2>
          <p>Crystals signal that your honey retains its natural glucose ratio. To return it to velvet, place the jar in a 40–45°C water bath and stir every few minutes. We use sous-vide sticks at the honey house, but a kettle and patient hand works just as well. Skip the microwave; it overheats the outer layer, flattens aromas, and makes bees everywhere shake their heads.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Fermentation red flags (and fixes)</h2>
          <p>True fermentation smells slightly sour and foams around the lid. If that happens, the jar either absorbed moisture or was bottled with too-high water content. Contact us: we’ll troubleshoot, replace your jar, and adjust future handling. For extra insurance, we bottle at 17–18% moisture and include the reading on your batch card.</p>

          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>FAQs</h2>
          <FaqAccordion items={faqs} />

          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <p>
            For varietal recommendations or bulk supply, see {' '} 
            <Link href="/wholesale-and-partnerships">Wholesale & Partnerships</Link> or {' '}
            <Link href="/contact-and-connect">Contact & Connect</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}

StoreHoneyKampala.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
)
