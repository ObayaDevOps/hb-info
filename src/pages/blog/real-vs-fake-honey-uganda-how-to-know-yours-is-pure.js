import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import { breadcrumbJsonLd } from '@/lib/siteMeta'
import FaqAccordion from '@/components/FaqAccordion'

export default function RealVsFakeHoneyUganda() {
  const title = 'Real vs Fake Honey in Uganda: What Can You Actually Check?'
  const description = 'Learn which label details and laboratory results help assess honey, and why crystallization, water tests, and price cannot establish purity on their own.'
  const faqs = [
    { q: 'Is crystallized honey fake?', a: 'No. Crystallization occurs naturally, but it cannot by itself prove that honey is raw or unadulterated.' },
    { q: 'Does the water test prove purity?', a: 'No. How honey disperses in water depends on several factors and is not a reliable adulteration test.' },
    { q: 'What should I check on a honey label?', a: 'Look for a named producer, contact details, ingredients, jar size, and a batch or lot reference. Ask for evidence behind any purity or origin claim.' },
    { q: 'What can a lab report establish?', a: 'Only the parameters tested for the identified sample. The published Humble Beeing UNBS reports cover one raw honey sample and do not include an adulteration screen.' },
  ]
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const blogJsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
    datePublished: '2026-07-07', dateModified: '2026-09-23',
    author: { '@type': 'Organization', name: 'Humble Beeing' }, publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://cdn.sanity.io/images/wf5e366r/production/289a82281b2afc47c22bda041c9be198359c905a-5184x3456.jpg', mainEntityOfPage: { '@type': 'WebPage' },
  }
  const crumbs = breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: title, path: '/blog/real-vs-fake-honey-uganda-how-to-know-yours-is-pure' }])
  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh', fontFamily: 'var(--font-hanken)' }}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd, crumbs]} />
      <HeroSection title={title} subtitle="Practical checks and the limits of home tests" bgImage={'https://cdn.sanity.io/images/wf5e366r/production/289a82281b2afc47c22bda041c9be198359c905a-5184x3456.jpg'} overlay py={{ base: 16, md: 24 }} />
      <div className="rpx rpy rbr subpage-article" style={{ position: 'relative', maxWidth: '72rem', width: '100%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#FFF2D7', '--px': '48px', '--px-md': '80px', '--py': '48px', '--py-md': '80px', '--br': '0px', '--br-lg': '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
          <p><time dateTime="2026-09-23">Updated 23 September 2026</time></p>
          <p>No single visual or kitchen test can prove honey is pure. These five checks help you assess a seller’s claims and understand when a specific laboratory test is needed.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>1. Understand crystallization</h2>
          <p>Honey can crystallize naturally. Texture varies by floral source, temperature, and storage. Crystallization does not prove purity, and liquid honey is not automatically fake.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>2. Read the label like an investigator</h2>
          <p>Check the producer’s name and contact details, ingredients, jar size, and batch or lot reference. If a seller claims a specific origin or certification, ask what documentation supports that claim.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>3. Skip water and flame tests</h2>
          <p>Water and flame demonstrations are not reliable adulteration tests. Their results can change with moisture, temperature, and texture. Use documented testing rather than a kitchen trick to evaluate a purity claim.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>4. Apply price logic</h2>
          <p>Compare price per gram across jars of similar size and origin. A price that seems unusual is a reason to ask questions, but it cannot establish whether honey is adulterated.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>5. Read the report’s scope</h2>
          <p>A report can support only the tests performed on its identified sample. For example, our <Link href="/lab-tests">published UNBS reports</Link> show chemistry and microbiology results for one sample; they do not include a sugar-profile adulteration test. Read <Link href="/blog/how-we-test-honey-purity-in-uganda-lab-and-field">what the reports show</Link> before drawing a broader conclusion.</p>
          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>FAQs</h2>
          <FaqAccordion items={faqs} />
          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <p>Explore our <Link href="/products">products</Link>, or ask about an available harvest through <Link href="/contact-and-connect">Contact & Connect</Link>.</p>
        </div>
      </div>
    </div>
  )
}

RealVsFakeHoneyUganda.getLayout = (page) => (<PageLayout navbarProps={{ overlayOnHero: true }}>{page}</PageLayout>)
