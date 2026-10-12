import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import HeroSection from '@/components/sections/HeroSection';
import PageLayout from '@/components/layouts/PageLayout';
import StyledCard from '@/components/StyledCard';
import client from '../../sanity/lib/client';

const DEFAULT_WHATSAPP_NUMBER = '+256789062116'
const CONTACT_EMAIL = 'obaya@humble-beeing.com'

const hanken = 'var(--font-hanken)'

const sectionHeadingVars = {
  fontWeight: 600,
  fontFamily: hanken,
  '--fs': '1.5rem',
  '--lh': '2rem',
  '--ls': '-0.02em',
  '--fs-md': '1.75rem',
  '--lh-md': '2.25rem',
}

const cardHeading = {
  fontSize: '1.25rem',
  lineHeight: '1.75rem',
  fontWeight: 600,
  fontFamily: hanken,
}

const labelStyle = {
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  fontWeight: 600,
  fontFamily: hanken,
}

const fieldStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  width: '100%',
}

const inputStyle = {
  height: '44px',
  padding: '0 14px',
  fontSize: '0.9375rem',
  lineHeight: '1.375rem',
  borderRadius: '8px',
  border: '1px solid #1A2234',
  backgroundColor: 'white',
  color: '#000819',
  width: '100%',
}

const pillBtn = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  height: '44px',
  padding: '0 28px',
  fontSize: '0.9375rem',
  fontWeight: 600,
  fontFamily: hanken,
  borderRadius: '9999px',
  backgroundColor: '#000819',
  color: '#f5cb81',
  whiteSpace: 'nowrap',
}

const tileStyle = {
  backgroundColor: '#fff7e1',
  border: '1px solid #000819',
  borderRadius: '12px',
  padding: '18px 20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
}

const SEGMENTS = [
  {
    title: 'Chefs, restaurants & hotels',
    desc: 'For menus and breakfast tables that deserve a distinctly Ugandan story, with high-quality, locally sourced honey and infused pairings chosen for your dishes.',
  },
  {
    title: 'Retail & specialty stores',
    desc: 'For stores that curate for quality and want jars with a clear Ugandan origin story customers can discover and share.',
  },
  {
    title: 'Exporters',
    desc: 'For buyers who care where every batch comes from and want a lasting sourcing partnership for traceable Ugandan honey and beeswax.',
  },
  {
    title: 'Cosmetics companies',
    desc: 'For formulators selective about every ingredient, seeking traceable Ugandan beeswax for skincare, balms, and other personal care products.',
  },
  {
    title: 'Events & weddings',
    desc: 'For hosts who want guests to leave with a memorable taste of Uganda through thoughtful, custom-labelled honey favors.',
  },
  {
    title: 'Corporate gifting',
    desc: 'For teams seeking gifts that carry more meaning: Ugandan honey, custom branding, and a story worth sharing.',
  },
  {
    title: 'NGOs & development orgs',
    desc: 'For organizations connecting responsible sourcing with long-term market access for smallholder beekeepers.',
  },
]

const RANGE = [
  { title: 'Single-origin honey', desc: 'Raw, unblended honey traceable to one forest region.' },
  { title: 'Infused honeys', desc: 'Small-batch infusions from our Kampala kitchen.' },
  { title: 'Breakfast & brunch displays', desc: 'Curated honey displays for high-end breakfasts and brunches, pairing Ugandan flavours with the stories of the beekeepers and regions behind each harvest.' },
  { title: 'Bulk beeswax', desc: 'Beeswax for candles, balms, and other formulations; ask us about volumes and formats.' },
  { title: 'Luxury gift hampers', desc: 'Curated boxes, ready to brand for your organization.' },
  { title: 'Beeswax candles', desc: 'Hand-poured from the same hives as our honey.' },
]

const TESTIMONIALS = [
  {
    quote: [
      "We've stocked Humble Beeing at every brunch at Latitude 0° for three years now. What sold me was watching a guest from Geneva ask the waiter where she could buy a jar to take home.",
      "We're a Ugandan hotel hosting international guests, and we want the products on our tables to reflect that. Humble Beeing has become part of our local story, and it represents the country we're showing off.",
    ],
    name: 'Sven SC.',
    role: 'Latitude 0° Hotel · General Manager',
    logo: '/images/testimonials/latitude-0-hotel.png',
  },
  {
    quote: [
      'We collaborated with Humble Beeing for our Japanese Noodle Festival — a mazemen cold noodle bowl finished with their garlic-infused honey. It worked beautifully to round out the umami with a touch of sweetness.',
      'As a restaurant owner in Kampala, I want to build dishes around local Ugandan ingredients and tell a story. Humble Beeing is a local producer that holds themselves up to a high standard.',
    ],
    name: 'Hanif R.',
    role: 'Yujo Izakaya · Owner',
    logo: '/images/testimonials/yujo-izakaya.png',
  },
  {
    quote: [
      "I wanted to take a moment to express our delight with Humble Beeing's performance at the Embassy. The feedback has been generally positive, particularly for your Vanilla flavour, which is currently our most popular alongside Chilli and Shea Blossom.",
    ],
    name: 'Albert N.',
    role: 'Coffee at Last · Owner & GM · US Embassy Kampala',
    logo: '/images/testimonials/coffee-at-last.png',
  },
  {
    quote: ['You have a ready market in Washington DC if and when you decide to open shop there.'],
    name: 'US Diplomat',
    role: 'US Embassy Kampala',
    logo: '/images/testimonials/us-embassy.png',
  },
]

export default function WholesalePartnershipsPage({ whatsappNumber }) {
  const waNumber = (whatsappNumber || DEFAULT_WHATSAPP_NUMBER).replace(/\D/g, '')
  const whatsappUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent("Hello Humble Beeing! I'd like to talk about a wholesale order.")}`

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = data.get('name') || ''
    const email = data.get('email') || ''
    const company = data.get('company') || ''
    const inquiryType = data.get('inquiryType') || ''
    const volume = data.get('volume') || ''
    const timeline = data.get('timeline') || ''
    const message = data.get('message') || ''
    const subject = `Wholesale quote request${company ? ` — ${company}` : ''}`
    const body = [
      message,
      '',
      inquiryType && `Inquiry type: ${inquiryType}`,
      volume && `Estimated volume: ${volume}`,
      timeline && `Timeline: ${timeline}`,
      '',
      name && `— ${name}`,
      company && `${company}`,
      email && `${email}`,
    ]
      .filter(Boolean)
      .join('\n')
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh', fontFamily: hanken }}>
      <SEO
        title="Wholesale Honey & Beeswax Supplier in Uganda | Partnerships"
        description="Traceable Ugandan honey and beeswax for chefs, retailers, exporters, and cosmetics companies, plus corporate gift hampers and branded gift sets."
      />
      {/* Hero */}
      <HeroSection
        title="Wholesale & Partnerships"
        subtitle="Honey and beeswax for chefs, retailers, exporters, cosmetics makers, events, and corporate gifting."
        bgImage={'https://cdn.sanity.io/images/wf5e366r/production/fe1376a20f4c8693c806a9308a0c2d5bdd66271a-5184x3456.jpg'}
        overlay
        py={{ base: 16, md: 24 }}
      />

      <div
        className="rpx rpy rbr rmt"
        style={{
          position: 'relative',
          maxWidth: '72rem',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: '#FFF2D7',
          '--px': '20px',
          '--px-md': '80px',
          '--py': '48px',
          '--py-md': '80px',
          '--br': '0px',
          '--br-lg': '2rem',
          '--mt': '0px',
          '--mt-md': '24px',
        }}
      >
        <div className="rg" style={{ display: 'flex', flexDirection: 'column', '--g': '40px', '--g-md': '56px' }}>
          {/* Intro + feature image */}
          <div className="rgtc" style={{ display: 'grid', gap: '24px', alignItems: 'center', '--gtc': '1fr', '--gtc-md': 'minmax(0, 3fr) minmax(0, 2fr)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p className="rt" style={{ color: '#000819', '--fs': '1.125rem', '--lh': '1.75rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem' }}>
                As a bulk honey and beeswax supplier in Kampala, we work with chefs, hotels,
                retailers, exporters, cosmetics companies, and NGOs. From traceable raw honey
                and beeswax to corporate gift hampers and branded gift sets, we tailor supply
                to your needs.
              </p>
              <a href="#contact-us" className="btn-dark" style={{ ...pillBtn, alignSelf: 'flex-start' }}>Request a quote</a>
            </div>
            <img
              src="https://cdn.sanity.io/images/wf5e366r/production/02ba87ce8d01924bdc2efb2f0783ed412df06753-903x1200.png"
              alt="Wholesale honey tasting presentation for Kampala chefs and retailers by Humble Beeing"
              className="rh"
              style={{ borderRadius: '1.5rem', objectFit: 'cover', width: '100%', '--h': '260px', '--h-md': '360px' }}
            />
          </div>

          {/* Who we work with */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2 className="rt" style={sectionHeadingVars}>Who we work with</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '1rem', lineHeight: '1.5rem' }}>
              <p style={{ fontWeight: 600 }}>You'll probably enjoy working with us if...</p>
              <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
                <li>You're deeply invested in ingredient quality and particular about where ingredients come from.</li>
                <li>You value long-term partnerships built on shared standards.</li>
              </ul>
            </div>
            <div className="rgtc" style={{ display: 'grid', gap: '16px', '--gtc': '1fr', '--gtc-sm': 'repeat(2, minmax(0, 1fr))', '--gtc-md': 'repeat(3, minmax(0, 1fr))' }}>
              {SEGMENTS.map((seg) => (
                <div key={seg.title} style={tileStyle}>
                  <h3 style={{ fontSize: '1rem', lineHeight: '1.5rem', fontWeight: 600, fontFamily: hanken }}>{seg.title}</h3>
                  <p style={{ fontSize: '0.875rem', lineHeight: '1.375rem' }}>{seg.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What we supply */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2 className="rt" style={sectionHeadingVars}>What we supply</h2>
            <div className="rgtc" style={{ display: 'grid', gap: '16px', '--gtc': '1fr', '--gtc-sm': 'repeat(2, minmax(0, 1fr))', '--gtc-md': 'repeat(3, minmax(0, 1fr))' }}>
              {RANGE.map((item) => (
                <div key={item.title} style={{ display: 'flex', flexDirection: 'column', gap: '4px', borderTop: '2px solid #000819', paddingTop: '10px' }}>
                  <h3 style={{ fontSize: '1rem', lineHeight: '1.5rem', fontWeight: 600, fontFamily: hanken }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', lineHeight: '1.375rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.9375rem', lineHeight: '1.5rem' }}>
              <Link href="/products" className="hover-underline" style={{ fontWeight: 600, textDecoration: 'underline' }}>
                Browse the full product range
              </Link>
            </p>
          </div>

          {/* Partner testimonials */}
          <section aria-labelledby="partner-testimonials" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2 id="partner-testimonials" className="rt" style={sectionHeadingVars}>What our partners say</h2>
            <div className="rgtc" style={{ display: 'grid', gap: '16px', '--gtc': '1fr', '--gtc-md': 'repeat(2, minmax(0, 1fr))' }}>
              {TESTIMONIALS.map((testimonial) => (
                <StyledCard key={testimonial.name} style={{ margin: 0, borderRadius: '12px' }}>
                  <figure style={{ display: 'flex', flexDirection: 'column', flex: 1, margin: 0, padding: '24px', gap: '20px' }}>
                    <span aria-hidden="true" style={{ height: '24px', color: '#bd741c', fontSize: '3rem', lineHeight: '1' }}>“</span>
                    <blockquote style={{ flex: 1, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '1rem', lineHeight: '1.6' }}>
                      {testimonial.quote.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </blockquote>
                    <figcaption style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid #c5b99d', paddingTop: '16px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, width: '56px', height: '56px', padding: '6px', borderRadius: '50%', border: '1px solid #c5b99d', backgroundColor: '#fff' }}>
                        <img src={testimonial.logo} alt="" width="44" height="44" loading="lazy" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }} />
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
                        <strong style={{ fontSize: '0.9375rem', lineHeight: '1.25rem' }}>{testimonial.name}</strong>
                        <span style={{ fontSize: '0.8125rem', lineHeight: '1.25rem' }}>{testimonial.role}</span>
                      </span>
                    </figcaption>
                  </figure>
                </StyledCard>
              ))}
            </div>
          </section>

          {/* Inquiry Form */}
          <div style={{ position: 'relative' }}>
            <span id="contact-us" aria-hidden="true" style={{ position: 'absolute', top: '-152px', left: 0, width: '1px', height: '1px' }} />
            <StyledCard style={{ width: '100%', marginLeft: 0, marginRight: 0 }}>
            <form onSubmit={handleSubmit} className="rp" style={{ '--p': '20px', '--p-md': '28px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px', width: '100%' }}>
                <h2 style={cardHeading}>Request a quote</h2>
                <div className="rgtc" style={{ display: 'grid', gap: '16px', width: '100%', '--gtc': '1fr', '--gtc-md': 'repeat(2, minmax(0, 1fr))' }}>
                  <div style={fieldStyle}>
                    <label htmlFor="wp-name" style={labelStyle}>Full name</label>
                    <input id="wp-name" name="name" autoComplete="name" required style={inputStyle} />
                  </div>
                  <div style={fieldStyle}>
                    <label htmlFor="wp-email" style={labelStyle}>Email</label>
                    <input id="wp-email" name="email" type="email" autoComplete="email" required style={inputStyle} />
                  </div>
                  <div style={fieldStyle}>
                    <label htmlFor="wp-company" style={labelStyle}>Company / organization</label>
                    <input id="wp-company" name="company" autoComplete="organization" style={inputStyle} />
                  </div>
                  <div style={fieldStyle}>
                    <label htmlFor="wp-type" style={labelStyle}>Inquiry type</label>
                    <select id="wp-type" name="inquiryType" defaultValue="" required style={{ ...inputStyle, padding: '0 10px' }}>
                      <option value="" disabled>Select one…</option>
                      <option value="Chef / Restaurant">Chef / Restaurant</option>
                      <option value="Retail / Specialty">Retail / Specialty</option>
                      <option value="Exporter">Exporter</option>
                      <option value="Cosmetics Company">Cosmetics Company</option>
                      <option value="Events / Weddings">Events / Weddings</option>
                      <option value="Corporate Gifting">Corporate Gifting</option>
                      <option value="NGO / Donor / Grant">NGO / Donor / Grant</option>
                    </select>
                  </div>
                  <div style={fieldStyle}>
                    <label htmlFor="wp-volume" style={labelStyle}>Estimated volume</label>
                    <input id="wp-volume" name="volume" placeholder="e.g. 200 units" style={inputStyle} />
                  </div>
                  <div style={fieldStyle}>
                    <label htmlFor="wp-timeline" style={labelStyle}>Timeline</label>
                    <input id="wp-timeline" name="timeline" placeholder="e.g. December, Q4" style={inputStyle} />
                  </div>
                </div>
                <div style={fieldStyle}>
                  <label htmlFor="wp-message" style={labelStyle}>Tell us about your needs</label>
                  <textarea
                    id="wp-message"
                    name="message"
                    placeholder="Products, quantities, branding, delivery…"
                    rows={4}
                    required
                    style={{ ...inputStyle, height: 'auto', padding: '10px 14px', resize: 'vertical' }}
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                  <button type="submit" className="btn-dark" style={pillBtn}>Request quote</button>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-bg-navy"
                    style={{ ...pillBtn, backgroundColor: 'transparent', border: '1px solid #000819', color: '#000819' }}
                  >
                    <MessageCircle size={18} /> Chat on WhatsApp
                  </a>
                </div>
                <p style={{ fontSize: '0.875rem', lineHeight: '1.25rem', color: '#000819' }}>
                  We reply within 1–2 business days. Prefer email?{' '}
                  <a className="hover-underline" href={`mailto:${CONTACT_EMAIL}`} style={{ fontWeight: 600, textDecoration: 'underline' }}>
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </div>
            </form>
            </StyledCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  let whatsappNumber = null
  try {
    whatsappNumber = await client.fetch(`*[_type == "siteSettings"][0].whatsappNumber`)
  } catch (err) {
    whatsappNumber = null
  }

  return {
    props: { whatsappNumber: whatsappNumber || null },
    revalidate: 60,
  }
}

WholesalePartnershipsPage.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
)
