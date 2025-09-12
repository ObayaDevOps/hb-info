import Head from 'next/head';
import { useState } from 'react';
import { Box, Container, Heading, Text, VStack, HStack, Button, Input, Textarea, Switch, Link as CLink, Image } from '@chakra-ui/react';
import HeroSection from '@/components/sections/HeroSection';
import PageLayout from '@/components/layouts/PageLayout';
import StyledCard from '@/components/StyledCard';
// Layout supplies Navbar/Footer

export default function ContactConnectPage() {
  const [isWholesale, setIsWholesale] = useState(false);

  return (
    <Box bg={'#FFF2D7'} color={'#000819'} minH="100vh" fontFamily={'var(--font-hanken)'}>
      <Head>
        <title>Contact & Connect | Humble Beeing</title>
        <meta name="description" content="Contact form, social media links, and newsletter signup." />
      </Head>

      {/* Hero */}
      <HeroSection
        title="Contact & Connect"
        subtitle="We’d love to hear from you — drop us a note."
        bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497299/IMG_0111_m68vis.jpg'}
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
        <VStack align="start" spacing={6}>
          <Text fontSize={{ base: 'lg', md: 'xl' }} color="#000819">
            We’d love to hear from you. Toggle between consumer and wholesale inquiries. Our team responds within 1–2 business days.
          </Text>

          {/* Feature image for visual consistency */}
          <Box pb={4} w="full">
            <Image
              src="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497299/IMG_0111_m68vis.jpg"
              alt="Humble Beeing contact and tasting"
              borderRadius="3xl"
              objectFit="cover"
              width="100%"
              maxH={{ base: '260px', md: '380px' }}
            />
          </Box>

          {/* Toggle */}
          <HStack align="center" spacing={3}>
            <Text as="label" htmlFor='wholesale' mb='0'>Wholesale inquiry</Text>
            <Switch.Root
              id='wholesale'
              checked={isWholesale}
              onCheckedChange={(e) => setIsWholesale(typeof e === 'boolean' ? e : e.checked)}
            >
              <Switch.Control />
              <Switch.Thumb />
            </Switch.Root>
          </HStack>

          {/* Contact Form */}
          <StyledCard w="full">
            <Box p={{ base: 4, md: 6 }}>
              <VStack align="start" spacing={3} w="full">
                <Heading as="h2" size="lg">Send us a message</Heading>
                <Input placeholder="Full Name" bg="white" color="#000819" borderWidth="1px" borderColor="#1A2234" />
                <Input placeholder="Email" type="email" bg="white" color="#000819" borderWidth="1px" borderColor="#1A2234" />
                {isWholesale && <Input placeholder="Company / Organization" bg="white" color="#000819" borderWidth="1px" borderColor="#1A2234" />}
                <Textarea placeholder="Your message…" rows={5} bg="white" color="#000819" borderWidth="1px" borderColor="#1A2234" />
                <Button bg="#000819" color="white" _hover={{ opacity: 0.9 }}>Send Message</Button>
              </VStack>
            </Box>
          </StyledCard>

          {/* Social Links */}
          <VStack align="start" spacing={2}>
            <Heading as="h2" size="lg">Connect</Heading>
            <HStack spacing={4}>
              <CLink href="https://www.instagram.com/humble_beeing_ug/" isExternal>Instagram</CLink>
              <CLink href="https://www.linkedin.com/company/humble-beeing" isExternal>LinkedIn</CLink>
              <CLink href="#" isExternal>TikTok</CLink>
            </HStack>
          </VStack>

          {/* Newsletter */}
          <StyledCard w="full">
            <Box p={{ base: 4, md: 6 }}>
              <VStack align="start" spacing={2} w="full">
                <Heading as="h2" size="lg">Newsletter</Heading>
                <HStack w="full">
                  <Input placeholder="Your email" type="email" bg="white" color="#000819" borderWidth="1px" borderColor="#1A2234" />
                  <Button bg="#000819" color="white" _hover={{ opacity: 0.9 }}>Sign Up</Button>
                </HStack>
                <Text color="#000819" fontSize="sm">Offers, new releases, and impact updates.</Text>
              </VStack>
            </Box>
          </StyledCard>
        </VStack>
      </Container>

    </Box>
  );
}

ContactConnectPage.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
)
