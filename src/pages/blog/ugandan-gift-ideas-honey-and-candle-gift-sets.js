import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import { breadcrumbJsonLd } from '@/lib/siteMeta'
import FaqAccordion from '@/components/FaqAccordion'

export default function UgandanGiftIdeas() {
  const title = 'Ugandan Gifts: Honey, Candles & Corporate Hampers'
  const description = 'Explore locally made honey gifts and beeswax candles for clients, weddings and personal occasions, with corporate gifting enquiries in Kampala.'
  const faqs = [
    { q: 'Do you offer corporate gifting?', a: 'Yes. Ask about corporate gift hampers and branded honey gift sets. Share your quantity, budget, destination and event date so we can confirm available options.' },
    { q: 'Can I personalise a gift?', a: 'Ask which branding and presentation options are available for your order. Confirm minimum quantities, artwork requirements and lead time in your quote.' },
    { q: 'Do you deliver in Kampala?', a: 'Contact us with your location and required date to confirm delivery availability and cost. Overseas orders require a separate enquiry.' },
  ]
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const blogJsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
    datePublished: '2025-01-21', dateModified: '2026-10-13',
    author: { '@type': 'Organization', name: 'Humble Beeing' }, publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://cdn.sanity.io/images/wf5e366r/production/b7984b21e4eca856f7f7563aa2af6a89be4b5402-5184x3456.jpg', mainEntityOfPage: { '@type': 'WebPage' },
  }
  const crumbs = breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: title, path: '/blog/ugandan-gift-ideas-honey-and-candle-gift-sets' }])
  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh', fontFamily: 'var(--font-hanken)' }}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd, crumbs]} />
      <HeroSection title={title} subtitle="Thoughtful, local, and beautifully packaged" bgImage={'https://cdn.sanity.io/images/wf5e366r/production/3049c86f8b48da4c3f32c4673e5bd000217e3c4e-5184x3456.jpg'} overlay py={{ base: 16, md: 24 }} />
      <div className="rpx rpy rbr subpage-article" style={{ position: 'relative', maxWidth: '72rem', width: '100%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#FFF2D7', '--px': '48px', '--px-md': '80px', '--py': '48px', '--py-md': '80px', '--br': '0px', '--br-lg': '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>How we curate each gift</h2>
          <p>Our <Link href="/products/taster-gift-set">Honey Taster Gift Set</Link> brings together four 30g jars in handmade recycled-paper packaging crafted by local artisans. Pair honey with <Link href="/products#candles">beeswax candles made in Kampala</Link> for a distinctly Ugandan gift. Confirm the current selection and packaging options before ordering.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Signature combinations</h2>
          <ul style={{ paddingLeft: '24px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '10px' }}><b>Honey Taster Gift Set:</b> Four mini jars for discovering raw and infused honey flavours.</li>
            <li style={{ marginBottom: '10px' }}><b>Candle & Honey Duet:</b> Choose a jar from the current honey range and a scented beeswax candle for a housewarming gift.</li>
            <li style={{ marginBottom: '10px' }}><b>Chef’s Hamper:</b> Select shea blossom or infused honey with pairing ideas for cheese, marinades and desserts.</li>
            <li style={{ marginBottom: '10px' }}><b>Corporate Suite:</b> Ask about branded gift sets for client appreciation, employee gifts and events.</li>
          </ul>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Occasions we handle often</h2>
          <p>Honey and candle gifts suit client appreciation, host gifts, weddings and <Link href="/blog/kwanjula-and-kukyala-gift-guide-honey-in-introduction-ceremony-baskets">kwanjula and kukyala baskets</Link>. For corporate gifting in Kampala, confirm quantities, presentation and delivery dates before placing your order.</p>

          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>FAQs</h2>
          <FaqAccordion items={faqs} />
          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <p>Brief us on your gifting project through <Link href="/wholesale-and-partnerships">Wholesale & Partnerships</Link> to request current options, pricing and timelines.</p>
        </div>
      </div>
    </div>
  )
}

UgandanGiftIdeas.getLayout = (page) => (<PageLayout navbarProps={{ overlayOnHero: true }}>{page}</PageLayout>)
