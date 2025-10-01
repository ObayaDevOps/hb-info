import Link from 'next/link'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import SEO from '@/components/SEO'
import FaqAccordion from '@/components/FaqAccordion'

export default function UgandanGiftIdeas() {
  const title = 'What Are the Best Ugandan Honey and Candle Gifts for People Who Have Everything?'
  const description = 'Gift sets curated by Humble Beeing’s team—packed with raw honey, beeswax candles, and local craftsmanship—for personal, corporate, and destination gifting.'
  const faqs = [
    { q: 'Do you offer corporate gifting?', a: 'Yes. We design branded sleeves, tasting cards, and delivery logistics for teams from 10 to 500 recipients.' },
    { q: 'Can I personalise a gift?', a: 'We add handwritten notes, engraved lids, and custom scent blends with two weeks’ lead time.' },
    { q: 'Do you deliver in Kampala?', a: 'Same-day delivery is available within central Kampala; next-day for Entebbe and Mukono. International shipping is fulfilled via partner couriers.' },
  ]
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const blogJsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
    datePublished: '2025-01-21', dateModified: '2025-01-21',
    author: { '@type': 'Organization', name: 'Humble Beeing' }, publisher: { '@type': 'Organization', name: 'Humble Beeing' },
    image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757451447/IMG_0203_s6bliw.jpg', mainEntityOfPage: { '@type': 'WebPage' },
  }
  return (
    <Box bg={'#FFF2D7'} color={'#000819'} minH="100vh" fontFamily={'var(--font-hanken)'}>
      <SEO title={title} description={description} jsonLd={[blogJsonLd, faqJsonLd]} />
      <HeroSection title={title} subtitle="Thoughtful, local, and beautifully packaged" bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497640/IMG_0095_zdx7pv.jpg'} overlay py={{ base: 16, md: 24 }} />
      <Container maxW="6xl" px={{ base: 12, md: 20 }} py={{ base: 12, md: 20 }} bg={'#FFF2D7'} rounded={{ base: 'none', lg: '4xl' }}>
        <VStack align="start" spacing={6}>
          <Heading as="h2" size="lg">How we curate each gift</Heading>
          <Text>Every set begins with small-batch honey from Hoima or Fort Portal, poured into UV-protective glass and paired with beeswax candles rolled and poured in Kampala. We add locally woven baskets, hand-printed cards, and sustainable cushioning so the unboxing feels as intentional as the contents. Your gift is assembled by the same team that supplies luxury hotels, which means alignment on quality and timing.</Text>

          <Heading as="h2" size="lg">Signature combinations</Heading>
          <Box as="ul" pl={6} sx={{ listStyleType: 'disc', '& > li': { marginBottom: '10px' } }}>
            <Box as="li"><b>Honey Flight Trio:</b> Pine, shea, and coffee blossom minis with tasting cards comparing flavour notes.</Box>
            <Box as="li"><b>Candle & Honey Duet:</b> 300 g raw honey plus a beeswax pillar scented with lemongrass or amber—ideal for housewarmings.</Box>
            <Box as="li"><b>Chef’s Hamper:</b> Premium eucalyptus honey, spiced nuts, and pairing suggestions for cheese boards.</Box>
            <Box as="li"><b>Corporate Suite:</b> Custom-branded sleeves, handwritten cards, and delivery routing managed by our logistics team.</Box>
          </Box>

          <Heading as="h2" size="lg">Occasions we handle often</Heading>
          <Text>From executive welcome hampers to wedding favours and destination event amenities, we manage fulfilment timelines, storage, and delivery so you can focus on relationships instead of ribbon lengths. International guests? We provide travel-safe packaging and documentation for carry-on allowances.</Text>

          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Heading as="h2" size="lg">FAQs</Heading>
          <FaqAccordion items={faqs} />
          <Box as="hr" borderColor="#000819" borderTopWidth="1px" w="full" />
          <Text>Brief us on your gifting project through <Link href="/contact-and-connect">Contact & Connect</Link>—we’ll share mood boards, pricing, and timelines within 24 hours.</Text>
        </VStack>
      </Container>
    </Box>
  )
}

UgandanGiftIdeas.getLayout = (page) => (<PageLayout navbarProps={{ overlayOnHero: true }}>{page}</PageLayout>)
