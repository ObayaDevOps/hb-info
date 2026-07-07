import Link from 'next/link'
import { CircleCheck, ShoppingBag, ArrowRight } from 'lucide-react'

import SEO from '@/components/SEO'
import PageLayout from '@/components/layouts/PageLayout'
import FaqAccordion from '@/components/FaqAccordion'
import { PRODUCTS, SHOP_URL, getProduct, formatUGX } from '@/lib/products'
import { breadcrumbJsonLd } from '@/lib/siteMeta'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://humble-beeing.com'
const hanken = 'var(--font-hanken)'

const headingLg = {
  fontSize: '1.5rem',
  lineHeight: '2rem',
  fontWeight: 600,
  fontFamily: hanken,
}

const headingMd = {
  fontSize: '1rem',
  lineHeight: '1.5rem',
  fontWeight: 600,
  fontFamily: hanken,
}

const textLg = {
  fontSize: '1.125rem',
  lineHeight: '1.75rem',
}

const col = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
}

const bestSellerBadge = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 12px',
  borderRadius: '9999px',
  backgroundColor: '#09090b',
  color: '#f5cb81',
  fontSize: '0.75rem',
  lineHeight: '1rem',
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  fontFamily: 'var(--font-poppins)',
}

const categoryBadge = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 12px',
  borderRadius: '9999px',
  border: '1px solid #1A2234',
  color: '#000819',
  fontSize: '0.75rem',
  lineHeight: '1rem',
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
}

const noteChip = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 12px',
  borderRadius: '9999px',
  backgroundColor: 'rgba(199, 123, 48, 0.12)',
  color: '#8a5420',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  fontWeight: 500,
}

function sectionTitle(title) {
  return <h2 style={{ ...headingLg, marginBottom: '24px' }}>{title}</h2>
}

function ProductPage({ product }) {
  if (!product) return null

  const productUrl = `${SITE_URL}/products/${product.slug}`
  const imageUrl = product.image.startsWith('http') ? product.image : `${SITE_URL}${product.image}`
  const related = (product.related || []).map(getProduct).filter(Boolean)
  const isHoney = product.category === 'raw' || product.category === 'infused'

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      '@id': `${productUrl}#product`,
      name: product.name,
      description: product.tagline,
      image: imageUrl,
      category: product.categoryLabel,
      brand: { '@type': 'Brand', name: 'Humble Beeing' },
      offers: {
        '@type': 'Offer',
        url: SHOP_URL,
        priceCurrency: 'UGX',
        price: product.price,
        availability: 'https://schema.org/InStock',
        itemCondition: 'https://schema.org/NewCondition',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: product.faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
    breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Products', path: '/products' },
      { name: product.name, path: `/products/${product.slug}` },
    ]),
  ]

  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh' }}>
      <SEO
        title={product.name}
        description={`${product.tagline} ${formatUGX(product.price)} per ${product.size}. ${product.categoryLabel} from Humble Beeing, Kampala — pure, raw, traceable Ugandan honey.`}
        openGraph={{ type: 'website', image: imageUrl }}
        jsonLd={jsonLd}
      />

      <div
        className="rpx rpy"
        style={{
          position: 'relative',
          maxWidth: '72rem',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          '--px': '24px',
          '--px-md': '80px',
          '--py': '32px',
          '--py-md': '48px',
        }}
      >
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: '24px', fontSize: '0.875rem' }}>
          <Link href="/products" style={{ color: '#8a5420', fontWeight: 600 }}>
            ← All products
          </Link>
        </nav>

        {/* Hero: image + buy panel */}
        <div
          className="rgtc"
          style={{ display: 'grid', '--gtc': '1fr', '--gtc-md': '1.1fr 1fr', gap: '32px', alignItems: 'center', paddingBottom: '64px' }}
        >
          <img
            src={product.image}
            alt={product.imageAlt}
            style={{ borderRadius: '1.5rem', objectFit: 'cover', width: '100%', aspectRatio: '5 / 4', border: '1px solid rgba(0,8,25,0.08)' }}
          />
          <div style={{ ...col, gap: '14px' }}>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span style={categoryBadge}>{product.categoryLabel}</span>
              {product.bestSeller && <span style={bestSellerBadge}>★ Best Seller</span>}
            </div>
            <h1
              className="rt"
              style={{ '--fs': '2rem', '--lh': '2.5rem', '--fs-md': '2.75rem', '--lh-md': '3.25rem', fontWeight: 600, fontFamily: hanken }}
            >
              {product.name}
            </h1>
            <p style={{ ...textLg, color: 'rgba(0,8,25,0.8)' }}>{product.tagline}</p>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {product.tastingNotes.map((note) => (
                <span key={note} style={noteChip}>{note}</span>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginTop: '8px' }}>
              <span style={{ fontSize: '1.75rem', fontWeight: 700, fontFamily: hanken }}>{formatUGX(product.price)}</span>
              <span style={{ fontSize: '1rem', color: 'rgba(0,8,25,0.6)' }}>per {product.size}</span>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '4px' }}>
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 28px',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontFamily: 'var(--font-poppins)',
                  backgroundColor: '#09090b',
                  color: '#f5cb81',
                  border: '1px solid #09090b',
                }}
              >
                <ShoppingBag size={18} /> Buy on our shop
              </a>
              <Link
                href="/lab-tests"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  border: '1px solid #1A2234',
                  color: '#000819',
                }}
              >
                View lab tests
              </Link>
            </div>
          </div>
        </div>

        {/* Story + origin facts */}
        <div className="rgtc" style={{ display: 'grid', '--gtc': '1fr', '--gtc-md': '1.4fr 1fr', gap: '32px', paddingBottom: '64px' }}>
          <div style={col}>
            {sectionTitle(isHoney ? 'About this honey' : `About this ${product.categoryLabel.toLowerCase().replace(/s$/, '')}`)}
            {product.story.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="rt" style={{ '--fs': '1.125rem', '--lh': '1.75rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem' }}>
                {paragraph}
              </p>
            ))}
          </div>
          <div style={{ ...col, border: '1px solid #1A2234', borderRadius: '1rem', padding: '24px', gap: '16px', alignSelf: 'start' }}>
            {[
              { label: 'Origin', value: product.origin.region },
              { label: isHoney ? 'Source' : 'Made from', value: product.origin.floralSource },
              { label: isHoney ? 'Harvest' : 'Batch', value: product.origin.harvest },
              { label: 'Traceability', value: 'Harvest-numbered — traceable to the farmer' },
            ].map(({ label, value }) => (
              <div key={label} style={col}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8a5420' }}>
                  {label}
                </span>
                <p style={{ margin: 0, fontWeight: 500 }}>{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div style={{ paddingBottom: '64px' }}>
          {sectionTitle('How it’s made')}
          <div className="rgtc" style={{ display: 'grid', '--gtc': '1fr', '--gtc-md': 'repeat(3, 1fr)', gap: '16px' }}>
            {product.process.map((step, i) => (
              <div key={step.title} style={{ ...col, backgroundColor: 'rgba(0, 8, 25, 0.06)', borderRadius: '1rem', padding: '24px' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 600, fontFamily: hanken, color: '#c77b30' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 style={headingMd}>{step.title}</h3>
                <p style={{ margin: 0 }}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Try it with */}
        <div style={{ paddingBottom: '64px' }}>
          {sectionTitle(isHoney ? 'Try it with…' : product.category === 'gifts' ? 'Perfect for…' : 'Make it a ritual')}
          <div className="rgtc" style={{ display: 'grid', '--gtc': '1fr', '--gtc-md': 'repeat(2, 1fr)', gap: '16px' }}>
            {product.tryItWith.map((idea) => (
              <div key={idea.title} style={{ ...col, border: '1px solid #1A2234', borderRadius: '1rem', padding: '24px' }}>
                <h3 style={headingMd}>{idea.title}</h3>
                <p style={{ ...textLg, margin: 0 }}>{idea.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Health benefits */}
        <div className="rp" style={{ backgroundColor: 'rgba(0, 8, 25, 0.06)', borderRadius: '1.5rem', '--p': '24px', '--p-md': '40px', marginBottom: '64px' }}>
          {sectionTitle(isHoney ? 'Why it’s good for you' : 'Why it’s better')}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {product.healthBenefits.map((benefit) => (
              <div key={benefit.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CircleCheck color="#c77b30" size={22} style={{ marginTop: '4px', flex: 'none' }} />
                <div>
                  <h3 style={{ ...headingMd, marginBottom: '4px' }}>{benefit.title}</h3>
                  <p style={{ ...textLg, margin: 0 }}>{benefit.text}</p>
                </div>
              </div>
            ))}
          </div>
          {isHoney && (
            <p style={{ fontSize: '0.875rem', color: 'rgba(0,8,25,0.6)', marginTop: '24px', marginBottom: 0 }}>
              Honey is a natural food, not a medicine — these notes reflect tradition and published research, not medical advice. Raw
              honey is not suitable for children under 12 months.
            </p>
          )}
        </div>

        {/* FAQ */}
        <div style={{ paddingBottom: '64px' }}>
          {sectionTitle('Frequently asked questions')}
          <FaqAccordion items={product.faqs} defaultOpenValues={[0]} />
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div style={{ paddingBottom: '32px' }}>
            {sectionTitle('More from the range')}
            <div className="rgtc" style={{ display: 'grid', '--gtc': '1fr', '--gtc-md': 'repeat(3, 1fr)', gap: '16px' }}>
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/products/${rel.slug}`}
                  style={{ ...col, border: '1px solid #1A2234', borderRadius: '1rem', overflow: 'hidden', color: '#000819', gap: 0 }}
                >
                  <img
                    src={rel.image}
                    alt={rel.imageAlt}
                    style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover' }}
                  />
                  <div style={{ ...col, padding: '16px', gap: '6px', width: '100%' }}>
                    {rel.bestSeller && <span style={{ ...bestSellerBadge, fontSize: '0.625rem', padding: '2px 8px' }}>★ Best Seller</span>}
                    <h3 style={{ ...headingMd, margin: 0 }}>{rel.shortName}</h3>
                    <p style={{ margin: 0, fontSize: '0.875rem', color: 'rgba(0,8,25,0.7)' }}>{formatUGX(rel.price)} · {rel.size}</p>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.875rem', fontWeight: 600, color: '#8a5420' }}>
                      View product <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: PRODUCTS.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const product = getProduct(params.slug)
  if (!product) return { notFound: true }
  return { props: { product } }
}

ProductPage.getLayout = (page) => <PageLayout>{page}</PageLayout>

export default ProductPage
