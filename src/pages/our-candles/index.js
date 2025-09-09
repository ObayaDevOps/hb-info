import Head from 'next/head';
import { Box, Container, Heading, Text, VStack, SimpleGrid, HStack, Badge, Button, Image } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StyledCard from '@/components/StyledCard';

const scented = [
  { name: 'Lemongrass & Ginger' },
  { name: 'Lavender' },
  { name: 'Vanilla & Chamomile' },
];

const pure = [
  { name: 'Pure Beeswax Pillars' },
  { name: 'Molded Shapes' },
];

export default function CandlesPage() {
  return (
    <Box bg={'#f5cb81'} color={'#000819'} minH="100vh">
      <Head>
        <title>Our Candles | The Humble Beeing</title>
        <meta name="description" content="Luxury beeswax scented candles and pure beeswax pillars with eco packaging." />
      </Head>
      <Navbar bg={{ base: '#f5cb81', lg: 'none' }} />

      {/* Hero */}
      <Box bgImage="url('')" bgPos="center" bgSize="cover" py={{ base: 12, md: 20 }}>
        <Container maxW="container.xl" px={{ base: 6, md: 8 }}>
          <Heading as="h1" size="lg">Our Candles</Heading>
          <Text color="#000819" mt={3} maxW="2xl">
            Luxury beeswax candles that burn slowly, smell exquisite, and purify the air.
          </Text>
        </Container>
      </Box>

      <Container maxW="container.xl" px={{ base: 6, md: 8 }} py={{ base: 10, md: 16 }}>
        {/* Scented */}
        <VStack align="start" spacing={4} pb={8}>
          <Heading as="h2" size="md">Luxury Beeswax Scented Candles</Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
            {scented.map((c) => (
              <StyledCard key={c.name}>
                <VStack align="start" spacing={2} p={4}>
                  <Image src={'/file.svg'} alt={c.name} boxSize="64px" />
                  <Text fontWeight={600}>{c.name}</Text>
                  <Button size="sm" variant="outline" borderColor="#000819" color="#000819" _hover={{ bg: 'rgba(0, 8, 25, 0.08)' }}>View</Button>
                </VStack>
              </StyledCard>
            ))}
          </SimpleGrid>
        </VStack>

        {/* Pure Beeswax */}
        <VStack align="start" spacing={4} pb={8}>
          <Heading as="h2" size="md">Pure Beeswax Candles</Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
            {pure.map((c) => (
              <StyledCard key={c.name}>
                <VStack align="start" spacing={2} p={4}>
                  <Image src={'/file.svg'} alt={c.name} boxSize="64px" />
                  <Text fontWeight={600}>{c.name}</Text>
                  <Button size="sm" variant="outline" borderColor="#000819" color="#000819" _hover={{ bg: 'rgba(0, 8, 25, 0.08)' }}>View</Button>
                </VStack>
              </StyledCard>
            ))}
          </SimpleGrid>
        </VStack>

        {/* Benefits of Beeswax */}
        <VStack align="start" spacing={3} pb={8}>
          <Heading as="h2" size="md">Benefits of Beeswax vs. Paraffin/Soy</Heading>
          <Text color="#000819">Slow, even burn. Naturally emits negative ions that can help neutralize pollutants. Clean, warm glow with natural scent throw.</Text>
        </VStack>

        {/* Eco-packaging */}
        <VStack align="start" spacing={3} pb={4}>
          <Heading as="h2" size="md">Eco-packaging</Heading>
          <Text color="#000819">Artisan recycled boxes designed for gifting and minimal environmental footprint.</Text>
          <Button mt={2} as="a" href="#" target="_blank" bg="#000819" color="white" _hover={{ opacity: 0.9 }}>Shop now on ecommerce site</Button>
        </VStack>
      </Container>

      <Footer />
    </Box>
  );
}
