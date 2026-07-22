import { Geist, Geist_Mono, Space_Mono, Poppins, Unbounded, Hanken_Grotesk, Tiny5 } from 'next/font/google'

export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const spaceMono = Space_Mono({
  variable: '--font-space-mono',
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export const unbounded = Unbounded({
  variable: '--font-unbounded',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export const hankenGrotesk = Hanken_Grotesk({
  variable: '--font-hanken',
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

export const tiny5 = Tiny5({
  variable: '--font-tiny5',
  weight: '400',
  subsets: ['latin'],
})
