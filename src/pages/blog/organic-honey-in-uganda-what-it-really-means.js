import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import { breadcrumbJsonLd } from '@/lib/siteMeta'
import FaqAccordion from '@/components/FaqAccordion'

export default function OrganicHoneyUganda() {
  const title = 'Organic Honey in Uganda: What It Really Means'
  const description = 'Understand “organic” for honey in Uganda — certifications, practical limitations, and responsible beekeeping practices you can trust.'
  const faqs = [
    { q: 'Is Ugandan honey certified organic?', a: 'Certification is rare. We focus on residue testing, remote forage zones, and careful handling to achieve organic‑level outcomes.' },
    { q: 'Can you label honey organic without certification?', a: 'We avoid using the term as a claim unless certified. Instead, we document practices and lab results.' },
    { q: 'How can I buy responsibly made honey?', a: 'Choose transparent producers with traceability, testing, and clear handling standards.' },
  ]
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const blogJsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
    datePublished: '2025-01-18', dateModified: '2025-01-18',
    author: { '@type': 'Organization', name: 'Humble Beeing' }, publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://cdn.sanity.io/images/wf5e366r/production/3049c86f8b48da4c3f32c4673e5bd000217e3c4e-5184x3456.jpg', mainEntityOfPage: { '@type': 'WebPage' },
  }

  const crumbs = breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: title, path: '/blog/organic-honey-in-uganda-what-it-really-means' }])

  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh', fontFamily: 'var(--font-hanken)' }}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd, crumbs]} />
      <HeroSection title={title} subtitle="Straight talk from the apiary instead of marketing fog" bgImage={'https://cdn.sanity.io/images/wf5e366r/production/536a0d144a6196619310c04ede39ee01395494cf-5184x3456.jpg'} overlay py={{ base: 16, md: 24 }} />
      <div className="rpx rpy rbr" style={{ position: 'relative', maxWidth: '72rem', width: '100%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#FFF2D7', '--px': '48px', '--px-md': '80px', '--py': '48px', '--py-md': '80px', '--br': '0px', '--br-lg': '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>The certification reality</h2>
          <p>Organic honey certification sounds simple until you realise bees commute further than most Kampala motorists. Standards demand a pesticide-free radius of up to five kilometres. We map every apiary, monitor neighbouring farms, and keep buffer agreements with communities around Hoima and Fort Portal. A third-party auditor from the National Organic Movement of Uganda reviews our logs annually as we progress toward formal EU certification.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Safeguards we already enforce</h2>
          <ul style={{ paddingLeft: '24px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '10px' }}><b>Remote forage buffers:</b> hives sit in woodland corridors where chemical inputs are either banned or tightly controlled.</li>
            <li style={{ marginBottom: '10px' }}><b>Quarterly residue testing:</b> accredited labs screen for pesticides, antibiotics, and heavy metals; results feed into our transparency report.</li>
            <li style={{ marginBottom: '10px' }}><b>Beekeeper coaching:</b> farmers complete our Level II organic management course covering hive treatments, forage mapping, and harvest hygiene.</li>
            <li style={{ marginBottom: '10px' }}><b>Equipment protocol:</b> stainless extractors, food-grade barrels, and no plastic comb foundation keep contamination at bay.</li>
          </ul>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>How to fact-check “organic” claims</h2>
          <p>A true organic dossier includes certificates, field audit notes, lab reports, and beekeeper training records. Ask for all of it. If you are handed a poetic brochure instead, consider that your red flag. We open our documentation, invite site visits, and publish summaries on <Link href="/impact-and-sustainability">Impact & Sustainability</Link> because trust thrives on daylight.</p>

          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>FAQs</h2>
          <FaqAccordion items={faqs} />
          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <p>Need a deeper dive? Contact us for the latest audit packs or join our next farm visit via <Link href="/contact-and-connect">Contact & Connect</Link>.</p>
        </div>
      </div>
    </div>
  )
}

OrganicHoneyUganda.getLayout = (page) => (<PageLayout navbarProps={{ overlayOnHero: true }}>{page}</PageLayout>)
