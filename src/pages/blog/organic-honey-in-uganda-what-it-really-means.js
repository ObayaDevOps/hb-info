import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import { breadcrumbJsonLd } from '@/lib/siteMeta'
import FaqAccordion from '@/components/FaqAccordion'

export default function OrganicHoneyUganda() {
  const title = 'Organic Honey & Beeswax in Uganda: A Buyer’s Guide'
  const description = 'Understand organic honey and beeswax claims, raw honey, certification scope and what the published UNBS reports establish.'
  const faqs = [
    { q: 'Is Humble Beeing honey certified organic?', a: 'The published UNBS reports are sample test reports, not organic certification. Ask us for current certification documentation before relying on an organic claim.' },
    { q: 'Is raw honey the same as organic honey?', a: 'No. Raw describes how honey is handled; organic is a certification claim about production and handling. Check the evidence for each separately.' },
    { q: 'What should I ask an organic beeswax supplier?', a: 'Ask for the current certificate, the products and operator it covers, and records identifying the wax lot. Confirm handling, format and suitability for your intended application.' },
    { q: 'Can a lab report prove organic certification?', a: 'No. Certification and laboratory tests answer different questions. Check the certifier, scope, and validity dates of an organic certificate.' },
    { q: 'How can I buy responsibly made honey?', a: 'Choose transparent producers with traceability, testing, and clear handling standards.' },
  ]
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const blogJsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
    datePublished: '2025-01-18', dateModified: '2026-10-13',
    author: { '@type': 'Organization', name: 'Humble Beeing' }, publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://cdn.sanity.io/images/wf5e366r/production/3049c86f8b48da4c3f32c4673e5bd000217e3c4e-5184x3456.jpg', mainEntityOfPage: { '@type': 'WebPage' },
  }

  const crumbs = breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: title, path: '/blog/organic-honey-in-uganda-what-it-really-means' }])

  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh', fontFamily: 'var(--font-hanken)' }}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd, crumbs]} />
      <HeroSection title={title} subtitle="Straight talk from the apiary instead of marketing fog" bgImage={'https://cdn.sanity.io/images/wf5e366r/production/536a0d144a6196619310c04ede39ee01395494cf-5184x3456.jpg'} overlay py={{ base: 16, md: 24 }} />
      <div className="rpx rpy rbr subpage-article" style={{ position: 'relative', maxWidth: '72rem', width: '100%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#FFF2D7', '--px': '48px', '--px-md': '80px', '--py': '48px', '--py-md': '80px', '--br': '0px', '--br-lg': '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>The certification reality</h2>
          <p>Organic certification concerns production practices and the area where bees forage. A claim should identify the certifier, the products covered, and the certificate’s validity dates. The UNBS reports on our site are laboratory results for one sample; they are not organic certificates.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>What to ask a producer</h2>
          <ul style={{ paddingLeft: '24px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '10px' }}><b>Certification:</b> which body certified the product, and when does the certificate expire?</li>
            <li style={{ marginBottom: '10px' }}><b>Forage:</b> where are the apiaries, and how are neighbouring land uses assessed?</li>
            <li style={{ marginBottom: '10px' }}><b>Testing:</b> which samples and parameters were tested? Our <Link href="/lab-tests">published UNBS reports</Link> do not include pesticide residues.</li>
            <li style={{ marginBottom: '10px' }}><b>Handling:</b> how is honey extracted, stored, and kept separate from other lots?</li>
          </ul>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Buying organic beeswax</h2>
          <p>For organic beeswax, check that the certificate covers the wax and supplier involved, rather than assuming honey certification also covers every wax product. Confirm origin, lot records and how the wax is cleaned or refined. For candles or cosmetics, discuss the specification your application needs. Ask about our <Link href="/wholesale-and-partnerships">wholesale beeswax</Link> and available documentation; the published honey sample reports do not certify beeswax.</p>

          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>FAQs</h2>
          <FaqAccordion items={faqs} />
          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <p>Have a question about a label or document? Reach us via <Link href="/contact-and-connect">Contact & Connect</Link>.</p>
        </div>
      </div>
    </div>
  )
}

OrganicHoneyUganda.getLayout = (page) => (<PageLayout navbarProps={{ overlayOnHero: true }}>{page}</PageLayout>)
