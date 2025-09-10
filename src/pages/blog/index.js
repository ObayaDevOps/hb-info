import Head from 'next/head';
import Link from 'next/link';
import { Box, Container, Heading, Text, VStack, SimpleGrid, Badge, Input } from '@chakra-ui/react';
// Layout supplies Navbar/Footer
import StyledCard from '@/components/StyledCard';

const categories = [
  { slug: 'beekeeping', name: 'Beekeeping Knowledge' },
  { slug: 'recipes', name: 'Recipes' },
  { slug: 'impact-stories', name: 'Impact Stories' },
  { slug: 'sustainability', name: 'Sustainability Insights' },
];

const posts = [
  { slug: 'welcome-to-the-hive', title: 'Welcome to the Hive', category: 'beekeeping' },
  { slug: 'citrus-honey-madeleines', title: 'Citrus Honey Madeleines', category: 'recipes' },
];

export default function BlogPage() {
  return (
    <Box bg={'#f5cb81'} color={'#000819'} minH="100vh">
      <Head>
        <title>Blog | Humble Beeing</title>
        <meta name="description" content="Beekeeping knowledge, recipes, impact stories, and sustainability insights." />
      </Head>

      <Container maxW="container.xl" px={{ base: 6, md: 8 }} py={{ base: 10, md: 16 }}>
        <VStack align="start" spacing={6}>
          <Heading as="h1" size="lg">Blog</Heading>
          <Text color="#000819">Thought leadership, field notes, and recipes.</Text>

          {/* Category Filter (UI only) */}
          <VStack align="start" spacing={3} w="full">
            <Box as="select" maxW={{ base: 'full', md: 'sm' }} borderWidth="1px" borderColor="#1A2234" borderRadius="md" p={2} bg="white" color="#000819">
              <option value="">All categories</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>{c.name}</option>
              ))}
            </Box>
            <Input placeholder="Search posts…" maxW={{ base: 'full', md: 'sm' }} />
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
