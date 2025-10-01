import Link from 'next/link'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import FaqAccordion from '@/components/FaqAccordion'

export default function HowWeTestHoneyUganda() {
  const title = 'How Do We Prove Ugandan Honey Is Pure Before It Reaches Your Table?'
  const description = 'Step-by-step quality control from hive to accredited lab—including sampling, chain of custody, and analytics—that keeps Humble Beeing honey honest.'
  const faqs = [
    { q: 'Which purity tests do you run on every batch?', a: 'Baseline panels cover moisture, electrical conductivity, diastase activity, HMF, and LC-IRMS adulteration screens. We add pesticide or antibiotic checks when apiary conditions demand it.' },
    { q: 'Do you share laboratory certificates?', a: 'We provide summaries to home customers and full certificates to wholesale partners and regulators under NDA.' },
    { q: 'Who handles the laboratory work?', a: 'ISO/IEC 17025 accredited labs in Kampala and Nairobi run the heavy analyses; we handle field testing with calibrated refractometers and spectrophotometers.' },
  ]

  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const blogJsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
    datePublished: '2025-01-16', dateModified: '2025-01-16',
    author: { '@type': 'Organization', name: 'Humble Beeing' }, publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757451431/20210731_172431_1_v5vw1y.jpg', mainEntityOfPage: { '@type': 'WebPage' },
  }

  return (
    <Box bg={'#FFF2D7'} color={'#000819'} minH="100vh" fontFamily={'var(--font-hanken)'}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd]} />
      <HeroSection title={title} subtitle="Transparency, traceability, and rigorous quality checks" bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497289/IMG_0214_ma3gau.jpg'} overlay py={{ base: 16, md: 24 }} />
      <Container maxW="6xl" px={{ base: 12, md: 20 }} py={{ base: 12, md: 20 }} bg={'#FFF2D7'} rounded={{ base: 'none', lg: '4xl' }}>
        <VStack align="start" spacing={6}>
          <Heading as="h2" size="lg">Step 1: disciplined harvesting</Heading>
          <Text>Every apiary visit is logged—GPS coordinates, dominant nectar flow, weather notes. Frames are removed at 80% capping, uncapped with food-grade knives, and spun once. We filter through stainless mesh at ambient temperature so enzymes and pollen remain intact. Storage drums are sanitised between batches because a trusted product starts with neurotic cleanliness.</Text>

          <Heading as="h2" size="lg">Step 2: field testing and chain of custody</Heading>
          <Text>Before leaving Hoima or Kibaale, we record moisture readings using calibrated Atago refractometers. Anything above 18.5% is set aside for additional ripening. Samples are sealed in tamper-evident vials, labelled with QR-coded batch IDs, and transported to Kampala in insulated crates. The chain-of-custody paperwork isn’t glamorous, but it ensures nobody can sneak dilution into the journey.</Text>

          <Heading as="h2" size="lg">Step 3: accredited laboratory analytics</Heading>
          <Box as="ul" pl={6} sx={{ listStyleType: 'disc', '& > li': { marginBottom: '10px' } }}>
            <Box as="li"><b>LC-IRMS adulteration screening:</b> confirms sugars originate from nectar—not imported syrups.</Box>
            <Box as="li"><b>Diastase activity and HMF:</b> reveal whether heat ever mistreated the batch.</Box>
            <Box as="li"><b>Electrical conductivity and pollen microscopy:</b> double-check floral origin against field notes.</Box>
            <Box as="li"><b>Targeted residue tests:</b> pesticides, antibiotics, or heavy metals when apiary neighbours spray or medicate.</Box>
          </Box>

          <Heading as="h2" size="lg">Step 4: reporting back to you</Heading>
          <Text>We compile results into batch cards with harvest region, moisture, diastase, flavour descriptors, and best-use suggestions. Wholesale buyers receive the full certificates and auditors are welcome to review five years of archived data. Home subscribers get a succinct summary and direct access to our quality team—because transparency should be as accessible as your breakfast toast.</Text>

          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Heading as="h2" size="lg">FAQs</Heading>
          <FaqAccordion items={faqs} />
          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Text>For technical documentation and wholesale specs, visit <Link href="/wholesale-and-partnerships">Wholesale & Partnerships</Link> or <Link href="/contact-and-connect">Contact us</Link>.</Text>
        </VStack>
      </Container>
    </Box>
  )
}

HowWeTestHoneyUganda.getLayout = (page) => (<PageLayout navbarProps={{ overlayOnHero: true }}>{page}</PageLayout>)
