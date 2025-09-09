import Head from 'next/head';
import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Avatar, Badge } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <Box bg={'#f5cb81'} color={'#000819'} minH="100vh">
      <Head>
        <title>Our Story | The Humble Beeing</title>
        <meta name="description" content="Our story, mission & vision, team, and milestones at The Humble Beeing." />
      </Head>

      <Navbar bg={{ base: '#f5cb81', lg: 'none' }} />

      <Container maxW="container.xl" px={{ base: 6, md: 8 }} py={{ base: 10, md: 16 }}>
        {/* Our Story */}
        <VStack align="start" spacing={6} pb={12}>
          <Heading as="h1" size="lg">Our Story</Heading>
          <Text fontSize="md" color="#000819">
            From London finance to Uganda’s wild landscapes — our founder set out to build a luxury brand that regenerates nature and livelihoods. The Humble Beeing pairs elevated taste with measurable impact, working directly with beekeepers across biodiverse regions to bring you single-origin and infused honeys, and pure beeswax candles.
          </Text>
        </VStack>

        {/* Mission & Vision and Our Why */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} pb={12}>
          <VStack align="start" spacing={3}>
            <Heading as="h2" size="md">Mission</Heading>
            <Text color="#000819">Craft luxury products that deliver sustainable income for beekeepers while restoring ecosystems.</Text>
          </VStack>
          <VStack align="start" spacing={3}>
            <Heading as="h2" size="md">Vision</Heading>
            <Text color="#000819">Become Africa’s most trusted luxury honey and beeswax brand, synonymous with quality, traceability, and regeneration.</Text>
          </VStack>
          <VStack align="start" spacing={3}>
            <Heading as="h2" size="md">Our Why</Heading>
            <Text color="#000819">We believe commerce can fund conservation. Every jar supports biodiversity corridors, protects Shea trees, and uplifts communities.</Text>
          </VStack>
        </SimpleGrid>

        {/* Meet the Team */}
        <VStack align="start" spacing={6} pb={12}>
          <Heading as="h2" size="lg">Meet the Team</Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8} w="full">
            {[1, 2, 3].map((i) => (
              <HStack key={i} spacing={4} align="flex-start" borderWidth="1px" borderColor="#1A2234" borderRadius="md" p={4}>
                <Avatar.Root>
                  <Avatar.Fallback>TM</Avatar.Fallback>
                </Avatar.Root>
                <VStack align="start" spacing={1}>
                  <Text fontWeight="600">Team Member {i}</Text>
                  <Badge variant="outline" borderColor="#000819" color="#000819">Role</Badge>
                  <Text fontSize="sm" color="#000819">Short bio highlighting background in beekeeping, operations, or product development.</Text>
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
                <Text color="#000819">{item.text}</Text>
              </HStack>
            ))}
          </VStack>
        </VStack>
      </Container>

      <Footer />
    </Box>
  );
}
