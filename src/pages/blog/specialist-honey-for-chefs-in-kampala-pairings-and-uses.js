import Link from 'next/link'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import FaqAccordion from '@/components/FaqAccordion'

export default function SpecialistHoneyChefsKampala() {
  const title = 'Specialist Honey for Chefs in Kampala: Pairings and Uses'
  const description = 'Single‑origin honey for professional kitchens in Kampala — tasting notes, pairings, batch consistency, and wholesale formats.'
  const faqs = [
    { q: 'Can I get consistent flavour across batches?', a: 'We curate single‑origin harvests and provide batch notes to help you maintain menu consistency.' },
    { q: 'Do you offer bulk formats?', a: 'Yes. Food‑service packs and wholesale pricing are available for restaurants, cafes, and bars.' },
    { q: 'Can we co‑develop a menu item?', a: 'Absolutely. We collaborate with chefs and mixologists for seasonal specials and pairings.' },
  ]
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const blogJsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
    datePublished: '2025-01-19', dateModified: '2025-01-19',
    author: { '@type': 'Organization', name: 'Humble Beeing' }, publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757622463/latitude-logo-black_vswv88.png', mainEntityOfPage: { '@type': 'WebPage' },
  }

  return (
    <Box bg={'#FFF2D7'} color={'#000819'} minH="100vh" fontFamily={'var(--font-hanken)'}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd]} />
      <HeroSection title={title} subtitle="From pastry to mixology: flavour that shines" bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497310/IMG_0100_nb3zq6.jpg'} overlay py={{ base: 16, md: 24 }} />
      <Container maxW="6xl" px={{ base: 12, md: 20 }} py={{ base: 12, md: 20 }} bg={'#FFF2D7'} rounded={{ base: 'none', lg: '4xl' }}>
        <VStack align="start" spacing={6}>
          <Heading as="h2" size="lg">Pairing ideas</Heading>
          <Box as="ul" pl={6} sx={{ listStyleType: 'disc', '& > li': { marginBottom: '8px' } }}>
            <Box as="li">Pine blossom with aged cheddar or blue cheese.</Box>
            <Box as="li">Shea blossom for pastry glazes and panna cotta.</Box>
            <Box as="li">Coffee blossom for espresso martinis and cold brew.</Box>
          </Box>
          <Heading as="h2" size="lg">Service formats</Heading>
          <Text>Food‑service packs, subscription delivery, and batch notes for menu development. Request samples for tastings.</Text>
          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Heading as="h2" size="lg">FAQs</Heading>
          <FaqAccordion items={faqs} />
          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Text>For pricing and samples, visit <Link href="/wholesale-and-partnerships">Wholesale & Partnerships</Link> or <Link href="/contact-and-connect">Contact us</Link>.</Text>
        </VStack>
      </Container>
    </Box>
  )
}

SpecialistHoneyChefsKampala.getLayout = (page) => (<PageLayout navbarProps={{ overlayOnHero: true }}>{page}</PageLayout>)
