import Link from 'next/link'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import FaqAccordion from '@/components/FaqAccordion'

export default function BeeswaxCandlesUgandaGuide() {
  const title = 'Beeswax Candles in Uganda: Clean Burn Guide'
  const description = 'Why beeswax? A clean burn, natural glow, and subtle aroma. Learn benefits vs paraffin, sizes, care, and where to buy in Kampala.'
  const faqs = [
    { q: 'Do beeswax candles have a scent?', a: 'Natural beeswax has a light, honeyed aroma. We also offer subtle essential‑oil blends.' },
    { q: 'How do I prevent tunnelling?', a: 'Burn long enough for the top layer to melt edge‑to‑edge; trim wick to ~5mm before lighting.' },
    { q: 'Are beeswax candles smoky?', a: 'Correct wick length and draft‑free placement minimise smoke and ensure a clean burn.' },
  ]
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const blogJsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
    datePublished: '2025-01-22', dateModified: '2025-01-22',
    author: { '@type': 'Organization', name: 'Humble Beeing' }, publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757451431/20210731_172431_1_v5vw1y.jpg', mainEntityOfPage: { '@type': 'WebPage' },
  }
  return (
    <Box bg={'#FFF2D7'} color={'#000819'} minH="100vh" fontFamily={'var(--font-hanken)'}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd]} />
      <HeroSection title={title} subtitle="Benefits, sizes, and candle care" bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497733/IMG_0151_wrxcit.jpg'} overlay py={{ base: 16, md: 24 }} />
      <Container maxW="6xl" px={{ base: 12, md: 20 }} py={{ base: 12, md: 20 }} bg={'#FFF2D7'} rounded={{ base: 'none', lg: '4xl' }}>
        <VStack align="start" spacing={6}>
          <Heading as="h2" size="lg">Why beeswax</Heading>
          <Box as="ul" pl={6} sx={{ listStyleType: 'disc', '& > li': { marginBottom: '8px' } }}>
            <Box as="li">Clean burn with minimal soot when properly wicked.</Box>
            <Box as="li">Warm, natural glow and subtle honeyed aroma.</Box>
            <Box as="li">Long burn time and beautiful finish.</Box>
          </Box>
          <Heading as="h2" size="lg">Care and safety</Heading>
          <Box as="ul" pl={6} sx={{ listStyleType: 'disc', '& > li': { marginBottom: '8px' } }}>
            <Box as="li">Trim wick to ~5mm; keep away from drafts.</Box>
            <Box as="li">Allow full top melt to avoid tunnelling.</Box>
            <Box as="li">Never leave a burning candle unattended.</Box>
          </Box>
          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Heading as="h2" size="lg">FAQs</Heading>
          <FaqAccordion items={faqs} />
          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Text>Looking for gifts? See <Link href="/blog/ugandan-gift-ideas-honey-and-candle-gift-sets">Ugandan Gift Ideas</Link> or <Link href="/contact-and-connect">contact us</Link> for custom sets.</Text>
        </VStack>
      </Container>
    </Box>
  )
}

BeeswaxCandlesUgandaGuide.getLayout = (page) => (<PageLayout navbarProps={{ overlayOnHero: true }}>{page}</PageLayout>)
