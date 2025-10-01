import Link from 'next/link'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import FaqAccordion from '@/components/FaqAccordion'

export default function BestHoneyKampala() {
  const title = 'Which Honey in Kampala Should You Trust in 2025?'
  const description = 'Lab results, tasting flights, and sourcing notes from Humble Beeing’s beekeeping team to help Kampala shoppers pick truly premium honey this year.'
  const faqs = [
    {
      q: 'How do you decide which honey makes the “best” list?',
      a: 'We taste blind with chefs, validate moisture on a refractometer, screen for adulteration in ISO-accredited labs, and insist on full traceability to the apiary.'
    },
    {
      q: 'Are supermarket honeys in Kampala ever raw?',
      a: 'Most mass-market brands are blended and heat-treated. A few premium lines import raw honey, but Ugandan single-origin batches offer fresher terroir and shorter supply chains.'
    },
    {
      q: 'Why does price vary so widely?',
      a: 'Remote apiaries, cold filtration, and third-party testing add real cost. Ultra-cheap “premium” honey usually signals dilution, so scrutinise batch documentation.'
    },
    {
      q: 'How can I taste before buying a full jar?',
      a: 'We host quarterly tasting flights in Bugolobi and provide sample kits for chefs. Reach out via Contact & Connect to reserve a slot.'
    }
  ]

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished: '2025-01-10',
    dateModified: '2025-01-10',
    author: { '@type': 'Organization', name: 'Humble Beeing' },
    publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497640/IMG_0095_zdx7pv.jpg',
    mainEntityOfPage: { '@type': 'WebPage' },
  }

  return (
    <Box bg={'#FFF2D7'} color={'#000819'} minH="100vh" fontFamily={'var(--font-hanken)'}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd]} />

      <HeroSection
        title={title}
        subtitle="A beekeeper’s scorecard for purity, provenance, and flavour"
        bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757451447/IMG_0203_s6bliw.jpg'}
        overlay
        py={{ base: 16, md: 24 }}
      />

      <Container maxW="6xl" px={{ base: 12, md: 20 }} py={{ base: 12, md: 20 }} bg={'#FFF2D7'} rounded={{ base: 'none', lg: '4xl' }}>
        <VStack align="start" spacing={6}>
          <Heading as="h2" size="lg">How we benchmark honey in 2025</Heading>
          <Text>Every quarter we host a tasting flight with chefs from Kampala, Jinja, and Entebbe. We line up anonymised jars under neutral light, evaluate aroma, texture, and finish, and then compare notes with lab reports. Honey that survives this double scrutiny earns a place on our recommended list. The shortlist is dominated by raw, single-origin Ugandan batches because shorter supply chains mean fresher nectar and fewer opportunities for tampering.</Text>

          <Heading as="h2" size="lg">Five questions to ask before you buy</Heading>
          <Box as="ul" pl={6} sx={{ listStyleType: 'disc', '& > li': { marginBottom: '8px' } }}>
            <Box as="li"><b>Where was it harvested?</b> Names like Hoima, Kibaale, or Mt. Elgon indicate real apiaries, not marketing poetry.</Box>
            <Box as="li"><b>Is there lab proof?</b> Moisture should sit below 18.5%, HMF under 40 mg/kg, and adulteration markers should read “not detected.”</Box>
            <Box as="li"><b>How was it handled?</b> Cold filtration and no heat above 40°C keeps enzymes intact and flavours vibrant.</Box>
            <Box as="li"><b>What does it taste like?</b> Expect distinct botanical notes—coffee blossom, eucalyptus, or wildflower. A flat, sugary finish is a red flag.</Box>
            <Box as="li"><b>Who stands behind it?</b> Look for companies willing to share beekeeper names, batch logs, and delivery routes.</Box>
          </Box>

          <Heading as="h2" size="lg">Flavour profiles worth chasing</Heading>
          <Text>Kampala food lovers rave about the citrus brightness of Budongo forest honey on yoghurt, the caramel depth of eucalyptus drizzled over aged gouda, and the almost savoury shea blossom honey that chefs use to glaze roast plantain. We keep cupping notes from each harvest, so if you’re hunting for a particular flavour arc, just ask.</Text>

          <Heading as="h2" size="lg">Where to shop with confidence</Heading>
          <Text>
            Our own jars are available via same-day delivery within Kampala or at partner stores like Good Glass Bugolobi, Endiro Coffee Kololo, and La Patisserie Muyenga. For a broader map, bookmark {' '}
            <Link href="/blog/where-to-buy-honey-in-kampala-stockists-and-delivery">Where to Buy Honey in Kampala</Link>. Restaurateurs can source wholesale through {' '}
            <Link href="/wholesale-and-partnerships">Wholesale & Partnerships</Link>.
          </Text>

          <Heading as="h2" size="lg">What to budget in 2025</Heading>
          <Text>The sweet spot (pun intended) for legitimate raw honey in Kampala this year is UGX 35,000–55,000 for a 500 g jar. Anything dramatically cheaper deserves serious interrogation; meanwhile, ultra-premium lots command more because of remote apiaries, certification, and micro-batch bottling. We publish price updates with each harvest so you can track trends rather than guess.</Text>

          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Heading as="h2" size="lg">FAQs</Heading>
          <FaqAccordion items={faqs} />

          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Text>
            Ready to taste the shortlist? Reserve a spot at our next flight via {' '}
            <Link href="/contact-and-connect">Contact & Connect</Link> {' '}
            or request wholesale samples through {' '}
            <Link href="/wholesale-and-partnerships">Wholesale & Partnerships</Link>.
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}

BestHoneyKampala.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
)
