import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import FaqAccordion from '@/components/FaqAccordion'

export default function PremiumHoneyUganda() {
  const title = 'What Makes Premium Ugandan Honey Worth the Splurge?'
  const description = 'From remote forest apiaries to chef tastings, here is how Humble Beeing justifies the price tag on truly premium Ugandan honey.'
  const faqs = [
    { q: 'Why does premium honey command a higher price?', a: 'Remote forage zones, cold extraction, third-party testing, and artisan bottling add cost while protecting flavour and authenticity.' },
    { q: 'Is premium honey always raw?', a: 'Yes. Heat-treated honey can’t carry the aromatic complexity or enzyme activity that defines premium status.' },
    { q: 'How do I pick the right varietal?', a: 'Tell us the menu. We match floral profiles to tea, cheeses, pastry, or bar programs based on sensory notes from each batch.' },
  ]

  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const blogJsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
    datePublished: '2025-01-15', dateModified: '2025-01-15',
    author: { '@type': 'Organization', name: 'Humble Beeing' }, publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://cdn.sanity.io/images/wf5e366r/production/e6e3c7e35d213f7c070ee6d25c2364ee1eb1b954-5184x3456.jpg', mainEntityOfPage: { '@type': 'WebPage' },
  }

  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh', fontFamily: 'var(--font-hanken)' }}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd]} />
      <HeroSection title={title} subtitle="Taste, texture, and trusted provenance" bgImage={'https://cdn.sanity.io/images/wf5e366r/production/06a02c2552c748ec8e77986956481bd97bdce9f3-5184x3456.jpg'} overlay py={{ base: 16, md: 24 }} />
      <div className="rpx rpy rbr" style={{ position: 'relative', maxWidth: '72rem', width: '100%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#FFF2D7', '--px': '48px', '--px-md': '80px', '--py': '48px', '--py-md': '80px', '--br': '0px', '--br-lg': '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Where premium begins</h2>
          <p>Our highest-scoring lots come from apiaries tucked between forest reserves and coffee estates. Bees forage on wild eucalyptus, shea, and indigenous blossoms you can’t bottle at scale. Harvest teams pull frames at dawn, extract at ambient temperature, and log every batch with moisture readings and sensory notes. That obsessive fieldwork is the first, non-negotiable step toward premium quality.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Quality checks that justify the price</h2>
          <ul style={{ paddingLeft: '24px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '10px' }}><b>Lab analytics:</b> adulteration screens, diastase, HMF, and residue tests catch anything that shouldn’t be in your jar.</li>
            <li style={{ marginBottom: '10px' }}><b>Sensory panels:</b> chefs and sommeliers taste blind, scoring aroma, texture, and finish before any jar earns the premium label.</li>
            <li style={{ marginBottom: '10px' }}><b>Batch traceability:</b> QR-coded labels link to harvest location, beekeeper, and suggested pairings.</li>
            <li style={{ marginBottom: '10px' }}><b>Packaging discipline:</b> UV-protective glass, tamper seals, and batch cards keep quality intact long after dispatch.</li>
          </ul>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>When premium honey makes the difference</h2>
          <p>Upgrade croissants with eucalyptus honey butter, glaze roast chicken with shea blossom richness, or finish a cheese board with pine honey’s resinous bite. Mixologists love its viscosity for balanced sours. In short: use premium honey when you want flavour to do the talking and shortcuts would taste like, well, shortcuts.</p>

          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>FAQs</h2>
          <FaqAccordion items={faqs} />
          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <p>For chef-grade batches and bulk formats, visit <Link href="/wholesale-and-partnerships">Wholesale & Partnerships</Link> or <Link href="/contact-and-connect">Contact & Connect</Link>.</p>
        </div>
      </div>
    </div>
  )
}

PremiumHoneyUganda.getLayout = (page) => (<PageLayout navbarProps={{ overlayOnHero: true }}>{page}</PageLayout>)
