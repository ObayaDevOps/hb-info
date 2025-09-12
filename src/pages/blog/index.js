import Head from 'next/head';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Box, Container, Heading, Text, VStack, SimpleGrid, Badge, Input, Image } from '@chakra-ui/react';
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
  {
    slug: 'welcome-to-the-hive',
    title: 'Welcome to the Hive',
    category: 'beekeeping',
    image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757451447/IMG_0203_s6bliw.jpg',
  },
  {
    slug: 'citrus-honey-madeleines',
    title: 'Citrus Honey Madeleines',
    category: 'recipes',
    image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497640/IMG_0095_zdx7pv.jpg',
  },
];

export default function BlogPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');

  const filteredPosts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const matchesCategory = !category || p.category === category;
      const matchesQuery = !q || p.title.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <Box bg={'#FFF2D7'}color={'#000819'} minH="100vh" fontFamily={'var(--font-hanken)'}>
      <Head>
        <title>Blog | Humble Beeing</title>
        <meta name="description" content="Beekeeping knowledge, recipes, impact stories, and sustainability insights." />
      </Head>

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

          {/* Filters */}
          <VStack align="start" spacing={3} w="full">
            <Box
              as="select"
              maxW={{ base: 'full', md: 'sm' }}
              borderWidth="1px"
              borderColor="#1A2234"
              borderRadius="md"
              p={2}
              bg="white"
              color="#000819"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              aria-label="Filter by category"
            >
              <option value="">All categories</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>{c.name}</option>
              ))}
            </Box>
            <Input
              placeholder="Search posts…"
              maxW={{ base: 'full', md: 'sm' }}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search posts"
              borderWidth="1px"
              borderColor="#1A2234"
              bg="white"
              color="#000819"
            />
          </VStack>

          {/* Posts */}
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8} w="full" pt={4}>
            {filteredPosts.length === 0 && (
              <Box gridColumn={{ md: '1 / -1' }} color="#000819">
                No posts match your filters.
              </Box>
            )}
            {filteredPosts.map((p) => (
              <StyledCard key={p.slug}>
                {p.image && (
                  <Image
                    src={p.image}
                    alt={p.title}
                    w="full"
                    h="180px"
                    objectFit="cover"
                  />
                )}
                <VStack align="start" spacing={2} p={4}>
                  <Badge variant="solid" bg="#000819" color="white">
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
