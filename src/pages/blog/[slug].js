import Head from 'next/head';
import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { Box, Container, Heading, Text, VStack, Badge, Image } from '@chakra-ui/react';
import HeroSection from '@/components/sections/HeroSection';
import PageLayout from '@/components/layouts/PageLayout';
// Layout supplies Navbar/Footer

export default function BlogPostPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Mock content source to mirror the blog index
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

  const post = useMemo(() => posts.find((p) => p.slug === slug), [slug]);
  const pageTitle = post?.title || (slug ? slug.replace(/-/g, ' ') : 'Blog Post');
  const tagName = post ? categories.find((c) => c.slug === post.category)?.name : undefined;

  return (
    <Box bg={'#FFF2D7'} color={'#000819'} minH="100vh" fontFamily={'var(--font-hanken)'}>
      <Head>
        <title>{pageTitle} | Humble Beeing</title>
        <meta name="description" content="Blog article from Humble Beeing." />
      </Head>

      {/* Hero */}
      <HeroSection
        title={pageTitle}
        subtitle={tagName || 'Insights from the field and the kitchen.'}
        bgImage={post?.image || 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757451447/IMG_0203_s6bliw.jpg'}
        overlay
        py={{ base: 16, md: 24 }}
      />

      <Container
        maxW="6xl"
        px={{ base: 12, md: 20 }}
        py={{ base: 12, md: 20 }}
        bg={'#FFF2D7'}
        rounded={{ base: 'none', lg: '4xl' }}
        mt={{ base: 0, md: 6 }}
      >
        <VStack align="start" spacing={6} pb={8}>
          {tagName && (
            <Badge variant="solid" bg="#000819" color="white">
              {tagName}
            </Badge>
          )}
          <Heading as="h1" size={{ base: 'lg', md: 'xl' }}>{pageTitle}</Heading>
          <Text fontSize={{ base: 'lg', md: 'xl' }} color="#000819">
            Intro paragraph for the article. Highlight key themes like African luxury honey, pure beeswax candles, and traceable sourcing in Uganda.
          </Text>
          <Text fontSize={{ base: 'lg', md: 'xl' }} color="#000819">
            Body content goes here. Include rich storytelling, expert tips, and links to Impact & Sustainability where relevant.
          </Text>
        </VStack>

        {post?.image && (
          <Box pb={8}>
            <Image
              src={post.image}
              alt={pageTitle}
              borderRadius="3xl"
              objectFit="cover"
              width="100%"
              maxH={{ base: '280px', md: '420px' }}
            />
          </Box>
        )}

        <VStack align="start" spacing={6}>
          <Text fontSize={{ base: 'lg', md: 'xl' }} color="#000819">
            Continue the story with supporting details, quotes, and data. Add CTAs to products or related posts.
          </Text>
          <Text fontSize={{ base: 'lg', md: 'xl' }} color="#000819">
            Wrap up with a conclusion and next steps for the reader.
          </Text>
        </VStack>
      </Container>

    </Box>
  );
}

BlogPostPage.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
)
