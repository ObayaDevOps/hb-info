import Link from 'next/link'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import FaqAccordion from '@/components/FaqAccordion'

export default function WhereToBuyHoneyKampala() {
  const title = 'Where to Buy Honey in Kampala: Stockists and Delivery'
  const description = 'Find trusted places to buy honey in Kampala with neighborhood stockists, hours, and Kampala-wide delivery options.'
  const faqs = [
    { q: 'Do you deliver across Kampala?', a: 'Yes — we offer same‑day or next‑day delivery across central Kampala and nearby neighborhoods depending on cut‑off times.' },
    { q: 'Which neighborhoods do you cover?', a: 'Kololo, Nakasero, Kabalagala, Muyenga, Bugolobi, Ntinda, Naguru, and more. Contact us for out‑of‑area requests.' },
    { q: 'Where can I pick up in person?', a: 'See listed stockists or contact us to arrange pick‑up at our Kampala HQ during business hours.' },
    { q: 'Do stockists carry all varietals?', a: 'Selection varies by store. For specific batches or varietals, we recommend ordering direct for best availability.' },
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
        subtitle="Neighborhood stockists, pick‑up, and Kampala‑wide delivery"
        bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497289/IMG_0214_ma3gau.jpg'}
        overlay
        py={{ base: 16, md: 24 }}
      />

      <Container maxW="6xl" px={{ base: 12, md: 20 }} py={{ base: 12, md: 20 }} bg={'#FFF2D7'} rounded={{ base: 'none', lg: '4xl' }}>
        <VStack align="start" spacing={6}>
          <Heading as="h2" size="lg">Trusted Kampala stockists</Heading>
          <Box as="ul" pl={6} sx={{ listStyleType: 'disc', '& > li': { marginBottom: '8px' } }}>
            <Box as="li">Latitude 0 Hotel — Kololo/Nakasero</Box>
            <Box as="li">Le Gourmet Delicatessen — Muyenga/Kabalagala</Box>
            <Box as="li">Yujo Izakaya — Nakasero</Box>
            <Box as="li">Coffee At Last — Muyenga</Box>
            <Box as="li">32° East — Kansanga</Box>
            <Box as="li">Farm to Table — Various locations</Box>
          </Box>

          <Heading as="h2" size="lg">Kampala delivery</Heading>
          <Text>Same‑day or next‑day delivery depending on time and location. Fees vary by zone; bulk and subscription discounts available.</Text>

          <Heading as="h2" size="lg">Tips for getting the varietal you want</Heading>
          <Box as="ul" pl={6} sx={{ listStyleType: 'disc', '& > li': { marginBottom: '8px' } }}>
            <Box as="li">For specific floral notes (e.g., pine, shea, coffee blossom), order direct for batch availability.</Box>
            <Box as="li">Tell us how you use honey (tea, pastry, cheese) to recommend a profile.</Box>
            <Box as="li">For gifts or corporate orders, ask for curated sets and cards.</Box>
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
