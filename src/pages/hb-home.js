import Head from 'next/head';
import Link from 'next/link';
import { Box, Container, Heading, Text, VStack, HStack, Button, SimpleGrid, Image, Badge } from '@chakra-ui/react';
import PageLayout from '@/components/layouts/PageLayout';
import StockistsCarousel from '@/components/home/StockistsCarousel';
import StyledCard from '@/components/StyledCard';
// Marquee handled inside HeroCarousel
import HeroCarousel from '@/components/home/HeroCarousel';

const featured = [
  { name: 'Gift Boxes', href: 'https://shop.humble-beeing.com', external: true },
  { name: 'Wholesale Inquiries', href: '/wholesale-and-partnerships' },
];

const carousel = [
  { name: 'Pine & Coffee Blossom', href: 'https://shop.humble-beeing.com', external: true },
  { name: 'Shea Blossom', href: 'https://shop.humble-beeing.com', external: true },
  { name: 'Orange Infused', href: 'https://shop.humble-beeing.com', external: true },
  { name: 'Chili Infused', href: 'https://shop.humble-beeing.com', external: true },
  { name: 'Vanilla & Chamomile Candle', href: 'https://shop.humble-beeing.com', external: true },
];

export default function HBHome() {
  const heroImages = [
    'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757451431/20210731_172431_1_v5vw1y.jpg',
    'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497786/IMG_0185_c83zq7.jpg',
    'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497289/IMG_0214_ma3gau.jpg',//
    'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757495003/IMG_0291_pkvi7q.jpg',//
    'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497733/IMG_0151_wrxcit.jpg',
    'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497640/IMG_0095_zdx7pv.jpg',
    'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757450952/WhatsApp_Image_2025-04-25_at_18.38.32_kjo6ai.jpg',
    'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757498617/IMG_0231_jpk3oz.jpg',
    'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497299/IMG_0111_m68vis.jpg',
    'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497768/IMG_0072_n3ab2i.jpg',//
    'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497310/IMG_0100_nb3zq6.jpg',
    'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757451447/IMG_0203_s6bliw.jpg',
    'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757451427/20210206_125023_wdecoo.jpg',
  ];
  return (
    <Box bg={'#f5cb81'} color={'#000819'} minH="100vh">
      <Head>
        <title>Humble Beeing | Luxury Honey, Sustainable Impact</title>
        <meta name="description" content="Luxury African honey and beeswax candles. Shop now and support traceable, regenerative impact." />
        <link rel="icon" href="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757515387/lOGO-LARGE-transparent_gl7jrn.png" />
      </Head>

      {/* Hero */}
      <HeroCarousel
        images={heroImages}
        marquee={(
          <>
            <Text fontFamily={'var(--font-hanken)'} fontSize={{ base: 'lg', md: 'xl' }} fontWeight={600}>
              Highest Qaulity Raw African Honey
            </Text>
            <Text fontFamily={'var(--font-hanken)'} fontSize={{ base: 'lg', md: 'xl' }} fontWeight={600} ml={32}>
              Traceable & Pesticide-free
            </Text>
            <Text fontFamily={'var(--font-hanken)'} fontSize={{ base: 'lg', md: 'xl' }} fontWeight={600} ml={32}>
              Single Origin & Small Batch
            </Text>
            <Text fontFamily={'var(--font-hanken)'} fontSize={{ base: 'lg', md: 'xl' }} fontWeight={600} ml={32}>
              100% Ugandan Owned
            </Text>
            <Text fontFamily={'var(--font-hanken)'} fontSize={{ base: 'lg', md: 'xl' }} fontWeight={600} ml={32}>
              Eco-Friendly & Recyclable Packaging
            </Text>
            <Text fontFamily={'var(--font-hanken)'} fontSize={{ base: 'lg', md: 'xl' }} fontWeight={600} ml={32}>
              Ethical & Sustainable Impact
            </Text>
            <Text fontFamily={'var(--font-hanken)'} fontSize={{ base: 'lg', md: 'xl' }} fontWeight={600} ml={32}>
              Direct from Small-holder Farmers
            </Text>
          </>
        )}
      >
        <VStack align="start" spacing={4}>
          <Heading as="h1" size="xl">Luxury honey, sustainable impact.</Heading>
          <Text maxW="2xl">Single-origin and infused honey from Uganda, plus beeswax candles crafted for purity and performance.</Text>
          <HStack spacing={4} pt={2}>
            <Button as={Link} href="https://shop.humble-beeing.com" bg="#000819" color="white" _hover={{ opacity: 0.9 }}>Shop Now</Button>
            <Button as={Link} href="/impact-and-sustainability" variant="outline" borderColor="white" color="white" _hover={{ bg: 'rgba(255,255,255,0.12)' }}>Explore Impact</Button>
          </HStack>
        </VStack>
      </HeroCarousel>


      <Container maxW="container.xl"  mt={{ base: 0, md: 24 }} px={{ base: 12, md: 20 }} py={{ base: 16, md: 20 }} minH={{ base: 'auto', md: '70vh' }} bg='#FFF2D7' rounded={{base: 'none', lg:'3xl'}}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8, lg: 10 }} alignItems="stretch">
          <VStack align="start" spacing={4}>
            <Heading as="h2" size={{ base: '2xl', md: '5xl' }}>What We Do</Heading>
            <Text fontSize={{ base: 'md', md: '3xl' }} pt={6}>
              Humble Beeing was born from a passion for sustainable beekeeping and a desire to share the incredible bounty of African honey with the world. We work directly with small-holder farmers in Uganda, ensuring fair wages and ethical practices.
            </Text>
            <Button as={Link} href="/our-story" 
            variant="outline" borderColor="#000819" 
            color="#000819" _hover={{ bg: 'rgba(0, 8, 25, 0.08)' }}
            mt={6}
            >
              <Text fontSize={{ base: 'sm', md: 'xl' }} pt={0} >
                Read Our Full Story
              </Text>
              </Button>
          </VStack>
          <VStack>
            <Image
              src="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757515387/lOGO-LARGE-transparent_gl7jrn.png" // Replace with your image URL
              alt="Humble Beeing Story"
              borderRadius="lg"
              objectFit="cover"
              width="100%"
              height="auto"
            />
          </VStack>
        </SimpleGrid>
      </Container>



      {/* 3 Core Blocks */}
      <Container maxW="container.xl" px={{ base: 4, md: 8 }} py={{ base: 10, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8, lg: 10 }} alignItems="stretch">
          {/* Card 1 */}
          <StyledCard>
            <VStack align="start" spacing={4} p={{ base: 5, md: 6 }} h="100%" justify="space-between">
              <Image src={'/file.svg'} alt="Shop" boxSize="56px" />
              <Heading as="h3" size="md">Shop</Heading>
              <Text color="#000819">Explore our curated honey and pure beeswax candles.</Text>
              <Button as={Link} href="https://shop.humble-beeing.com" size="sm" variant="outline" borderColor="#000819" color="#000819" _hover={{ bg: 'rgba(0, 8, 25, 0.08)' }}>Shop now</Button>
            </VStack>
          </StyledCard>
          {/* Card 2 */}
          <StyledCard>
            <VStack align="start" spacing={4} p={{ base: 5, md: 6 }} h="100%" justify="space-between">
              <Image src={'/globe.svg'} alt="Education" boxSize="56px" />
              <Heading as="h3" size="md">Why African Honey</Heading>
              <Text color="#000819">Terroir, biodiversity, and purity — learn what sets it apart.</Text>
              <Button as={Link} href="/impact-and-sustainability" size="sm" variant="outline" borderColor="#000819" color="#000819" _hover={{ bg: 'rgba(0, 8, 25, 0.08)' }}>Learn more</Button>
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
                <Button as={Link} href={f.href} target={f.external ? '_blank' : undefined} rel={f.external ? 'noopener noreferrer' : undefined} variant="outline" borderColor="#000819" color="#000819" _hover={{ bg: 'rgba(0, 8, 25, 0.08)' }}>Explore</Button>
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
                <Button as={Link} href={c.href} target={c.external ? '_blank' : undefined} rel={c.external ? 'noopener noreferrer' : undefined} size="sm" variant="outline" borderColor="#000819" color="#000819" _hover={{ bg: 'rgba(0, 8, 25, 0.08)' }}>Shop</Button>
              </VStack>
            </StyledCard>
          ))}
        </HStack>
      </Container>

      {/* Where You Can Buy Us */}
      <StockistsCarousel />

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

    </Box>
  );
}

HBHome.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
)
