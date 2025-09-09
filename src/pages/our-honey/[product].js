import Head from 'next/head';
import { useRouter } from 'next/router';
import { Box, Container, Heading, Text, VStack, HStack, Button, SimpleGrid, Image, Badge } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const productMap = {
  'pine-and-coffee-blossom': {
    title: 'Pine & Coffee Blossom',
    descriptor: 'Single-origin Ugandan honey with warm resin and cacao notes',
    notes: ['Pine resin', 'Cacao nib', 'Toasted nut'],
    pairsWith: ['Goat cheese', 'Roasted root veg', 'Dark breads'],
    origin: 'Harvested near mixed forest and coffee farms; cool nights, rich, slow nectars.',
  },
  'shea-blossom': {
    title: 'Shea Blossom',
    descriptor: 'Single-origin from Shea corridors with delicate floral sweetness',
    notes: ['Wildflower', 'Stone fruit', 'Light caramel'],
    pairsWith: ['Yogurt & granola', 'Herbal teas', 'Fresh citrus'],
    origin: 'From Shea tree corridors supporting biodiversity and community stewardship.',
  },
  orange: {
    title: 'Orange Infused',
    descriptor: 'Bright, citrus-lifted honey ideal for breakfast and bakes',
    notes: ['Candied peel', 'Citrus zest', 'Light blossom'],
    pairsWith: ['Pancakes', 'Olive oil cakes', 'Herbal teas'],
    origin: 'Infused with Ugandan citrus for a lively, sunny profile.',
  },
  lemon: {
    title: 'Lemon Infused',
    descriptor: 'Zesty and clean; balances sweetness with delicate acidity',
    notes: ['Meyer lemon', 'Lemon blossom', 'Citrus oil'],
    pairsWith: ['Ricotta toast', 'Seafood glazes', 'Iced teas'],
    origin: 'Infused with lemon for a refreshing and versatile character.',
  },
  garlic: {
    title: 'Garlic Infused',
    descriptor: 'Savory-sweet umami perfect for marinades and dressings',
    notes: ['Roasted garlic', 'Umami', 'Caramel'],
    pairsWith: ['Roast chicken', 'Vinaigrettes', 'Flatbreads'],
    origin: 'A chef-favorite infusion bringing depth to savory dishes.',
  },
  chili: {
    title: 'Chili Infused',
    descriptor: 'Gentle heat meets floral sweetness; a crowd-pleasing drizzle',
    notes: ['Red chili', 'Warm spice', 'Honeyed fruit'],
    pairsWith: ['Pizza', 'Fried chicken', 'Cheese boards'],
    origin: 'Balanced chili infusion for lift without overpowering heat.',
  },
  vanilla: {
    title: 'Vanilla Infused',
    descriptor: 'Silky vanilla warmth layered over floral honey',
    notes: ['Vanilla bean', 'Butterscotch', 'Cream'],
    pairsWith: ['Ice cream', 'French toast', 'Berries'],
    origin: 'Infused with real vanilla for a luxe dessert accent.',
  },
  rosemary: {
    title: 'Rosemary Infused',
    descriptor: 'Herbal-citrus complexity ideal for roasts and cheeses',
    notes: ['Piney herb', 'Lemon oil', 'Wildflower'],
    pairsWith: ['Lamb', 'Feta', 'Flatbreads'],
    origin: 'Infused with rosemary; aromatic and savory-leaning.',
  },
};

export default function ProductPage() {
  const router = useRouter();
  const { product } = router.query;
  const data = product ? productMap[product] : null;

  return (
    <Box bg={'#f5cb81'} color={'#000819'} minH="100vh">
      <Head>
        <title>{data ? `${data.title} | The Humble Beeing` : 'Product | The Humble Beeing'}</title>
        <meta name="description" content={data?.descriptor || 'Product from The Humble Beeing'} />
      </Head>
      <Navbar bg={{ base: '#f5cb81', lg: 'none' }} />

      <Container maxW="container.xl" px={{ base: 6, md: 8 }} py={{ base: 10, md: 16 }}>
        {data ? (
          <>
            {/* Hero area */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} alignItems="center" pb={8}>
              <Box>
                <Image src={'/globe.svg'} alt={data.title} boxSize={{ base: '200px', md: '320px' }} />
              </Box>
              <VStack align="start" spacing={3}>
                <Heading as="h1" size="lg">{data.title}</Heading>
                <Text color="#000819">{data.descriptor}</Text>
                <HStack spacing={2} wrap="wrap">
                  {data.notes.map((n) => (
                    <Badge key={n} colorScheme="purple" variant="subtle">{n}</Badge>
                  ))}
                </HStack>
                <Text fontWeight="600" pt={2}>Pairs with</Text>
                <HStack spacing={2} wrap="wrap">
                  {data.pairsWith.map((p) => (
                    <Badge key={p} borderColor="#000819" color="#000819" variant="outline">{p}</Badge>
                  ))}
                </HStack>
                <Button mt={4} bg="#000819" color="white" variant="solid" as="a" href="#" target="_blank" _hover={{ opacity: 0.9 }}>Shop Now</Button>
              </VStack>
            </SimpleGrid>

            {/* Provenance Story */}
            <VStack align="start" spacing={3} borderWidth="1px" borderColor="#1A2234" borderRadius="md" p={6}>
              <Heading as="h2" size="md">Provenance</Heading>
              <Text color="#000819">{data.origin}</Text>
            </VStack>
          </>
        ) : (
          <Text>Loading…</Text>
        )}
      </Container>

      <Footer />
    </Box>
  );
}
