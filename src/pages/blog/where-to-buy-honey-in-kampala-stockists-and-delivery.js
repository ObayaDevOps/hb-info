import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import { breadcrumbJsonLd } from '@/lib/siteMeta'
import FaqAccordion from '@/components/FaqAccordion'

export default function WhereToBuyHoneyKampala() {
  const title = 'Where Can You Buy Trustworthy Honey in Kampala Today?'
  const description = 'Personal delivery routes, vetted stockists, and sourcing intel from Humble Beeing’s field team so you never guess where to find real Ugandan honey.'
  const faqs = [
    { q: 'Do you deliver across Kampala?', a: 'Yes. Orders placed before 3 p.m. ride out same day within central Kampala; evening orders arrive next day. We coordinate refrigerated transport for heat-sensitive gifts.' },
    { q: 'Which neighbourhoods are covered?', a: 'Kololo, Nakasero, Bugolobi, Muyenga, Kabalagala, Ntinda, Naguru, Kisementi, and Entebbe Road corridors. Reach out for tailored logistics beyond the ring road.' },
    { q: 'Can I pick up directly from Humble Beeing?', a: 'Absolutely—book a slot at our Bugolobi dispatch hub and we’ll have your batch card ready with tasting notes.' },
    { q: 'Do partners stock every floral varietal?', a: 'Selection rotates. If you want a specific batch (pine, coffee blossom, sunflower), order direct so we can reserve it before deliveries go out.' },
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
    dateModified: '2025-01-10',
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
        subtitle="Neighborhood stockists, pick-up points, and our own delivery vans"
        bgImage={'https://cdn.sanity.io/images/wf5e366r/production/745c75b930ef6de7de4178d0bff5f5fd956c9393-5184x3456.jpg'}
        overlay
        py={{ base: 16, md: 24 }}
      />

      <div className="rpx rpy rbr" style={{ position: 'relative', maxWidth: '72rem', width: '100%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#FFF2D7', '--px': '48px', '--px-md': '80px', '--py': '48px', '--py-md': '80px', '--br': '0px', '--br-lg': '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>How we vet every stockist</h2>
          <p>After our jars leave the apiary, we keep them on a short leash. Each retail partner signs cold-chain and display agreements, trains staff on batch traceability, and stores stock away from direct sunlight. We audit shelves twice a month—clipboards, refractometer, the works—because EEAT applies to real-world shelves too.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Current partner locations (updated quarterly)</h2>
          <ul style={{ paddingLeft: '24px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '8px' }}>Good Glass, Bugolobi — our flagship stockist with full varietal range and tasting flights every first Saturday.</li>
            <li style={{ marginBottom: '8px' }}>Endiro Coffee, Kololo — great for coffee blossom honey pairings alongside a cappuccino.</li>
            <li style={{ marginBottom: '8px' }}>La Patisserie, Muyenga — keeps micro-batches ideal for dessert pairings and gift hampers.</li>
            <li style={{ marginBottom: '8px' }}>The Food Library, Kisementi — rotating shelves featuring shea blossom and eucalyptus lots.</li>
            <li style={{ marginBottom: '8px' }}>32° East, Kansanga — culture hub carrying limited runs for their artist community.</li>
            <li style={{ marginBottom: '8px' }}>Select hotel boutiques (Latitude 0°, Emin Pasha) — concierge holds stock for guests and gifting emergencies.</li>
          </ul>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Our delivery routes, mapped</h2>
          <p>We dispatch from Bugolobi at 10 a.m. and 4 p.m. Riders use insulated boxes with tamper seals, and every parcel includes a batch card noting harvest region, moisture reading, and tasting notes. Corporate clients can schedule weekly standing orders; home subscribers get a courier text 30 minutes before arrival so you can put the kettle on.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Securing the varietal you love</h2>
          <ul style={{ paddingLeft: '24px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '8px' }}>Reserve coveted batches (pine, shea, acacia) via direct order—stockists sell out of seasonal lots within days.</li>
            <li style={{ marginBottom: '8px' }}>Tell us how you use honey. Tea, marinades, pastry, or cheese boards call for different aromatics and body.</li>
            <li style={{ marginBottom: '8px' }}>Gifting? We handwrite tasting cards and can bundle with beeswax candles upon request. Nothing sabotages trust faster than a last-minute, anonymous jar.</li>
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
