import Link from 'next/link'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import FaqAccordion from '@/components/FaqAccordion'

export default function RawHoneyUgandaGuide() {
  const title = 'Raw Honey in Uganda: Benefits and Buying Guide'
  const description = 'Understand what raw honey means in Uganda, how it’s handled, its benefits, and how to buy quality raw honey in Kampala.'
  const faqs = [
    { q: 'What is raw honey?', a: 'Honey that is minimally processed — gently filtered, not overheated — to preserve enzymes, pollen, and volatile aromas.' },
    { q: 'Does raw honey crystallise?', a: 'Yes. Natural crystallisation is expected and depends on floral source. Re‑liquefy gently in warm water.' },
    { q: 'Is raw honey safe for everyone?', a: 'It should not be given to infants under 12 months. Adults can safely enjoy raw honey in moderation.' },
    { q: 'How should I store raw honey?', a: 'Keep sealed, away from heat and direct sunlight. Room temperature is ideal in Kampala’s climate.' },
  ]

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished: '2025-01-12',
    dateModified: '2025-01-12',
    author: { '@type': 'Organization', name: 'Humble Beeing' },
    publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757498617/IMG_0231_jpk3oz.jpg',
    mainEntityOfPage: { '@type': 'WebPage' },
  }

  return (
    <Box bg={'#FFF2D7'} color={'#000819'} minH="100vh" fontFamily={'var(--font-hanken)'}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd]} />
      <HeroSection
        title={title}
        subtitle="Definition, benefits, storage, and how to buy in Kampala"
        bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497310/IMG_0100_nb3zq6.jpg'}
        overlay
        py={{ base: 16, md: 24 }}
      />
      <Container maxW="6xl" px={{ base: 12, md: 20 }} py={{ base: 12, md: 20 }} bg={'#FFF2D7'} rounded={{ base: 'none', lg: '4xl' }}>
        <VStack align="start" spacing={6}>
          <Heading as="h2" size="lg">What raw honey really means</Heading>
          <Text>Raw honey in Uganda should be lightly filtered and never overheated. This preserves enzymes, pollen, and delicate aromas that define each floral source.</Text>

          <Heading as="h2" size="lg">Key benefits</Heading>
          <Box as="ul" pl={6} sx={{ listStyleType: 'disc', '& > li': { marginBottom: '8px' } }}>
            <Box as="li">Richer aroma and flavour from intact volatile compounds.</Box>
            <Box as="li">Natural crystallisation indicates minimal processing.</Box>
            <Box as="li">Traceable single‑origin batches tell a transparent story of place.</Box>
          </Box>

          <Heading as="h2" size="lg">Buying quality raw honey in Kampala</Heading>
          <Box as="ul" pl={6} sx={{ listStyleType: 'disc', '& > li': { marginBottom: '8px' } }}>
            <Box as="li">Ask for batch and harvest info; prefer single‑origin Ugandan honey.</Box>
            <Box as="li">Look for moisture under ~18.5% and clarity on residue/adulteration testing.</Box>
            <Box as="li">Buy from verified stockists or direct delivery for the best selection.</Box>
          </Box>

          <Heading as="h2" size="lg">Storage tips for Kampala</Heading>
          <Text>Store sealed, away from direct sunlight. If crystallised, place the jar in warm water and stir gently — avoid microwaving.</Text>

          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Heading as="h2" size="lg">FAQs</Heading>
          <FaqAccordion items={faqs} />

          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Text>
            Ready to try raw honey? Explore our latest batches or arrange delivery via {' '} 
            <Link href="/contact-and-connect">Contact & Connect</Link>. For wholesale needs, visit {' '}
            <Link href="/wholesale-and-partnerships">Wholesale & Partnerships</Link>.
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}

RawHoneyUgandaGuide.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
)
