import Link from 'next/link'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import FaqAccordion from '@/components/FaqAccordion'

export default function ScentedCandlesUgandaGuide() {
  const title = 'Scented Candles in Uganda: Fragrance Guide and Room Pairings'
  const description = 'Choose the right scented candle for every room — fragrance families, burn tips, and Kampala delivery options.'
  const faqs = [
    { q: 'Which scents are best for living rooms?', a: 'Warm woods, amber, and gentle florals create a welcoming vibe without overpowering.' },
    { q: 'How long should I burn a candle?', a: 'Burn 2–4 hours per session to establish an even melt pool; always trim the wick before lighting.' },
    { q: 'Are scented candles safe?', a: 'Use properly wicked candles and follow safety guidelines — never leave them unattended and keep away from drafts.' },
  ]
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const blogJsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
    datePublished: '2025-01-23', dateModified: '2025-01-23',
    author: { '@type': 'Organization', name: 'Humble Beeing' }, publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497289/IMG_0214_ma3gau.jpg', mainEntityOfPage: { '@type': 'WebPage' },
  }
  return (
    <Box bg={'#FFF2D7'} color={'#000819'} minH="100vh" fontFamily={'var(--font-hanken)'}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd]} />
      <HeroSection title={title} subtitle="Signature scents for every space" bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757451431/20210731_172431_1_v5vw1y.jpg'} overlay py={{ base: 16, md: 24 }} />
      <Container maxW="6xl" px={{ base: 12, md: 20 }} py={{ base: 12, md: 20 }} bg={'#FFF2D7'} rounded={{ base: 'none', lg: '4xl' }}>
        <VStack align="start" spacing={6}>
          <Heading as="h2" size="lg">Fragrance families</Heading>
          <Box as="ul" pl={6} sx={{ listStyleType: 'disc', '& > li': { marginBottom: '8px' } }}>
            <Box as="li">Citrus and herbal for kitchens and workspaces.</Box>
            <Box as="li">Floral and powdery for bedrooms and baths.</Box>
            <Box as="li">Woods and resins for living rooms and patios.</Box>
          </Box>
          <Heading as="h2" size="lg">Pairing by room</Heading>
          <Text>Choose calmer notes for small rooms and brighter blends for open spaces. Rotate scents seasonally for variety.</Text>
          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Heading as="h2" size="lg">FAQs</Heading>
          <FaqAccordion items={faqs} />
          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Text>For gift sets and delivery, see <Link href="/blog/ugandan-gift-ideas-honey-and-candle-gift-sets">Ugandan Gift Ideas</Link> or <Link href="/contact-and-connect">Contact us</Link>.</Text>
        </VStack>
      </Container>
    </Box>
  )
}

ScentedCandlesUgandaGuide.getLayout = (page) => (<PageLayout navbarProps={{ overlayOnHero: true }}>{page}</PageLayout>)
