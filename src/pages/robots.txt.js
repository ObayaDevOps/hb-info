export async function getServerSideProps({ res, req }) {
  const scheme = req.headers['x-forwarded-proto'] || 'https'
  const host = req.headers.host
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || `${scheme}://${host}`

  const body = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /studio/',
    `Sitemap: ${siteUrl}/sitemap.xml`,
    ''
  ].join('\n')

  res.setHeader('Content-Type', 'text/plain')
  res.write(body)
  res.end()

  return { props: {} }
}

export default function Robots() {
  return null
}

