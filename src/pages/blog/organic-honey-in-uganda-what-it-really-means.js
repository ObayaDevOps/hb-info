import Link from 'next/link'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import FaqAccordion from '@/components/FaqAccordion'

export default function OrganicHoneyUganda() {
  const title = 'Organic Honey in Uganda: What It Really Means'
  const description = 'Understand “organic” for honey in Uganda — certifications, practical limitations, and responsible beekeeping practices you can trust.'
  const faqs = [
    { q: 'Is Ugandan honey certified organic?', a: 'Certification is rare. We focus on residue testing, remote forage zones, and careful handling to achieve organic‑level outcomes.' },
    { q: 'Can you label honey organic without certification?', a: 'We avoid using the term as a claim unless certified. Instead, we document practices and lab results.' },
    { q: 'How can I buy responsibly made honey?', a: 'Choose transparent producers with traceability, testing, and clear handling standards.' },
  ]
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const blogJsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
    datePublished: '2025-01-18', dateModified: '2025-01-18',
    author: { '@type': 'Organization', name: 'Humble Beeing' }, publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497640/IMG_0095_zdx7pv.jpg', mainEntityOfPage: { '@type': 'WebPage' },
  }

  return (
    <Box bg={'#FFF2D7'} color={'#000819'} minH="100vh" fontFamily={'var(--font-hanken)'}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd]} />
      <HeroSection title={title} subtitle="Straight talk from the apiary instead of marketing fog" bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497299/IMG_0111_m68vis.jpg'} overlay py={{ base: 16, md: 24 }} />
      <Container maxW="6xl" px={{ base: 12, md: 20 }} py={{ base: 12, md: 20 }} bg={'#FFF2D7'} rounded={{ base: 'none', lg: '4xl' }}>
        <VStack align="start" spacing={6}>
          <Heading as="h2" size="lg">The certification reality</Heading>
          <Text>Organic honey certification sounds simple until you realise bees commute further than most Kampala motorists. Standards demand a pesticide-free radius of up to five kilometres. We map every apiary, monitor neighbouring farms, and keep buffer agreements with communities around Hoima and Fort Portal. A third-party auditor from the National Organic Movement of Uganda reviews our logs annually as we progress toward formal EU certification.</Text>

          <Heading as="h2" size="lg">Safeguards we already enforce</Heading>
          <Box as="ul" pl={6} sx={{ listStyleType: 'disc', '& > li': { marginBottom: '10px' } }}>
            <Box as="li"><b>Remote forage buffers:</b> hives sit in woodland corridors where chemical inputs are either banned or tightly controlled.</Box>
            <Box as="li"><b>Quarterly residue testing:</b> accredited labs screen for pesticides, antibiotics, and heavy metals; results feed into our transparency report.</Box>
            <Box as="li"><b>Beekeeper coaching:</b> farmers complete our Level II organic management course covering hive treatments, forage mapping, and harvest hygiene.</Box>
            <Box as="li"><b>Equipment protocol:</b> stainless extractors, food-grade barrels, and no plastic comb foundation keep contamination at bay.</Box>
          </Box>

          <Heading as="h2" size="lg">How to fact-check “organic” claims</Heading>
          <Text>A true organic dossier includes certificates, field audit notes, lab reports, and beekeeper training records. Ask for all of it. If you are handed a poetic brochure instead, consider that your red flag. We open our documentation, invite site visits, and publish summaries on <Link href="/impact-and-sustainability">Impact & Sustainability</Link> because trust thrives on daylight.</Text>

          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Heading as="h2" size="lg">FAQs</Heading>
          <FaqAccordion items={faqs} />
          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Text>Need a deeper dive? Contact us for the latest audit packs or join our next farm visit via <Link href="/contact-and-connect">Contact & Connect</Link>.</Text>
        </VStack>
      </Container>
    </Box>
  )
}

OrganicHoneyUganda.getLayout = (page) => (<PageLayout navbarProps={{ overlayOnHero: true }}>{page}</PageLayout>)
