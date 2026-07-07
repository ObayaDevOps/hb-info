import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import { breadcrumbJsonLd } from '@/lib/siteMeta'
import FaqAccordion from '@/components/FaqAccordion'

export default function HowWeTestHoneyUganda() {
  const title = 'How Do We Prove Ugandan Honey Is Pure Before It Reaches Your Table?'
  const description = 'Step-by-step quality control from hive to accredited lab—including sampling, chain of custody, and analytics—that keeps Humble Beeing honey honest.'
  const faqs = [
    { q: 'Which purity tests do you run on every batch?', a: 'Baseline panels cover moisture, electrical conductivity, diastase activity, HMF, and LC-IRMS adulteration screens. We add pesticide or antibiotic checks when apiary conditions demand it.' },
    { q: 'Do you share laboratory certificates?', a: 'We provide summaries to home customers and full certificates to wholesale partners and regulators under NDA.' },
    { q: 'Who handles the laboratory work?', a: 'ISO/IEC 17025 accredited labs in Kampala and Nairobi run the heavy analyses; we handle field testing with calibrated refractometers and spectrophotometers.' },
  ]

  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const blogJsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
    datePublished: '2025-01-16', dateModified: '2025-01-16',
    author: { '@type': 'Organization', name: 'Humble Beeing' }, publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://cdn.sanity.io/images/wf5e366r/production/7bf19649189ce81bb0b684bfaffa856300fc1583-2268x4032.jpg', mainEntityOfPage: { '@type': 'WebPage' },
  }

  const crumbs = breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: title, path: '/blog/how-we-test-honey-purity-in-uganda-lab-and-field' }])

  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh', fontFamily: 'var(--font-hanken)' }}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd, crumbs]} />
      <HeroSection title={title} subtitle="Transparency, traceability, and rigorous quality checks" bgImage={'https://cdn.sanity.io/images/wf5e366r/production/745c75b930ef6de7de4178d0bff5f5fd956c9393-5184x3456.jpg'} overlay py={{ base: 16, md: 24 }} />
      <div className="rpx rpy rbr" style={{ position: 'relative', maxWidth: '72rem', width: '100%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#FFF2D7', '--px': '48px', '--px-md': '80px', '--py': '48px', '--py-md': '80px', '--br': '0px', '--br-lg': '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Step 1: disciplined harvesting</h2>
          <p>Every apiary visit is logged—GPS coordinates, dominant nectar flow, weather notes. Frames are removed at 80% capping, uncapped with food-grade knives, and spun once. We filter through stainless mesh at ambient temperature so enzymes and pollen remain intact. Storage drums are sanitised between batches because a trusted product starts with neurotic cleanliness.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Step 2: field testing and chain of custody</h2>
          <p>Before leaving Hoima or Kibaale, we record moisture readings using calibrated Atago refractometers. Anything above 18.5% is set aside for additional ripening. Samples are sealed in tamper-evident vials, labelled with QR-coded batch IDs, and transported to Kampala in insulated crates. The chain-of-custody paperwork isn’t glamorous, but it ensures nobody can sneak dilution into the journey.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Step 3: accredited laboratory analytics</h2>
          <ul style={{ paddingLeft: '24px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '10px' }}><b>LC-IRMS adulteration screening:</b> confirms sugars originate from nectar—not imported syrups.</li>
            <li style={{ marginBottom: '10px' }}><b>Diastase activity and HMF:</b> reveal whether heat ever mistreated the batch.</li>
            <li style={{ marginBottom: '10px' }}><b>Electrical conductivity and pollen microscopy:</b> double-check floral origin against field notes.</li>
            <li style={{ marginBottom: '10px' }}><b>Targeted residue tests:</b> pesticides, antibiotics, or heavy metals when apiary neighbours spray or medicate.</li>
          </ul>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Step 4: reporting back to you</h2>
          <p>We compile results into batch cards with harvest region, moisture, diastase, flavour descriptors, and best-use suggestions. Wholesale buyers receive the full certificates and auditors are welcome to review five years of archived data. Home subscribers get a succinct summary and direct access to our quality team—because transparency should be as accessible as your breakfast toast.</p>

          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>FAQs</h2>
          <FaqAccordion items={faqs} />
          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <p>For technical documentation and wholesale specs, visit <Link href="/wholesale-and-partnerships">Wholesale & Partnerships</Link> or <Link href="/contact-and-connect">Contact us</Link>.</p>
        </div>
      </div>
    </div>
  )
}

HowWeTestHoneyUganda.getLayout = (page) => (<PageLayout navbarProps={{ overlayOnHero: true }}>{page}</PageLayout>)
