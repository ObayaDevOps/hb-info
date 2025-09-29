import Head from 'next/head';
import SEO from '@/components/SEO';
import Link from 'next/link';
import { Box, Container, Heading, Text, VStack, HStack, Button, SimpleGrid, Image, Badge, IconButton } from '@chakra-ui/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion';
const Slider = dynamic(() => import('react-slick'), { ssr: false })
import PageLayout from '@/components/layouts/PageLayout';
import Marquee from 'react-fast-marquee';
import StyledCard from '@/components/StyledCard';
// Marquee handled inside HeroCarousel
import HeroCarousel from '@/components/home/HeroCarousel';

const featured = [
  { name: 'Gift Boxes', href: 'https://shop.humble-beeing.com', external: true },
  { name: 'Wholesale Inquiries', href: '/wholesale-and-partnerships' },
];

// Logos for the small marquee under "Uganda's Finest Honey"
const trustedLogos = [
  { alt: 'Latitude 0 Hotel', src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757622463/latitude-logo-black_vswv88.png' },
  { alt: 'Le Gourmet Delicatessen', src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757622577/legourmetlogo_jwnh4y.png' },
  { alt: 'Yujo Izakaya', src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757684190/yujo_icon_ckqdqq.svg' },
  { alt: 'Karuna Yoga Studio', src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757622662/karuanyogologo_btlwvf.png' },
  // { alt: 'Entebbe Duty Free', src: '/Vector.svg' },
  { alt: 'Coffee At Last', src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757622699/coffeatlastlgog_lsat63.png' },
  { alt: '32 Degree East', src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757622961/32east_hvuk3u.jpg' },
  { alt: 'Farm to Table', src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757622734/farmtotable_ilqbss.jpg' },
  { alt: 'Afrotide Crafts', src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757622805/afrotide_g6egnn.jpg' },
];

const carousel = [
  { name: 'Pine & Coffee Blossom', href: 'https://shop.humble-beeing.com', external: true, image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497768/IMG_0072_n3ab2i.jpg', description: 'Experience the unique blend of pine and coffee blossom in this exquisite honey.' },
  { name: 'Shea Blossom', href: 'https://shop.humble-beeing.com', external: true, image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497768/IMG_0072_n3ab2i.jpg', description: 'Delicate and creamy honey with notes of shea blossom, a true taste of nature.' },
  { name: 'Orange Infused', href: 'https://shop.humble-beeing.com', external: true, image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497768/IMG_0072_n3ab2i.jpg', description: 'Zesty and sweet, our orange infused honey is a vibrant treat.' },
  { name: 'Chili Infused Raw Honey', href: 'https://shop.humble-beeing.com', external: true, image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497768/IMG_0072_n3ab2i.jpg', description: 'A fiery kick meets golden sweetness in our chili infused raw honey.' },
  { name: 'Vanilla & Chamomile Candle', href: 'https://shop.humble-beeing.com', external: true, image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497768/IMG_0072_n3ab2i.jpg', description: 'Relax with the soothing aroma of vanilla and chamomile in our pure beeswax candle.' },
  { name: 'Lemon Infused Honey', href: 'https://shop.humble-beeing.com', external: true, image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497768/IMG_0072_n3ab2i.jpg', description: 'Bright and refreshing, our lemon infused honey adds a citrusy twist to any dish.' },
  { name: 'Ginger Infused Honey', href: 'https://shop.humble-beeing.com', external: true, image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497768/IMG_0072_n3ab2i.jpg', description: 'Warm and spicy, this ginger infused honey is perfect for a cozy drink or glaze.' },
  { name: 'Cinnamon Infused Honey', href: 'https://shop.humble-beeing.com', external: true, image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497768/IMG_0072_n3ab2i.jpg', description: 'Sweet and aromatic, our cinnamon infused honey is a delightful addition to your pantry.' },
  { name: 'Vanilla Infused Honey', href: 'https://shop.humble-beeing.com', external: true, image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497768/IMG_0072_n3ab2i.jpg', description: 'Rich and fragrant, our vanilla infused honey offers a touch of elegance.' },
  { name: 'Cacao Nib Infused Honey', href: 'https://shop.humble-beeing.com', external: true, image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497768/IMG_0072_n3ab2i.jpg', description: 'Indulge in the deep, chocolatey notes of our cacao nib infused honey.' },
  { name: 'Bee Pollen', href: 'https://shop.humble-beeing.com', external: true, image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497768/IMG_0072_n3ab2i.jpg', description: 'Boost your wellness with our natural and nutritious bee pollen.' },
  { name: 'Propolis Tincture', href: 'https://humble-beeing.com', external: true, image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497768/IMG_0072_n3ab2i.jpg', description: 'Harness the natural power of propolis with our potent tincture.' },
  { name: 'Pure Beeswax Blocks', href: 'https://shop.humble-beeing.com', external: true, image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497768/IMG_0072_n3ab2i.jpg', description: 'Versatile and natural, our pure beeswax blocks are perfect for DIY projects.' },
  { name: 'Tea Pairing Set', href: 'https://shop.humble-beeing.com', external: true, image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497768/IMG_0072_n3ab2i.jpg', description: 'Elevate your tea experience with our thoughtfully curated tea pairing set.' },
  { name: 'Chef’s Selection', href: 'https://shop.humble-beeing.com', external: true, image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497768/IMG_0072_n3ab2i.jpg', description: 'Discover unique flavors hand-picked for culinary excellence in our Chef’s Selection.' },
];

const MotionBox = motion.create ? motion.create(Box) : motion(Box)
const MotionText = motion.create ? motion.create(Text) : motion(Text)
const MotionVStack = motion.create ? motion.create(VStack) : motion(VStack)
const MotionHeading = motion.create ? motion.create(Heading) : motion(Heading)
const MotionHStack = motion.create ? motion.create(HStack) : motion(HStack)

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export default function HBHome() {
  const heroImages = [
    'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757451431/20210731_172431_1_v5vw1y.jpg',
    'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497786/IMG_0185_c83zq7.jpg',
    'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497289/IMG_0214_ma3gau.jpg',//
    'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757495003/IMG_0291_pkvi7q.jpg',//
    'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497733/IMG_0151_wrxcit.jpg',
    'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497640/IMG_0095_zdx7pv.jpg',
    'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757498617/IMG_0231_jpk3oz.jpg',
    'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497299/IMG_0111_m68vis.jpg',
    'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497768/IMG_0072_n3ab2i.jpg',//
    'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497310/IMG_0100_nb3zq6.jpg',
    'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757451447/IMG_0203_s6bliw.jpg',
    'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757451427/20210206_125023_wdecoo.jpg',
  ];
  const pillButtonProps = {
    bg: 'black',
    color: '#f5cb81',
    borderWidth: '1px',
    borderColor: 'black',
    rounded: 'full',
    px: { base: 5, md: 7 },
    py: 3,
    fontWeight: 700,
    fontFamily: 'var(--font-hanken)',
    _hover: { bg: '#f5cb81', color: 'black', textDecoration: 'none' },
    transition: 'all 150ms ease',
  }
  const panelContainerProps = {
    bg: '#FFF2D7',
    rounded: { base: 'none', lg: '4xl' },
    shadow: { base: 'none', lg: 'xl' },
    px: { base: 12, md: 20 },
    py: { base: 16, md: 20 },
  }
  const PrevArrow = (props) => {
    const { className, style, onClick } = props
    return (
      <IconButton
        aria-label="Previous"
        icon={<ArrowLeft size={20} />}
        onClick={onClick}
        className={className}
        style={{ ...style, display: 'block' }}
        position="absolute"
        left={{ base: 2, md: 3 }}
        top="50%"
        transform="translateY(-50%)"
        rounded="full"
        bg="black"
        color="#f5cb81"
        borderWidth="1px"
        borderColor="black"
        _hover={{ bg: '#f5cb81', color: 'black' }}
        size="md"
        zIndex={2}
      />
    )
  }
  const NextArrow = (props) => {
    const { className, style, onClick } = props
    return (
      <IconButton
        aria-label="Next"
        icon={<ArrowRight size={20} />}
        onClick={onClick}
        className={className}
        style={{ ...style, display: 'block' }}
        position="absolute"
        right={{ base: 2, md: 3 }}
        top="50%"
        transform="translateY(-50%)"
        rounded="full"
        bg="black"
        color="#f5cb81"
        borderWidth="1px"
        borderColor="black"
        _hover={{ bg: '#f5cb81', color: 'black' }}
        size="md"
        zIndex={2}
      />
    )
  }
  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  }
  const sliderSettingsMobile = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }
  const sliderSettingsFamily = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }
  const familyImages = [
    { src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757598800/Obaya_honey_week_m4wiae.png', caption: 'Obaya at National Honey Week doing a Honey Tasting' },
    { src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757599416/HB_tasting_letaru_aopu57.png', caption: 'Letaru at our Kabalagala HQ doing a honey Tasting' },
    { src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757599558/AnguyoPFP.d8c042b3_1_ub5ssi.jpg', caption: 'Anguyo on the way to the Lwamata Forest Apiary' },
    { src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757599679/LetaruPFP.3d162952_kvvv1k.png', caption: 'Letaru in the Kabalagala HQ' },
    { src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757598212/ObayaPFP.26bfbd84_puexik.jpg', caption: 'Obaya on the way to the Lwamata Forest Apiary' }
  ];
  return (
    <Box bg={'#f5cb81'} color={'#000819'} minH="100vh" fontFamily={'var(--font-hanken)'}>
      <SEO
        title="Luxury Honey, Beeswax Candles, and Sustainable Impact"
        description="Luxury Ugandan honey and beeswax candles. Shop now and support traceable, regenerative impact with Kampala delivery and wholesale."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Humble Beeing',
          url: undefined,
          logo: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757515387/lOGO-LARGE-transparent_gl7jrn.png',
        }}
      />

      {/* Hero */}
      <HeroCarousel
        images={heroImages}
        marquee={(
          <>
            <Text fontFamily={'var(--font-hanken)'} fontSize={{ base: 'lg', md: 'xl' }} fontWeight={600}>
              Highest Quality Raw African Honey
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
        <MotionVStack align="start" spacing={4} {...fadeUp}>
          <MotionHeading as="h1" size={{base:"4xl", md:"6xl"}}
          fontFamily="var(--font-hanken)"
          {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>Luxury honey, sustainable impact.</MotionHeading>
          <MotionText maxW="2xl"
          fontFamily="var(--font-hanken)"
          fontSize={{base:"lgg", md:"2xl"}}
          {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}
          >
            Single-Origin Raw and Infused Ugandan Honey, Traceable from Hive to Table. Supporting Small-holder farmers </MotionText>
          <MotionHStack spacing={4} pt={2} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }}>
            <Button
              as={Link}
              href="https://shop.humble-beeing.com"
              bg="black"
              color="#f5cb81"
              borderWidth="1px"
              borderColor="black"
              rounded="full"
              px={{ base: 5, md: 7 }}
              py={3}
              fontWeight={700}
              fontFamily="var(--font-hanken)"
              _hover={{ bg: '#f5cb81', color: 'black', textDecoration: 'none' }}
              transition="all 150ms ease"
            >
              Shop Now
            </Button>
            <Button
              as={Link}
              href="/impact-and-sustainability"
              bg="black"
              color="#f5cb81"
              borderWidth="1px"
              borderColor="black"
              rounded="full"
              px={{ base: 5, md: 7 }}
              py={3}
              fontWeight={700}
              fontFamily="var(--font-hanken)"
              _hover={{ bg: '#f5cb81', color: 'black', textDecoration: 'none' }}
              transition="all 150ms ease"
            >
              Explore Impact
            </Button>
          </MotionHStack>
        </MotionVStack>
      </HeroCarousel>


      <Container maxW="container.xl" mt={{ base: 0, md: 24 }}
        minH={{ base: 'auto', md: '70vh' }}
        {...panelContainerProps}
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8, lg: 10 }} alignItems="stretch">
          <VStack align="start" spacing={4} pr={{base: 'none', md:20}}>
            <Heading as="h2" size={{ base: '3xl', md: '6xl' }}>Uganda's Finest Honey</Heading>


            <Text fontSize={{ base: 'lg', md: '2xl' }} pt={0}>
            Experience the pure taste of Uganda's biodiverse landscapes
            </Text>

            <Text fontSize={{ base: 'lg', md: 'xl' }} pt={6}>
            At Humble Beeing, We meticulously hand-process raw, Grade A honeycomb sourced directly from smallholder farmers in the pristine, pesticide-free regions of the West Nile. We ensure they receive above-market rates for their Grade A honeycomb, fostering sustainable livelihoods.

            </Text>

            <Text fontSize={{ base: 'lg', md: 'xl' }} pt={6}>

            Our honey is never heated, preserving all its natural enzymes and health benefits, resulting in exceptionally low moisture content. We also never mix batches leaving you with a truly pure taste that changes uniquely with each seasonal harvest, reflecting the diverse local flora of each apiary.
            </Text>

            <Text fontSize={{ base: 'lg', md: 'xl' }} pt={6}>

            Indulge further with our special, 1-month minimum, Infusions, each natural and local ingredient specifically paired to compliment the taste of the honey.
            </Text>

            {/* <Button as={Link} href="/our-story" mt={6} mb={{base: 6, md: 0}} {...pillButtonProps}>
              <Text fontSize={{ base: 'sm', md: 'xl' }} py={{base: 6, md: 0}} >
                Shop our Full Range
              </Text>
              </Button> */}

            {/* Small marquee: Trusted Supplier To */}
            <Box w="100%" pt={{ base: 2, md: 16 }}>
              <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight={600} mb={{ base: 4, md: 3 }} textAlign={{base:'none', md: 'none'}}>
                Trusted Supplier To
              </Text>
              <Box pb={8}>
                <Marquee gradient={false} speed={25} pauseOnHover>
                  {trustedLogos.map((item, idx) => (
                    <HStack
                      key={idx}
                      title={item.alt}
                      // bg={'rgba(255, 255, 255, 0.6)'}
                      bg={'#FFF2D7'}
                      rounded="full"
                      style={{ backdropFilter: 'blur(8px)' }}
                      px={{ base: 3, md: 4 }}
                      py={{ base: 1, md: 2 }}
                      mr={{ base: 3, md: 6 }}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        height={{ base: '64px', md: '86px' }}
                        width="auto"
                        objectFit="contain"
                        opacity={0.9}
                        sx={{ filter: 'grayscale(1)' }}
                      />
                    </HStack>
                  ))}
                </Marquee>
              </Box>
            </Box>
          </VStack>
          <VStack>
            <Image
              src="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757585367/HB_Tasting_Letaru_2_axwfee.png" 
              alt="Humble Beeing Story"
              borderRadius="3xl"
              objectFit="cover"
              width="100%"
              height="auto"
            />
          </VStack>
        </SimpleGrid>
      </Container>


       {/* Product Slider (react-slick) */}
      <Container maxW="container.xl" 
      
      bg='black'
      rounded={{ base: 'none', lg: '3xl' }}
      shadow= {{ base: 'none', lg: 'xl' }}
      px={{ base: 12, md: 20 }}
      py={{ base: 16, md: 16 }}
      mt={{base: 6, lg: 32}}
      display={{ base: 'none', md: 'block' }} // Hide on mobile, show on desktop
      >
        <Box p={2}>
          <MotionHeading as="h2" size={{ base: 'sm', lg: 'xl' }} mb={{ base: 3, md: 0 }} color='#FFF2D7' {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>Explore Selections</MotionHeading>
          <MotionHeading as="h2" size={{ base: 'lg', lg: '3xl' }} mb={{ base: 3, md: 4 }} color='#FFF2D7' {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>Our Product Range</MotionHeading>
        </Box>

        <MotionBox className="slider-container" pb={{base: 8, md: 6}} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }}>
          <Slider {...sliderSettings}>
            {carousel.map((c, index) => (
              <MotionBox key={c.name} px={{ base: 2, md: 0 }} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 + (index * 0.1) }}>
                <StyledCard borderRadius="2xl" shadow="md">
                  <Box>
                    <VStack align="start" spacing={4} p={{ base: 6, md: 8 }}>
                      <Image src={c.image} alt={c.name} boxSize={{ base: '200px', md: '350px' }} alignSelf="center" rounded="xl" />
                      <Text fontWeight={700} fontSize={{ base: 'lg', md: 'xl' }}>{c.name}</Text>
                      <Text fontWeight={400} fontSize={{ base: 'md', md: 'lg' }}>{c.description}</Text>
                      <Button as={Link} href={c.href} target={c.external ? '_blank' : undefined} rel={c.external ? 'noopener noreferrer' : undefined} size="md" {...pillButtonProps}>Shop</Button>
                    </VStack>
                  </Box>
                </StyledCard>
              </MotionBox>
            ))}
          </Slider>
        </MotionBox>
      </Container>

       {/* Product Slider Mobile (react-slick) */}
      <Container maxW="container.xl" 
      
      bg='black'
      rounded={{ base: 'none', lg: '3xl' }}
      shadow= {{ base: 'none', lg: 'xl' }}
      px={{ base: 4, md: 20 }}
      py={{ base: 16, md: 16 }}
      mt={{base: 6, lg: 32}}
      display={{ base: 'block', md: 'none' }} // Show on mobile, hide on desktop
      >
        <Box p={4}>
          <MotionHeading as="h2" size="xl" mb={{ base: 2, md: 0 }} color='#FFF2D7' {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>Explore Selections</MotionHeading>
          <MotionHeading as="h2" size="3xl" mb={{ base: 3, md: 4 }} color='#FFF2D7' {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>Our Product Range</MotionHeading>
        </Box>

        <MotionBox className="slider-container" pb={{base: 8, md: 6}} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }}>
          <Slider {...sliderSettingsMobile}>
            {carousel.map((c, index) => (
              <MotionBox key={c.name} px={{ base: 0, md: 0 }} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 + (index * 0.1) }}>
                <StyledCard borderRadius="2xl" shadow="md">
                  <Box>
                    <VStack align="start" spacing={4} p={{ base: 8, md: 8 }}>
                      <Image src={c.image} alt={c.name} boxSize={{ base: '300px', md: '350px' }} alignSelf="center" rounded="xl" />
                      <Text fontWeight={700} fontSize={{ base: 'lg', md: 'xl' }}>{c.name}</Text>
                      <Text fontWeight={400} fontSize={{ base: 'md', md: 'lg' }}>{c.description}</Text>
                      <Button as={Link} href={c.href} target={c.external ? '_blank' : undefined} rel={c.external ? 'noopener noreferrer' : undefined} size="md" {...pillButtonProps}>Shop</Button>
                    </VStack>
                  </Box>
                </StyledCard>
              </MotionBox>
            ))}
          </Slider>
        </MotionBox>
      </Container>


      {/* Did you know - adulteration */}
      <Container maxW="container.md"  mt={{base: 16, lg: 24}}  mb={{base: 6, lg: 16}} pb={{md: 0}}>
        <MotionVStack spacing={4} align="center" {...fadeUp}>
          <MotionHeading as="h2" size={{ base: 'lg', md: 'xl' }} pt={6} textAlign='center' fontFamily={'var(--font-hanken)'} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>Did you know ?</MotionHeading>
          <MotionHeading as="h1" size={{ base: '3xl', md: '6xl' }} maxW='4xl' textAlign='center' fontFamily={'var(--font-hanken)'} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>46% of the collected honey samples in Europe were suspected of being adulterated</MotionHeading>
          <MotionHeading as="h2" size={{ base: 'lg', md: 'xl' }} pt={6} textAlign='center' fontFamily={'var(--font-hanken)'} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }}> - EU's Joint Research Centre, 2023</MotionHeading>
        </MotionVStack>
      </Container>


       {/* Honey Statement */}
 <Box py={{ base: 12, md: 16 }}>
        <Container
          maxW="container.xl"
          mt={{ base: 6, lg: 20 }}
          h="95vh"
          bgImage={"linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.75)), url('https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497786/IMG_0185_c83zq7.jpg')"}
          bgSize="cover"
          bgPos="center"
          bgRepeat="no-repeat"
          rounded={{ base: 'none', lg: '3xl' }}
          shadow={{ base: 'none', lg: 'xl' }}
          px={{ base: 12, md: 20 }}
          py={{ base: 16, md: 20 }}
          color="white"
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="flex-start"
        >
          <MotionVStack align="start" spacing={2} {...fadeUp}>
            <MotionHeading as="h3" size={{base: 'md', md: "lg"}} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
              Our Ugandan Honey
            </MotionHeading>
            <MotionHeading as="h2" size={{base: 'xl', md: "3xl"}} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
              Traceable.
            </MotionHeading>
            <MotionHeading as="h2" size={{base: 'xl', md: "3xl"}} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
              Pesticide Free.
            </MotionHeading>
            <MotionHeading as="h2" size={{base: 'xl', md: "3xl"}} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.25 }}>
              Single-Origin.
            </MotionHeading>
            <MotionHeading as="h2" size={{base: 'xl', md: "3xl"}} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.25 }}>
              Ethically Sourced.
            </MotionHeading>
            <MotionText maxW='2xl' pt={6} fontSize={{base: 'md', md: "xl"}} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }}>
              We hand select the finest Grade-A honeycombs and hand press them to preserve the natural aromas, flavours and 'Terroir'.  This fine, Raw, cold pressed honey is loaded with immune-boosting trace vitamins, minerals and gut friendly live probiotics, prebiotics and enzymes. All gifts from the abundant Bio-diversity of Uganda's Landscapes.
              Our honey is 'Single-Origin', we never blend our Honeys. This means our honey is different from one apiary location to another and one harvest to another. We want it that way ! Each batch has a unique identifying 'Harvest Number', and once a Harvest is sold out, it's gone! 
            </MotionText>
            <MotionHStack pt={4} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.4 }}>
              <Button
                as={Link}
                href="/impact-and-sustainability"
                {...pillButtonProps}
                bg="#f5cb81"
                color="black"
                _hover={{ bg: 'black', color: '#f5cb81', textDecoration: 'none' }}
                fontSize={{base: 'sm', md: "lg"}}
              >
                Explore our Honey Range
              </Button>
            </MotionHStack>
          </MotionVStack>
        </Container>
      </Box>







      {/* Did you know - uganda harvest */}
      <Container maxW="container.md"  my={{base: 12, lg: 16}} pb={{md: 0}}>
        <MotionVStack spacing={4} align="center" {...fadeUp}>
          <MotionHeading as="h2" size={{ base: 'lg', md: 'xl' }} pt={6} textAlign='center' fontFamily={'var(--font-hanken)'} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>Did you know ?</MotionHeading>
          <MotionHeading as="h1" size={{ base: '3xl', md: '6xl' }} maxW='4xl' textAlign='center' fontFamily={'var(--font-hanken)'} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>Uganda currently harvests only 1% of a potential 500,000 tonnes of honey per year</MotionHeading>
          <MotionHeading as="h2" size={{ base: 'lg', md: 'xl' }} pt={6} textAlign='center' fontFamily={'var(--font-hanken)'} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }}> - Dr. Deborah Ruth Amulen</MotionHeading>
        </MotionVStack>
      </Container>


      {/* Impact Statement */}
      <Box py={{ base: 12, md: 16 }}>
        <Container
          maxW="container.xl"
          mt={{ base: 6, lg: 20 }}
          h="95vh"
          bgImage={"linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.75)), url('https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757589584/AMW_Cropped_zguxn7.png')"}
          bgSize="cover"
          bgPos="center"
          bgRepeat="no-repeat"
          rounded={{ base: 'none', lg: '3xl' }}
          shadow={{ base: 'none', lg: 'xl' }}
          px={{ base: 12, md: 20 }}
          py={{ base: 16, md: 20 }}
          color="white"
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="flex-start"
        >
          <MotionVStack align="start" spacing={2} {...fadeUp}>
            <MotionHeading as="h3" size={{base: 'md', md: "lg"}} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
              Our Mission & Vision
            </MotionHeading>
            <MotionHeading as="h2" size={{base: 'xl', md: "3xl"}} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
              5,000 farmers.
            </MotionHeading>
            <MotionHeading as="h2" size={{base: 'xl', md: "3xl"}} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
              1,500 tons of Organic Honey.
            </MotionHeading>
            <MotionHeading as="h2" size={{base: 'xl', md: "3xl"}} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.25 }}>
              Certified luxury.
            </MotionHeading>
            <MotionText maxW='2xl' pt={6} fontSize={{base: 'md', md: "xl"}} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }}>
              Our mission is to improve the livelihood of 5000 farmers by providing knowledge, fair market-access and building inclusive, resilient, and sustainable beehive product value chains. 
              We aim to become Africa's largest producer and exporter to EU of certified organic honey and beeswax. While promoting the planting and conservation of the native Shea Tree.
            </MotionText>
            <MotionHStack pt={4} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.4 }}>
              <Button
                as={Link}
                href="/impact-and-sustainability"
                {...pillButtonProps}
                bg="#f5cb81"
                color="black"
                _hover={{ bg: 'black', color: '#f5cb81', textDecoration: 'none' }}
                fontSize={{base: 'sm', md: "lg"}}
              >
                Explore our Impact
              </Button>
            </MotionHStack>
          </MotionVStack>
        </Container>
      </Box>



      {/* Meet the Family  */}
      <Container maxW="container.xl" mt={{ base: 0, md: 24 }}
        minH={{ base: 'auto', md: '70vh' }}
        {...panelContainerProps}
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8, lg: 10 }} alignItems="stretch">
          <VStack align="start" spacing={4} pr={{base: 'none', md:20}} >
              <Box pt={{base: 'none', md: 4}}>
              <Heading as="h2" size={{ base: 'md', md: 'xl' }}>About Us</Heading>

                <Heading as="h2" size={{ base: '3xl', md: '6xl' }}>Meet the Family</Heading>
              <Text fontSize={{ base: 'lg', md: 'xl' }} pt={6}>
                Humble Beeing is a 100% Ugandan-Family Owned company, led by Obaya who quit his job in London working as a Trading Systems Software Developer at Credit Suisse Investment Bank to move back home to Uganda to start a beekeeping social enterprise, to (hopefully) give his life some more meaning and change the world for the better.
              </Text>
              <Text fontSize={{ base: 'lg', md: 'xl' }} pt={6}>
                He combined his love of Nature, Food and Family to build a life he was happy to live. There have been a  *lot* of ups and downs along the way, but it wouldn't be an adventure if everything went to plan!
              </Text>
              <Text fontSize={{ base: 'lg', md: 'xl' }} pt={6}>           
                He was joined by his Artist Sister, Letaru, and his Optician Dad, Anguyo, to start Humble Beeing with the aim of improving the livelihoods of those in the village they come from by rebranding an overlooked but extremely valuable commodity - Honey!
              </Text>
              <Text fontSize={{ base: 'lg', md: 'xl' }} pt={6}>
                Now the aim is to transform the village into an economic hub and allow everyone the opportunity to benefit from domestic and international markets.
              </Text>
              <Button as={Link} href="/our-story" mt={6} mb={{base: 6, md: 0}} {...pillButtonProps}>
                <Text fontSize={{ base: 'sm', md: 'xl' }} py={{base: 6, md: 0}} >
                  Meet Our Team
                </Text>
                </Button>
              </Box>
          </VStack>
          <VStack>
            <Box className="slider-container" pb={{base: 8, md: 6}} width="100%">
              <Slider {...sliderSettingsFamily}>
                {familyImages.map((imageObj, index) => (
                  <Box key={index} px={{ base: 2, md: 0 }} py={{base: 0, md: 4}}>
                    <StyledCard borderRadius="2xl" shadow="md">
                      <Image
                        src={imageObj.src}
                        alt={imageObj.caption}
                        objectFit="cover"
                        width="100%"
                        height="auto"
                      />
                      <Text fontFamily={'var(--font-hanken)'} fontSize={{ base: 'md', md: 'lg' }} py={4} textAlign="center">
                        {imageObj.caption}
                      </Text>
                    </StyledCard>
                  </Box>
                ))}
              </Slider>
            </Box>
          </VStack>
        </SimpleGrid>
      </Container>



      {/* Recipes */}
      <Box py={{ base: 12, md: 16 }}>
        <Container
          maxW="container.xl"
          mt={{ base: 6, lg: 20 }}
          h="95vh"
          bgImage={"linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.75)), url('https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757585366/HB_Tasting_Latitude2_qh91nd.png')"}
          bgSize="cover"
          bgPos="center"
          bgRepeat="no-repeat"
          rounded={{ base: 'none', lg: '3xl' }}
          shadow={{ base: 'none', lg: 'xl' }}
          px={{ base: 12, md: 20 }}
          py={{ base: 16, md: 20 }}
          color="white"
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="flex-start"
        >
          <MotionVStack align="start" spacing={2} {...fadeUp}>
            <MotionHeading as="h3" size={{base: 'md', md: "lg"}} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
              For the Foodies
            </MotionHeading>
            <MotionHeading as="h2" size={{base: 'xl', md: "3xl"}} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
              Got a Recipe Idea ?
            </MotionHeading>
            <MotionHeading as="h2" size={{base: 'xl', md: "3xl"}} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
              New Honey - Food Pairing ?
            </MotionHeading>
            <MotionHeading as="h2" size={{base: 'xl', md: "3xl"}} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
              We'd Love to Hear it !
            </MotionHeading>

            <MotionText maxW='2xl' pt={6} fontSize={{base: 'md', md: "xl"}} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }}>
              Unleash your inner chef! Our exquisite honeys are not just for your tea; they are a secret ingredient waiting to transform your culinary creations. From delectable glazes to gourmet desserts, explore a world of flavors.
              If your recipe is featured on our website or Instagram we'll send you a free jar of the honey used in the recipe!
            </MotionText>
            <MotionHStack pt={4} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.4 }}>
              <Button
                as={Link}
                href="/impact-and-sustainability"
                {...pillButtonProps}
                bg="#f5cb81"
                color="black"
                _hover={{ bg: 'black', color: '#f5cb81', textDecoration: 'none' }}
                fontSize={{base: 'sm', md: "lg"}}
              >
                See more Recipes
              </Button>
                            <Button
                as={Link}
                href="/impact-and-sustainability"
                {...pillButtonProps}
                bg="#f5cb81"
                color="black"
                _hover={{ bg: 'black', color: '#f5cb81', textDecoration: 'none' }}
                fontSize={{base: 'sm', md: "lg"}}
              >
                Submit a Recipe
              </Button>
            </MotionHStack>
          </MotionVStack>
        </Container>
      </Box>



      {/* Testimonials and Social Proof */}
      <Container maxW="container.xl" {...panelContainerProps}  pt={{base: 6, lg: 12}} pb={{base: 6, lg: 20}} mb={{ base: 12, lg: 24 }}>
                <MotionHeading
          as="h2"
          size={{ base: 'md', md: 'lg' }}
          mb={{ base: 4, md: 0 }}
          fontFamily={'var(--font-hanken)'}
          {...fadeUp}
        >
          Testimonials
        </MotionHeading>
        <MotionHeading
          as="h2"
          size={{ base: 'lg', md: '2xl' }}
          mb={{ base: 4, md: 8 }}
          fontFamily={'var(--font-hanken)'}
          {...fadeUp}
        >
          Don't just take our word for it!
        </MotionHeading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {[{q: '“The most nuanced honey on our menu.”', a: 'Chef A.'}, {q: '“Silky, clean, and unforgettable.”', a: 'Chef B.'}, {q: '“Our guests ask for it by name.”', a: 'Restaurateur C.'}].map((t, idx) => (
            <StyledCard key={idx} borderRadius="2xl" shadow="md" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.4 + (idx * 0.1) }}>
              <VStack align="start" spacing={4} p={6}>
                <Text fontSize={{ base: 'lg', md: 'xl' }}> {t.q} </Text>
                <Badge
                  variant="solid"
                  bg="black"
                  color="#f5cb81"
                  borderColor="black"
                  rounded="full"
                  px={3}
                  py={1}
                >
                  {t.a}
                </Badge>
              </VStack>
            </StyledCard>
          ))}
        </SimpleGrid>
      </Container>

      {/* Spacer above footer with brand background */}
      <Box bg="#f5cb81" h={{ base: 12, lg: 24 }} />

    </Box>
  );
}

HBHome.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
)
