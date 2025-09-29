// import { extendTheme } from '@chakra-ui/react'
import { createSystem, defaultConfig } from "@chakra-ui/react"
import { Geist, Geist_Mono, Space_Mono, Poppins, Unbounded, Hanken_Grotesk } from 'next/font/google'
import { textStyles } from './textStyles'

// Font configurations
export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
})

export const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

export const unbounded = Unbounded({
  variable: "--font-unbounded",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

export const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
})

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          red: { value: '#fff7e1' },
        },
      },
      fonts: {
        heading: { value: `var(--font-hanken)` },
        body: { value: `var(--font-poppins)` },
        geistSans: { value: `var(--font-geist-sans)` },
        geistMono: { value: `var(--font-geist-mono)` },
        spaceMono: { value: `var(--font-space-mono)` },
        poppins: { value: `var(--font-poppins)` },
        unbounded: { value: `var(--font-unbounded)` },
        hanken: { value: `var(--font-hanken)` },
      },
    },
    textStyles,
  },
})

export default system 
