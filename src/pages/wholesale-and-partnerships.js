import Head from 'next/head';
import { Box, Container, Heading, Text, VStack, SimpleGrid, HStack, Button, Input, Textarea } from '@chakra-ui/react';
import HeroSection from '@/components/sections/HeroSection';
import Section from '@/components/sections/Section';

export default function WholesalePartnershipsPage() {
  return (
    <Box bg={'#f5cb81'} color={'#000819'} minH="100vh">
      <Head>
        <title>Wholesale & Partnerships | Humble Beeing</title>
        <meta name="description" content="Bulk orders for chefs and retailers, corporate gifting, and NGO/donor partnerships." />
      </Head>
      {/* Hero */}
      <HeroSection
        title="Wholesale & Partnerships"
        subtitle="Chefs, retailers, events, and corporate gifting — let’s collaborate."
        py={{ base: 12, md: 16 }}
      />

      {/* Use Cases + Product Range */}
      <Section pb={{ base: 10, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} pb={10}>
          <VStack align="start" spacing={3}>
            <Heading as="h2" size="md">Use Cases</Heading>
            <Text color="#000819">Chefs and restaurants, weddings and events, retail and specialty stores.</Text>
            <Text color="#000819">Corporate gifts and co-branded sets available seasonally.</Text>
          </VStack>
          <VStack align="start" spacing={3}>
            <Heading as="h2" size="md">Product Range</Heading>
            <Text color="#000819">Single-origin honey, infused collection, luxury gift boxes, and beeswax candles.</Text>
          </VStack>
        </SimpleGrid>

        {/* Inquiry Form */}
        <VStack align="start" spacing={4} borderWidth="1px" borderColor="#1A2234" borderRadius="md" p={6}>
          <Heading as="h2" size="md">Request a Quote</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
            <Input placeholder="Full Name" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Company / Organization" />
            <Box as="select" borderWidth="1px" borderColor="#1A2234" borderRadius="md" p={2} bg="white" color="#000819">
              <option value="" disabled selected>Inquiry Type</option>
              <option value="chef">Chef / Restaurant</option>
              <option value="retail">Retail / Specialty</option>
              <option value="events">Events / Weddings</option>
              <option value="corporate">Corporate Gifting</option>
              <option value="ngo">NGO / Donor / Grant</option>
            </Box>
            <Input placeholder="Estimated Volume (e.g., 200 units)" />
            <Input placeholder="Timeline (e.g., Q4)" />
          </SimpleGrid>
          <Textarea placeholder="Tell us about your needs…" />
          <HStack>
            <Button bg="#000819" color="white" _hover={{ opacity: 0.9 }}>Submit Inquiry</Button>
            <Button variant="outline" as="a" href="https://shop.humble-beeing.com" target="_blank" rel="noopener noreferrer" borderColor="#000819" color="#000819" _hover={{ bg: 'rgba(0, 8, 25, 0.08)' }}>See Gift Boxes</Button>
          </HStack>
        </VStack>
      </Section>

    </Box>
  );
}
