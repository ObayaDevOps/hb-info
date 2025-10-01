import Link from 'next/link'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import FaqAccordion from '@/components/FaqAccordion'

export default function HowWeTestHoneyUganda() {
  const title = 'How We Test Honey Purity in Uganda: Lab and Field'
  const description = 'Our approach to honey purity: from apiary handling and batch traceability to independent lab tests for adulteration, moisture, and residues.'
  const faqs = [
    { q: 'Which tests matter most?', a: 'Adulteration screening, moisture content, and targeted residue tests establish purity and shelf stability.' },
    { q: 'Do you publish results?', a: 'We summarise findings by batch and can share documentation with B2B buyers and partners.' },
    { q: 'Why does moisture matter?', a: 'Moisture under ~18.5% helps prevent fermentation and preserves flavour over time.' },
  ]

  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const blogJsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
    datePublished: '2025-01-16', dateModified: '2025-01-16',
    author: { '@type': 'Organization', name: 'Humble Beeing' }, publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757451431/20210731_172431_1_v5vw1y.jpg', mainEntityOfPage: { '@type': 'WebPage' },
  }

  return (
    <Box bg={'#FFF2D7'} color={'#000819'} minH="100vh" fontFamily={'var(--font-hanken)'}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd]} />
      <HeroSection title={title} subtitle="Transparency, traceability, and rigorous quality checks" bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497289/IMG_0214_ma3gau.jpg'} overlay py={{ base: 16, md: 24 }} />
      <Container maxW="6xl" px={{ base: 12, md: 20 }} py={{ base: 12, md: 20 }} bg={'#FFF2D7'} rounded={{ base: 'none', lg: '4xl' }}>
        <VStack align="start" spacing={6}>
          <Heading as="h2" size="lg">From apiary to jar</Heading>
          <Box as="ul" pl={6} sx={{ listStyleType: 'disc', '& > li': { marginBottom: '8px' } }}>
            <Box as="li">Batch‑level traceability: location, season, and harvesting practices.</Box>
            <Box as="li">Raw handling: gentle filtration and temperature control.</Box>
            <Box as="li">Sealed, food‑safe storage until packing.</Box>
          </Box>
          <Heading as="h2" size="lg">Independent lab testing</Heading>
          <Box as="ul" pl={6} sx={{ listStyleType: 'disc', '& > li': { marginBottom: '8px' } }}>
            <Box as="li">Adulteration screening and sugar profile checks.</Box>
            <Box as="li">Moisture content to ensure shelf stability.</Box>
            <Box as="li">Residue testing where risk factors are identified.</Box>
          </Box>
          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Heading as="h2" size="lg">FAQs</Heading>
          <FaqAccordion items={faqs} />
          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Text>For technical documentation and wholesale specs, visit <Link href="/wholesale-and-partnerships">Wholesale & Partnerships</Link> or <Link href="/contact-and-connect">Contact us</Link>.</Text>
        </VStack>
      </Container>
    </Box>
  )
}

HowWeTestHoneyUganda.getLayout = (page) => (<PageLayout navbarProps={{ overlayOnHero: true }}>{page}</PageLayout>)
