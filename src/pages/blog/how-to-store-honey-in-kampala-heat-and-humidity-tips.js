import Link from 'next/link'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import FaqAccordion from '@/components/FaqAccordion'

export default function StoreHoneyKampala() {
  const title = 'How to Store Honey in Kampala: Heat and Humidity Tips'
  const description = 'Practical tips for storing honey in Kampala’s heat and humidity. Prevent fermentation, manage crystallisation, and keep flavour vibrant.'
  const faqs = [
    { q: 'Does heat ruin honey?', a: 'Prolonged high heat dulls aromas and can darken honey. Keep jars away from direct sunlight and stoves.' },
    { q: 'Is crystallised honey spoiled?', a: 'No. Crystallisation is natural. Re‑liquefy by placing the jar in warm water and stirring gently.' },
    { q: 'Should I refrigerate honey?', a: 'No. Room temperature storage is best. Refrigeration accelerates crystallisation and can trap moisture.' },
    { q: 'How do I avoid moisture contamination?', a: 'Keep lids closed, use clean dry spoons, and avoid leaving jars uncapped in humid rooms.' },
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
    datePublished: '2025-01-14',
    dateModified: '2025-01-14',
    author: { '@type': 'Organization', name: 'Humble Beeing' },
    publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757451427/20210206_125023_wdecoo.jpg',
    mainEntityOfPage: { '@type': 'WebPage' },
  }

  return (
    <Box bg={'#FFF2D7'} color={'#000819'} minH="100vh" fontFamily={'var(--font-hanken)'}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd]} />

      <HeroSection
        title={title}
        subtitle="Keep your honey fresh, aromatic, and safe"
        bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757495003/IMG_0291_pkvi7q.jpg'}
        overlay
        py={{ base: 16, md: 24 }}
      />

      <Container maxW="6xl" px={{ base: 12, md: 20 }} py={{ base: 12, md: 20 }} bg={'#FFF2D7'} rounded={{ base: 'none', lg: '4xl' }}>
        <VStack align="start" spacing={6}>
          <Heading as="h2" size="lg">Storage fundamentals</Heading>
          <Box as="ul" pl={6} sx={{ listStyleType: 'disc', '& > li': { marginBottom: '8px' } }}>
            <Box as="li">Store at room temperature away from direct sunlight.</Box>
            <Box as="li">Keep the lid closed; avoid moisture from humid kitchens.</Box>
            <Box as="li">Use a clean, dry spoon to prevent introducing water.</Box>
          </Box>

          <Heading as="h2" size="lg">Managing crystallisation</Heading>
          <Text>Crystallisation depends on floral source and temperature. To re‑liquefy, use a warm water bath (~40°C), stirring occasionally. Do not microwave.</Text>

          <Heading as="h2" size="lg">Preventing fermentation</Heading>
          <Text>Properly ripened honey with low moisture rarely ferments. Keep jars sealed and avoid adding water or wet spoons.</Text>

          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Heading as="h2" size="lg">FAQs</Heading>
          <FaqAccordion items={faqs} />

          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Text>
            For varietal recommendations or bulk supply, see {' '} 
            <Link href="/wholesale-and-partnerships">Wholesale & Partnerships</Link> or {' '}
            <Link href="/contact-and-connect">Contact & Connect</Link>.
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}

StoreHoneyKampala.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
)
