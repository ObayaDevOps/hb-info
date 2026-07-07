import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import SEO from '@/components/SEO'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import { PRODUCTS, PRODUCT_CATEGORIES, formatUGX } from '@/lib/products'
import { breadcrumbJsonLd } from '@/lib/siteMeta'

const hanken = 'var(--font-hanken)'

const headingLg = {
  fontSize: '1.5rem',
  lineHeight: '2rem',
  fontWeight: 600,
  fontFamily: hanken,
}

const headingMd = {
  fontSize: '1.125rem',
  lineHeight: '1.5rem',
  fontWeight: 600,
  fontFamily: hanken,
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
  padding: '2px 10px',
  borderRadius: '9999px',
  backgroundColor: '#09090b',
  color: '#f5cb81',
  fontSize: '0.6875rem',
  lineHeight: '1rem',
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  fontFamily: 'var(--font-poppins)',
}

function ProductsIndexPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Humble Beeing product range',
      itemListElement: PRODUCTS.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.name,
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://humble-beeing.com'}/products/${p.slug}`,
      })),
    },
    breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Products', path: '/products' },
    ]),
  ]

  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh' }}>
      <SEO
        title="Our Products — Pure Raw & Infused Ugandan Honey, Candles & Gifts"
        description="Explore Humble Beeing's full range: raw single-origin honey from Yumbe, Nebbi, and Arua, infused raw honeys (vanilla bean, rosemary, chilli, garlic and more), beeswax candles, and gift sets. Prices, pairings, and where to buy in Kampala."
        jsonLd={jsonLd}
      />

      <HeroSection
        title="Nine honeys, one story."
        subtitle="Raw single-origin harvests, slow-aged infusions, and pure beeswax — every jar traceable to the farmer."
        py={{ base: 16, md: 24 }}
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
        {PRODUCT_CATEGORIES.map((category) => {
          const items = PRODUCTS.filter((p) => p.category === category.key)
          if (items.length === 0) return null
          return (
            <div key={category.key} id={category.key} style={{ paddingBottom: '64px', scrollMarginTop: '128px' }}>
              <div style={{ ...col, paddingBottom: '24px' }}>
                <h2 style={headingLg}>{category.label}</h2>
                <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', margin: 0, color: 'rgba(0,8,25,0.75)' }}>{category.blurb}</p>
              </div>
              <div className="rgtc" style={{ display: 'grid', '--gtc': '1fr', '--gtc-md': 'repeat(3, 1fr)', gap: '20px' }}>
                {items.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    style={{
                      ...col,
                      border: '1px solid #1A2234',
                      borderRadius: '1rem',
                      overflow: 'hidden',
                      color: '#000819',
                      gap: 0,
                      backgroundColor: 'rgba(255,255,255,0.35)',
                    }}
                  >
                    <div style={{ position: 'relative', width: '100%' }}>
                      <img
                        src={product.image}
                        alt={product.imageAlt}
                        style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', display: 'block' }}
                      />
                      {product.bestSeller && (
                        <span style={{ ...bestSellerBadge, position: 'absolute', top: '12px', left: '12px' }}>★ Best Seller</span>
                      )}
                    </div>
                    <div style={{ ...col, padding: '20px', gap: '8px', width: '100%' }}>
                      <h3 style={{ ...headingMd, margin: 0 }}>{product.shortName}</h3>
                      <p style={{ margin: 0, fontSize: '0.9375rem', lineHeight: '1.4rem', color: 'rgba(0,8,25,0.7)' }}>{product.tagline}</p>
                      <p style={{ margin: 0, fontWeight: 700, fontFamily: hanken }}>
                        {formatUGX(product.price)}{' '}
                        <span style={{ fontWeight: 400, color: 'rgba(0,8,25,0.6)' }}>· {product.size}</span>
                      </p>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.875rem', fontWeight: 600, color: '#8a5420' }}>
                        Pairings, benefits & FAQs <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

ProductsIndexPage.getLayout = (page) => <PageLayout>{page}</PageLayout>

export default ProductsIndexPage
