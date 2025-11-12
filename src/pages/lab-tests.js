import Head from 'next/head';
import Link from 'next/link';
import { Box, Container, Heading, Text, VStack, SimpleGrid, Image, Button, HStack, Badge } from '@chakra-ui/react';
import HeroSection from '@/components/sections/HeroSection';
import PageLayout from '@/components/layouts/PageLayout';

const labReports = [
  {
    title: 'Lab Certificate — Moisture & HMF',
    subtitle: 'Batch HB-2025-01 · SGS Kampala · June 2025',
    imageUrl: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1762987943/Lab-Test-FA-2025-10664_copy_of2v1k.pdf',
    downloadUrl: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1762987943/Lab-Test-FA-2025-10664_copy_of2v1k.pdf',
    metrics: [
      { label: 'Moisture', value: '17%' },
      { label: 'HMF', value: '21 mg/kg' },
      { label: 'Diastase', value: '14 DN' },
    ],
  },
  {
    title: 'Lab Certificate — Residue & Adulteration',
    subtitle: 'Batch HB-2025-01 · ISO 17025 Partner Lab · June 2025',
    imageUrl: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1762987942/Lab-Test-Results-ML-2025-06446_ovreug.pdf',
    downloadUrl: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1762987942/Lab-Test-Results-ML-2025-06446_ovreug.pdf',
    metrics: [
      { label: 'Pesticide Residue', value: 'Not detected' },
      { label: 'Antibiotics', value: 'Not detected' },
      { label: 'Adulteration', value: 'Negative' },
    ],
  },
];

export default function LabTestsPage() {
  return (
    <Box bg="#FFF2D7" color="#000819" minH="100vh" fontFamily={'var(--font-hanken)'}>
      <Head>
        <title>Lab Test Certificates | Humble Beeing</title>
        <meta
          name="description"
          content="Independent lab certificates for Humble Beeing honey batches covering moisture, HMF, residues, and adulteration checks."
        />
      </Head>

      <HeroSection
        title="Lab Test Certificates"
        subtitle="Independent QA documentation for every harvest batch."
        bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757495003/IMG_0291_pkvi7q.jpg'}
        overlay
        py={{ base: 16, md: 24 }}
      >
        <Text mt={4} maxW="2xl" color="white" fontSize={{ base: 'lg', md: 'xl' }}>
          Review moisture, HMF, residue, and adulteration reports that keep our honey certified and export ready.
        </Text>
      </HeroSection>

      <Container
        maxW="6xl"
        px={{ base: 6, md: 12 }}
        py={{ base: 12, md: 20 }}
      >
        <VStack align="start" spacing={4} mb={{ base: 10, md: 16 }}>
          <Heading as="h1" size={{ base: '2xl', md: '4xl' }}>
            Lab Test Certificates
          </Heading>
          <Text fontSize={{ base: 'md', md: 'xl' }} maxW="3xl">
            Every harvest batch is verified in ISO-accredited laboratories. Download the original A4 certificates below to review
            moisture readings, HMF values, residue panels, and adulteration results.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 12, md: 14 }}>
          {labReports.map((report) => (
            <VStack
              key={report.title}
              spacing={5}
              align="stretch"
              bg="white"
              p={{ base: 4, md: 6 }}
              mr={6}
              borderRadius="2xl"
              boxShadow="0 12px 30px rgba(0, 8, 25, 0.08)"
              borderWidth="2px"
              borderColor="#000819"
            >
              <Box>
                <Heading as="h2" size="md">
                  {report.title}
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  {report.subtitle}
                </Text>
              </Box>


              <HStack spacing={3} flexWrap="wrap">
                {report.metrics.map((metric) => (
                  <Badge key={metric.label} bg="#000819" color="#f5cb81" borderRadius="full" px={3} py={1}>
                    {metric.label}: {metric.value}
                  </Badge>
                ))}
              </HStack>

              <Button
                as={Link}
                href={report.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                bg="#000819"
                color="white"
                _hover={{ opacity: 0.85 }}
              >
                View Full Certificate
              </Button>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

LabTestsPage.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
);
