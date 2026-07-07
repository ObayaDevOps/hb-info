import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import { breadcrumbJsonLd } from '@/lib/siteMeta'
import FaqAccordion from '@/components/FaqAccordion'

export default function UgandanGiftIdeas() {
  const title = 'What Are the Best Ugandan Honey and Candle Gifts for People Who Have Everything?'
  const description = 'Gift sets curated by Humble Beeing’s team—packed with raw honey, beeswax candles, and local craftsmanship—for personal, corporate, and destination gifting.'
  const faqs = [
    { q: 'Do you offer corporate gifting?', a: 'Yes. We design branded sleeves, tasting cards, and delivery logistics for teams from 10 to 500 recipients.' },
    { q: 'Can I personalise a gift?', a: 'We add handwritten notes, engraved lids, and custom scent blends with two weeks’ lead time.' },
    { q: 'Do you deliver in Kampala?', a: 'Same-day delivery is available within central Kampala; next-day for Entebbe and Mukono. International shipping is fulfilled via partner couriers.' },
  ]
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const blogJsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
    datePublished: '2025-01-21', dateModified: '2025-01-21',
    author: { '@type': 'Organization', name: 'Humble Beeing' }, publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://cdn.sanity.io/images/wf5e366r/production/b7984b21e4eca856f7f7563aa2af6a89be4b5402-5184x3456.jpg', mainEntityOfPage: { '@type': 'WebPage' },
  }
  const crumbs = breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: title, path: '/blog/ugandan-gift-ideas-honey-and-candle-gift-sets' }])
  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh', fontFamily: 'var(--font-hanken)' }}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd, crumbs]} />
      <HeroSection title={title} subtitle="Thoughtful, local, and beautifully packaged" bgImage={'https://cdn.sanity.io/images/wf5e366r/production/3049c86f8b48da4c3f32c4673e5bd000217e3c4e-5184x3456.jpg'} overlay py={{ base: 16, md: 24 }} />
      <div className="rpx rpy rbr" style={{ position: 'relative', maxWidth: '72rem', width: '100%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#FFF2D7', '--px': '48px', '--px-md': '80px', '--py': '48px', '--py-md': '80px', '--br': '0px', '--br-lg': '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>How we curate each gift</h2>
          <p>Every set begins with small-batch honey from Hoima or Fort Portal, poured into UV-protective glass and paired with beeswax candles rolled and poured in Kampala. We add locally woven baskets, hand-printed cards, and sustainable cushioning so the unboxing feels as intentional as the contents. Your gift is assembled by the same team that supplies luxury hotels, which means alignment on quality and timing.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Signature combinations</h2>
          <ul style={{ paddingLeft: '24px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '10px' }}><b>Honey Flight Trio:</b> Pine, shea, and coffee blossom minis with tasting cards comparing flavour notes.</li>
            <li style={{ marginBottom: '10px' }}><b>Candle & Honey Duet:</b> 300 g raw honey plus a beeswax pillar scented with lemongrass or amber—ideal for housewarmings.</li>
            <li style={{ marginBottom: '10px' }}><b>Chef’s Hamper:</b> Premium eucalyptus honey, spiced nuts, and pairing suggestions for cheese boards.</li>
            <li style={{ marginBottom: '10px' }}><b>Corporate Suite:</b> Custom-branded sleeves, handwritten cards, and delivery routing managed by our logistics team.</li>
          </ul>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Occasions we handle often</h2>
          <p>From executive welcome hampers to wedding favours and destination event amenities, we manage fulfilment timelines, storage, and delivery so you can focus on relationships instead of ribbon lengths. International guests? We provide travel-safe packaging and documentation for carry-on allowances.</p>

          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>FAQs</h2>
          <FaqAccordion items={faqs} />
          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <p>Brief us on your gifting project through <Link href="/contact-and-connect">Contact & Connect</Link>—we’ll share mood boards, pricing, and timelines within 24 hours.</p>
        </div>
      </div>
    </div>
  )
}

UgandanGiftIdeas.getLayout = (page) => (<PageLayout navbarProps={{ overlayOnHero: true }}>{page}</PageLayout>)
