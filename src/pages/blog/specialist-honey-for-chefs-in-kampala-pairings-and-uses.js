import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import FaqAccordion from '@/components/FaqAccordion'

export default function SpecialistHoneyChefsKampala() {
  const title = 'Which Specialist Ugandan Honey Elevates Restaurant Menus in Kampala?'
  const description = 'Tasting notes, pairings, and reliable supply formats from Humble Beeing’s chef collaborations to help you build signature dishes.'
  const faqs = [
    { q: 'Can I get consistent flavour across batches?', a: 'Yes. We maintain single-origin lots with detailed batch cards so you can replicate dishes season after season.' },
    { q: 'Do you offer bulk formats?', a: 'Our food-service line comes in 1.5 kg pouches and 12 kg drums, with refrigerated delivery for quality assurance.' },
    { q: 'Can we co-develop menu items?', a: 'We run R&D tastings with kitchens, mixologists, and pastry teams—reach out to book a session at our Bugolobi lab.' },
  ]
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const blogJsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
    datePublished: '2025-01-19', dateModified: '2025-01-19',
    author: { '@type': 'Organization', name: 'Humble Beeing' }, publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://cdn.sanity.io/images/wf5e366r/production/ddf580905739f82cb20bef3648f54eaaa7ef3056-198x180.png', mainEntityOfPage: { '@type': 'WebPage' },
  }

  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh', fontFamily: 'var(--font-hanken)' }}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd]} />
      <HeroSection title={title} subtitle="Field-sourced nectar with chef-approved consistency" bgImage={'https://cdn.sanity.io/images/wf5e366r/production/e19ff4b7f6b8a5b6342a833ef7ff61efa2efc905-5184x3456.jpg'} overlay py={{ base: 16, md: 24 }} />
      <div className="rpx rpy rbr" style={{ position: 'relative', maxWidth: '72rem', width: '100%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#FFF2D7', '--px': '48px', '--px-md': '80px', '--py': '48px', '--py-md': '80px', '--br': '0px', '--br-lg': '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Honey flights built with chefs</h2>
          <p>Our culinary team schedules quarterly cuppings with Kampala’s hotels and independent restaurants. We taste blind, document flavour arcs, and map each honey to menu applications. The result is a curated library—from resinous pine blossom for blue cheese pairings to buttery shea blossom for viennoiserie—that you can plug into your mise en place without guesswork.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Pairings that earn their keep</h2>
          <ul style={{ paddingLeft: '24px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '10px' }}><b>Pine blossom:</b> Resinous, savoury, brilliant for aged cheddar, blue cheese, or lacquered pork belly.</li>
            <li style={{ marginBottom: '10px' }}><b>Shea blossom:</b> Silky, floral, perfect for mille-feuille glazes, gelato swirls, and upscale brunch service.</li>
            <li style={{ marginBottom: '10px' }}><b>Coffee blossom:</b> Cocoa nib and citrus notes that elevate espresso martinis, cold brew, and tiramisu cream.</li>
            <li style={{ marginBottom: '10px' }}><b>Eucalyptus wildflower:</b> Herbaceous with a cooling finish—stir into vinaigrettes or brush on grilled fish.</li>
          </ul>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Formats built for service</h2>
          <p>We package single-origin lots in 1.5 kg pouches for pastry stations and 12 kg drums for commissary kitchens. Every delivery arrives with batch cards detailing moisture, flavour, and suggested pairings. Standing orders get priority allocation during peak season, so your menu doesn’t rely on wishful thinking.</p>

          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>FAQs</h2>
          <FaqAccordion items={faqs} />
          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <p>Book a tasting or request pricing through <Link href="/wholesale-and-partnerships">Wholesale & Partnerships</Link>. Prefer face time? Schedule a session at our Bugolobi lab via <Link href="/contact-and-connect">Contact & Connect</Link>.</p>
        </div>
      </div>
    </div>
  )
}

SpecialistHoneyChefsKampala.getLayout = (page) => (<PageLayout navbarProps={{ overlayOnHero: true }}>{page}</PageLayout>)
