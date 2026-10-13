import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import { breadcrumbJsonLd } from '@/lib/siteMeta'
import FaqAccordion from '@/components/FaqAccordion'

export default function WhereToBuyHoneyKampala() {
  const title = 'Where to Buy Honey in Kampala: Stockists & Orders'
  const description = 'Find Kampala honey stockists, explore the current range and confirm availability, collection or delivery before ordering.'
  const faqs = [
    { q: 'Do you deliver across Kampala?', a: 'Contact us with your location, products and required date to confirm availability, delivery cost and timing before ordering.' },
    { q: 'Where can I find your stockists?', a: 'Use the Store Locator for listed Kampala stockists. Check directly with the shop for its current range and stock.' },
    { q: 'Can I pick up directly from Humble Beeing?', a: 'Contact us to arrange collection. Our listed address is the 2nd Floor, Tools and Machinery Building, Kabalagala, Kampala.' },
    { q: 'Do stockists carry every honey variety?', a: 'Ranges vary. If you need a specific honey or gift set, confirm availability with the stockist or contact us before visiting.' },
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
    datePublished: '2025-01-10',
    dateModified: '2026-10-13',
    author: { '@type': 'Organization', name: 'Humble Beeing' },
    publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://cdn.sanity.io/images/wf5e366r/production/536a0d144a6196619310c04ede39ee01395494cf-5184x3456.jpg',
    mainEntityOfPage: { '@type': 'WebPage' },
  }

  const crumbs = breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: title, path: '/blog/where-to-buy-honey-in-kampala-stockists-and-delivery' }])

  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh', fontFamily: 'var(--font-hanken)' }}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd, crumbs]} />

      <HeroSection
        title={title}
        subtitle="Kampala stockists, collection and delivery enquiries"
        bgImage={'https://cdn.sanity.io/images/wf5e366r/production/745c75b930ef6de7de4178d0bff5f5fd956c9393-5184x3456.jpg'}
        overlay
        py={{ base: 16, md: 24 }}
      />

      <div className="rpx rpy rbr subpage-article" style={{ position: 'relative', maxWidth: '72rem', width: '100%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#FFF2D7', '--px': '48px', '--px-md': '80px', '--py': '48px', '--py-md': '80px', '--br': '0px', '--br-lg': '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Find honey in Kampala</h2>
          <p>Find raw and infused Ugandan honey through our <Link href="/store-locator">Kampala store locator</Link> or contact Humble Beeing directly. Compare available products, jar sizes and prices in the <Link href="/products">current range</Link>, then confirm stock with the seller.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Before visiting a stockist</h2>
          <ul style={{ paddingLeft: '24px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '8px' }}>Check the listed location and opening arrangements with the shop.</li>
            <li style={{ marginBottom: '8px' }}>Confirm the honey variety, candle or gift set you want is in stock.</li>
            <li style={{ marginBottom: '8px' }}>Ask about the jar size, current price and payment options.</li>
          </ul>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Arrange collection or delivery</h2>
          <p>Send your product selection, quantity, destination and preferred date through <Link href="/contact-and-connect">Contact & Connect</Link>. Confirm delivery costs and timing before payment. For collection, ask about arrangements at our listed Kabalagala address.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Securing the varietal you love</h2>
          <ul style={{ paddingLeft: '24px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '8px' }}>Ask about Yumbe shea blossom, Nebbi multifloral and Arua calliandra honey in the current range.</li>
            <li style={{ marginBottom: '8px' }}>Tell us how you use honey. Tea, marinades, pastry, or cheese boards call for different aromatics and body.</li>
            <li style={{ marginBottom: '8px' }}>For gifting, explore our honey taster set and beeswax candles, then confirm the selection and presentation available for your order.</li>
          </ul>

          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>FAQs</h2>
          <FaqAccordion items={faqs} />

          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <p>
            Ready to order? {' '}
            <Link href="/contact-and-connect">Contact & Connect</Link> for delivery and special requests. For wholesale/B2B, see {' '}
            <Link href="/wholesale-and-partnerships">Wholesale & Partnerships</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}

WhereToBuyHoneyKampala.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
)
