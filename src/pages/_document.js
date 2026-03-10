import { Html, Head, Main, NextScript } from 'next/document'

const GA_MEASUREMENT_ID = 'G-WMB0VSK58T'
const GA_INLINE_SCRIPT = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${GA_MEASUREMENT_ID}');
`

export default function Document() {
  const favicon = 'https://cdn.sanity.io/images/wf5e366r/production/4a9d5b493b1b3fd3057b1b880bf136491f396a57-1019x593.png'
  return (
    <Html lang="en">
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{ __html: GA_INLINE_SCRIPT }}
        />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="anonymous" />
        <link rel="icon" href={favicon} />
        <link rel="shortcut icon" href={favicon} />
        <meta name="theme-color" content="#000819" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
