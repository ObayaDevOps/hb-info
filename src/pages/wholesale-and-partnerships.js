import Head from 'next/head';
import { Box, Container, Heading, Text, VStack, SimpleGrid, HStack, Button, Input, Textarea, Image } from '@chakra-ui/react';
import HeroSection from '@/components/sections/HeroSection';
import PageLayout from '@/components/layouts/PageLayout';
import StyledCard from '@/components/StyledCard';

export default function WholesalePartnershipsPage() {
  return (
    <Box bg={'#FFF2D7'} color={'#000819'} minH="100vh" fontFamily={'var(--font-hanken)'}>
      <Head>
        <title>Wholesale & Partnerships | Humble Beeing</title>
        <meta name="description" content="Bulk orders for chefs and retailers, corporate gifting, and NGO/donor partnerships." />
      </Head>
      {/* Hero */}
      <HeroSection
        title="Wholesale & Partnerships"
        subtitle="Chefs, retailers, events, and corporate gifting — let’s collaborate."
        bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757498617/IMG_0231_jpk3oz.jpg'}
        overlay
        py={{ base: 16, md: 24 }}
      />

      {/* Content container using Our Story styling */}
      <Container
        maxW="6xl"
        px={{ base: 12, md: 20 }}
        py={{ base: 12, md: 20 }}
        bg={'#FFF2D7'}
        rounded={{ base: 'none', lg: '4xl' }}
        mt={{ base: 0, md: 6 }}
      >
        {/* Intro copy */}
        <VStack align="start" spacing={6} pb={8}>
          <Text fontSize={{ base: 'lg', md: 'xl' }} color="#000819">
            We partner with chefs, retailers, and organizations to deliver luxury honey and beeswax products with traceability and impact. From custom gift boxes to bulk formats, we tailor solutions to your needs.
          </Text>
        </VStack>

        {/* Optional feature image */}
        <Box pb={8}>
          <Image
            src="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757585367/HB_Tasting_Letaru_2_axwfee.png"
            alt="Humble Beeing tasting and wholesale presentation"
            borderRadius="3xl"
            objectFit="cover"
            width="100%"
            maxH={{ base: '280px', md: '420px' }}
          />
        </Box>

        {/* Use Cases + Product Range */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} pb={12}>
          <VStack align="start" spacing={6} p={2}>
            <Heading as="h2" size="lg">Use Cases</Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="#000819">Chefs and restaurants, weddings and events, retail and specialty stores.</Text>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="#000819">Corporate gifts and co-branded sets available seasonally.</Text>
          </VStack>
          <VStack align="start" spacing={6} p={2}>
            <Heading as="h2" size="lg">Product Range</Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="#000819">Single-origin honey, infused collection, luxury gift boxes, and beeswax candles.</Text>
          </VStack>
        </SimpleGrid>

        {/* Inquiry Form (Styled Card) */}
        <StyledCard>
          <Box p={{ base: 4, md: 6 }}>
            <VStack align="start" spacing={4}>
              <Heading as="h2" size="lg">Request a Quote</Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                <Input placeholder="Full Name" bg="white" color="#000819" borderWidth="1px" borderColor="#1A2234" />
                <Input placeholder="Email" type="email" bg="white" color="#000819" borderWidth="1px" borderColor="#1A2234" />
                <Input placeholder="Company / Organization" bg="white" color="#000819" borderWidth="1px" borderColor="#1A2234" />
                <Box as="select" borderWidth="1px" borderColor="#1A2234" borderRadius="md" p={2} bg="white" color="#000819">
                  <option value="" disabled selected>Inquiry Type</option>
                  <option value="chef">Chef / Restaurant</option>
                  <option value="retail">Retail / Specialty</option>
                  <option value="events">Events / Weddings</option>
                  <option value="corporate">Corporate Gifting</option>
                  <option value="ngo">NGO / Donor / Grant</option>
                </Box>
                <Input placeholder="Estimated Volume (e.g., 200 units)" bg="white" color="#000819" borderWidth="1px" borderColor="#1A2234" />
                <Input placeholder="Timeline (e.g., Q4)" bg="white" color="#000819" borderWidth="1px" borderColor="#1A2234" />
              </SimpleGrid>
              <Textarea placeholder="Tell us about your needs…" bg="white" color="#000819" borderWidth="1px" borderColor="#1A2234" />
              <HStack>
                <Button bg="#000819" color="white" _hover={{ opacity: 0.9 }}>Submit Inquiry</Button>
                <Button variant="outline" as="a" href="https://shop.humble-beeing.com" target="_blank" rel="noopener noreferrer" borderColor="#000819" color="#000819" _hover={{ bg: 'rgba(0, 8, 25, 0.08)' }}>See Gift Boxes</Button>
              </HStack>
            </VStack>
          </Box>
        </StyledCard>
      </Container>

    </Box>
  );
}

WholesalePartnershipsPage.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
)
