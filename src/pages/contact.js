import { Box, Text } from '@chakra-ui/react';
import Form from '@/components/Form'
import Head from "next/head";
import HeroSection from '@/components/sections/HeroSection';
import PageLayout from '@/components/layouts/PageLayout';

// Layout supplies Navbar/Footer


export default function ContactPage() {
  return (
    <Box bg={'#f5cb81'} minH='100vh'>
      <Head>
        {/* Use data from Sanity */}
        <title>{'Contact Us' || 'Ashton & Carrington'}</title>
        <meta name="description" content={'Empowering Innovation and Financial Growth Through Expertise'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757515387/lOGO-LARGE-transparent_gl7jrn.png" />
      </Head>

      {/* Hero */}
      <HeroSection
        title="Contact Us"
        subtitle="We’ll get back to you as soon as we can."
        bgImage={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757451427/20210206_125023_wdecoo.jpg'}
        overlay
        py={{ base: 16, md: 24 }}
      />

      {/* Panel */}
      <Box
        maxW="container.md"
        mx="auto"
        px={{ base: 12, md: 20 }}
        py={{ base: 16, md: 20 }}
        bg={'#FFF2D7'}
        rounded={{ base: 'none', lg: '4xl' }}
        boxShadow={{ base: 'none', lg: 'xl' }}
        mt={{ base: 0, md: 10 }}
      >
        <Text
          fontFamily='var(--font-hanken)'
          fontSize={'1.25rem'}
          lineHeight='normal'
          fontWeight='600'
          color='#000819'
        >
          Contact Us
        </Text>
        <Text
          fontFamily='var(--font-hanken)'
          fontSize='0.95rem'
          lineHeight='1.75rem'
          fontWeight='400'
          color='#000819'
          pt={'0.5rem'}
        >
          Want to reach out? Enter your details below and provide a message to Ashton & Carrington and we'll respond as soon as we can.
        </Text>

        <Box mt={4}>
          <Form buttonPosition='none' />
        </Box>
      </Box>
    </Box>
  );
}

ContactPage.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
)
