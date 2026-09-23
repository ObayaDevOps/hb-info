import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import { breadcrumbJsonLd } from '@/lib/siteMeta'
import FaqAccordion from '@/components/FaqAccordion'

export default function KwanjulaKukyalaGiftGuide() {
  const title = 'Kwanjula & Kukyala Gift Guide: Why Honey Belongs in Every Introduction Ceremony Basket'
  const description = 'Planning kwanjula or kukyala gifts in Uganda? A practical guide to what to carry, how to present it beautifully, and why pure raw honey has always had a place in the basket.'
  const faqs = [
    { q: 'Is honey a traditional kwanjula gift?', a: 'Yes. Honey has long featured in Buganda introduction ceremonies as a symbol of sweetness, abundance, and a harmonious home. A well-presented jar of pure Ugandan honey sits naturally alongside gomesi fabric, matooke, and other customary gifts.' },
    { q: 'How many gifts should we prepare for a kukyala visit?', a: 'Kukyala is intentionally intimate, so a modest, thoughtful selection matters more than volume. Most families carry a small set of quality items (a luxury honey and candle hamper, fruit, sugar, and drinks) agreed in advance with the bride’s family.' },
    { q: 'Can Humble Beeing prepare ceremony gift baskets?', a: 'Yes. We build custom kwanjula and kukyala hampers with raw honey, infused honeys, and beeswax candles, wrapped in recycled paper and delivered anywhere in Kampala. Contact us with your date and budget.' },
    { q: 'What makes a gift basket feel personal?', a: 'Choose flavours the recipient will enjoy, ask about the honey’s origin, and present the jars and candles with care.' },
  ]
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const blogJsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
    datePublished: '2026-07-07', dateModified: '2026-09-23',
    author: { '@type': 'Organization', name: 'Humble Beeing' }, publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://cdn.sanity.io/images/wf5e366r/production/1d022d7ffe1a49451ded511330df3d8d69c5c21e-5184x3456.jpg', mainEntityOfPage: { '@type': 'WebPage' },
  }
  const crumbs = breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: title, path: '/blog/kwanjula-and-kukyala-gift-guide-honey-in-introduction-ceremony-baskets' }])
  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh', fontFamily: 'var(--font-hanken)' }}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd, crumbs]} />
      <HeroSection title={title} subtitle="Thoughtful, culture-first gifting for introduction ceremonies across Uganda" bgImage={'https://cdn.sanity.io/images/wf5e366r/production/1d022d7ffe1a49451ded511330df3d8d69c5c21e-5184x3456.jpg'} overlay py={{ base: 16, md: 24 }} />
      <div className="rpx rpy rbr subpage-article" style={{ position: 'relative', maxWidth: '72rem', width: '100%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#FFF2D7', '--px': '48px', '--px-md': '80px', '--py': '48px', '--py-md': '80px', '--br': '0px', '--br-lg': '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Kukyala and kwanjula: two visits, two kinds of gifts</h2>
          <p>Kukyala is the quiet first visit: the groom’s family meeting the bride’s family informally, often around a shared meal. Kwanjula is the formal introduction ceremony that follows, with its processions, spokespeople, and carefully negotiated gift lists. The gifting logic differs: kukyala calls for a few genuinely thoughtful items; kwanjula calls for generosity, order, and respect for what the bride’s family has asked for. In both cases, the gifts speak before you do.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Why honey has always belonged in the basket</h2>
          <p>A jar of Ugandan honey can be a thoughtful addition to an introduction ceremony basket. Choose a flavour the family will enjoy and ask about its harvest origin. The presentation should fit the family’s requested gift list and customs.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Building an introduction ceremony hamper that impresses the bako</h2>
          <ul style={{ paddingLeft: '24px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '8px' }}><strong>Anchor with provenance:</strong> one or two jars of single-origin raw honey: shea blossom or coffee blossom reads as considered, not generic.</li>
            <li style={{ marginBottom: '8px' }}><strong>Add warmth:</strong> hand-poured beeswax candles suggest light and calm in the new home, and they photograph beautifully during the handover.</li>
            <li style={{ marginBottom: '8px' }}><strong>Respect the list:</strong> honey hampers complement, never replace, the customary items the bride’s family requests: matooke, sugar, drinks, gomesi, and the rest.</li>
            <li style={{ marginBottom: '8px' }}><strong>Present with intention:</strong> recycled-paper wrapping and handwritten labels outperform cellophane and ribbon every time.</li>
          </ul>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Ordering ceremony gifts in Kampala without the stress</h2>
          <p>Contact us early with your date, budget, and desired quantities so we can confirm the available options. Our <Link href="/lab-tests">published lab reports</Link> cover one raw honey sample and do not accompany or prove the purity of every jar.</p>
          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>FAQs</h2>
          <FaqAccordion items={faqs} />
          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <p>Browse ready-made sets in <Link href="/blog/ugandan-gift-ideas-honey-and-candle-gift-sets">our Ugandan gift ideas guide</Link>, or brief us on your ceremony through <Link href="/contact-and-connect">Contact & Connect</Link> and we’ll build the hamper with you.</p>
        </div>
      </div>
    </div>
  )
}

KwanjulaKukyalaGiftGuide.getLayout = (page) => (<PageLayout navbarProps={{ overlayOnHero: true }}>{page}</PageLayout>)
