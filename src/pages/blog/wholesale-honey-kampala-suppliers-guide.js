import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import { breadcrumbJsonLd } from '@/lib/siteMeta'
import FaqAccordion from '@/components/FaqAccordion'

export default function WholesaleHoneyKampalaGuide() {
  const title = 'Where Can Kampala Businesses Source Reliable Wholesale Honey?'
  const description = 'Questions Kampala businesses should ask about wholesale honey formats, pricing, delivery, and sample-specific test documentation.'
  const faqs = [
    { q: 'What is the minimum order quantity?', a: 'Ask for a quote for your required format and volume; minimum quantities depend on the product and current supply.' },
    { q: 'What test documentation is available?', a: 'Our public UNBS reports cover one raw honey sample. Ask which reports, if any, apply to the lot in your proposed order.' },
    { q: 'Can you hold safety stock?', a: 'Discuss your forecast and delivery needs with us before relying on a reserved quantity.' },
  ]
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const blogJsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
    datePublished: '2025-01-20', dateModified: '2026-09-23',
    author: { '@type': 'Organization', name: 'Humble Beeing' }, publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://cdn.sanity.io/images/wf5e366r/production/b1b8152aeed20473991a459a0f062eb50aa4d810-125x125.png', mainEntityOfPage: { '@type': 'WebPage' },
  }
  const crumbs = breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: title, path: '/blog/wholesale-honey-kampala-suppliers-guide' }])
  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh', fontFamily: 'var(--font-hanken)' }}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd, crumbs]} />
      <HeroSection title={title} subtitle="Formats, logistics, and documentation to confirm" bgImage={'https://cdn.sanity.io/images/wf5e366r/production/fe1376a20f4c8693c806a9308a0c2d5bdd66271a-5184x3456.jpg'} overlay py={{ base: 16, md: 24 }} />
      <div className="rpx rpy rbr subpage-article" style={{ position: 'relative', maxWidth: '72rem', width: '100%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#FFF2D7', '--px': '48px', '--px-md': '80px', '--py': '48px', '--py-md': '80px', '--br': '0px', '--br-lg': '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>How we serve procurement teams</h2>
          <p>Tell us the product, format, quantity, and delivery date you need. We can discuss options for chefs, hotels, retailers, and events, then provide a quote based on current supply. See <Link href="/wholesale-and-partnerships">Wholesale & Partnerships</Link> for the inquiry form.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>What to confirm before ordering</h2>
          <ul style={{ paddingLeft: '24px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '10px' }}><b>Documentation:</b> ask which harvest and test records identify the lot you will receive. Our <Link href="/lab-tests">published reports</Link> apply to one 2025 sample.</li>
            <li style={{ marginBottom: '10px' }}><b>Packaging:</b> specify the jar or bulk format you need and request a current list of available sizes.</li>
            <li style={{ marginBottom: '10px' }}><b>Delivery:</b> confirm lead time, destination, and handling requirements in the quote.</li>
          </ul>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Pricing and supply planning</h2>
          <p>Request a written quote that states unit price, minimum quantity, delivery charge, lead time, and the period for which the price is valid. Ask us about recurring supply if your menu or store needs it.</p>

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
