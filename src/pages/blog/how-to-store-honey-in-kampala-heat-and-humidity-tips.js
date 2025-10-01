import Link from 'next/link'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import FaqAccordion from '@/components/FaqAccordion'

export default function StoreHoneyKampala() {
  const title = 'How Should You Store Honey in Kampala’s Heat Without Losing Its Magic?'
  const description = 'Real-world storage tactics from Humble Beeing’s beekeepers to protect flavour, prevent fermentation, and manage crystallisation in Uganda’s humid climate.'
  const faqs = [
    { q: 'Does Kampala heat ruin honey?', a: 'Only if jars sit in direct sun or near stoves. Keep them between 18–25°C and aromas stay vibrant for years.' },
    { q: 'Is crystallised honey a sign of spoilage?', a: 'No. It is a badge of minimal processing. Re-liquefy slowly in a 40–45°C water bath and the crystals melt back into silk.' },
    { q: 'Should honey ever be refrigerated?', a: 'Skip the fridge. Cold accelerates crystallisation and humidity affects texture. Room temperature storage is ideal.' },
    { q: 'How do I avoid moisture contamination?', a: 'Use dry utensils, seal jars promptly, and keep them away from boiling kettles or dishwashers that fog the air.' },
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
        subtitle="Storage habits we swear by from Hoima harvests to Kampala kitchens"
        bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757495003/IMG_0291_pkvi7q.jpg'}
        overlay
        py={{ base: 16, md: 24 }}
      />

      <Container maxW="6xl" px={{ base: 12, md: 20 }} py={{ base: 12, md: 20 }} bg={'#FFF2D7'} rounded={{ base: 'none', lg: '4xl' }}>
        <VStack align="start" spacing={6}>
          <Heading as="h2" size="lg">Why climate control matters here</Heading>
          <Text>Our Kampala kitchens flirt with 30°C afternoons and humidity north of 70%. Honey is hygroscopic, meaning it pulls moisture the way journalists pull late nights. Too much water invites fermentation, so we rotate jars off the counter during service hours and keep them tucked into a cool cupboard—ideally on the wall opposite your cooker.</Text>

          <Heading as="h2" size="lg">Daily habits that protect flavour</Heading>
          <Box as="ul" pl={6} sx={{ listStyleType: 'disc', '& > li': { marginBottom: '8px' } }}>
            <Box as="li">Use dry utensils only. We keep a dedicated honey spoon hanging beside the jar like a tiny security guard.</Box>
            <Box as="li">Close lids immediately after serving; Kampala’s evening humidity is relentless.</Box>
            <Box as="li">Store jars between 18–25°C. A pantry or shaded shelf beats a sunny breakfast nook every time.</Box>
          </Box>

          <Heading as="h2" size="lg">Managing crystallisation without panic</Heading>
          <Text>Crystals signal that your honey retains its natural glucose ratio. To return it to velvet, place the jar in a 40–45°C water bath and stir every few minutes. We use sous-vide sticks at the honey house, but a kettle and patient hand works just as well. Skip the microwave; it overheats the outer layer, flattens aromas, and makes bees everywhere shake their heads.</Text>

          <Heading as="h2" size="lg">Fermentation red flags (and fixes)</Heading>
          <Text>True fermentation smells slightly sour and foams around the lid. If that happens, the jar either absorbed moisture or was bottled with too-high water content. Contact us—we’ll troubleshoot, replace your jar, and adjust future handling. For extra insurance, we bottle at 17–18% moisture and include the reading on your batch card.</Text>

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
