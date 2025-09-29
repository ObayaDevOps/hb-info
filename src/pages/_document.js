import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const favicon = 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757515387/lOGO-LARGE-transparent_gl7jrn.png'
  return (
    <Html lang="en">
      <Head>
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
