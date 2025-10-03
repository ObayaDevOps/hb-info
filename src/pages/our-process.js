import Head from 'next/head'
import {
  Badge,
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Image,
  HStack,
} from '@chakra-ui/react'
import { CircleCheck } from 'lucide-react'

import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'

function OurProcessPage() {
  return (
    <Box bg="#FFF2D7" color="#000819" minH="100vh">
      <Head>
        <title>Our Process | Humble Beeing</title>
        <meta
          name="description"
          content="See how Humble Beeing sources raw honey and wax directly from smallholder farmers, preserves premium quality, and delivers natural health benefits."
        />
      </Head>

      <HeroSection
        title="Our Process"
        subtitle="From hive to jar with uncompromising care."
        bgImage="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757586042/HB_Beekeeper_Field_yvm7dn.png"
        overlay
        py={{ base: 16, md: 24 }}
      />

      <Container
        maxW="6xl"
        px={{ base: 10, md: 20 }}
        py={{ base: 12, md: 20 }}
        bg="#FFF2D7"
        rounded={{ base: 'none', lg: '4xl' }}
        mt={{ base: 0, md: 6 }}
      >
        <VStack align="start" spacing={6} pb={12}>
          <Heading as="h1" size="lg">
            Purposeful Sourcing
          </Heading>
          <Text fontSize={{ base: 'lg', md: 'xl' }}>
            We partner with smallholder beekeepers across Uganda, purchasing directly at fair, transparent rates that sustain
            their craft. Farmers receive training, equipment, and a guaranteed market so every harvest is handled with pride.
          </Text>
          <Text fontSize={{ base: 'lg', md: 'xl' }}>
            Our field team visits each cooperative throughout the season to monitor hive health, flowering cycles, and post-
            harvest handling. This close collaboration keeps terroir intact and ensures every jar tells the story of the
            beekeeper who raised it.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} pb={16}>
          {[
            {
              title: 'Harvest & Collection',
              description:
                'Combs are lifted at peak bloom to protect nectar character. We supply food-grade buckets and cold chains so the honey arrives untouched.',
              image:
                'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757586042/HB_Single_Origin_vvfwce.png',
            },
            {
              title: 'Slow Extraction',
              description:
                'Our Kampala hub uses gentle, centrifugal extraction and gravity settling. No heat, no blends—just raw honey retaining enzymes and pollen.',
              image:
                'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757585872/HB_Pouring_Honey_fypwmz.png',
            },
            {
              title: 'Wax Craftsmanship',
              description:
                'Beeswax caps are filtered through organic cotton, then poured into candles and balms that keep their natural golden sheen and aroma.',
              image:
                'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757586042/HB_Beeswax_qonpwy.png',
            },
            {
              title: 'Quality Assurance',
              description:
                'Each batch is tested for moisture, pollen diversity, and sensory notes. Only lots that meet our premium benchmarks are bottled.',
              image:
                'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757586042/HB_Infused_Honeys_zfy3c4.png',
            },
          ].map((item) => (
            <Stack key={item.title} spacing={4} align="start">
              <Image
                src={item.image}
                alt={item.title}
                borderRadius="3xl"
                objectFit="cover"
                width="100%"
                maxH={{ base: '280px', md: '260px' }}
              />
              <Heading as="h2" size="md">
                {item.title}
              </Heading>
              <Text fontSize={{ base: 'lg', md: 'lg' }}>{item.description}</Text>
            </Stack>
          ))}
        </SimpleGrid>

        <Box pb={16}>
          <Heading as="h2" size="lg" mb={6}>
            From Smallholder To Sanctuary
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {[
              {
                name: 'Direct Trade Guarantee',
                note: 'We pay farmers on collection day and reinvest a percentage into hive expansion and training.',
                badge: 'Fair Partnership',
              },
              {
                name: 'Traceable Batches',
                note: 'Every jar links back to the apiary, bloom cycle, and the beekeeper family who harvested it.',
                badge: 'Transparent',
              },
              {
                name: 'Cold Chain Logistics',
                note: 'Temperature-controlled transport prevents fermentation and preserves raw integrity.',
                badge: 'Freshness First',
              },
            ].map((item) => (
              <VStack key={item.name} align="start" spacing={3} borderWidth="1px" borderColor="#1A2234" borderRadius="xl" p={6}>
                <Badge variant="subtle" colorScheme="orange">
                  {item.badge}
                </Badge>
                <Heading as="h3" size="md">
                  {item.name}
                </Heading>
                <Text fontSize={{ base: 'lg', md: 'lg' }}>{item.note}</Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Box>

        <Box pb={12}>
          <Heading as="h2" size="lg" mb={6}>
            Health Benefits That Stay Intact
          </Heading>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={8} align="stretch">
            <VStack align="start" spacing={5} flex={1}>
              <Text fontSize={{ base: 'lg', md: 'xl' }}>
                Raw honey and beeswax deliver more than sweetness. Our low-intervention process preserves antioxidants, natural
                sugars, propolis, and micronutrients that support immunity and soothe digestion.
              </Text>
              <VStack spacing={4} align="stretch">
                {[
                  'Naturally antibacterial and antimicrobial, ideal for throat and skincare rituals.',
                  'Rich in amino acids and pollen that support everyday energy and recovery.',
                  'Beeswax burns cleanly, adding negative ions that can help purify indoor air.',
                  'Enzyme activity remains high thanks to zero heat pasteurization.',
                ].map((point) => (
                  <HStack key={point} align="start" spacing={3}>
                    <CircleCheck color="#c77b30" size={20} style={{ marginTop: '4px' }} />
                    <Text fontSize={{ base: 'lg', md: 'lg' }}>{point}</Text>
                  </HStack>
                ))}
              </VStack>
            </VStack>
            <VStack align="start" spacing={5} flex={1} justify="center">
              <Heading as="h3" size="md">
                Every Jar, Premium by Design
              </Heading>
              <Text fontSize={{ base: 'lg', md: 'lg' }}>
                We bottle in micro-lots to celebrate harvest nuance. Labels include bloom notes, beekeeper collectives, and
                best-before dates so you always know exactly what you are pouring.
              </Text>
              <Box w="full" h="1px" bg="rgba(0, 8, 25, 0.2)" />
              <Text fontSize={{ base: 'lg', md: 'lg' }}>
                Our wax artisans hand-finish each candle and balm, ensuring the same premium quality across our full range of
                hive goods.
              </Text>
            </VStack>
          </Stack>
        </Box>

        <Box bg="rgba(0, 8, 25, 0.06)" borderRadius="3xl" p={{ base: 6, md: 10 }}>
          <HStack align="start" spacing={{ base: 4, md: 8 }} flexWrap="wrap">
            <VStack align="start" spacing={3} flex={1} minW="240px">
              <Heading as="h2" size="lg">
                Sustainability In Action
              </Heading>
              <Text fontSize={{ base: 'lg', md: 'lg' }}>
                Reinvesting in small farms protects Shea corridors, boosts biodiversity, and keeps rural livelihoods thriving.
              </Text>
            </VStack>
            <VStack spacing={3} align="stretch" flex={1} minW="240px">
              {[
                'Regenerative apiary training to reduce deforestation pressure.',
                'Pollinator-friendly planting kits supplied to partner farmers.',
                'Revenue shares support education and community health programs.',
              ].map((point) => (
                <HStack key={point} align="start" spacing={3}>
                  <CircleCheck color="#c77b30" size={20} style={{ marginTop: '4px' }} />
                  <Text fontSize={{ base: 'md', md: 'lg' }}>{point}</Text>
                </HStack>
              ))}
            </VStack>
          </HStack>
        </Box>
      </Container>
    </Box>
  )
}

OurProcessPage.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
)

export default OurProcessPage
