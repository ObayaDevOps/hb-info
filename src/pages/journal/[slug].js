import Head from 'next/head';
import { useRouter } from 'next/router';
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BlogPostPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Box bg={'#f5cb81'} color={'#000819'} minH="100vh">
      <Head>
        <title>{slug ? `${slug.replace(/-/g, ' ')}` : 'Journal Post'} | The Humble Beeing</title>
        <meta name="description" content="Journal article from The Humble Beeing." />
      </Head>
      <Navbar bg={{ base: '#f5cb81', lg: 'none' }} />

      <Container maxW="container.md" px={{ base: 6, md: 8 }} py={{ base: 10, md: 16 }}>
        <VStack align="start" spacing={6}>
          <Heading as="h1" size="lg">{slug ? slug.replace(/-/g, ' ') : 'Loading…'}</Heading>
          <Text color="#000819">
            SEO focus: African luxury honey, sustainable beeswax candles, traceable honey Uganda.
          </Text>
          <Text>
            Post content goes here. Include high-quality images, internal links to Our Honey, Our Candles, and Impact & Sustainability pages, and clear CTAs where appropriate.
          </Text>
        </VStack>
      </Container>

      <Footer />
    </Box>
  );
}
