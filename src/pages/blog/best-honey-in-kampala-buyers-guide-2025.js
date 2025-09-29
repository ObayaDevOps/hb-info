import Link from 'next/link'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import FaqAccordion from '@/components/FaqAccordion'

export default function BestHoneyKampala() {
  const title = 'Best Honey in Kampala (2025 Buyer’s Guide)'
  const description = 'Compare purity, taste, price, and where to buy honey in Kampala — a practical, lab-aware guide to finding the best Ugandan honey.'
  const faqs = [
    {
      q: 'What is the best honey in Kampala?',
      a: 'Look for raw, single-origin Ugandan honey with transparent batch details and residue testing. Taste and consistency across batches also matter.'
    },
    {
      q: 'Where can I buy pure honey in Kampala?',
      a: 'From verified stockists and direct delivery. See our stockists and delivery options for reliable access across Kampala.'
    },
    {
      q: 'How do I know honey is pure?',
      a: 'Home tests are imperfect. The strongest signal is traceability plus lab analysis for adulteration, moisture, and residues.'
    },
    {
      q: 'Is raw honey safe?',
      a: 'Yes for most adults. It should not be given to infants under 12 months. Store sealed and away from heat to preserve enzymes and aroma.'
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
        subtitle="Criteria, tasting notes, and where to buy in Kampala"
        bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757451447/IMG_0203_s6bliw.jpg'}
        overlay
        py={{ base: 16, md: 24 }}
      />

      <Container maxW="6xl" px={{ base: 12, md: 20 }} py={{ base: 12, md: 20 }} bg={'#FFF2D7'} rounded={{ base: 'none', lg: '4xl' }}>
        <VStack align="start" spacing={6}>
          <Text fontSize={{ base: 'lg', md: 'xl' }}>
            “Best” honey balances purity, aroma, and provenance. In Kampala, we recommend prioritising raw, single‑origin Ugandan honey with
            batch‑level traceability, moisture under ~18.5%, and independent checks for adulteration and residues. Taste preferences vary, but
            floral sources like pine, coffee blossom, or shea produce distinct profiles that pair beautifully with tea, pastry, and cheese.
          </Text>

          <Heading as="h2" size="lg">How to evaluate honey quality</Heading>
          <Box as="ul" pl={6} sx={{ listStyleType: 'disc', '& > li': { marginBottom: '8px' } }}>
            <Box as="li"><b>Purity & testing:</b> ask for residue and adulteration screening; moisture under ~18.5% for shelf stability.</Box>
            <Box as="li"><b>Traceability:</b> single‑origin batches with harvest region and season improve consistency and flavour.</Box>
            <Box as="li"><b>Raw handling:</b> gentle filtration, no overheating; preserves enzymes, pollen, and volatile aromas.</Box>
            <Box as="li"><b>Taste & aroma:</b> natural notes (floral, woody, citrus) without harsh aftertastes or burnt tones.</Box>
            <Box as="li"><b>Crystallisation:</b> natural and expected; indicates minimal processing. Re‑liquefy gently in warm water.</Box>
          </Box>

          <Heading as="h2" size="lg">Floral profiles to try in Uganda</Heading>
          <Text>Expect brighter citrus on orange blossom, warm resin and spice in pine, and creamy softness from shea blossom.</Text>

          <Heading as="h2" size="lg">Where to buy in Kampala</Heading>
          <Text>
            Prefer verified stockists and direct delivery. See our guide: {' '}
            <Link href="/blog/where-to-buy-honey-in-kampala-stockists-and-delivery">Where to Buy Honey in Kampala</Link>. For bulk/B2B, visit {' '}
            <Link href="/wholesale-and-partnerships">Wholesale & Partnerships</Link>.
          </Text>

          <Heading as="h2" size="lg">Price vs value</Heading>
          <Text>
            Premium honey costs more because of remote apiaries, careful handling, and testing. If a price seems too low for “raw, premium” claims,
            scrutinise the provenance and lab transparency.
          </Text>

          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Heading as="h2" size="lg">FAQs</Heading>
          <FaqAccordion items={faqs} />

          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Text>
            Ready to taste? Explore our latest batches or request a guided tasting. For chefs and retailers, see {' '}
            <Link href="/wholesale-and-partnerships">Wholesale</Link> or {' '}
            <Link href="/contact-and-connect">Contact & Connect</Link>.
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
