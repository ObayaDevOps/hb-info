import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Box, Container, Heading, Text, VStack, HStack, Button, SimpleGrid, Image, Badge } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StyledCard from '@/components/StyledCard';
import Marquee from '@/components/Marquee';

const featured = [
  { name: 'Luxury Gift Boxes', href: '/our-honey/luxury-gift-boxes' },
  { name: 'Wholesale Inquiries', href: '/wholesale-and-partnerships' },
];

const carousel = [
  { name: 'Pine & Coffee Blossom', href: '/our-honey/pine-and-coffee-blossom' },
  { name: 'Shea Blossom', href: '/our-honey/shea-blossom' },
  { name: 'Orange Infused', href: '/our-honey/orange' },
  { name: 'Chili Infused', href: '/our-honey/chili' },
  { name: 'Vanilla & Chamomile Candle', href: '/our-candles' },
];

export default function HBHome() {
  const heroImages = [
    'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757451449/IMG_0164_btiwkk.jpg',
    'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757451447/IMG_0203_s6bliw.jpg',
    'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757451427/20210206_125023_wdecoo.jpg',
  ];
  const [currentHero, setCurrentHero] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const nextSlide = () => setCurrentHero((c) => (c + 1) % heroImages.length);
  const prevSlide = () => setCurrentHero((c) => (c - 1 + heroImages.length) % heroImages.length);
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(id);
  }, [heroImages.length, isPaused]);
  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  return (
    <Box bg={'#f5cb81'} color={'#000819'} minH="100vh">
      <Head>
        <title>The Humble Beeing | Luxury Honey, Sustainable Impact</title>
        <meta name="description" content="Luxury African honey and beeswax candles. Shop now and support traceable, regenerative impact." />
      </Head>
      <Navbar overlayOnHero />

      {/* Hero */}
      <Box
        position="relative"
        minH="100vh"
        display="flex"
        alignItems="center"
        overflow="hidden"
        onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchStartX.current == null) return;
          const dx = e.changedTouches[0].clientX - touchStartX.current;
          const threshold = 40; // pixels
          if (dx > threshold) prevSlide();
          if (dx < -threshold) nextSlide();
          touchStartX.current = null;
        }}
      >
        {/* Slideshow Backgrounds */}
        {heroImages.map((src, idx) => (
          <Box
            key={src}
            position="absolute"
            inset={0}
            bgImage={`url('${src}')`}
            bgSize="cover"
            bgPos="center"
            bgRepeat="no-repeat"
            opacity={idx === currentHero ? 1 : 0}
            transition="opacity 1s ease-in-out"
          />
        ))}
        {/* Contrast Overlay */}
        <Box position="absolute" inset={0} bg="rgba(0,0,0,0.35)" />
        {/* Marquee over hero bottom - full width */}
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          borderColor="black"
          borderTopWidth={'4px'}
          borderBottomWidth={'4px'}
          bg="white"
          zIndex={2}
          py={2}
        >
          <Marquee speed={75}>
            <Text fontFamily={'var(--font-hanken)'} fontSize={{ base: 'lg', md: 'xl' }} fontWeight={600}>
              Luxury African Honey
            </Text>
            <Text fontFamily={'var(--font-hanken)'} fontSize={{ base: 'lg', md: 'xl' }} fontWeight={600}>
              Traceable & Pesticide-free
            </Text>
            <Text fontFamily={'var(--font-hanken)'} fontSize={{ base: 'lg', md: 'xl' }} fontWeight={600}>
              Pure Beeswax Candles
            </Text>
            <Text fontFamily={'var(--font-hanken)'} fontSize={{ base: 'lg', md: 'xl' }} fontWeight={600}>
              Sustainable Impact • 5,000+ Farmers
            </Text>
          </Marquee>
        </Box>
        {/* Dots (above marquee) */}
        <HStack
          position="absolute"
          left={0}
          right={0}
          justifyContent="center"
          spacing={2}
          zIndex={3}
          bottom={{ base: '56px', md: '64px' }}
        >
          {heroImages.map((_, i) => (
            <Box
              as="button"
              key={i}
              onClick={() => setCurrentHero(i)}
              onFocus={() => setIsPaused(true)}
              onBlur={() => setIsPaused(false)}
              aria-label={`Slide ${i + 1}`}
              width={i === currentHero ? '12px' : '8px'}
              height={i === currentHero ? '12px' : '8px'}
              borderRadius="full"
              bg={i === currentHero ? 'white' : 'rgba(255,255,255,0.6)'}
              border={i === currentHero ? '2px solid rgba(0,0,0,0.2)' : 'none'}
            />
          ))}
        </HStack>
        <Container maxW="container.xl" px={{ base: 6, md: 8 }} position="relative" zIndex={1} color="white">
          <VStack align="start" spacing={4}>
            <Heading as="h1" size="xl">Luxury honey, sustainable impact.</Heading>
            <Text maxW="2xl">Single-origin and infused honey from Uganda, plus beeswax candles crafted for purity and performance.</Text>
            <HStack spacing={4} pt={2}>
              <Button as={Link} href="/our-honey" bg="#000819" color="white" _hover={{ opacity: 0.9 }}>Shop Honey</Button>
              <Button as={Link} href="/our-candles" variant="outline" borderColor="white" color="white" _hover={{ bg: 'rgba(255,255,255,0.12)' }}>Shop Candles</Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* 3 Core Blocks */}
      <Container maxW="container.xl" px={{ base: 4, md: 8 }} py={{ base: 10, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8, lg: 10 }} alignItems="stretch">
          {/* Card 1 */}
          <StyledCard>
            <VStack align="start" spacing={4} p={{ base: 5, md: 6 }} h="100%" justify="space-between">
              <Image src={'/file.svg'} alt="Shop" boxSize="56px" />
              <Heading as="h3" size="md">Shop Honey & Candles</Heading>
              <Text color="#000819">Explore our single-origin and infused honey, plus luxury beeswax candles.</Text>
              <Button as={Link} href="/our-honey" size="sm" variant="outline" borderColor="#000819" color="#000819" _hover={{ bg: 'rgba(0, 8, 25, 0.08)' }}>Shop now</Button>
            </VStack>
          </StyledCard>
          {/* Card 2 */}
          <StyledCard>
            <VStack align="start" spacing={4} p={{ base: 5, md: 6 }} h="100%" justify="space-between">
              <Image src={'/globe.svg'} alt="Education" boxSize="56px" />
              <Heading as="h3" size="md">Why African Honey is the Best</Heading>
              <Text color="#000819">Terroir, biodiversity, and purity — learn why Ugandan honey stands apart.</Text>
              <Button as={Link} href="/our-honey#why-african" size="sm" variant="outline" borderColor="#000819" color="#000819" _hover={{ bg: 'rgba(0, 8, 25, 0.08)' }}>Learn more</Button>
            </VStack>
          </StyledCard>
          {/* Card 3 */}
          <StyledCard>
            <VStack align="start" spacing={4} p={{ base: 5, md: 6 }} h="100%" justify="space-between">
              <Image src={'/window.svg'} alt="Impact" boxSize="56px" />
              <Heading as="h3" size="md">Our Impact (UN SDGs)</Heading>
              <Text color="#000819">Poverty alleviation, conservation, and traceability with SDG alignment.</Text>
              <Button as={Link} href="/impact-and-sustainability" size="sm" variant="outline" borderColor="#000819" color="#000819" _hover={{ bg: 'rgba(0, 8, 25, 0.08)' }}>See impact</Button>
            </VStack>
          </StyledCard>
        </SimpleGrid>
      </Container>

      {/* Featured Products */}
      <Container maxW="container.xl" px={{ base: 4, md: 8 }} pb={{ base: 12, md: 16 }}>
        <Heading as="h2" size="md" mb={{ base: 4, md: 6 }}>Featured: Gift Boxes & Wholesale</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8, lg: 10 }} alignItems="stretch">
          {featured.map((f) => (
            <StyledCard key={f.name}>
              <VStack align="start" spacing={4} p={{ base: 5, md: 6 }} h="100%" justify="space-between">
                <Heading as="h3" size="sm">{f.name}</Heading>
                <Button as={Link} href={f.href} variant="outline" borderColor="#000819" color="#000819" _hover={{ bg: 'rgba(0, 8, 25, 0.08)' }}>Explore</Button>
              </VStack>
            </StyledCard>
          ))}
        </SimpleGrid>
      </Container>

      {/* Impact Statement */}
      <Box py={{ base: 12, md: 16 }}>
        <Container maxW="container.xl" px={{ base: 6, md: 8 }}>
          <Heading as="h2" size="md">5,000 farmers. 1,500 hectares. Certified luxury.</Heading>
          <HStack pt={4}>
            <Button as={Link} href="/impact-and-sustainability" variant="outline" borderColor="#000819" color="#000819" _hover={{ bg: 'rgba(0, 8, 25, 0.08)' }}>Explore our impact</Button>
          </HStack>
        </Container>
      </Box>

      {/* Product Carousel (simple horizontal scroll) */}
      <Container maxW="container.xl" px={{ base: 4, md: 8 }} py={{ base: 12, md: 16 }}>
        <Heading as="h2" size="md" mb={{ base: 3, md: 4 }}>Explore Selections</Heading>
        <HStack spacing={{ base: 3, md: 4 }} overflowX="auto" py={2} sx={{ scrollSnapType: 'x mandatory' }}>
          {carousel.map((c) => (
            <StyledCard key={c.name} sx={{ scrollSnapAlign: 'start' }}>
              <VStack minW={{ base: '220px', md: '260px' }} align="start" spacing={3} p={{ base: 4, md: 5 }}>
                <Image src={'/file.svg'} alt={c.name} boxSize="48px" />
                <Text fontWeight={600}>{c.name}</Text>
                <Button as={Link} href={c.href} size="sm" variant="outline" borderColor="#000819" color="#000819" _hover={{ bg: 'rgba(0, 8, 25, 0.08)' }}>Shop</Button>
              </VStack>
            </StyledCard>
          ))}
        </HStack>
      </Container>

      {/* Testimonials and Social Proof */}
      <Container maxW="container.xl" px={{ base: 6, md: 8 }} pb={{ base: 16, md: 20 }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {[{q: '“The most nuanced honey on our menu.”', a: 'Chef A.'}, {q: '“Silky, clean, and unforgettable.”', a: 'Chef B.'}, {q: '“Our guests ask for it by name.”', a: 'Restaurateur C.'}].map((t, idx) => (
            <VStack key={idx} align="start" spacing={2} borderWidth="1px" borderColor="#1A2234" borderRadius="md" p={6}>
              <Text> {t.q} </Text>
              <Badge variant="outline" borderColor="#000819" color="#000819">{t.a}</Badge>
            </VStack>
          ))}
        </SimpleGrid>
        {/* <HStack spacing={6} pt={10} opacity={0.8}>
          <Image src={'/vercel.svg'} alt="Press" height="24" width="64" />
          <Image src={'/next.svg'} alt="Certification" height="24" width="64" />
          <Image src={'/Vector.svg'} alt="Partner" height="24" width="64" />
        </HStack> */}
      </Container>

      <Footer />
    </Box>
  );
}
