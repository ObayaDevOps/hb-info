import Head from 'next/head';
import SEO from '@/components/SEO';
import Link from 'next/link';
import { Box, Container, Heading, Text, VStack, SimpleGrid, Badge, Input } from '@chakra-ui/react';
import HeroSection from '@/components/sections/HeroSection';
import PageLayout from '@/components/layouts/PageLayout';
// Layout supplies Navbar/Footer
import StyledCard from '@/components/StyledCard';

const categories = [
  { slug: 'beekeeping', name: 'Beekeeping Knowledge' },
  { slug: 'recipes', name: 'Recipes' },
  { slug: 'impact-stories', name: 'Impact Stories' },
  { slug: 'sustainability', name: 'Sustainability Insights' },
];

const posts = [
  { slug: 'best-honey-in-kampala-buyers-guide-2025', title: 'Best Honey in Kampala (2025 Buyer’s Guide)', category: 'beekeeping' },
  { slug: 'where-to-buy-honey-in-kampala-stockists-and-delivery', title: 'Where to Buy Honey in Kampala: Stockists and Delivery', category: 'beekeeping' },
  { slug: 'raw-honey-uganda-benefits-and-buying-guide', title: 'Raw Honey in Uganda: Benefits and Buying Guide', category: 'beekeeping' },
  { slug: 'how-to-store-honey-in-kampala-heat-and-humidity-tips', title: 'How to Store Honey in Kampala: Heat and Humidity Tips', category: 'beekeeping' },
  { slug: 'premium-honey-uganda-what-makes-it-worth-it', title: 'Premium Honey in Uganda: What Makes It Worth It?', category: 'beekeeping' },
  { slug: 'how-we-test-honey-purity-in-uganda-lab-and-field', title: 'How We Test Honey Purity in Uganda: Lab and Field', category: 'sustainability' },
  { slug: 'organic-honey-in-uganda-what-it-really-means', title: 'Organic Honey in Uganda: What It Really Means', category: 'sustainability' },
  { slug: 'specialist-honey-for-chefs-in-kampala-pairings-and-uses', title: 'Specialist Honey for Chefs in Kampala: Pairings and Uses', category: 'beekeeping' },
  { slug: 'wholesale-honey-kampala-suppliers-guide', title: 'Wholesale Honey in Kampala: Supplier’s Guide', category: 'wholesale' },
  { slug: 'ugandan-gift-ideas-honey-and-candle-gift-sets', title: 'Ugandan Gift Ideas: Honey and Candle Gift Sets', category: 'gifts' },
  { slug: 'beeswax-candles-uganda-clean-burn-guide', title: 'Beeswax Candles in Uganda: Clean Burn Guide', category: 'candles' },
  { slug: 'scented-candles-uganda-fragrance-guide-and-room-pairings', title: 'Scented Candles in Uganda: Fragrance Guide and Room Pairings', category: 'candles' },
];

export default function BlogPage() {
  return (
    <Box bg={'#FFF2D7'}color={'#000819'} minH="100vh">
      <SEO
        title="Blog"
        description="Beekeeping knowledge, buyer guides, Kampala stockists, candle care, gifting ideas, and sustainability insights."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'The Hive Journal',
        }}
      />

      {/* Hero */}
      <HeroSection
        title="The Hive Journal"
        subtitle="Thought leadership, field notes, and chef-worthy recipes."
        bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497640/IMG_0095_zdx7pv.jpg'}
        overlay
        py={{ base: 16, md: 24 }}
      />

      <Container
        maxW="container.xl"
        px={{ base: 12, md: 20 }}
        py={{ base: 16, md: 20 }}
        bg={'#FFF2D7'}
        rounded={{ base: 'none', lg: '4xl' }}
        // shadow={{ base: 'none', lg: 'xl' }}
      >
        <VStack align="start" spacing={6}>
          <Heading as="h1" size="3xl">Blog Articles</Heading>
          <Text color="#000819">Read stories from our beekeepers, explore pairings, and dive into sustainability insights.</Text>

          {/* Category Filter (UI only) */}
          <VStack align="start" spacing={3} w="full">
            <Box as="select" maxW={{ base: 'full', md: 'sm' }} borderWidth="1px" borderColor="#1A2234" borderRadius="md" p={2} bg="white" color="#000819">
              <option value="">All categories</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>{c.name}</option>
              ))}
            </Box>
            <Input placeholder="Search posts…"  maxW={{ base: 'full', md: 'sm' }} border="2px" borderColor="black" />
          </VStack>

          {/* Posts */}
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8} w="full" pt={4}>
            {posts.map((p) => (
              <StyledCard key={p.slug}>
                <VStack align="start" spacing={2} p={4}>
                  <Badge variant="outline" borderColor="#000819" color="#000819">
                    {categories.find((c) => c.slug === p.category)?.name}
                  </Badge>
                  <Link href={`/blog/${p.slug}`}><Text fontWeight="600">{p.title}</Text></Link>
                  <Text color="#000819" fontSize="sm">SEO-optimized snippet with keywords like African luxury honey, sustainable beeswax candles, traceable honey Uganda.</Text>
                </VStack>
              </StyledCard>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

    </Box>
  );
}

BlogPage.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
)
