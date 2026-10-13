import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import { breadcrumbJsonLd } from '@/lib/siteMeta'
import FaqAccordion from '@/components/FaqAccordion'

export default function SpecialistHoneyChefsKampala() {
  const title = 'Ugandan Honey for Chefs, Restaurants & Hotels'
  const description = 'Explore Ugandan honey pairings for restaurant menus and hotel breakfasts, with sourcing questions for wholesale buyers.'
  const faqs = [
    { q: 'Can I get consistent flavour across batches?', a: 'Flavour can vary with the region and season. Ask about the available harvest and taste a sample before planning a menu or repeat order.' },
    { q: 'Do you offer bulk formats?', a: 'Ask about current bulk honey formats, minimum quantities and lead times. Include your expected usage and delivery location in the enquiry.' },
    { q: 'Can we co-develop menu items?', a: 'Contact us to discuss honey varieties, infused flavours and tasting options for your kitchen or bar.' },
  ]
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const blogJsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
    datePublished: '2025-01-19', dateModified: '2026-10-13',
    author: { '@type': 'Organization', name: 'Humble Beeing' }, publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://cdn.sanity.io/images/wf5e366r/production/ddf580905739f82cb20bef3648f54eaaa7ef3056-198x180.png', mainEntityOfPage: { '@type': 'WebPage' },
  }

  const crumbs = breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: title, path: '/blog/specialist-honey-for-chefs-in-kampala-pairings-and-uses' }])

  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh', fontFamily: 'var(--font-hanken)' }}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd, crumbs]} />
      <HeroSection title={title} subtitle="Regional harvests and practical menu pairings" bgImage={'https://cdn.sanity.io/images/wf5e366r/production/e19ff4b7f6b8a5b6342a833ef7ff61efa2efc905-5184x3456.jpg'} overlay py={{ base: 16, md: 24 }} />
      <div className="rpx rpy rbr subpage-article" style={{ position: 'relative', maxWidth: '72rem', width: '100%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#FFF2D7', '--px': '48px', '--px-md': '80px', '--py': '48px', '--py-md': '80px', '--br': '0px', '--br-lg': '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Honey flights built with chefs</h2>
          <p>For restaurant menus and hotel breakfasts, choose honey by flavour, origin and intended use. Our <Link href="/products#raw">single-origin Ugandan honeys</Link> include Yumbe shea blossom, Nebbi multifloral and Arua calliandra. Infused varieties offer further options for pastry, cheese boards, dressings and drinks.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Pairings that earn their keep</h2>
          <ul style={{ paddingLeft: '24px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '10px' }}><b>Nebbi multifloral:</b> Deeper molasses notes for marinades, glazes and baking.</li>
            <li style={{ marginBottom: '10px' }}><b>Shea blossom:</b> Silky, floral, perfect for mille-feuille glazes, gelato swirls, and upscale brunch service.</li>
            <li style={{ marginBottom: '10px' }}><b>Arua calliandra:</b> Light floral notes for yoghurt, fruit, porridge and tea.</li>
            <li style={{ marginBottom: '10px' }}><b>Rosemary infused honey:</b> A savoury pairing for cheese boards, dressings and roast vegetables.</li>
          </ul>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Formats built for service</h2>
          <p>Tell us your expected usage, preferred format and ordering schedule. Confirm available bulk sizes, minimum orders and lead times in a quote. Ask which harvest records and test documentation apply to the proposed lot; our <Link href="/lab-tests">published UNBS reports</Link> cover one raw honey sample.</p>

          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>FAQs</h2>
          <FaqAccordion items={faqs} />
          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <p>Book a tasting or request pricing through <Link href="/wholesale-and-partnerships">Wholesale & Partnerships</Link>. Discuss tasting options via <Link href="/contact-and-connect">Contact & Connect</Link>.</p>
        </div>
      </div>
    </div>
  )
}

SpecialistHoneyChefsKampala.getLayout = (page) => (<PageLayout navbarProps={{ overlayOnHero: true }}>{page}</PageLayout>)
