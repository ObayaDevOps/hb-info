import Head from 'next/head';
import { useState } from 'react';
import { Box, Container, Heading, Text, VStack, HStack, Button, Input, Textarea, Switch, Link as CLink } from '@chakra-ui/react';
// Layout supplies Navbar/Footer

export default function ContactConnectPage() {
  const [isWholesale, setIsWholesale] = useState(false);

  return (
    <Box bg={'#f5cb81'} color={'#000819'} minH="100vh">
      <Head>
        <title>Contact & Connect | Humble Beeing</title>
        <meta name="description" content="Contact form, social media links, and newsletter signup." />
      </Head>

      <Container maxW="container.md" px={{ base: 6, md: 8 }} py={{ base: 10, md: 16 }}>
        <VStack align="start" spacing={6}>
          <Heading as="h1" size="lg">Contact & Connect</Heading>
          <Text color="#000819">We’d love to hear from you. Toggle between consumer and wholesale inquiries.</Text>

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

          {/* Contact Form (UI only) */}
          <VStack align="start" spacing={3} w="full" borderWidth="1px" borderColor="#1A2234" borderRadius="md" p={6}>
            <Input placeholder="Full Name" />
            <Input placeholder="Email" type="email" />
            {isWholesale && <Input placeholder="Company / Organization" />}
            <Textarea placeholder="Your message…" rows={5} />
            <Button bg="#000819" color="white" _hover={{ opacity: 0.9 }}>Send Message</Button>
          </VStack>

          {/* Social Links */}
          <VStack align="start" spacing={2}>
            <Heading as="h2" size="sm">Connect</Heading>
            <HStack spacing={4}>
              <CLink href="#" isExternal>Instagram</CLink>
              <CLink href="#" isExternal>LinkedIn</CLink>
              <CLink href="#" isExternal>TikTok</CLink>
            </HStack>
          </VStack>

          {/* Newsletter */}
          <VStack align="start" spacing={2} w="full">
            <Heading as="h2" size="sm">Newsletter</Heading>
            <HStack w="full">
              <Input placeholder="Your email" type="email" />
              <Button bg="#000819" color="white" _hover={{ opacity: 0.9 }}>Sign Up</Button>
            </HStack>
            <Text color="#000819" fontSize="sm">Offers, new releases, and impact updates.</Text>
          </VStack>
        </VStack>
      </Container>

    </Box>
  );
}
