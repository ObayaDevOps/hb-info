import { SITE_URL, STATIC_ROUTES, BLOG_SLUGS } from '@/lib/siteMeta'
import { PRODUCT_SLUGS } from '@/lib/products'
import { getRecipeSlugs } from '@/lib/recipes'

export async function getServerSideProps({ res }) {
  let recipeSlugs = []
  try { recipeSlugs = await getRecipeSlugs() || [] } catch (error) { console.error('Could not load recipe slugs', error) }

  const pages = [
    ...STATIC_ROUTES,
    ...PRODUCT_SLUGS.map((s) => `/products/${s}`),
    ...BLOG_SLUGS.map((s) => `/blog/${s}`),
    ...recipeSlugs.map((s) => `/recipes/${s}`),
  ]

  const urls = pages
    .map((path) => `  <url>\n    <loc>${SITE_URL}${path}</loc>\n  </url>`)
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
