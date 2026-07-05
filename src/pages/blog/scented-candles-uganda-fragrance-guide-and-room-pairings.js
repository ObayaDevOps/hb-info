import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import FaqAccordion from '@/components/FaqAccordion'

export default function ScentedCandlesUgandaGuide() {
  const title = 'Which Scented Candle Should You Light for Each Room in Kampala?'
  const description = 'Fragrance strategy, burn science, and interior styling tips from Humble Beeing’s candle studio to help you scent every space with confidence.'
  const faqs = [
    { q: 'Which scents suit living rooms best?', a: 'Layered woods, amber, and a whisper of citrus keep communal spaces warm without overwhelming conversation.' },
    { q: 'How long should one burn a scented candle?', a: 'Aim for 2–3 hours per session to set an even melt pool, and trim the wick to 5 mm before each light.' },
    { q: 'Are scented candles safe for homes with kids or pets?', a: 'Place candles out of reach, ventilate after burning, and stick to phthalate-free fragrances like ours to keep indoor air considerate.' },
  ]
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const blogJsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
    datePublished: '2025-01-23', dateModified: '2025-01-23',
    author: { '@type': 'Organization', name: 'Humble Beeing' }, publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://cdn.sanity.io/images/wf5e366r/production/745c75b930ef6de7de4178d0bff5f5fd956c9393-5184x3456.jpg', mainEntityOfPage: { '@type': 'WebPage' },
  }
  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh', fontFamily: 'var(--font-hanken)' }}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd]} />
      <HeroSection title={title} subtitle="Signature scents engineered for tropical homes" bgImage={'https://cdn.sanity.io/images/wf5e366r/production/7bf19649189ce81bb0b684bfaffa856300fc1583-2268x4032.jpg'} overlay py={{ base: 16, md: 24 }} />
      <div className="rpx rpy rbr" style={{ position: 'relative', maxWidth: '72rem', width: '100%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#FFF2D7', '--px': '48px', '--px-md': '80px', '--py': '48px', '--py-md': '80px', '--br': '0px', '--br-lg': '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>The fragrance wardrobe we rely on</h2>
          <p>Every candle begins with beeswax from our own hives blended with coconut and soy for a clean burn. Fragrance houses in Grasse and Nairobi customise notes to withstand Kampala’s humidity, so your living room doesn’t end up smelling like a melted bouquet. Each blend is IFRA-compliant and phthalate-free because safety is part of the ambience.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Room-by-room recommendations</h2>
          <ul style={{ paddingLeft: '24px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '10px' }}><b>Living room:</b> Amber, cedar, and a hint of bergamot keep things warm and chatty. We light ours before guests arrive so the throw settles before the doorbell rings.</li>
            <li style={{ marginBottom: '10px' }}><b>Bedroom:</b> Lavender, neroli, or chamomile layered over vanilla for a slow exhale. Extinguish 30 minutes before lights-out for better sleep hygiene.</li>
            <li style={{ marginBottom: '10px' }}><b>Kitchen:</b> Fresh citrus and herbal notes cut through dinner aromas without fighting the food. Basil-grapefruit is our go-to.</li>
            <li style={{ marginBottom: '10px' }}><b>Workspace:</b> Rosemary and eucalyptus sharpen focus. Because deadlines need allies, not distractions.</li>
            <li style={{ marginBottom: '10px' }}><b>Outdoor patios:</b> Vetiver and lemongrass double as mosquito deterrents while keeping the evening grounded.</li>
          </ul>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Burning like a pro</h2>
          <p>Trim the wick to 5 mm, burn 2–3 hours for an even melt pool, and use a snuffer to protect the wick for next time. Rotate candles weekly so your nose doesn’t get bored, and store spares upright, away from Kampala’s afternoon sun. We test every batch for cold and hot throw, so the scent you love in-store is the scent you’ll enjoy at home.</p>

          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>FAQs</h2>
          <FaqAccordion items={faqs} />
          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <p>Ready to curate your scent library? Explore gift sets on <Link href="/blog/ugandan-gift-ideas-honey-and-candle-gift-sets">our gifting guide</Link> or brief us via <Link href="/contact-and-connect">Contact & Connect</Link>.</p>
        </div>
      </div>
    </div>
  )
}

ScentedCandlesUgandaGuide.getLayout = (page) => (<PageLayout navbarProps={{ overlayOnHero: true }}>{page}</PageLayout>)
