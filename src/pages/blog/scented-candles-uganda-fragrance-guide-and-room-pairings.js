import Link from 'next/link'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import FaqAccordion from '@/components/FaqAccordion'

export default function ScentedCandlesUgandaGuide() {
  const title = 'Which Scented Candle Should You Light for Each Room in Kampala?'
  const description = 'Fragrance strategy, burn science, and interior styling tips from Humble Beeing’s candle studio to help you scent every space with confidence.'
  const faqs = [
    { q: 'Which scents suit living rooms best?', a: 'Layered woods, amber, and a whisper of citrus keep communal spaces warm without overwhelming conversation.' },
    { q: 'How long should one burn a scented candle?', a: 'Aim for 2–3 hours per session to set an even melt pool, and trim the wick to 5 mm before each light.' },
    { q: 'Are scented candles safe for homes with kids or pets?', a: 'Place candles out of reach, ventilate after burning, and stick to phthalate-free fragrances like ours to keep indoor air considerate.' },
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
      <HeroSection title={title} subtitle="Signature scents engineered for tropical homes" bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757451431/20210731_172431_1_v5vw1y.jpg'} overlay py={{ base: 16, md: 24 }} />
      <Container maxW="6xl" px={{ base: 12, md: 20 }} py={{ base: 12, md: 20 }} bg={'#FFF2D7'} rounded={{ base: 'none', lg: '4xl' }}>
        <VStack align="start" spacing={6}>
          <Heading as="h2" size="lg">The fragrance wardrobe we rely on</Heading>
          <Text>Every candle begins with beeswax from our own hives blended with coconut and soy for a clean burn. Fragrance houses in Grasse and Nairobi customise notes to withstand Kampala’s humidity, so your living room doesn’t end up smelling like a melted bouquet. Each blend is IFRA-compliant and phthalate-free because safety is part of the ambience.</Text>

          <Heading as="h2" size="lg">Room-by-room recommendations</Heading>
          <Box as="ul" pl={6} sx={{ listStyleType: 'disc', '& > li': { marginBottom: '10px' } }}>
            <Box as="li"><b>Living room:</b> Amber, cedar, and a hint of bergamot keep things warm and chatty. We light ours before guests arrive so the throw settles before the doorbell rings.</Box>
            <Box as="li"><b>Bedroom:</b> Lavender, neroli, or chamomile layered over vanilla for a slow exhale. Extinguish 30 minutes before lights-out for better sleep hygiene.</Box>
            <Box as="li"><b>Kitchen:</b> Fresh citrus and herbal notes cut through dinner aromas without fighting the food. Basil-grapefruit is our go-to.</Box>
            <Box as="li"><b>Workspace:</b> Rosemary and eucalyptus sharpen focus. Because deadlines need allies, not distractions.</Box>
            <Box as="li"><b>Outdoor patios:</b> Vetiver and lemongrass double as mosquito deterrents while keeping the evening grounded.</Box>
          </Box>

          <Heading as="h2" size="lg">Burning like a pro</Heading>
          <Text>Trim the wick to 5 mm, burn 2–3 hours for an even melt pool, and use a snuffer to protect the wick for next time. Rotate candles weekly so your nose doesn’t get bored, and store spares upright, away from Kampala’s afternoon sun. We test every batch for cold and hot throw, so the scent you love in-store is the scent you’ll enjoy at home.</Text>

          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Heading as="h2" size="lg">FAQs</Heading>
          <FaqAccordion items={faqs} />
          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Text>Ready to curate your scent library? Explore gift sets on <Link href="/blog/ugandan-gift-ideas-honey-and-candle-gift-sets">our gifting guide</Link> or brief us via <Link href="/contact-and-connect">Contact & Connect</Link>.</Text>
        </VStack>
      </Container>
    </Box>
  )
}

ScentedCandlesUgandaGuide.getLayout = (page) => (<PageLayout navbarProps={{ overlayOnHero: true }}>{page}</PageLayout>)
