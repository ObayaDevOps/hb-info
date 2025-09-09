import Head from 'next/head';
import { Box, Container, Heading, Text, VStack, HStack, Button, Image } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function GiftBoxesPage() {
  return (
    <Box bg={'#f5cb81'} color={'#000819'} minH="100vh">
      <Head>
        <title>Luxury Gift Boxes | The Humble Beeing</title>
        <meta name="description" content="Discover 4x30g luxury honey tasting sets — perfect for gifting and discovery." />
      </Head>
      <Navbar bg={{ base: '#f5cb81', lg: 'none' }} />

      <Container maxW="container.xl" px={{ base: 6, md: 8 }} py={{ base: 10, md: 16 }}>
        <VStack align="start" spacing={6}>
          <Heading as="h1" size="lg">Luxury Gift Boxes</Heading>
          <Text color="#000819" maxW="3xl">
            Curated 4×30g tasting sets featuring single-origin and infused profiles. Presented in artisan recycled boxes for a refined, sustainable gift.
          </Text>
          <Image src={'/window.svg'} alt="Luxury Gift Box" boxSize={{ base: '200px', md: '320px' }} />
          <HStack spacing={4}>
            <Button as="a" href="#" target="_blank" bg="#000819" color="white" _hover={{ opacity: 0.9 }}>Shop Now</Button>
            <Button variant="outline" as="a" href="/wholesale-and-partnerships" borderColor="#000819" color="#000819" _hover={{ bg: 'rgba(0, 8, 25, 0.08)' }}>Wholesale & Corporate</Button>
          </HStack>
        </VStack>
      </Container>

      <Footer />
    </Box>
  );
}
