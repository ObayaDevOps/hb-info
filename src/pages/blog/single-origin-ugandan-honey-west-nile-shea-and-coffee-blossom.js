import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import { breadcrumbJsonLd } from '@/lib/siteMeta'
import FaqAccordion from '@/components/FaqAccordion'

export default function SingleOriginUgandanHoney() {
  const title = 'Single-Origin Ugandan Honey: West Nile, Shea Blossom & Coffee Blossom Explained'
  const description = 'What single-origin honey means in Uganda — how West Nile shea blossom, coffee blossom, and wildflower harvests differ in taste, colour, and character, and how to choose between them.'
  const faqs = [
    { q: 'What does single-origin honey actually mean?', a: 'It means the honey in the jar comes from one region and one bloom season, never blended with harvests from elsewhere. Like single-origin coffee, it preserves the distinct flavour of a specific landscape — its terroir.' },
    { q: 'What does shea blossom honey taste like?', a: 'Shea blossom honey from Uganda’s shea belt is creamy and delicate, with soft caramel and butter notes and a gentle finish. It crystallizes naturally into a smooth, spoonable texture — a sign of raw, unheated honey.' },
    { q: 'Why is West Nile famous for honey?', a: 'The West Nile sub-region combines dense shea parkland, low pesticide use, and generations of beekeeping tradition, making it Uganda’s most productive and most distinctive honey landscape.' },
    { q: 'Is darker honey better than light honey?', a: 'Neither is better — they are different. Darker honeys (like wildflower) tend to be bolder and more mineral; lighter honeys (like shea blossom) are subtler. Purity and raw handling matter far more than colour.' },
  ]
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const blogJsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
    datePublished: '2026-07-07', dateModified: '2026-07-07',
    author: { '@type': 'Organization', name: 'Humble Beeing' }, publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://cdn.sanity.io/images/wf5e366r/production/06a02c2552c748ec8e77986956481bd97bdce9f3-5184x3456.jpg', mainEntityOfPage: { '@type': 'WebPage' },
  }
  const crumbs = breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: title, path: '/blog/single-origin-ugandan-honey-west-nile-shea-and-coffee-blossom' }])
  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh', fontFamily: 'var(--font-hanken)' }}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd, crumbs]} />
      <HeroSection title={title} subtitle="A tasting tour of Uganda’s honey landscapes, from the shea belt to the coffee gardens" bgImage={'https://cdn.sanity.io/images/wf5e366r/production/06a02c2552c748ec8e77986956481bd97bdce9f3-5184x3456.jpg'} overlay py={{ base: 16, md: 24 }} />
      <div className="rpx rpy rbr" style={{ position: 'relative', maxWidth: '72rem', width: '100%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#FFF2D7', '--px': '48px', '--px-md': '80px', '--py': '48px', '--py-md': '80px', '--br': '0px', '--br-lg': '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Terroir isn’t just for wine and coffee</h2>
          <p>Most honey sold in Uganda is blended — harvests from many districts stirred into one anonymous jar. Single-origin honey takes the opposite path: one region, one bloom season, one flavour signature. Bees forage within a few kilometres of the hive, so the jar becomes a faithful record of whatever was flowering there — shea parkland, coffee gardens, or wild savannah scrub. Once you taste honeys side by side, the differences are as vivid as Arabica against Robusta.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>West Nile and the shea belt: Uganda’s grand cru</h2>
          <p>The shea belt stretching across northern Uganda and West Nile is the country’s most celebrated honey landscape. When the shea trees blossom, hives fill with a creamy, pale honey carrying soft caramel and butter notes — shea blossom honey. It crystallizes naturally into a fine, spoonable texture, which is a mark of raw, unheated handling rather than a flaw. The same trees that give Uganda its shea butter give this honey its character, and low pesticide use across the parkland keeps it remarkably clean.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>Coffee blossom, pine, and the flavours in between</h2>
          <p>When coffee gardens flower, bees produce a honey with gentle jasmine-like aromatics and a bright, clean sweetness — coffee blossom honey is fleeting because the bloom lasts only days. Pine-influenced harvests bring resinous depth, while open savannah gives bold, dark wildflower honey with mineral length. Our infused range — orange peel, lemon, rosemary, vanilla bean — starts from these single-origin bases, which is why the infusions taste layered rather than flat. Explore the current harvests at <a href="https://shop.humble-beeing.com" target="_blank" rel="noopener noreferrer">shop.humble-beeing.com</a>.</p>

          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>How to choose (and serve) a single-origin jar</h2>
          <ul style={{ paddingLeft: '24px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '8px' }}><strong>For tea and coffee:</strong> shea blossom — its subtlety sweetens without stealing the cup.</li>
            <li style={{ marginBottom: '8px' }}><strong>For cheese boards and baking:</strong> dark wildflower — bold enough to stand up to blue cheese and brown butter.</li>
            <li style={{ marginBottom: '8px' }}><strong>For gifts:</strong> a flight of two or three origins tells a better story than one large jar — see our <Link href="/blog/ugandan-gift-ideas-honey-and-candle-gift-sets">gift set guide</Link>.</li>
            <li style={{ marginBottom: '8px' }}><strong>For provenance sticklers:</strong> every Humble Beeing jar is batch-coded to its apiary and bloom cycle, with <Link href="/lab-tests">lab certificates</Link> available on request.</li>
          </ul>
          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <h2 style={{ fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-hanken)' }}>FAQs</h2>
          <FaqAccordion items={faqs} />
          <hr style={{ borderTop: '1px solid #000819', width: '100%' }} />
          <p>Curious how these harvests reach the jar? Walk through <Link href="/our-process">our process</Link>, or arrange a guided tasting for your team via <Link href="/contact-and-connect">Contact & Connect</Link>.</p>
        </div>
      </div>
    </div>
  )
}

SingleOriginUgandanHoney.getLayout = (page) => (<PageLayout navbarProps={{ overlayOnHero: true }}>{page}</PageLayout>)
