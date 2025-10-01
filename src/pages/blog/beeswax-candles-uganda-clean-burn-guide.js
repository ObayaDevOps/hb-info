import Link from 'next/link'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import FaqAccordion from '@/components/FaqAccordion'

export default function BeeswaxCandlesUgandaGuide() {
  const title = 'Are Beeswax Candles in Uganda Really Cleaner Than Paraffin Pillars?'
  const description = 'A chandler’s handbook on why locally rendered beeswax burns cleaner, how we test every batch, and the best way to style and care for candles in Kampala homes.'
  const faqs = [
    { q: 'What makes Humble Beeing beeswax different from hobbyist wax?', a: 'We render cappings and comb at low heat, filter three times, and lab-test for residues so the final wax stays golden and food-grade.' },
    { q: 'How do I stop tunnelling in thick candles?', a: 'Give the candle a full-width melt pool during the first burn—typically one hour per inch of diameter—and keep the wick trimmed to 5 mm.' },
    { q: 'Do beeswax candles work in Kampala’s humidity?', a: 'Yes. Store them upright, away from direct sun, and they hold shape even during rainy-season humidity spikes.' },
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
      <HeroSection title={title} subtitle="Hands-on advice from the chandler’s bench to your dinner table" bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497733/IMG_0151_wrxcit.jpg'} overlay py={{ base: 16, md: 24 }} />
      <Container maxW="6xl" px={{ base: 12, md: 20 }} py={{ base: 12, md: 20 }} bg={'#FFF2D7'} rounded={{ base: 'none', lg: '4xl' }}>
        <VStack align="start" spacing={6}>
          <Heading as="h2" size="lg">Why beeswax earns its clean reputation</Heading>
          <Text>We harvest wax cappings alongside honey in Hoima, then render them at a patient 65°C in small, food-grade kettles. That low-temperature process preserves the delicate honey aroma and keeps colour a luminous gold. Compared to paraffin—which is essentially refined petroleum—our beeswax produces negligible soot, neutralises airborne pollutants, and holds shape in Kampala without weeping. You feel the difference the moment you light a taper: steady flame, warm glow, zero smoke alarm theatrics.</Text>

          <Heading as="h2" size="lg">Crafting candles with traceable wax</Heading>
          <Text>Each batch is poured in Kampala by our chandler team trained under the British Candlemakers Federation curriculum. We calibrate cotton wicks to match pillar diameter, weigh every pour to the gram, and cure candles for 48 hours before packaging. Batches are logged with hive origin, rendering date, and lab results—you can request the documentation because transparency is part of the ambiance.</Text>

          <Heading as="h2" size="lg">Setting the stage: styling and burn tips</Heading>
          <Text>For a centrepiece, group odd-numbered candles at differing heights and anchor them in heat-safe holders. On humid evenings, place candles at least 50 cm away from open windows to avoid dancing flames. First burn: commit to one hour per inch of diameter so the melt pool reaches the edges. Subsequent burns only need 30–45 minutes to stay tunnel-free. Snuff, don’t blow, if you want to preserve the sculptural finish.</Text>

          <Heading as="h2" size="lg">Safety (and sanity) essentials</Heading>
          <Box as="ul" pl={6} sx={{ listStyleType: 'disc', '& > li': { marginBottom: '8px' } }}>
            <Box as="li">Trim the wick to 5 mm before every lighting; long wicks make drama, not romance.</Box>
            <Box as="li">Keep burning candles at least 10 cm apart so they do not soften each other’s sides.</Box>
            <Box as="li">Never leave a candle unattended—trust is for beekeepers and bank accounts, not open flames.</Box>
          </Box>
          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Heading as="h2" size="lg">FAQs</Heading>
          <FaqAccordion items={faqs} />
          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Text>Planning an intimate dinner or concept store display? Browse ready-to-ship sets via <Link href="/blog/ugandan-gift-ideas-honey-and-candle-gift-sets">our gifting guide</Link> or brief us directly through <Link href="/contact-and-connect">Contact & Connect</Link>.</Text>
        </VStack>
      </Container>
    </Box>
  )
}

BeeswaxCandlesUgandaGuide.getLayout = (page) => (<PageLayout navbarProps={{ overlayOnHero: true }}>{page}</PageLayout>)
