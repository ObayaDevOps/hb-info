import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '@/styles/base.css'
import Head from 'next/head'
import { hankenGrotesk, poppins, geistSans, geistMono, spaceMono, unbounded } from '@/styles/fonts'
import PageLayout from '@/components/layouts/PageLayout'
import { localBusinessJsonLd } from '@/lib/siteMeta'

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <PageLayout>{page}</PageLayout>)
  return (
    <div
      id="site-root"
      className={`site ${hankenGrotesk.variable} ${poppins.variable} ${geistSans.variable} ${geistMono.variable} ${spaceMono.variable} ${unbounded.variable}`}
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </div>
  )
}

export default App
