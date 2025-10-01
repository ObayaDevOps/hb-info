import Link from 'next/link'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import FaqAccordion from '@/components/FaqAccordion'

export default function UgandanGiftIdeas() {
  const title = 'Ugandan Gift Ideas: Honey and Candle Gift Sets'
  const description = 'Curated Ugandan gifts featuring luxury honey and beeswax candles — perfect for personal and corporate gifting with Kampala delivery.'
  const faqs = [
    { q: 'Do you offer corporate gifting?', a: 'Yes. We curate sets with custom cards and branding on request.' },
    { q: 'Can I personalise a gift?', a: 'We can include notes, cards, and selective engraving subject to availability.' },
    { q: 'Do you deliver in Kampala?', a: 'Yes — same‑day/next‑day delivery depending on cut‑off and location.' },
  ]
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const blogJsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
    datePublished: '2025-01-21', dateModified: '2025-01-21',
    author: { '@type': 'Organization', name: 'Humble Beeing' }, publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757451447/IMG_0203_s6bliw.jpg', mainEntityOfPage: { '@type': 'WebPage' },
  }
  return (
    <Box bg={'#FFF2D7'} color={'#000819'} minH="100vh" fontFamily={'var(--font-hanken)'}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd]} />
      <HeroSection title={title} subtitle="Thoughtful, local, and beautifully packaged" bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497640/IMG_0095_zdx7pv.jpg'} overlay py={{ base: 16, md: 24 }} />
      <Container maxW="6xl" px={{ base: 12, md: 20 }} py={{ base: 12, md: 20 }} bg={'#FFF2D7'} rounded={{ base: 'none', lg: '4xl' }}>
        <VStack align="start" spacing={6}>
          <Heading as="h2" size="lg">Gift set ideas</Heading>
          <Box as="ul" pl={6} sx={{ listStyleType: 'disc', '& > li': { marginBottom: '8px' } }}>
            <Box as="li">Honey trio: pine, shea, coffee blossom (mini jars).</Box>
            <Box as="li">Beeswax candle + honey pairing with tasting card.</Box>
            <Box as="li">Chef’s set: premium honey with cheese pairing notes.</Box>
          </Box>
          <Heading as="h2" size="lg">Occasions</Heading>
          <Text>Corporate gifting, weddings, house‑warmings, and seasonal celebrations.</Text>
          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Heading as="h2" size="lg">FAQs</Heading>
          <FaqAccordion items={faqs} />
          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Text>For custom requests and bulk pricing, reach out via <Link href="/contact-and-connect">Contact & Connect</Link>.</Text>
        </VStack>
      </Container>
    </Box>
  )
}

UgandanGiftIdeas.getLayout = (page) => (<PageLayout navbarProps={{ overlayOnHero: true }}>{page}</PageLayout>)
