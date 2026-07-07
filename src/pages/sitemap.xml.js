import { STATIC_ROUTES, BLOG_SLUGS } from '@/lib/siteMeta'
import { PRODUCT_SLUGS } from '@/lib/products'

export async function getServerSideProps({ res, req }) {
  const scheme = req.headers['x-forwarded-proto'] || 'https'
  const host = req.headers.host
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || `${scheme}://${host}`

  const pages = [
    ...STATIC_ROUTES,
    ...PRODUCT_SLUGS.map((s) => `/products/${s}`),
    ...BLOG_SLUGS.map((s) => `/blog/${s}`),
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

