import Link from 'next/link'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import FaqAccordion from '@/components/FaqAccordion'

export default function PremiumHoneyUganda() {
  const title = 'What Makes Premium Ugandan Honey Worth the Splurge?'
  const description = 'From remote forest apiaries to chef tastings, here is how Humble Beeing justifies the price tag on truly premium Ugandan honey.'
  const faqs = [
    { q: 'Why does premium honey command a higher price?', a: 'Remote forage zones, cold extraction, third-party testing, and artisan bottling add cost while protecting flavour and authenticity.' },
    { q: 'Is premium honey always raw?', a: 'Yes. Heat-treated honey can’t carry the aromatic complexity or enzyme activity that defines premium status.' },
    { q: 'How do I pick the right varietal?', a: 'Tell us the menu. We match floral profiles to tea, cheeses, pastry, or bar programs based on sensory notes from each batch.' },
  ]

  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const blogJsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
    datePublished: '2025-01-15', dateModified: '2025-01-15',
    author: { '@type': 'Organization', name: 'Humble Beeing' }, publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497733/IMG_0151_wrxcit.jpg', mainEntityOfPage: { '@type': 'WebPage' },
  }

  return (
    <Box bg={'#FFF2D7'} color={'#000819'} minH="100vh" fontFamily={'var(--font-hanken)'}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd]} />
      <HeroSection title={title} subtitle="Taste, texture, and trusted provenance" bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497768/IMG_0072_n3ab2i.jpg'} overlay py={{ base: 16, md: 24 }} />
      <Container maxW="6xl" px={{ base: 12, md: 20 }} py={{ base: 12, md: 20 }} bg={'#FFF2D7'} rounded={{ base: 'none', lg: '4xl' }}>
        <VStack align="start" spacing={6}>
          <Heading as="h2" size="lg">Where premium begins</Heading>
          <Text>Our highest-scoring lots come from apiaries tucked between forest reserves and coffee estates. Bees forage on wild eucalyptus, shea, and indigenous blossoms you can’t bottle at scale. Harvest teams pull frames at dawn, extract at ambient temperature, and log every batch with moisture readings and sensory notes. That obsessive fieldwork is the first, non-negotiable step toward premium quality.</Text>

          <Heading as="h2" size="lg">Quality checks that justify the price</Heading>
          <Box as="ul" pl={6} sx={{ listStyleType: 'disc', '& > li': { marginBottom: '10px' } }}>
            <Box as="li"><b>Lab analytics:</b> adulteration screens, diastase, HMF, and residue tests catch anything that shouldn’t be in your jar.</Box>
            <Box as="li"><b>Sensory panels:</b> chefs and sommeliers taste blind, scoring aroma, texture, and finish before any jar earns the premium label.</Box>
            <Box as="li"><b>Batch traceability:</b> QR-coded labels link to harvest location, beekeeper, and suggested pairings.</Box>
            <Box as="li"><b>Packaging discipline:</b> UV-protective glass, tamper seals, and batch cards keep quality intact long after dispatch.</Box>
          </Box>

          <Heading as="h2" size="lg">When premium honey makes the difference</Heading>
          <Text>Upgrade croissants with eucalyptus honey butter, glaze roast chicken with shea blossom richness, or finish a cheese board with pine honey’s resinous bite. Mixologists love its viscosity for balanced sours. In short: use premium honey when you want flavour to do the talking and shortcuts would taste like, well, shortcuts.</Text>

          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Heading as="h2" size="lg">FAQs</Heading>
          <FaqAccordion items={faqs} />
          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Text>For chef-grade batches and bulk formats, visit <Link href="/wholesale-and-partnerships">Wholesale & Partnerships</Link> or <Link href="/contact-and-connect">Contact & Connect</Link>.</Text>
        </VStack>
      </Container>
    </Box>
  )
}

PremiumHoneyUganda.getLayout = (page) => (<PageLayout navbarProps={{ overlayOnHero: true }}>{page}</PageLayout>)
