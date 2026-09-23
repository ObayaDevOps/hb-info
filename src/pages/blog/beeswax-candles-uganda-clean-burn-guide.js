import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import { breadcrumbJsonLd } from '@/lib/siteMeta'
import FaqAccordion from '@/components/FaqAccordion'

export default function BeeswaxCandlesUgandaGuide() {
  const title = 'How to Use and Care for Beeswax Candles in Uganda'
  const description = 'Practical guidance on choosing, burning, storing, and caring for beeswax candles in Kampala homes.'
  const faqs = [
    { q: 'What should I ask about a beeswax candle?', a: 'Ask about its wax blend, fragrance, wick, burn instructions, and any testing that supports specific performance claims.' },
    { q: 'How do I stop tunnelling in thick candles?', a: 'Give the candle a full-width melt pool during the first burn (typically one hour per inch of diameter) and keep the wick trimmed to 5 mm.' },
    { q: 'Do beeswax candles work in Kampala’s humidity?', a: 'Yes. Store them upright, away from direct sun, and they hold shape even during rainy-season humidity spikes.' },
  ]
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const blogJsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
    datePublished: '2025-01-22', dateModified: '2026-09-23',
    author: { '@type': 'Organization', name: 'Humble Beeing' }, publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://cdn.sanity.io/images/wf5e366r/production/7bf19649189ce81bb0b684bfaffa856300fc1583-2268x4032.jpg', mainEntityOfPage: { '@type': 'WebPage' },
  }
  const crumbs = breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: title, path: '/blog/beeswax-candles-uganda-clean-burn-guide' }])
  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh', fontFamily: 'var(--font-hanken)' }}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd, crumbs]} />
      <HeroSection title={title} subtitle="Hands-on advice from the chandler’s bench to your dinner table" bgImage={'https://cdn.sanity.io/images/wf5e366r/production/e6e3c7e35d213f7c070ee6d25c2364ee1eb1b954-5184x3456.jpg'} overlay py={{ base: 16, md: 24 }} />
      <div className="rpx rpy rbr subpage-article" style={{ position: 'relative', maxWidth: '72rem', width: '100%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#FFF2D7', '--px': '48px', '--px-md': '80px', '--py': '48px', '--py-md': '80px', '--br': '0px', '--br-lg': '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Choosing a candle</h2>
          <p>Beeswax candles vary by wax blend, fragrance, wick, and container. Read the product label and burn instructions for the candle you choose. A broad claim that a candle removes pollutants or produces no soot needs specific evidence; these are not shown by our published honey test reports.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Crafting candles with traceable wax</h2>
          <p>Humble Beeing lists hand-poured beeswax candles in its <Link href="/products">product range</Link>. If you need a particular wax composition, fragrance, or batch detail, ask us before ordering. The reports on our lab page concern honey, not candle wax.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Setting the stage: styling and burn tips</h2>
          <p>For a centrepiece, group odd-numbered candles at differing heights and anchor them in heat-safe holders. On humid evenings, place candles at least 50 cm away from open windows to avoid dancing flames. First burn: commit to one hour per inch of diameter so the melt pool reaches the edges. Subsequent burns only need 30–45 minutes to stay tunnel-free. Snuff, don’t blow, if you want to preserve the sculptural finish.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Safety (and sanity) essentials</h2>
          <ul style={{ paddingLeft: '24px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '8px' }}>Trim the wick to 5 mm before every lighting; long wicks make drama, not romance.</li>
            <li style={{ marginBottom: '8px' }}>Keep burning candles at least 10 cm apart so they do not soften each other’s sides.</li>
            <li style={{ marginBottom: '8px' }}>Never leave a candle unattended: trust is for beekeepers and bank accounts, not open flames.</li>
          </ul>
          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>FAQs</h2>
          <FaqAccordion items={faqs} />
          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <p>Planning an intimate dinner or concept store display? Browse ready-to-ship sets via <Link href="/blog/ugandan-gift-ideas-honey-and-candle-gift-sets">our gifting guide</Link> or brief us directly through <Link href="/contact-and-connect">Contact & Connect</Link>.</p>
        </div>
      </div>
    </div>
  )
}

BeeswaxCandlesUgandaGuide.getLayout = (page) => (<PageLayout navbarProps={{ overlayOnHero: true }}>{page}</PageLayout>)
