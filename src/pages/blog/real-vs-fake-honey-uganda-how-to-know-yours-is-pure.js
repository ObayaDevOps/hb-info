import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import { breadcrumbJsonLd } from '@/lib/siteMeta'
import FaqAccordion from '@/components/FaqAccordion'

export default function RealVsFakeHoneyUganda() {
  const title = 'Real vs Fake Honey in Uganda: 5 Ways to Know Your Honey Is Pure'
  const description = 'Adulterated honey is widespread in Uganda. Five practical checks — crystallization, labels, water tests, price logic, and lab certificates — to be sure your honey is pure and raw.'
  const faqs = [
    { q: 'Is crystallized honey fake?', a: 'No — the opposite. Crystallization is natural behaviour for raw honey, especially shea blossom varieties. Honey that stays glassy and liquid for years is more likely to have been heat-treated or diluted with syrup.' },
    { q: 'Does pure honey dissolve in water?', a: 'Pure honey sinks and settles at the bottom of a glass of water, dissolving slowly only when stirred. Syrup-diluted honey disperses quickly and clouds the water almost immediately.' },
    { q: 'What should a trustworthy honey label show in Uganda?', a: 'Look for a UNBS quality mark, a batch or lot number, the harvest region, and a named producer you can contact. Vague labels with no batch traceability are a red flag.' },
    { q: 'Can a lab test really prove honey is pure?', a: 'Yes. Accredited labs test moisture, HMF, diastase activity, sugar profile, and residues. Humble Beeing publishes these certificates for every batch — no other proof is as definitive.' },
  ]
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const blogJsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
    datePublished: '2026-07-07', dateModified: '2026-07-07',
    author: { '@type': 'Organization', name: 'Humble Beeing' }, publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://cdn.sanity.io/images/wf5e366r/production/289a82281b2afc47c22bda041c9be198359c905a-5184x3456.jpg', mainEntityOfPage: { '@type': 'WebPage' },
  }
  const crumbs = breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: title, path: '/blog/real-vs-fake-honey-uganda-how-to-know-yours-is-pure' }])
  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh', fontFamily: 'var(--font-hanken)' }}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd, crumbs]} />
      <HeroSection title={title} subtitle="Practical checks anyone can do — plus the one proof that settles it for good" bgImage={'https://cdn.sanity.io/images/wf5e366r/production/289a82281b2afc47c22bda041c9be198359c905a-5184x3456.jpg'} overlay py={{ base: 16, md: 24 }} />
      <div className="rpx rpy rbr" style={{ position: 'relative', maxWidth: '72rem', width: '100%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#FFF2D7', '--px': '48px', '--px-md': '80px', '--py': '48px', '--py-md': '80px', '--br': '0px', '--br-lg': '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
          <p>Ask any chef or market vendor in Kampala and they’ll tell you the same thing: a lot of the “pure honey” on sale is nothing of the sort. Sugar syrup, glucose blends, and over-heated bulk honey are routinely rebottled and sold as natural honey across Uganda. The good news is that fake honey betrays itself — if you know where to look. Here are the five checks we recommend, in rising order of certainty.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>1. Crystallization is a good sign, not a bad one</h2>
          <p>The most common misconception in Uganda is that crystallized honey has “gone bad” or been mixed with sugar. In reality, raw honey crystallizes naturally — shea blossom honey does it within weeks, settling into a smooth, creamy set. Syrup-diluted honey often stays suspiciously liquid and glassy for years. If your jar sets, warm it gently in a bowl of warm (not hot) water and it will return to liquid without losing its enzymes.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>2. Read the label like an investigator</h2>
          <p>A trustworthy jar names its producer, region of harvest, and batch number, and carries a UNBS quality mark. Vague labels — no batch, no origin, no contact — are exactly how rebottled syrup hides. Traceability is the backbone of honest honey: every Humble Beeing jar links back to the apiary and bloom cycle that produced it.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>3. The water test (and the flame myth)</h2>
          <p>Drop a spoonful into a glass of still water. Pure honey sinks to the bottom and sits there, dissolving only when stirred; diluted honey clouds the water quickly. Treat the popular matchstick and flame “tests” with skepticism — they’re folklore, and both real and fake honey can pass or fail them depending on moisture. The water test is crude but directionally honest.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>4. Apply price logic</h2>
          <p>Honest raw honey has a floor price. Beekeepers must be paid fairly, harvests are seasonal, and yields are finite — so a litre of “pure honey” selling for the price of a soda is answering its own question. Suspiciously cheap honey is the single most reliable red flag in the market.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>5. Demand the lab certificate — the only proof that settles it</h2>
          <p>Every reliable check above is circumstantial; laboratory analysis is conclusive. Accredited labs measure moisture, HMF (a heat-damage marker), diastase enzyme activity, sugar profile, and pesticide residues. We test every batch and publish the results — see the current certificates on our <Link href="/lab-tests">lab tests page</Link>, and read how the testing works in <Link href="/blog/how-we-test-honey-purity-in-uganda-lab-and-field">our purity testing guide</Link>. If a seller can’t show you a certificate, you’re taking their word for it.</p>
          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>FAQs</h2>
          <FaqAccordion items={faqs} />
          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <p>Ready to taste the difference lab-proven purity makes? Order pure raw Ugandan honey with Kampala delivery at <a href="https://shop.humble-beeing.com" target="_blank" rel="noopener noreferrer">shop.humble-beeing.com</a>, or ask us anything via <Link href="/contact-and-connect">Contact & Connect</Link>.</p>
        </div>
      </div>
    </div>
  )
}

RealVsFakeHoneyUganda.getLayout = (page) => (<PageLayout navbarProps={{ overlayOnHero: true }}>{page}</PageLayout>)
