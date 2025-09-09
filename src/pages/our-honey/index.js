import Head from 'next/head';
import Link from 'next/link';
import { Box, Container, Heading, Text, SimpleGrid, VStack, Button, Image } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StyledCard from '@/components/StyledCard';

const products = [
  { slug: 'pine-and-coffee-blossom', name: 'Pine & Coffee Blossom', type: 'Single-Origin', img: '/globe.svg' },
  { slug: 'shea-blossom', name: 'Shea Blossom', type: 'Single-Origin', img: '/globe.svg' },
  { slug: 'orange', name: 'Orange Infused', type: 'Infused', img: '/globe.svg' },
  { slug: 'lemon', name: 'Lemon Infused', type: 'Infused', img: '/globe.svg' },
  { slug: 'garlic', name: 'Garlic Infused', type: 'Infused', img: '/globe.svg' },
  { slug: 'chili', name: 'Chili Infused', type: 'Infused', img: '/globe.svg' },
  { slug: 'vanilla', name: 'Vanilla Infused', type: 'Infused', img: '/globe.svg' },
  { slug: 'rosemary', name: 'Rosemary Infused', type: 'Infused', img: '/globe.svg' },
  { slug: 'luxury-gift-boxes', name: 'Luxury Gift Boxes', type: 'Gift Set', img: '/globe.svg' },
];

export default function OurHoneyPage() {
  return (
    <Box bg={'#f5cb81'} color={'#000819'} minH="100vh">
      <Head>
        <title>Our Honey | The Humble Beeing</title>
        <meta name="description" content="Explore single-origin, infused honey, and luxury gift boxes from Uganda." />
      </Head>
      <Navbar bg={{ base: '#f5cb81', lg: 'none' }} />

      {/* Hero */}
      <Box bgImage="url('')" bgPos="center" bgSize="cover" py={{ base: 12, md: 20 }}>
        <Container maxW="container.xl" px={{ base: 6, md: 8 }}>
          <Heading as="h1" size="lg">Our Honey</Heading>
          <Text color="#000819" mt={3} maxW="2xl">
            Single-origin terroir and infused profiles crafted with care. Traceable, pesticide-free, and biodiversity-rich.
          </Text>
        </Container>
      </Box>

      {/* Product Grid */}
      <Container maxW="container.xl" px={{ base: 6, md: 8 }} py={{ base: 10, md: 16 }}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          {products.map((p) => (
            <StyledCard key={p.slug}>
              <VStack spacing={3} align="start" p={4}>
                <Image src={p.img} alt={p.name} boxSize="64px" />
                <Text fontWeight={600}>{p.name}</Text>
                <Text color="#000819" fontSize="sm">{p.type}</Text>
                <Link href={`/our-honey/${p.slug}`}>
                  <Button size="sm" variant="outline" borderColor="#000819" color="#000819" _hover={{ bg: 'rgba(0, 8, 25, 0.08)' }}>View</Button>
                </Link>
              </VStack>
            </StyledCard>
          ))}
        </SimpleGrid>

        {/* Educational Sub-section */}
        <VStack id="why-african" align="start" spacing={4} mt={16}>
          <Heading as="h2" size="md">Why Ugandan & African Honey is the Best</Heading>
          <Text color="#000819" maxW="3xl">
            Pesticide-free forage, diverse flora, and a unique terroir yield layered flavors and natural purity. Our supply chains prioritize low-intervention harvesting, cold filtering, and strict traceability.
          </Text>
        </VStack>
      </Container>

      <Footer />
    </Box>
  );
}
