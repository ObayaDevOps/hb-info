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
      <HeroSection title={title} subtitle="Straight talk on standards and outcomes" bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497299/IMG_0111_m68vis.jpg'} overlay py={{ base: 16, md: 24 }} />
      <Container maxW="6xl" px={{ base: 12, md: 20 }} py={{ base: 12, md: 20 }} bg={'#FFF2D7'} rounded={{ base: 'none', lg: '4xl' }}>
        <VStack align="start" spacing={6}>
          <Heading as="h2" size="lg">Certification vs practice</Heading>
          <Text>Certification can be complex for wide foraging ranges. We prioritise residue testing, remote forage zones, and beekeeper training to minimise contamination risks.</Text>
          <Heading as="h2" size="lg">What to look for</Heading>
          <Box as="ul" pl={6} sx={{ listStyleType: 'disc', '& > li': { marginBottom: '8px' } }}>
            <Box as="li">Transparent sourcing and batch traceability.</Box>
            <Box as="li">Lab results for adulteration and residues.</Box>
            <Box as="li">Clear handling standards and beekeeper support.</Box>
          </Box>
          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Heading as="h2" size="lg">FAQs</Heading>
          <FaqAccordion items={faqs} />
          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Text>Read more about our practices on <Link href="/impact-and-sustainability">Impact & Sustainability</Link> or contact us for documentation.</Text>
        </VStack>
      </Container>
    </Box>
  )
}

OrganicHoneyUganda.getLayout = (page) => (<PageLayout navbarProps={{ overlayOnHero: true }}>{page}</PageLayout>)
