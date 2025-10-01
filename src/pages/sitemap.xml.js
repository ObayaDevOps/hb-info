const staticRoutes = [
  '/',
  '/blog',
  '/impact-and-sustainability',
  '/our-story',
  '/contact-and-connect',
  '/contact',
  '/terms-and-conditions',
  '/wholesale-and-partnerships',
]

const blogSlugs = [
  'best-honey-in-kampala-buyers-guide-2025',
  'where-to-buy-honey-in-kampala-stockists-and-delivery',
  'raw-honey-uganda-benefits-and-buying-guide',
  'how-to-store-honey-in-kampala-heat-and-humidity-tips',
  'premium-honey-uganda-what-makes-it-worth-it',
  'how-we-test-honey-purity-in-uganda-lab-and-field',
  'organic-honey-in-uganda-what-it-really-means',
  'specialist-honey-for-chefs-in-kampala-pairings-and-uses',
  'wholesale-honey-kampala-suppliers-guide',
  'ugandan-gift-ideas-honey-and-candle-gift-sets',
  'beeswax-candles-uganda-clean-burn-guide',
  'scented-candles-uganda-fragrance-guide-and-room-pairings',
]

export async function getServerSideProps({ res, req }) {
  const scheme = req.headers['x-forwarded-proto'] || 'https'
  const host = req.headers.host
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || `${scheme}://${host}`

  const pages = [
    ...staticRoutes,
    ...blogSlugs.map((s) => `/blog/${s}`),
  ]

  const now = new Date().toISOString()
  const urls = pages
    .map((path) => `  <url>\n    <loc>${siteUrl}${path}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${path === '/' ? '1.0' : '0.7'}</priority>\n  </url>`) 
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`

  res.setHeader('Content-Type', 'application/xml')
  res.write(xml)
  res.end()

  return { props: {} }
}

export default function Sitemap() {
  return null
}

