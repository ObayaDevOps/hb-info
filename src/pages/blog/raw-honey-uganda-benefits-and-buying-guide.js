import Link from 'next/link'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import FaqAccordion from '@/components/FaqAccordion'

export default function RawHoneyUgandaGuide() {
  const title = 'Why Do Serious Food Lovers in Uganda Seek Out Raw Honey Instead of the Squeeze Bottle?'
  const description = 'A beekeeper’s field guide to what “raw” honey really means in Uganda, how we verify purity, and where discerning buyers in Kampala should shop.'
  const faqs = [
    { q: 'How do you confirm honey is genuinely raw?', a: 'Every harvest is cold-filtered, moisture-checked on a refractometer, and spot-tested in ISO-accredited labs to confirm there is no heat damage or adulteration.' },
    { q: 'Why does my raw honey crystallise so quickly?', a: 'Crystallisation is a natural signal that pollen and glucose are intact; sit the jar in 40–45°C water and stir, never microwave.' },
    { q: 'Is raw honey safe for children?', a: 'Raw honey is a delight for adults and kids over twelve months. Infants should wait because of botulism risk—no shortcuts there.' },
    { q: 'Where can I buy verified raw honey in Kampala?', a: 'Order directly from Humble Beeing for traceable batches or visit our vetted stockists in Bugolobi, Kololo, Muyenga, and Kisementi.' },
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
        subtitle="Field-tested advice from Hoima apiaries to Kampala kitchens"
        bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497310/IMG_0100_nb3zq6.jpg'}
        overlay
        py={{ base: 16, md: 24 }}
      />
      <Container maxW="6xl" px={{ base: 12, md: 20 }} py={{ base: 12, md: 20 }} bg={'#FFF2D7'} rounded={{ base: 'none', lg: '4xl' }}>
        <VStack align="start" spacing={6}>
          <Heading as="h2" size="lg">What qualifies as “raw” honey in our Ugandan apiaries?</Heading>
          <Text>During harvest season we pull combs from Hoima and Kibaale at sunrise, when nectar is still cool. Each frame is uncapped by hand, spun once, and strained through food-grade mesh. No heat, no pressure filters, and definitely no corn syrup masquerading as floral notes. That minimal handling keeps enzymes, pollen, and terroir intact—think vinyl record warmth versus a compressed mp3.</Text>

          <Heading as="h2" size="lg">How does raw honey taste different?</Heading>
          <Text>Expect a layered profile: citrus blossom from Budongo forest apiaries, deeper molasses notes from eucalyptus stands near Fort Portal, and a finish that shifts with the season. Volatile aromatics survive because we refuse to overheat the harvest. Independent sensory panels in Kampala (yes, we invite chefs with notebooks) routinely score raw batches well above commercial blends on aroma intensity and mouthfeel.</Text>

          <Heading as="h2" size="lg">How we prove purity and safety</Heading>
          <Text>Experience is useful, but lab data closes the case. Every batch is logged with hive coordinates, moisture levels (target: 17–18.5%), and pollen spectra. Spot samples go to ISO-accredited labs in Kampala to screen for antibiotics, HMF, and adulteration markers. Our team holds Level II beekeeper certifications from the Uganda National Apiculture Development Organisation, and we follow Codex Alimentarius standards because guessing is for amateurs.</Text>

          <Heading as="h2" size="lg">Where should you buy raw honey in Kampala?</Heading>
          <Text>Traceability matters. Order directly from Humble Beeing for same-week harvests labelled with beekeeper names. Prefer retail? You’ll find our jars at Good Glass Bugolobi, Endiro Coffee Kololo, La Patisserie in Muyenga, and curated grocers in Kisementi. Ask for the batch card; if a seller can’t point to harvest month and moisture readings, walk away gracefully.</Text>

          <Heading as="h2" size="lg">How to store raw honey in our climate</Heading>
          <Text>Kampala humidity can stage a coup against even the best honey. Keep jars sealed, off the sunny windowsill, and comfortably at room temperature. If crystals appear—and they will—rest the jar in a 40–45°C water bath and stir every few minutes. Anything hotter risks nuking the enzymes you were so careful to buy in the first place.</Text>

          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Heading as="h2" size="lg">FAQs</Heading>
          <FaqAccordion items={faqs} />

          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Text>
            Curious about the latest harvest notes? Send a message via {' '}
            <Link href="/contact-and-connect">Contact & Connect</Link> {' '}
            and we’ll share current tasting cards. Wholesale buyers can tap our vetted supply chain through {' '}
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
