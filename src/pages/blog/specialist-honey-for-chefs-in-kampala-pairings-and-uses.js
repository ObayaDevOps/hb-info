import Link from 'next/link'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import FaqAccordion from '@/components/FaqAccordion'

export default function SpecialistHoneyChefsKampala() {
  const title = 'Which Specialist Ugandan Honey Elevates Restaurant Menus in Kampala?'
  const description = 'Tasting notes, pairings, and reliable supply formats from Humble Beeing’s chef collaborations to help you build signature dishes.'
  const faqs = [
    { q: 'Can I get consistent flavour across batches?', a: 'Yes. We maintain single-origin lots with detailed batch cards so you can replicate dishes season after season.' },
    { q: 'Do you offer bulk formats?', a: 'Our food-service line comes in 1.5 kg pouches and 12 kg drums, with refrigerated delivery for quality assurance.' },
    { q: 'Can we co-develop menu items?', a: 'We run R&D tastings with kitchens, mixologists, and pastry teams—reach out to book a session at our Bugolobi lab.' },
  ]
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const blogJsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
    datePublished: '2025-01-19', dateModified: '2025-01-19',
    author: { '@type': 'Organization', name: 'Humble Beeing' }, publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757622463/latitude-logo-black_vswv88.png', mainEntityOfPage: { '@type': 'WebPage' },
  }

  return (
    <Box bg={'#FFF2D7'} color={'#000819'} minH="100vh" fontFamily={'var(--font-hanken)'}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd]} />
      <HeroSection title={title} subtitle="Field-sourced nectar with chef-approved consistency" bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497310/IMG_0100_nb3zq6.jpg'} overlay py={{ base: 16, md: 24 }} />
      <Container maxW="6xl" px={{ base: 12, md: 20 }} py={{ base: 12, md: 20 }} bg={'#FFF2D7'} rounded={{ base: 'none', lg: '4xl' }}>
        <VStack align="start" spacing={6}>
          <Heading as="h2" size="lg">Honey flights built with chefs</Heading>
          <Text>Our culinary team schedules quarterly cuppings with Kampala’s hotels and independent restaurants. We taste blind, document flavour arcs, and map each honey to menu applications. The result is a curated library—from resinous pine blossom for blue cheese pairings to buttery shea blossom for viennoiserie—that you can plug into your mise en place without guesswork.</Text>

          <Heading as="h2" size="lg">Pairings that earn their keep</Heading>
          <Box as="ul" pl={6} sx={{ listStyleType: 'disc', '& > li': { marginBottom: '10px' } }}>
            <Box as="li"><b>Pine blossom:</b> Resinous, savoury, brilliant for aged cheddar, blue cheese, or lacquered pork belly.</Box>
            <Box as="li"><b>Shea blossom:</b> Silky, floral, perfect for mille-feuille glazes, gelato swirls, and upscale brunch service.</Box>
            <Box as="li"><b>Coffee blossom:</b> Cocoa nib and citrus notes that elevate espresso martinis, cold brew, and tiramisu cream.</Box>
            <Box as="li"><b>Eucalyptus wildflower:</b> Herbaceous with a cooling finish—stir into vinaigrettes or brush on grilled fish.</Box>
          </Box>

          <Heading as="h2" size="lg">Formats built for service</Heading>
          <Text>We package single-origin lots in 1.5 kg pouches for pastry stations and 12 kg drums for commissary kitchens. Every delivery arrives with batch cards detailing moisture, flavour, and suggested pairings. Standing orders get priority allocation during peak season, so your menu doesn’t rely on wishful thinking.</Text>

          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Heading as="h2" size="lg">FAQs</Heading>
          <FaqAccordion items={faqs} />
          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Text>Book a tasting or request pricing through <Link href="/wholesale-and-partnerships">Wholesale & Partnerships</Link>. Prefer face time? Schedule a session at our Bugolobi lab via <Link href="/contact-and-connect">Contact & Connect</Link>.</Text>
        </VStack>
      </Container>
    </Box>
  )
}

SpecialistHoneyChefsKampala.getLayout = (page) => (<PageLayout navbarProps={{ overlayOnHero: true }}>{page}</PageLayout>)
