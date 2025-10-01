import Link from 'next/link'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import FaqAccordion from '@/components/FaqAccordion'

export default function WhereToBuyHoneyKampala() {
  const title = 'Where Can You Buy Trustworthy Honey in Kampala Today?'
  const description = 'Personal delivery routes, vetted stockists, and sourcing intel from Humble Beeing’s field team so you never guess where to find real Ugandan honey.'
  const faqs = [
    { q: 'Do you deliver across Kampala?', a: 'Yes. Orders placed before 3 p.m. ride out same day within central Kampala; evening orders arrive next day. We coordinate refrigerated transport for heat-sensitive gifts.' },
    { q: 'Which neighbourhoods are covered?', a: 'Kololo, Nakasero, Bugolobi, Muyenga, Kabalagala, Ntinda, Naguru, Kisementi, and Entebbe Road corridors. Reach out for tailored logistics beyond the ring road.' },
    { q: 'Can I pick up directly from Humble Beeing?', a: 'Absolutely—book a slot at our Bugolobi dispatch hub and we’ll have your batch card ready with tasting notes.' },
    { q: 'Do partners stock every floral varietal?', a: 'Selection rotates. If you want a specific batch (pine, coffee blossom, sunflower), order direct so we can reserve it before deliveries go out.' },
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
    datePublished: '2025-01-10',
    dateModified: '2025-01-10',
    author: { '@type': 'Organization', name: 'Humble Beeing' },
    publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497299/IMG_0111_m68vis.jpg',
    mainEntityOfPage: { '@type': 'WebPage' },
  }

  return (
    <Box bg={'#FFF2D7'} color={'#000819'} minH="100vh" fontFamily={'var(--font-hanken)'}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd]} />

      <HeroSection
        title={title}
        subtitle="Neighborhood stockists, pick-up points, and our own delivery vans"
        bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497289/IMG_0214_ma3gau.jpg'}
        overlay
        py={{ base: 16, md: 24 }}
      />

      <Container maxW="6xl" px={{ base: 12, md: 20 }} py={{ base: 12, md: 20 }} bg={'#FFF2D7'} rounded={{ base: 'none', lg: '4xl' }}>
        <VStack align="start" spacing={6}>
          <Heading as="h2" size="lg">How we vet every stockist</Heading>
          <Text>After our jars leave the apiary, we keep them on a short leash. Each retail partner signs cold-chain and display agreements, trains staff on batch traceability, and stores stock away from direct sunlight. We audit shelves twice a month—clipboards, refractometer, the works—because EEAT applies to real-world shelves too.</Text>

          <Heading as="h2" size="lg">Current partner locations (updated quarterly)</Heading>
          <Box as="ul" pl={6} sx={{ listStyleType: 'disc', '& > li': { marginBottom: '8px' } }}>
            <Box as="li">Good Glass, Bugolobi — our flagship stockist with full varietal range and tasting flights every first Saturday.</Box>
            <Box as="li">Endiro Coffee, Kololo — great for coffee blossom honey pairings alongside a cappuccino.</Box>
            <Box as="li">La Patisserie, Muyenga — keeps micro-batches ideal for dessert pairings and gift hampers.</Box>
            <Box as="li">The Food Library, Kisementi — rotating shelves featuring shea blossom and eucalyptus lots.</Box>
            <Box as="li">32° East, Kansanga — culture hub carrying limited runs for their artist community.</Box>
            <Box as="li">Select hotel boutiques (Latitude 0°, Emin Pasha) — concierge holds stock for guests and gifting emergencies.</Box>
          </Box>

          <Heading as="h2" size="lg">Our delivery routes, mapped</Heading>
          <Text>We dispatch from Bugolobi at 10 a.m. and 4 p.m. Riders use insulated boxes with tamper seals, and every parcel includes a batch card noting harvest region, moisture reading, and tasting notes. Corporate clients can schedule weekly standing orders; home subscribers get a courier text 30 minutes before arrival so you can put the kettle on.</Text>

          <Heading as="h2" size="lg">Securing the varietal you love</Heading>
          <Box as="ul" pl={6} sx={{ listStyleType: 'disc', '& > li': { marginBottom: '8px' } }}>
            <Box as="li">Reserve coveted batches (pine, shea, acacia) via direct order—stockists sell out of seasonal lots within days.</Box>
            <Box as="li">Tell us how you use honey. Tea, marinades, pastry, or cheese boards call for different aromatics and body.</Box>
            <Box as="li">Gifting? We handwrite tasting cards and can bundle with beeswax candles upon request. Nothing sabotages trust faster than a last-minute, anonymous jar.</Box>
          </Box>

          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Heading as="h2" size="lg">FAQs</Heading>
          <FaqAccordion items={faqs} />

          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Text>
            Ready to order? {' '}
            <Link href="/contact-and-connect">Contact & Connect</Link> for delivery and special requests. For wholesale/B2B, see {' '}
            <Link href="/wholesale-and-partnerships">Wholesale & Partnerships</Link>.
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}

WhereToBuyHoneyKampala.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
)
