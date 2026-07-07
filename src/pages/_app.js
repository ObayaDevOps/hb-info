import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '@/styles/base.css'
import { hankenGrotesk, poppins, geistSans, geistMono, spaceMono, unbounded } from '@/styles/fonts'
import PageLayout from '@/components/layouts/PageLayout'

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <PageLayout>{page}</PageLayout>)
  return (
    <div
      id="site-root"
      className={`site ${hankenGrotesk.variable} ${poppins.variable} ${geistSans.variable} ${geistMono.variable} ${spaceMono.variable} ${unbounded.variable}`}
    >
      {getLayout(<Component {...pageProps} />)}
    </div>
  )
}

export default App
