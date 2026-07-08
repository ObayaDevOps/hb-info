import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import { breadcrumbJsonLd } from '@/lib/siteMeta'
import FaqAccordion from '@/components/FaqAccordion'

export default function WholesaleHoneyKampalaGuide() {
  const title = 'Where Can Kampala Businesses Source Reliable Wholesale Honey?'
  const description = 'Procurement insights from Humble Beeing, covering MOQs, pricing tiers, logistics, and documentation for restaurants, hotels, and retailers.'
  const faqs = [
    { q: 'What are your minimum order quantities?', a: 'Starting at 24 x 500 g jars or 12 kg drums; subscription clients can customise monthly draws.' },
    { q: 'Do you provide full lab documentation?', a: 'Every shipment includes moisture, adulteration, residue, and pollen reports, with original certificates available on request.' },
    { q: 'Can you hold safety stock?', a: 'Yes. We maintain buffer inventory in Kampala and plan harvest allocations quarterly so menus stay consistent.' },
  ]
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const blogJsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
    datePublished: '2025-01-20', dateModified: '2025-01-20',
    author: { '@type': 'Organization', name: 'Humble Beeing' }, publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://cdn.sanity.io/images/wf5e366r/production/b1b8152aeed20473991a459a0f062eb50aa4d810-125x125.png', mainEntityOfPage: { '@type': 'WebPage' },
  }
  const crumbs = breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: title, path: '/blog/wholesale-honey-kampala-suppliers-guide' }])
  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh', fontFamily: 'var(--font-hanken)' }}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd, crumbs]} />
      <HeroSection title={title} subtitle="MOQ, logistics, documentation, and formats" bgImage={'https://cdn.sanity.io/images/wf5e366r/production/fe1376a20f4c8693c806a9308a0c2d5bdd66271a-5184x3456.jpg'} overlay py={{ base: 16, md: 24 }} />
      <div className="rpx rpy rbr" style={{ position: 'relative', maxWidth: '72rem', width: '100%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#FFF2D7', '--px': '48px', '--px-md': '80px', '--py': '48px', '--py-md': '80px', '--br': '0px', '--br-lg': '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>How we serve procurement teams</h2>
          <p>Our wholesale programme supports hotels, cafés, and specialty retailers with quarterly harvest planning, fixed pricing windows, and documented traceability. We assign an account manager to map your demand curve, prep sample kits, and align deliveries with production calendars so you never scramble for stock.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>What to expect in every shipment</h2>
          <ul style={{ paddingLeft: '24px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '10px' }}><b>Documentation pack:</b> batch origin, moisture, LC-IRMS adulteration results, residue screens, and sensory notes.</li>
            <li style={{ marginBottom: '10px' }}><b>Packaging options:</b> 500 g retail jars, 1.5 kg food-service pouches, and 12 kg drums ready for kitchen decanting.</li>
            <li style={{ marginBottom: '10px' }}><b>Delivery windows:</b> same-week dispatch within Kampala, refrigerated logistics for temperature-sensitive orders.</li>
          </ul>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Pricing and supply planning</h2>
          <p>Volume discounts kick in at 48 retail units or 24 kg per month. We hedge pricing by contracting with partner apiaries ahead of season and can hold safety stock for up to six weeks. Subscription clients receive priority access to limited micro-batches like coffee blossom when demand spikes.</p>

          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>FAQs</h2>
          <FaqAccordion items={faqs} />
          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <p>Request a quote via <Link href="/wholesale-and-partnerships">Wholesale & Partnerships</Link> or reach us at <Link href="/contact-and-connect">Contact & Connect</Link>.</p>
        </div>
      </div>
    </div>
  )
}

WholesaleHoneyKampalaGuide.getLayout = (page) => (<PageLayout navbarProps={{ overlayOnHero: true }}>{page}</PageLayout>)
