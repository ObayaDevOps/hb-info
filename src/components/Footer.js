import {
  Box,
  Container,
  Flex,
  Text,
  Image,
  Link,
  VStack,
  HStack,
  Stack,
  Icon,
  Button,
  Spacer,
} from '@chakra-ui/react';
import { FaLinkedin } from 'react-icons/fa'; // Example LinkedIn Icon
import { FiCode } from 'react-icons/fi'; // Example Code Icon
import { poppins } from '@/styles/theme'; // legacy import; not used after font switch

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box  color="#000819" bg="#f5cb81" pt={{ base: 8, md: 20 }}  px={0} fontFamily={'var(--font-hanken)'}>
       <Box px={'5.5rem'} py={'1rem'}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'center', md: 'flex-start' }}
          gap={{ base: 8, md: 4 }} // Add gap between columns/rows
        >
          {/* Left Section */}
          <HStack align={{ base: 'center', md: 'flex-start' }} spacing={4}>
            <Stack direction={{ base: 'column', md: 'row' }}>
            <Box>
              <Image
                src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1752839793/Humble_Beeing_Black_Logo_with_text.svg'}
                alt="The Humble Beeing Logo"
                height={{ base: '80px', md: '80px' }} // Adjust size as needed
                objectFit="contain"
              />
            </Box>
            <Box>
            <HStack spacing={3}>
              <Link href="https://www.linkedin.com/company/ashton-and-carrington/" isExternal aria-label="LinkedIn">
                <Icon as={FaLinkedin} boxSize={6} color="#000819" p={1} borderRadius="md" />
              </Link>
              {/* Replace with actual link and consider a more specific icon if needed */}
              <Link href="#" isExternal aria-label="Developer Portfolio/Website">
                <Icon as={FiCode} boxSize={6} color="#000819" p={1} borderRadius="md" />
              </Link>
              <Button
                size="sm"
                variant="outline"
                borderColor="#000819"
                color="#000819"
                _hover={{ bg: 'rgba(0, 8, 25, 0.08)' }}
                ml={2} // Add margin to space it from icons
              >
              <Link href='https://www.dralegawebops.com/' isExternal aria-label="Developer Portfolio/Website" color='#000819'>
                Built by DWO
              </Link>
                
              </Button>
            </HStack>
            <Text 
            fontSize="0.875rem"
            fontFamily="var(--font-hanken)"
            fontStyle='normal'
            fontWeight={500}
            color="#000819"
            lineHeight={'1.5rem'}
            pt={2}
            display={{base:'none', lg:'flex'}}
            >
              © {currentYear} The Humble Beeing. All rights reserved
            </Text>
            </Box>
            </Stack>
          </HStack>

          {/* Spacer for Medium+ screens */}
          <Spacer display={{ base: 'none', md: 'block' }} />

          {/* Right Section */}
          <VStack align={{ base: 'center', md: 'flex-end' }} spacing={1} textAlign={{ base: 'center', md: 'right' }}>

            
            <Link color={'#000819'} 
              href="mailto:hi@humble-beeing.com" 
              fontSize="0.875rem"
              fontFamily="var(--font-hanken)"
              fontStyle='normal'
              fontWeight={500}
              lineHeight={'1.5rem'}
          
              _hover={{ textDecoration: 'underline' }}>
              hi@humble-beeing.com
            </Link>
            <Text
              fontSize="0.875rem"
              fontFamily="var(--font-hanken)"
              fontStyle='normal'
              fontWeight={500}
              color="#000819"
              lineHeight={'1.5rem'}
            >
              2nd Floor, Tools and Machinery Building, Kabalagala, Kampala
            </Text>

            <Text 
              fontSize="0.875rem"
              fontFamily="var(--font-hanken)"
              fontStyle='normal'
              fontWeight={500}
              color="#000819"
              lineHeight={'1.5rem'}
              pt={2}
              display={{base:'flex', lg:'none'}}
              >
              © {currentYear} The Humble Beeing. All rights reserved
            </Text>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer; 
