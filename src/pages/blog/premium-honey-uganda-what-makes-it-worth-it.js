import Link from 'next/link'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import FaqAccordion from '@/components/FaqAccordion'

export default function PremiumHoneyUganda() {
  const title = 'Premium Honey in Uganda: What Makes It Worth It?'
  const description = 'Explore what makes honey “premium” in Uganda — from remote foraging regions and careful handling to batch consistency and testing.'
  const faqs = [
    { q: 'Why is premium honey more expensive?', a: 'Remote apiaries, small‑batch handling, testing, and quality packaging raise costs while improving taste and consistency.' },
    { q: 'Is premium honey always raw?', a: 'It should be. Premium quality typically includes raw handling to preserve aroma and character.' },
    { q: 'How do I choose a varietal?', a: 'Share your use case — tea, pastry, cheese, marinades — and we’ll recommend floral profiles that fit.' },
  ]

  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const blogJsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
    datePublished: '2025-01-15', dateModified: '2025-01-15',
    author: { '@type': 'Organization', name: 'Humble Beeing' }, publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497733/IMG_0151_wrxcit.jpg', mainEntityOfPage: { '@type': 'WebPage' },
  }

  return (
    <Box bg={'#FFF2D7'} color={'#000819'} minH="100vh" fontFamily={'var(--font-hanken)'}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd]} />
      <HeroSection title={title} subtitle="Taste, texture, and trusted provenance" bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497768/IMG_0072_n3ab2i.jpg'} overlay py={{ base: 16, md: 24 }} />
      <Container maxW="6xl" px={{ base: 12, md: 20 }} py={{ base: 12, md: 20 }} bg={'#FFF2D7'} rounded={{ base: 'none', lg: '4xl' }}>
        <VStack align="start" spacing={6}>
          <Heading as="h2" size="lg">What defines premium?</Heading>
          <Box as="ul" pl={6} sx={{ listStyleType: 'disc', '& > li': { marginBottom: '8px' } }}>
            <Box as="li">Single‑origin batches and consistent flavour across the season.</Box>
            <Box as="li">Gentle, raw handling and careful moisture control.</Box>
            <Box as="li">Independent checks for adulteration and residues.</Box>
          </Box>
          <Heading as="h2" size="lg">When to choose premium</Heading>
          <Text>Pair with fine teas, cheeses, pastry glazes, and mixology. Distinct floral notes elevate simple recipes.</Text>
          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Heading as="h2" size="lg">FAQs</Heading>
          <FaqAccordion items={faqs} />
          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Text>For chef‑grade batches and bulk formats, visit <Link href="/wholesale-and-partnerships">Wholesale & Partnerships</Link> or <Link href="/contact-and-connect">Contact & Connect</Link>.</Text>
        </VStack>
      </Container>
    </Box>
  )
}

PremiumHoneyUganda.getLayout = (page) => (<PageLayout navbarProps={{ overlayOnHero: true }}>{page}</PageLayout>)
