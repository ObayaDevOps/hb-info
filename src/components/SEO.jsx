import Head from 'next/head'
import { useRouter } from 'next/router'
import { canonicalUrl, SITE_NAME, SITE_URL } from '@/lib/siteMeta'

const DEFAULT_DESCRIPTION = 'Raw Ugandan honey, beeswax candles and gifts from Humble Beeing in Kampala. Explore sourcing details, products and wholesale honey and beeswax enquiries.'
const DEFAULT_OG_IMAGE = 'https://cdn.sanity.io/images/wf5e366r/production/06a02c2552c748ec8e77986956481bd97bdce9f3-5184x3456.jpg'

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  noindex = false,
  openGraph = {},
  twitter = {},
  jsonLd,
}) {
  const router = useRouter()
  const computedCanonical = canonicalUrl(canonical || router?.asPath || router?.pathname || '/')
  const pageTitle = title ? `${title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`}` : SITE_NAME
  const schemas = (jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []).map((schema) => {
    if (schema['@type'] !== 'BlogPosting') return schema
    return {
      ...schema,
      '@id': `${computedCanonical}#article`,
      url: computedCanonical,
      mainEntityOfPage: { '@type': 'WebPage', '@id': computedCanonical },
      author: { ...schema.author, '@id': `${SITE_URL}/#store`, url: `${SITE_URL}/our-story` },
      publisher: { ...schema.publisher, '@id': `${SITE_URL}/#store` },
    }
  })

  const og = {
    type: schemas.some((schema) => schema['@type'] === 'BlogPosting') ? 'article' : 'website',
    site_name: SITE_NAME,
    title: pageTitle,
    description,
    image: DEFAULT_OG_IMAGE,
    url: computedCanonical,
    ...openGraph,
  }
  const tw = {
    card: 'summary_large_image',
    title: pageTitle,
    description,
    image: og.image,
    ...twitter,
  }

  return (
    <Head>
      <title>{pageTitle}</title>
      {description && <meta name="description" content={description} />}
      {computedCanonical && <link rel="canonical" href={computedCanonical} />}

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow,noarchive" />}

      {/* Open Graph */}
      <meta property="og:type" content={og.type} />
      {og.site_name && <meta property="og:site_name" content={og.site_name} />}
      {og.title && <meta property="og:title" content={og.title} />}
      {og.description && <meta property="og:description" content={og.description} />}        
      {og.url && <meta property="og:url" content={og.url} />}
      {og.image && <meta property="og:image" content={og.image} />}

      {/* Twitter */}
      <meta name="twitter:card" content={tw.card} />
      {tw.title && <meta name="twitter:title" content={tw.title} />}
      {tw.description && <meta name="twitter:description" content={tw.description} />}
      {tw.image && <meta name="twitter:image" content={tw.image} />}

      {/* JSON-LD */}
      {jsonLd && (
        <script key="page-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas).replace(/</g, '\\u003c') }} />
      )}
    </Head>
  )
}
