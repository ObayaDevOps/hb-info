import {
    Box,
    Flex,
    HStack,
    Link,
    Button,
    useDisclosure,
    useBreakpointValue,
    VStack,
    Image,
    Dialog,
    Text,
    Portal,
  } from '@chakra-ui/react';

import Form from '@/components/Form'
  import Head from "next/head";

// Layout supplies Navbar/Footer


export default function ContactPage() {
    return (
        <Box bg={'#f5cb81'} minH='100vh'>
        <Head>
            {/* Use data from Sanity */}
            <title>{'Contact Us' || 'Ashton & Carrington'}</title>
            <meta name="description" content={'Empowering Innovation and Financial Growth Through Expertise'} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Box p={10} >
            <Box
            bg='#000819'
            borderWidth={'2px'}
            borderRadius={'12px'}
            borderColor='#00E2E5'
            p={'1.5rem'}
          >
              <Box>
                <Text
                  fontFamily='var(--font-hanken)'
                  fontSize={'1.25rem'}
                  lineHeight='normal' // 30px
                  fontWeight='500'
                  letterSpacing={'0.025rem'}
                  fontStyle='normal'
                  color='white'
                >
                Contact Us
                </Text>
              </Box>
            <Box>
              <Text
                fontFamily='var(--font-hanken)'
                fontSize='0.875rem' // 30px
                lineHeight='1.875rem' // 30px
                fontWeight='400'
                fontStyle='normal'
                color='#FFF'
                pt={'0.5rem'}
              >
              Want to reach out?
              Enter your details below and provide a
              message to Ashton & Carrington
              and we'll respond as soon as we can.
              </Text>

              <Box>
                <Form buttonPosition='none' />
              </Box>



            </Box>
          </Box>          
        </Box>

        </Box>
    );
}
