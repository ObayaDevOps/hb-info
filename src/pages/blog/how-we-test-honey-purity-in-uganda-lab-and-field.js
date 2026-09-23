import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import { breadcrumbJsonLd } from '@/lib/siteMeta'
import FaqAccordion from '@/components/FaqAccordion'

export default function HowWeTestHoneyUganda() {
  const title = 'What Our Published Honey Lab Reports Show'
  const description = 'Read the scope and results of the published UNBS chemistry and microbiology reports for one Humble Beeing raw honey sample.'
  const faqs = [
    { q: 'Which tests are shown in the published reports?', a: 'The UNBS chemistry report lists moisture, acidity, ash, and HMF. The microbiology report lists coliforms and yeast and moulds. Both cover sample L/5087/2025MC.' },
    { q: 'Do these reports cover every batch or test adulteration?', a: 'No. The reports apply to one sample and do not contain adulteration, pesticide, antibiotic, or diastase results.' },
    { q: 'Can I read the original reports?', a: 'Yes. Both original UNBS PDFs are linked on the Lab Tests page.' },
  ]

  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const blogJsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
    datePublished: '2025-01-16', dateModified: '2026-09-23',
    author: { '@type': 'Organization', name: 'Humble Beeing' }, publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://cdn.sanity.io/images/wf5e366r/production/7bf19649189ce81bb0b684bfaffa856300fc1583-2268x4032.jpg', mainEntityOfPage: { '@type': 'WebPage' },
  }

  const crumbs = breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: title, path: '/blog/how-we-test-honey-purity-in-uganda-lab-and-field' }])

  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh', fontFamily: 'var(--font-hanken)' }}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd, crumbs]} />
      <HeroSection title={title} subtitle="Read the test results and their scope" bgImage={'https://cdn.sanity.io/images/wf5e366r/production/745c75b930ef6de7de4178d0bff5f5fd956c9393-5184x3456.jpg'} overlay py={{ base: 16, md: 24 }} />
      <div className="rpx rpy rbr subpage-article" style={{ position: 'relative', maxWidth: '72rem', width: '100%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#FFF2D7', '--px': '48px', '--px-md': '80px', '--py': '48px', '--py-md': '80px', '--br': '0px', '--br-lg': '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
          <p><time dateTime="2026-09-23">Updated 23 September 2026</time></p>
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>What was sampled</h2>
          <p>The two published Uganda National Bureau of Standards reports concern the same raw honey sample, L/5087/2025MC. The client named on both is HB Fine Honey Suppliers Limited. The reports describe one 350 g jar and do not identify every product or harvest batch sold by Humble Beeing.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>What the chemistry report measured</h2>
          <p>UNBS report FA/2025/10664 records moisture at 17%, acidity at 22 milliequivalents per kilogram, ash at 0.3%, and HMF at 8 mg/kg. The report marks these tested parameters as passing the listed Uganda Standard limits. It states that the results apply only to the sample received.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>What the microbiology report measured</h2>
          <p>UNBS report ML/2025/06446 records coliforms and yeast and moulds at less than 10 cfu/g each. It marks the tested parameters as passing. The chemistry and microbiology reports refer to each other for the complete results for this sample.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>What remains untested in these PDFs</h2>
          <p>Neither report includes a sugar-profile adulteration screen, diastase result, pesticide or antibiotic residue panel, or evidence about other batches. See the <Link href="/lab-tests">original reports</Link> and ask us for documentation that applies to a particular order.</p>

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
