import Link from 'next/link'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import FaqAccordion from '@/components/FaqAccordion'

export default function WholesaleHoneyKampalaGuide() {
  const title = 'Where Can Kampala Businesses Source Reliable Wholesale Honey?'
  const description = 'Procurement insights from Humble Beeing—covering MOQs, pricing tiers, logistics, and documentation for restaurants, hotels, and retailers.'
  const faqs = [
    { q: 'What are your minimum order quantities?', a: 'Starting at 24 x 500 g jars or 12 kg drums; subscription clients can customise monthly draws.' },
    { q: 'Do you provide full lab documentation?', a: 'Every shipment includes moisture, adulteration, residue, and pollen reports, with original certificates available on request.' },
    { q: 'Can you hold safety stock?', a: 'Yes. We maintain buffer inventory in Kampala and plan harvest allocations quarterly so menus stay consistent.' },
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
          <Heading as="h2" size="lg">How we serve procurement teams</Heading>
          <Text>Our wholesale programme supports hotels, cafés, and specialty retailers with quarterly harvest planning, fixed pricing windows, and documented traceability. We assign an account manager to map your demand curve, prep sample kits, and align deliveries with production calendars so you never scramble for stock.</Text>

          <Heading as="h2" size="lg">What to expect in every shipment</Heading>
          <Box as="ul" pl={6} sx={{ listStyleType: 'disc', '& > li': { marginBottom: '10px' } }}>
            <Box as="li"><b>Documentation pack:</b> batch origin, moisture, LC-IRMS adulteration results, residue screens, and sensory notes.</Box>
            <Box as="li"><b>Packaging options:</b> 500 g retail jars, 1.5 kg food-service pouches, and 12 kg drums ready for kitchen decanting.</Box>
            <Box as="li"><b>Delivery windows:</b> same-week dispatch within Kampala, refrigerated logistics for temperature-sensitive orders.</Box>
          </Box>

          <Heading as="h2" size="lg">Pricing and supply planning</Heading>
          <Text>Volume discounts kick in at 48 retail units or 24 kg per month. We hedge pricing by contracting with partner apiaries ahead of season and can hold safety stock for up to six weeks. Subscription clients receive priority access to limited micro-batches like coffee blossom when demand spikes.</Text>

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
