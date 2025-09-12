import Head from 'next/head';
import { Box, Container, Heading, Text, VStack, SimpleGrid, HStack, Badge, Button, Image } from '@chakra-ui/react';
import HeroSection from '@/components/sections/HeroSection';
import Section from '@/components/sections/Section';
import PageLayout from '@/components/layouts/PageLayout';

export default function ImpactPage() {
  return (
    <Box bg={'#FFF2D7'}color={'#000819'} minH="100vh">
      <Head>
        <title>Impact & Sustainability | Humble Beeing</title>
        <meta name="description" content="Poverty alleviation, biodiversity, traceability, gender inclusion, and UN SDG alignment." />
      </Head>
      {/* Hero */}
      <HeroSection
        title="Impact & Sustainability"
        subtitle="Traceable quality and measurable outcomes across people and planet."
        bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757497289/IMG_0214_ma3gau.jpg'}
        overlay
        py={{ base: 16, md: 24 }}
      >
        <Text mt={4} maxW="2xl" color="white">
          From beekeeper training to biodiversity corridors, every jar you enjoy funds lasting change.
        </Text>
      </HeroSection>

      <Section
        py={{ base: 10, md: 16 }}
        bg={'#FFF2D7'}
        rounded={{ base: 'none', lg: '4xl' }}
        // shadow={{ base: 'none', lg: 'xl' }}
        px={{ base: 12, md: 20 }}
      >
        {/* Impact pillars */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} pb={8}>
          <VStack align="start" spacing={3} borderWidth="1px" borderColor="#1A2234" borderRadius="md" p={6}>
            <Heading as="h2" size="md">Poverty Alleviation</Heading>
            <Text color="#000819">5,000 farmers trained and supported with income uplift through fair, consistent purchasing.</Text>
          </VStack>
          <VStack align="start" spacing={3} borderWidth="1px" borderColor="#1A2234" borderRadius="md" p={6}>
            <Heading as="h2" size="md">Environmental Conservation</Heading>
            <Text color="#000819">Preservation of Shea trees and biodiversity corridors across priority landscapes.</Text>
          </VStack>
          <VStack align="start" spacing={3} borderWidth="1px" borderColor="#1A2234" borderRadius="md" p={6}>
            <Heading as="h2" size="md">Traceability & Quality</Heading>
            <Text color="#000819">Fighting adulteration with QR-enabled traceability and rigorous testing protocols.</Text>
          </VStack>
          <VStack align="start" spacing={3} borderWidth="1px" borderColor="#1A2234" borderRadius="md" p={6}>
            <Heading as="h2" size="md">Gender & Inclusion</Heading>
            <Text color="#000819">Focused training and recruitment driving a higher percentage of women beekeepers.</Text>
          </VStack>
        </SimpleGrid>

        {/* UN SDG Alignment (placeholder infographic area) */}
        <VStack align="start" spacing={3} pb={8}>
          <Heading as="h2" size="md">UN SDG Alignment</Heading>
          <Text color="#000819">Visual summary of aligned SDGs and outcomes (infographic placeholder).</Text>
          <Image src={'/globe.svg'} alt="SDG Infographic" boxSize={{ base: '200px', md: '280px' }} />
        </VStack>

        {/* KPI Dashboard (snapshot) */}
        <VStack align="start" spacing={3} pb={6}>
          <Heading as="h2" size="md">Impact Dashboard</Heading>
          <Text color="#000819">Quarterly KPIs: farmer count, hectares conserved, % women trained, units traceable.</Text>
        </VStack>

        {/* CTA */}
        <HStack spacing={4}>
          <Button as="a" href="#" size={{base: 'xs', md: 'lg'}} target="_blank" bg="#000819" color="white" _hover={{ opacity: 0.9 }}>Download our Impact Deck</Button>
          <Button variant="outline" size={{base: 'xs', md: 'lg'}} as="a" href="/wholesale-and-partnerships" borderColor="#000819" color="#000819" _hover={{ bg: 'rgba(0, 8, 25, 0.08)' }}>Partner with us</Button>
        </HStack>
      </Section>

    </Box>
  );
}

ImpactPage.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
)
