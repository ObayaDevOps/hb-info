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
  {
    slug: 'best-honey-in-kampala-buyers-guide-2025',
    title: 'Which Honey in Kampala Should You Trust in 2025?',
    category: 'beekeeping',
    snippet: 'Compare Kampala’s most trusted African luxury honey jars with traceable honey Uganda data, tasting notes, and buyer red flags for 2025.',
  },
  {
    slug: 'where-to-buy-honey-in-kampala-stockists-and-delivery',
    title: 'Where Can You Buy Trustworthy Honey in Kampala Today?',
    category: 'beekeeping',
    snippet: 'Get the freshest African luxury honey and sustainable beeswax candles delivered in Kampala with this stockist map and delivery checklist.',
  },
  {
    slug: 'raw-honey-uganda-benefits-and-buying-guide',
    title: 'Why Do Serious Food Lovers in Uganda Seek Out Raw Honey Instead of the Squeeze Bottle?',
    category: 'beekeeping',
    snippet: 'Explore why chefs prefer raw African luxury honey for flavor, nutrition, and traceable honey Uganda sourcing straight from the apiary.',
  },
  {
    slug: 'how-to-store-honey-in-kampala-heat-and-humidity-tips',
    title: 'How Should You Store Honey in Kampala’s Heat Without Losing Its Magic?',
    category: 'beekeeping',
    snippet: 'Learn pro tips for keeping African luxury honey silky even in Kampala heat with airtight jars, shade placement, and traceable honey Uganda freshness cues.',
  },
  {
    slug: 'premium-honey-uganda-what-makes-it-worth-it',
    title: 'What Makes Premium Ugandan Honey Worth the Splurge?',
    category: 'beekeeping',
    snippet: 'Understand the craftsmanship, terroir, and lab testing that turn traceable honey Uganda harvests into premium African luxury honey.',
  },
  {
    slug: 'how-we-test-honey-purity-in-uganda-lab-and-field',
    title: 'How Do We Prove Ugandan Honey Is Pure Before It Reaches Your Table?',
    category: 'sustainability',
    snippet: 'Follow our lab and field protocols for certifying traceable honey Uganda batches, from moisture readings to beekeeper audits.',
  },
  {
    slug: 'organic-honey-in-uganda-what-it-really-means',
    title: 'Organic Honey in Uganda: What It Really Means',
    category: 'sustainability',
    snippet: 'Decode organic standards, forage zones, and regenerative practices behind truly traceable honey Uganda labels.',
  },
  {
    slug: 'specialist-honey-for-chefs-in-kampala-pairings-and-uses',
    title: 'Which Specialist Ugandan Honey Elevates Restaurant Menus in Kampala?',
    category: 'beekeeping',
    snippet: 'Discover chef-approved pairings that spotlight African luxury honey infusions and traceable honey Uganda provenance on fine-dining menus.',
  },
  {
    slug: 'wholesale-honey-kampala-suppliers-guide',
    title: 'Where Can Kampala Businesses Source Reliable Wholesale Honey?',
    category: 'wholesale',
    snippet: 'Navigate Kampala’s wholesale scene with supplier vetting tips, MOQ insights, and traceable honey Uganda certifications for retailers.',
  },
  {
    slug: 'ugandan-gift-ideas-honey-and-candle-gift-sets',
    title: 'What Are the Best Ugandan Honey and Candle Gifts for People Who Have Everything?',
    category: 'gifts',
    snippet: 'Build unforgettable hampers that pair African luxury honey flights with sustainable beeswax candles for elevated Ugandan gifting.',
  },
  {
    slug: 'beeswax-candles-uganda-clean-burn-guide',
    title: 'Are Beeswax Candles in Uganda Really Cleaner Than Paraffin Pillars?',
    category: 'candles',
    snippet: 'See why sustainable beeswax candles purify indoor air, burn longer, and complement African luxury honey rituals at home.',
  },
  {
    slug: 'scented-candles-uganda-fragrance-guide-and-room-pairings',
    title: 'Which Scented Candle Should You Light for Each Room in Kampala?',
    category: 'candles',
    snippet: 'Match sustainable beeswax candles to each room with fragrance layering tips inspired by African luxury honey terroirs.',
  },
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
              <Box p={2}>
              <StyledCard key={p.slug} p={2}>
                <VStack align="start" spacing={2} p={4}>
                  <Badge variant="solid" bg="#000819" color="#FFF2D7" borderColor="#000819">
                    {categories.find((c) => c.slug === p.category)?.name}
                  </Badge>
                  <Link href={`/blog/${p.slug}`}><Text fontWeight="600">{p.title}</Text></Link>
                  <Text color="#000819" fontSize="sm">
                    {p.snippet}
                  </Text>
                </VStack>
              </StyledCard>
              </Box>
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
