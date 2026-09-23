import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import { breadcrumbJsonLd } from '@/lib/siteMeta'
import FaqAccordion from '@/components/FaqAccordion'

export default function BestHoneyKampala() {
  const title = 'How to Choose Honey in Kampala'
  const description = 'A practical guide to comparing harvest origin, label details, published lab reports, and price when buying honey in Kampala.'
  const faqs = [
    {
      q: 'What should I compare before buying honey?',
      a: 'Check the harvest origin, jar size, ingredient list, seller contact details, and any test report that applies to the specific sample or batch.'
    },
    {
      q: 'Are supermarket honeys in Kampala ever raw?',
      a: 'Some are. Check the producer’s processing description and ask whether the jar is blended or heat-treated; a store shelf alone cannot tell you.'
    },
    {
      q: 'Why does price vary so widely?',
      a: 'Origin, jar size, processing, and distribution all affect price. A low price alone does not prove adulteration; compare the evidence and price per gram.'
    },
    {
      q: 'Where can I find Humble Beeing products?',
      a: 'Check the store locator for listed stockists, or contact Humble Beeing to ask about a particular product and current availability.'
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
    dateModified: '2026-09-23',
    author: { '@type': 'Organization', name: 'Humble Beeing' },
    publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://cdn.sanity.io/images/wf5e366r/production/3049c86f8b48da4c3f32c4673e5bd000217e3c4e-5184x3456.jpg',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.humble-beeing.com/blog/best-honey-in-kampala-buyers-guide-2025' },
  }

  const crumbs = breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: title, path: '/blog/best-honey-in-kampala-buyers-guide-2025' }])

  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh', fontFamily: 'var(--font-hanken)' }}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd, crumbs]} />

      <HeroSection
        title={title}
        subtitle="A beekeeper’s scorecard for purity, provenance, and flavour"
        bgImage={'https://cdn.sanity.io/images/wf5e366r/production/b7984b21e4eca856f7f7563aa2af6a89be4b5402-5184x3456.jpg'}
        overlay
        py={{ base: 16, md: 24 }}
      />

      <div className="rpx rpy rbr subpage-article" style={{ position: 'relative', maxWidth: '72rem', width: '100%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#FFF2D7', '--px': '48px', '--px-md': '80px', '--py': '48px', '--py-md': '80px', '--br': '0px', '--br-lg': '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
          <p><time dateTime="2026-09-23">Updated 23 September 2026</time></p>
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Start with traceable details</h2>
          <p>A useful label names the producer, jar size, ingredients, and harvest origin. Ask how the honey was processed and which lot or sample any test report covers. These details are more useful than an unsupported claim that one jar is the “best” in Kampala.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Five questions to ask before you buy</h2>
          <ul style={{ paddingLeft: '24px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '8px' }}><b>Where was it harvested?</b> Names like Hoima, Kibaale, or Mt. Elgon indicate real apiaries, not marketing poetry.</li>
            <li style={{ marginBottom: '8px' }}><b>Is there lab evidence?</b> Read the actual report, including its sample number, tests performed, date, and limits. Our <Link href="/lab-tests">published UNBS reports</Link> cover one raw honey sample, not every jar.</li>
            <li style={{ marginBottom: '8px' }}><b>How was it handled?</b> Ask the producer whether the honey was heated or blended and how it was packed.</li>
            <li style={{ marginBottom: '8px' }}><b>What does it taste like?</b> Compare aroma, sweetness, and texture if tasting is possible; flavour alone cannot establish purity.</li>
            <li style={{ marginBottom: '8px' }}><b>Who stands behind it?</b> Look for a producer with contact details and a clear way to ask about origin and testing.</li>
          </ul>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Flavour profiles worth chasing</h2>
          <p>Different harvests can bring different floral and savoury notes. Our <Link href="/products">product pages</Link> describe the currently listed Yumbe, Nebbi, and Arua honeys, including their origin and suggested pairings.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Where to shop with confidence</h2>
          <p>
            Check our <Link href="/store-locator">store locator</Link> for listed stockists, then confirm stock before travelling. For delivery or a specific jar, <Link href="/contact-and-connect">contact us</Link>. Restaurateurs can ask about wholesale through {' '}
            <Link href="/wholesale-and-partnerships">Wholesale & Partnerships</Link>.
          </p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Compare prices fairly</h2>
          <p>Compare prices per gram and check the jar size. Product listings show our current published prices; contact the seller to confirm price and availability before ordering. Price on its own cannot verify purity.</p>

          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>FAQs</h2>
          <FaqAccordion items={faqs} />

          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <p>
            Want to ask about a harvest or available products? Use {' '}
            <Link href="/contact-and-connect">Contact & Connect</Link> {' '}
            or request wholesale details through {' '}
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
