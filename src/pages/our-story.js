import Head from 'next/head';
import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Avatar, Badge, Image } from '@chakra-ui/react';
import HeroSection from '@/components/sections/HeroSection';
import PageLayout from '@/components/layouts/PageLayout';

export default function AboutPage() {
  return (
    <Box bg={'#FFF2D7'} color={'#000819'} minH="100vh">
      <Head>
        <title>Our Story | Humble Beeing</title>
        <meta name="description" content="Our story, mission & vision, team, and milestones at Humble Beeing." />
      </Head>
      {/* Hero */}
      <HeroSection
        title="Our Story"
        subtitle="A Ugandan family brand crafting luxury honey with purpose."
        bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757495003/IMG_0291_pkvi7q.jpg'}
        overlay
        py={{ base: 16, md: 24 }}
      >
        <Text mt={4} maxW="2xl" color="white" fontSize={{base:"lg", md: "lg"}}>
          From hive to table, we pair elevated taste with measurable impact across communities and ecosystems.
        </Text>
      </HeroSection>

      <Container
        maxW="6xl"
        px={{ base: 12, md: 20 }}
        py={{ base: 12, md: 20 }}
        bg={'#FFF2D7'}
        rounded={{ base: 'none', lg: '4xl' }}
        // shadow={{ base: 'none', lg: 'xl' }}
        mt={{ base: 0, md: 6 }}
      >
        {/* Our Story */}
        <VStack align="start" spacing={6} pb={12}>
          {/* <Heading as="h1" size="lg">Our Story</Heading> */}

          <Text fontSize={{base:"lg", md: "xl"}} color="#000819">
            From London finance to Uganda’s wild landscapes — our founder set out to build a luxury brand that regenerates nature and livelihoods. Humble Beeing pairs elevated taste with measurable impact, working directly with beekeepers across biodiverse regions to bring you single-origin and infused honeys, and pure beeswax candles.
          </Text>
          <Text fontSize={{base:"lg", md: "xl"}} color="#000819">
            Today, we’re proud to remain 100% Ugandan-owned, championing traceability, fair pricing, and long-term partnerships with smallholder farmers.
          </Text>
        </VStack>

      <Box pb={8}>
        <Image
            src="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757585367/HB_Tasting_Letaru_2_axwfee.png"
            alt="Honey tasting at Humble Beeing HQ"
            borderRadius="3xl"
            objectFit="cover"
            width="100%"
            maxH={{ base: '280px', md: '420px' }}
          />
          </Box>

        {/* Mission & Vision and Our Why */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={12} pb={12}>
          <VStack align="start" spacing={6} p={2}>
            <Heading as="h2" size="lg">Mission</Heading>
            <Text fontSize={{base:"lg", md: "xl"}} color="#000819">Craft luxury products that deliver sustainable income for beekeepers while restoring ecosystems.</Text>
          </VStack>
          <VStack align="start" spacing={6} p={2}>
            <Heading as="h2" size="lg">Vision</Heading>
            <Text  fontSize={{base:"lg", md: "xl"}}color="#000819">Become Africa’s most trusted luxury honey and beeswax brand, synonymous with quality, traceability, and regeneration.</Text>
          </VStack>
          <VStack align="start" spacing={6} p={2}>
            <Heading as="h2" size="lg">Our Why</Heading>
            <Text  fontSize={{base:"lg", md: "xl"}} color="#000819">We believe commerce can fund conservation. Every jar supports biodiversity corridors, protects Shea trees, and uplifts communities.</Text>
          </VStack>
        </SimpleGrid>

        {/* Meet the Team */}
        <VStack align="start" spacing={6} pb={12}>
          <Heading as="h2" size={{base:"lg", md: "xl"}}>Meet the Team</Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8} w="full">
            {[1, 2, 3].map((i) => (
              <HStack key={i} spacing={4} align="flex-start" borderWidth="1px" borderColor="#1A2234" borderRadius="md" p={4} mr={4} mt={{base:4, md: 'none'}}>
                <Avatar.Root>
                  <Avatar.Fallback>TM</Avatar.Fallback>
                </Avatar.Root>
                <VStack align="start" spacing={1}>
                  <Text fontWeight="600">Team Member {i}</Text>
                  <Badge variant="outline" borderColor="#000819" color="#000819">Role</Badge>
                  <Text fontSize={{base:"lg", md: "lg"}} color="#000819">Short bio highlighting background in beekeeping, operations, or product development.</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </VStack>

        {/* Timeline of Milestones */}
        <VStack align="start" spacing={6} pb={4}>
          <Heading as="h2" size="lg">Timeline of Milestones</Heading>
          <VStack align="start" spacing={4}>
            {[
              { year: '2019', text: 'Founded in Uganda; first beekeeper trainings launched.' },
              { year: '2021', text: 'Introduced single-origin range with full traceability.' },
              { year: '2023', text: 'Scaled to 5,000 farmers; expanded biodiversity corridors.' },
            ].map((item) => (
              <HStack key={item.year} spacing={4}>
                <Badge colorScheme="purple">{item.year}</Badge>
                <Text  fontSize={{base:"lg", md: "xl"}} color="#000819">{item.text}</Text>
              </HStack>
            ))}
          </VStack>
        </VStack>
      </Container>
      
    </Box>
  );
}

AboutPage.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
)
