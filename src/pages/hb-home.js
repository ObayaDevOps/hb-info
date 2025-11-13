import Head from 'next/head';
import SEO from '@/components/SEO';
import Link from 'next/link';
import { Box, Container, Heading, Text, VStack, HStack, Flex, Button, SimpleGrid, Image, Badge, IconButton, Link as ChakraLink } from '@chakra-ui/react';
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
  { alt: 'Latitude 0 Hotel', src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757622463/latitude-logo-black_vswv88.png'},
  { alt: 'Le Gourmet Delicatessen', src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1759499163/Logo-Black_e2b52c60-8cb6-4ed1-81ff-c0a86bb0795f_acagzq.svg' },
  { alt: 'Yujo Izakaya', src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1759499225/yujo-removebg-preview_cjol1f.png' },
  { alt: 'Karuna Yoga Studio', src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1759499097/karuna-brand_cgruz0.png' },
  // { alt: 'Entebbe Duty Free', src: '/Vector.svg' },
  { alt: 'Coffee At Last', src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1759499290/coffeatlastlgog_lsat63-removebg-preview_k5vfbh.png' },
  { alt: '32 Degree East', src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757622961/32east_hvuk3u.jpg' },
  { alt: 'Farm to Table', src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757622734/farmtotable_ilqbss.jpg' },
  { alt: 'Afrotide Crafts', src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757622805/afrotide_g6egnn.jpg' },
  { alt: 'Tierra Tours', src: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1762986376/Tierra-Full-Logo-Green_gxnaj6.webp' },
  
];

const carousel = [
  { name: 'Single-Origin Gourmet Raw Honey', href: 'https://shop.humble-beeing.com', external: true, image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497768/IMG_0072_n3ab2i.jpg', description: 'Experience the unique blend of pine and coffee blossom in this exquisite honey.' },
  { name: 'Infused Gourmet Raw Honey', href: 'https://shop.humble-beeing.com', external: true, image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1762984519/IMG_0145_aswkq8.jpg', description: 'Delicate and creamy honey with notes of shea blossom, a true taste of nature.' },
  { name: 'Luxury Beeswax Candles', href: 'https://shop.humble-beeing.com', external: true, image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1762984637/IMG_0203_ekodw2.jpg', description: 'Sustainably sourced Beeswax. Naturally purifying. Designed to transform everyday moments into rituals of wellness.' },
  { name: 'Premium Gift Sets', href: 'https://shop.humble-beeing.com', external: true, image: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1762984754/IMG_0227_mrfdsc.jpg', description: 'The perfect way to explore our gourmet range: Orange Peel, Lemon, Rosemary, Vanilla Bean, and more. Packaged in recycled paper, handcrafted by local artisans' },

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
        title="Gourmet Raw Honey, Beeswax Candles, and Sustainable Impact - Pure Ugandan Honey"
        description="Gourmet Ugandan honey and beeswax candles. Shop now and support traceable, regenerative impact with Kampala delivery and wholesale. Pure Ugandan Honey"
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
          <MotionHeading as="h1" 
            size={{base:"3xl", md:"6xl"}}
            fontFamily="var(--font-hanken)"
            {...fadeUp} 
            transition={{ ...fadeUp.transition, delay: 0.1 }}>
              Uganda's Finest Honey
          </MotionHeading>
          {/* <MotionHeading as="h2" 
            size={{base:"lg", md:"2xl"}}
            fontFamily="var(--font-hanken)"
            {...fadeUp} 
          transition={{ ...fadeUp.transition, delay: 0.1 }}>
            Gourmet Raw Honey, Traceable from Hive to Jar with a Sustainable Impact
          </MotionHeading> */}
          <MotionText maxW={{base: 'md', md:"2xl"}}
          fontFamily="var(--font-hanken)"
          fontSize={{base:"md", md:"xl"}}
          {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}
          >
            Gourmet Raw Honey From Uganda's Pristine Biodiverse Landscapes. </MotionText>
            <MotionText maxW={{base: 'md', md:"2xl"}}
          fontFamily="var(--font-hanken)"
          fontSize={{base:"md", md:"xl"}}
          {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}
          >
          Traceable from Hive to Jar with a Sustainable Impact. </MotionText>
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


      {/* <Container maxW="container.xl" mt={{ base: 0, md: 24 }}
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
      </Container> */}
       {/* Product Slider (react-slick) */}
      <Container maxW="full" 
      bg='black'
      minH='100vh'
      // rounded={{ base: 'none', lg: '3xl' }}
      shadow= {{ base: 'none', lg: 'xl' }}
      px={{ base: 12, md: 20 }}
      py={{ base: 0, md: 16 }}
      mt={{base: 0, lg: 0}}
      display={{ base: 'none', md: 'block' }} // Hide on mobile, show on desktop
      >
        <Box p={2} mt={{ base: 16, md: 16 }}>
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
                      <Image src={c.image} alt={c.name} boxSize={{ base: '200px', md: 'full' }} alignSelf="center" rounded="xl" />
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


      {/* Trusted Supplier marquee section */}
      <Container
        maxW="container.xl"
        mt={{ base: 0, md: 20 }}
        {...panelContainerProps}
        py={{ base: 10, md: 20 }}
      >
        <VStack spacing={{ base: 4, md: 6 }} align="stretch">
          <Text fontSize={{ base: 'lg', lg: '2xl' }} 
          mb={{ base: 3, md: 4 }} 
          mt={{base: 3, md: -8}} 
          fontWeight={600} 
          color='gray.600'
          textAlign={{ base: 'center', md: 'center' }}>
            Trusted Supplier To
          </Text>
          <Box maxW='full'>
            <Marquee gradient={false} speed={40} pauseOnHover>
              {trustedLogos.map((item, idx) => {
                const logo = (
                  <HStack
                    title={item.alt}
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
                      filter="grayscale(100%)"
                    />
                  </HStack>
                )

                if (item.href) {
                  return (
                    <ChakraLink
                      key={idx}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      display="inline-block"
                      _hover={{ textDecoration: 'none' }}
                    >
                      {logo}
                    </ChakraLink>
                  )
                }

                return (
                  <Box key={idx} display="inline-block">
                    {logo}
                  </Box>
                )
              })}
            </Marquee>
          </Box>
        </VStack>
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
            <MotionHeading as="h3" size={{base: 'lg', md: "2xl"}} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
              Gourmet Raw Ugandan Honey
            </MotionHeading>
            <MotionHeading as="h2" size={{base: '3xl', md: "7xl"}} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
              Traceable.
            </MotionHeading>
            <MotionHeading as="h2" size={{base: '3xl', md: "7xl"}} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
              Pesticide Free.
            </MotionHeading>
            <MotionHeading as="h2" size={{base: '3xl', md: "7xl"}} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.25 }}>
              Single-Origin.
            </MotionHeading>
            <MotionHeading as="h2" size={{base: '3xl', md: "7xl"}} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.25 }}>
              Ethically Sourced.
            </MotionHeading>
            {/* <MotionText maxW='2xl' pt={6} fontSize={{base: 'md', md: "xl"}} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }}>
              We hand select the finest Grade-A honeycombs and hand press them to preserve the natural aromas, flavours and 'Terroir'.  This fine, Raw, cold pressed honey is loaded with immune-boosting trace vitamins, minerals and gut friendly live probiotics, prebiotics and enzymes. All gifts from the abundant Bio-diversity of Uganda's Landscapes.
              Our honey is 'Single-Origin', we never blend our Honeys. This means our honey is different from one apiary location to another and one harvest to another. We want it that way ! Each batch has a unique identifying 'Harvest Number', and once a Harvest is sold out, it's gone! 
            </MotionText> */}
            <MotionHStack pt={4} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.4 }}>
              <Button
                as={Link}
                href="/our-process"
                {...pillButtonProps}
                bg="#f5cb81"
                color="black"
                _hover={{ bg: 'black', color: '#f5cb81', textDecoration: 'none' }}
                fontSize={{base: 'sm', md: "lg"}}
              >
                Find Out More About Our Honey
              </Button>
            </MotionHStack>
          </MotionVStack>
        </Container>
      </Box>







      {/* Did you know - uganda harvest */}
      {/* <Container maxW="container.md"  my={{base: 12, lg: 16}} pb={{md: 0}}>
        <MotionVStack spacing={4} align="center" {...fadeUp}>
          <MotionHeading as="h2" size={{ base: 'lg', md: 'xl' }} pt={6} textAlign='center' fontFamily={'var(--font-hanken)'} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>Did you know ?</MotionHeading>
          <MotionHeading as="h1" size={{ base: '3xl', md: '6xl' }} maxW='4xl' textAlign='center' fontFamily={'var(--font-hanken)'} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>Uganda currently harvests only 1% of a potential 500,000 tonnes of honey per year</MotionHeading>
          <MotionHeading as="h2" size={{ base: 'lg', md: 'xl' }} pt={6} textAlign='center' fontFamily={'var(--font-hanken)'} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }}> - Dr. Deborah Ruth Amulen</MotionHeading>
        </MotionVStack>
      </Container> */}


      {/* Impact Statement */}
      <Box py={{ base: 12, md: 16 }}>
        <Container
          maxW="container.xl"
          mt={{ base: 6, lg: 20 }}
          h="95vh"
          // bgImage={"linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.75)), url('https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757589584/AMW_Cropped_zguxn7.png')"}
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
              2,000 farmers.
            </MotionHeading>
            <MotionHeading as="h2" size={{base: 'xl', md: "3xl"}} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
              400 tons of Organic Honey.
            </MotionHeading>
            <MotionHeading as="h2" size={{base: 'xl', md: "3xl"}} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.25 }}>
              Certified luxury.
            </MotionHeading>
            <MotionText maxW='2xl' pt={6} fontSize={{base: 'md', md: "xl"}} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }}>
              Our mission is to improve the livelihood of 2000 farmers by providing knowledge, fair market-access and building inclusive, resilient, and sustainable beehive product value chains. 
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


      {/* Impact Statement */}
      <Box py={{ base: 12, md: 16 }}>
        <Container
          maxW="container.xl"
          mt={{ base: 6, lg: 20 }}
          h="95vh"
          bgImage={"linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.75)), url('https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757598800/Obaya_honey_week_m4wiae.png')"}
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
             A Family Business
            </MotionHeading>
            <MotionHeading as="h2" size={{base: 'xl', md: "3xl"}} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
              Built By Ugandans.
            </MotionHeading>
            <MotionHeading as="h2" size={{base: 'xl', md: "3xl"}} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
              For The World.
            </MotionHeading>

            <MotionText maxW='2xl' pt={6} fontSize={{base: 'md', md: "xl"}} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }}>
            Humble Beeing is a 100% Ugandan-Family Owned company, led by Obaya who quit his job in London working as a Trading Systems Software Developer at an Investment Bank 
            to move back home to Uganda (where he grew up) to start a beekeeping social enterprise, to (hopefully) give his life some more meaning and change the world for the better.

            Now the aim is to transform the family village in Yumbe into an economic hub and allow everyone the opportunity to benefit from domestic and international markets.

            </MotionText>
            <MotionHStack pt={4} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.4 }}>
              <Button
                as={Link}
                href="/our-story"
                {...pillButtonProps}
                bg="#f5cb81"
                color="black"
                _hover={{ bg: 'black', color: '#f5cb81', textDecoration: 'none' }}
                fontSize={{base: 'sm', md: "lg"}}
              >
                Read our Story
              </Button>
            </MotionHStack>
          </MotionVStack>
        </Container>
      </Box>



      {/* Meet the Family  */}
      {/* <Container maxW="container.xl" mt={{ base: 0, md: 24 }}
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
      </Container> */}


      {/* Did you know */}
      <Box
        w="full"
        minH='85vh'
        mt={{ base: 16, lg: 24 }}
        mb={{ base: 6, lg: 16 }}
        py={{ base: 12, md: 20 }}
        px={{ base: 6, md: 12 }}
        bgImage={
          "linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.6)), url('https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1759497169/random-institute-zXu9RsYKgHA-unsplash_qcpgiy.jpg')"
        }
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
      >
        <Container maxW="container.lg" color="white">
          <MotionVStack spacing={4} align="center" {...fadeUp}>
            <MotionHeading
              as="h2"
              size={{ base: 'lg', md: 'xl' }}
              pt={6}
              textAlign="center"
              fontFamily={'var(--font-hanken)'}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
            >
              Our Guarantee
            </MotionHeading>
            <MotionHeading
              as="h1"
              size={{ base: '3xl', md: '6xl' }}
              maxW="4xl"
              textAlign="center"
              fontFamily={'var(--font-hanken)'}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
            >
              Only the very best Grade-A honeycomb from pesticide-free areas makes it into our jars and our farmers are given a fair price
            </MotionHeading>
            <MotionHeading
              as="h2"
              size={{ base: 'lg', md: 'xl' }}
              pt={6}
              textAlign="center"
              fontFamily={'var(--font-hanken)'}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.3 }}
            >
              - Humble Beeing Promise, 2023
            </MotionHeading>
          </MotionVStack>
        </Container>
      </Box>



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
              A Gourmet World Awaits!
            </MotionHeading>
            <MotionHeading as="h2" size={{base: 'xl', md: "3xl"}} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
              Hand-Picked Infusion Pairings
            </MotionHeading>

            <MotionText maxW='2xl' pt={6} fontSize={{base: 'md', md: "xl"}} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }}>
              Unleash your inner chef! Our exquisite honeys are not just for your tea; they are a secret ingredient waiting to transform your culinary creations. From delectable glazes to gourmet desserts, explore a world of flavors.
              Have a look at our recipes for inspiration!
            </MotionText>
            <MotionHStack pt={4} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.4 }}>
              <Button
                as={Link}
                href="/blog"
                {...pillButtonProps}
                bg="#f5cb81"
                color="black"
                _hover={{ bg: 'black', color: '#f5cb81', textDecoration: 'none' }}
                fontSize={{base: 'sm', md: "lg"}}
              >
                See more Recipes
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
          {[{q: '“The Garlic and chilli infused honey flavors go really well with fried chicken wings🥰❤️ 100% recommend!”', a: 'Sheillah R. - Food Reviewer'}, {q: '“Without a doubt, this is the best honey in Uganda. I’ve been in the country for years, and this is by far the best souvenir I’ve found here. Everyone I’ve gifted it to has loved it! My personal favorite is the rosemary-infused honey. My dad, a cheese lover, enjoys it drizzled over cheese, especially the garlic-infused variety. My mom uses them in her Asian cooking, and it elevates the flavors like nothing else!”', a: 'Minori - Japan'}, {q: '“The best honey I’ve had! Love their raw honey, so luxurious and delicious and I’m not even normally the biggest fan of honey. Definitely the best honey you can find in Uganda, my family loved them as gifts.”', a: 'Lina A.'}].map((t, idx) => (
            <StyledCard key={idx} borderRadius="2xl" shadow="md" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.4 + (idx * 0.1) }} py={{base: 4, md: 'none'}}>
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
        <MotionBox textAlign="center" pt={{ base: 8, md: 12 }} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.6 }}>
          <Button
            as={ChakraLink}
            href="https://g.page/r/CXO3cDknQeegEBM/review"
            isExternal
            {...pillButtonProps}
          >
            Leave Us a Review!
          </Button>
        </MotionBox>
      </Container>

      {/* Quality Assured */}
      <Box py={{ base: 12, md: 16 }}>
        <Container
          maxW="container.xl"
          mt={{ base: 6, lg: 20 }}
          h="95vh"
          bgImage={"linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.85)), url('https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1762985462/HB_tasting_letaru_f0sh9o.png')"}
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
        >
          <MotionBox
            // as={Flex}
            direction={{ base: 'column', lg: 'row' }}
            align={{ base: 'flex-start', lg: 'flex-end' }}
            justify="space-between"
            w="full"
            gap={{ base: 10, lg: 16 }}
            {...fadeUp}
          >
            <MotionVStack align="start" spacing={2} flex="1" maxW="4xl" w="full" {...fadeUp}>
              <MotionHeading as="h3" size={{ base: 'md', md: 'lg' }} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
                Quality Assured
              </MotionHeading>
              <MotionHeading as="h2" size={{ base: 'xl', md: '4xl' }} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
                Certified. Traceable. Trusted.
              </MotionHeading>
              <MotionText maxW="full" pt={6} fontSize={{ base: 'md', md: 'xl' }} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.25 }}>
                Proud partners and certified producers meeting the highest standards for Ugandan honey and beeswax. Every jar carries lab-grade moisture readings, batch provenance, and Uganda National Bureau of Standards compliance.
              </MotionText>
              <MotionText maxW="full" fontSize={{ base: 'md', md: 'xl' }} color="gray.100" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }}>
                Each harvest is tested in independent food laboratories for moisture, acidity, antibiotic residue, and HMF levels—and we consistently exceed European export benchmarks.
              </MotionText>
              <MotionText maxW="full" fontSize={{ base: 'md', md: 'xl' }} color="gray.100" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.33 }}>
                We invest in rigorous third-party audits so chefs, retailers, and families can trust that what is on the label is exactly what is inside the jar.
              </MotionText>
              <MotionBox pt={8} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.4 }}>
                <Button
                  as={Link}
                  href="/lab-tests"
                  {...pillButtonProps}
                  bg="#f5cb81"
                  color="black"
                  _hover={{ bg: 'black', color: '#f5cb81', textDecoration: 'none' }}
                  fontSize={{ base: 'sm', md: 'lg' }}
                >
                  View Lab Test Results
                </Button>
              </MotionBox>
            </MotionVStack>
            <MotionBox
              display="flex"
              flexDirection="column"
              justifyContent="flex-end"
              alignItems={{ base: 'flex-start', lg: 'flex-end' }}
              minW={{ base: 'auto', lg: '320px' }}
              w="full"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.35 }}
            >
              <MotionHStack spacing={{ base: 6, md: 8 }} flexWrap="wrap" justify={{ base: 'flex-start', lg: 'flex-end' }}>
                <VStack spacing={3} align="center">
                  <ChakraLink href="https://tunadobees.org/" isExternal _hover={{ textDecoration: 'none', opacity: 0.85 }}>
                    <Image
                      src="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1759497155/TUNADO_logo_ssjqo4.png"
                      alt="TUNADO Membership"
                      maxW={{ base: '120px', md: '160px' }}
                      bg="white"
                      rounded="lg"
                      p={4}
                    />
                  </ChakraLink>
                </VStack>
                <VStack spacing={3} align="center">
                  <ChakraLink href="https://unbs.go.ug/content.php?src=product-certification&pg=content" isExternal _hover={{ textDecoration: 'none', opacity: 0.85 }}>
                    <Image
                      src="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1759497151/UNBS_QMark_Logo_v8hbbz.png"
                      alt="Uganda National Bureau of Standards"
                      maxW={{ base: '120px', md: '160px' }}
                      bg="white"
                      rounded="lg"
                      p={4}
                    />
                  </ChakraLink>
                </VStack>
              </MotionHStack>
            </MotionBox>
          </MotionBox>
        </Container>
      </Box>

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
