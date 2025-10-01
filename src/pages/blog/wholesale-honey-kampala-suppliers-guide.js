import Link from 'next/link'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import FaqAccordion from '@/components/FaqAccordion'

export default function WholesaleHoneyKampalaGuide() {
  const title = 'Wholesale Honey in Kampala: Supplier’s Guide'
  const description = 'Bulk raw honey supply in Kampala — MOQ, pricing tiers, lead times, packaging formats, and quality documentation for B2B buyers.'
  const faqs = [
    { q: 'What are your MOQs?', a: 'Varies by format. We supply food‑service packs and drum options. Contact us with volumes and frequency.' },
    { q: 'Do you provide lab documentation?', a: 'Yes. We summarise batch tests and share certificates as needed for procurement.' },
    { q: 'Can you support consistent flavour year‑round?', a: 'We plan harvests and hold safety stock to support menu consistency.' },
  ]
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const blogJsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
    datePublished: '2025-01-20', dateModified: '2025-01-20',
    author: { '@type': 'Organization', name: 'Humble Beeing' }, publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757622699/coffeatlastlgog_lsat63.png', mainEntityOfPage: { '@type': 'WebPage' },
  }
  return (
    <Box bg={'#FFF2D7'} color={'#000819'} minH="100vh" fontFamily={'var(--font-hanken)'}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd]} />
      <HeroSection title={title} subtitle="MOQ, logistics, documentation, and formats" bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757498617/IMG_0231_jpk3oz.jpg'} overlay py={{ base: 16, md: 24 }} />
      <Container maxW="6xl" px={{ base: 12, md: 20 }} py={{ base: 12, md: 20 }} bg={'#FFF2D7'} rounded={{ base: 'none', lg: '4xl' }}>
        <VStack align="start" spacing={6}>
          <Heading as="h2" size="lg">Key buying criteria</Heading>
          <Box as="ul" pl={6} sx={{ listStyleType: 'disc', '& > li': { marginBottom: '8px' } }}>
            <Box as="li">Batch documentation: origin, season, moisture, adulteration, residues.</Box>
            <Box as="li">Formats: food‑service packs, drums, private label options.</Box>
            <Box as="li">Lead times and delivery windows within Kampala.</Box>
          </Box>
          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Heading as="h2" size="lg">FAQs</Heading>
          <FaqAccordion items={faqs} />
          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Text>Request a quote via <Link href="/wholesale-and-partnerships">Wholesale & Partnerships</Link> or reach us at <Link href="/contact-and-connect">Contact & Connect</Link>.</Text>
        </VStack>
      </Container>
    </Box>
  )
}

WholesaleHoneyKampalaGuide.getLayout = (page) => (<PageLayout navbarProps={{ overlayOnHero: true }}>{page}</PageLayout>)
