// import '@/styles/globals.css'
// import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from "@/components/ui/provider"
import theme, { hankenGrotesk, poppins, geistSans, geistMono, spaceMono, unbounded } from '../styles/theme'

import { Global, css } from '@emotion/react'
import PageLayout from '@/components/layouts/PageLayout'

//https://medium.com/@keeganfamouss/accessibility-on-demand-with-chakra-ui-and-focus-visible-19413b1bc6f9
const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus    via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
     outline: none;
     box-shadow: none;
   }
  html, body, #__next {
    background: #f5cb81;
    min-height: 100%;
  }
  /* Film grain overlay */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
    opacity: 0.05;
    mix-blend-mode: multiply;
  }
`;

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <PageLayout>{page}</PageLayout>)
  return (
    <Provider theme={theme}>
      <Global styles={GlobalStyles} />
      <div className={`${hankenGrotesk.variable} ${poppins.variable} ${geistSans.variable} ${geistMono.variable} ${spaceMono.variable} ${unbounded.variable}`}>
        {/* Global glass distortion filter */}
        <svg style={{ display: 'none' }}>
          <filter id="glass-distortion">
            <feTurbulence type="turbulence" baseFrequency="0.008" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="77" />
          </filter>
        </svg>
        {getLayout(<Component {...pageProps} />)}
      </div>
    </Provider>
  )
}

export default App 
