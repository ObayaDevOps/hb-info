import {
  Box,
  Flex,
  Text,
  Image,
  Link,
  VStack,
  HStack,
  Stack,
  Icon,
  Button,
  Input,
} from '@chakra-ui/react'
import { FaLinkedin } from 'react-icons/fa'
import { FiCode } from 'react-icons/fi'
import { FaTree } from 'react-icons/fa'
import { GiBeehive } from 'react-icons/gi'
import { TbShirt } from 'react-icons/tb'
import { motion } from 'framer-motion'
import { toaster } from '@/lib/toaster'

const MotionBox = motion.create ? motion.create(Box) : motion(Box)
const MotionText = motion.create ? motion.create(Text) : motion(Text)

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleSubscribe = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const email = (formData.get('email') || '').toString().trim()
    if (!email) {
      toaster.create({ title: 'Enter your email', type: 'warning' })
      return
    }
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        toaster.create({ title: 'Subscribed!', description: "You're on the list.", type: 'success' })
        form.reset()
      } else {
        toaster.create({ title: 'Something went wrong', type: 'error' })
      }
    } catch (err) {
      toaster.create({ title: 'Network error', type: 'error' })
    }
  }

  return (
    <Box as="footer" color="#f5cb81" bg="#000819" px={0} fontFamily={'var(--font-hanken)'} borderTopRadius="4xl" >
      <Flex minH={{ base: '80vh', md: '80vh' }} align="center" justify="center" px={{ base: '1.5rem', md: '5.5rem' }} py={{ base: 10, md: 0 }} >
        <Flex
          w="full"
          maxW="1200px"
          direction={{ base: 'column', lg: 'row' }}
          align={{ base: 'stretch', lg: 'center' }}
          justify="space-between"
          gap={{ base: 10, md: 12, lg: 16 }}
          
        >
          {/* Brand + Info */}
          <Stack flex={1} spacing={{ base: 6, md: 8 }} >
            <MotionBox {...fadeUp}>
              <HStack align="center" spacing={4}>
                <Image
                  src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1757512779/Logo-with-words-TRANSPARENT_us7dmd.png'}
                  alt="Humble Beeing Logo"
                  height={{ base: '216px', md: '240px' }}
                  width="auto"
                  maxW="100%"
                  objectFit="contain"
                />
              </HStack>
            </MotionBox>

            <MotionText {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} fontSize={{ base: 'lg', md: 'xl' }} fontWeight={700}>
              Building a sweeter, more sustainable future.
            </MotionText>

            <VStack align="flex-start" spacing={1}>
              <MotionText {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} fontSize="0.875rem" fontWeight={500}>
                2nd Floor, Tools and Machinery Building, Kabalagala, Kampala
              </MotionText>
              <MotionText {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.25 }}>
                <Link href="mailto:hi@humble-beeing.com" fontSize="0.875rem" fontWeight={600} _hover={{ textDecoration: 'underline' }} color="#f5cb81">
                  hi@humble-beeing.com
                </Link>
              </MotionText>
              <HStack pt={2} spacing={3}>
                <MotionBox {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }}>
                  <Link href="https://www.linkedin.com/company/humble-beeing" isExternal aria-label="LinkedIn">
                    <Icon as={FaLinkedin} boxSize={6} color="#f5cb81" p={1} borderRadius="md" />
                  </Link>
                </MotionBox>
                <MotionBox {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.35 }}>
                  <Link href="https://www.dralegawebops.com/" isExternal aria-label="Developer Portfolio/Website">
                    <Icon as={FiCode} boxSize={6} color="#f5cb81" p={1} borderRadius="md" />
                  </Link>
                </MotionBox>
                <MotionBox {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.4 }}>
                  <Button size="sm" variant="outline" borderColor="#f5cb81" color="#f5cb81" _hover={{ bg: 'rgba(245, 203, 129, 0.12)' }}>
                    <Link href='https://www.dralegawebops.com/' isExternal aria-label="Developer Portfolio/Website" color='#f5cb81'>
                      Built by DWO
                    </Link>
                  </Button>
                </MotionBox>
              </HStack>

              <MotionText {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.45 }} fontSize="0.875rem" fontWeight={500} pt={2} display={{ base: 'none', lg: 'flex' }}>
                © {currentYear} Humble Beeing. All rights reserved
              </MotionText>
            </VStack>
          </Stack>

          {/* Newsletter Pill */}
          <Stack flex={1} spacing={{ base: 5, md: 6 }} align="stretch">
            <MotionText {...fadeUp} fontSize={{ base: '1.5rem', md: '2rem' }} fontWeight={800}>
              Join our newsletter
            </MotionText>
            <MotionText {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} fontSize={{ base: '0.95rem', md: '1rem' }} fontWeight={500}>
              Be first to hear about new products, impact updates, and stories from our beekeepers.
            </MotionText>

            <MotionBox
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              bg={'#000819'}
              borderWidth="2px"
              borderColor="#f5cb81"
              rounded="full"
              boxShadow="md"
              style={{ backdropFilter: 'blur(10px)' }}
              px={{ base: 2, sm: 3 }}
              py={{ base: 2, sm: 2.5 }}
              w="full"
            >
              <form onSubmit={handleSubscribe} style={{ width: '100%' }}>
                <HStack spacing={{ base: 1.5, sm: 2 }} align="center">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    variant="unstyled"
                    // bg='black'
                    bg='#000819'
                    color={'#f5cb81'}
                    _placeholder={{ color: 'rgba(245, 203, 129, 0.9)' }}
                    px={{ base: 3, sm: 4 }}
                    py={{ base: 2, sm: 2.5 }}
                    fontSize={{ base: '0.95rem', md: '1rem' }}
                    fontWeight={500}
                  />
                  <Button
                    type="submit"
                    px={{ base: 4, md: 6 }}
                    py={{ base: 2, md: 3 }}
                    rounded="full"
                    fontWeight={700}
                    bg="#f5cb81"
                    color="#000819"
                    borderWidth="1px"
                    borderColor="#f5cb81"
                    _hover={{ bg: 'transparent', color: '#f5cb81' }}
                    transition="all 150ms ease"
                  >
                    Subscribe
                  </Button>
                </HStack>
              </form>
            </MotionBox>

            <MotionText {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }} fontSize="0.8rem" color="#f5cb81">
              We respect your privacy. Unsubscribe anytime.
            </MotionText>

            {/* Donate to Support */}
            <MotionText {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} fontSize={{ base: '1.25rem', md: '1.5rem' }} fontWeight={800} pt={{ base: 6, md: 8 }}>
              Get Involved! 
            </MotionText>
            <MotionText {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} fontSize={{ base: '0.75rem', md: '1rem' }} fontWeight={800}>
              Donate to Support a Smallholder Beekeeper
            </MotionText>
            <MotionBox {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
              <HStack spacing={{ base: 3, md: 4 }} flexWrap="wrap">
                <Button
                  leftIcon={<GiBeehive size={18} />}
                  bg="black"
                  color="#f5cb81"
                  borderWidth="1px"
                  borderColor="#f5cb81"
                  rounded="full"
                  px={{ base: 4, md: 6 }}
                  py={{ base: 2, md: 3 }}
                  fontWeight={700}
                  _hover={{ bg: '#f5cb81', color: 'black' }}
                >
                  Beehive - $100
                </Button>
                <Button
                  leftIcon={<TbShirt size={18} />}
                  bg="black"
                  color="#f5cb81"
                  borderWidth="1px"
                  borderColor="#f5cb81"
                  rounded="full"
                  px={{ base: 4, md: 6 }}
                  py={{ base: 2, md: 3 }}
                  fontWeight={700}
                  _hover={{ bg: '#f5cb81', color: 'black' }}
                >
                  Beesuit-$80
                </Button>
                <Button
                  leftIcon={<FaTree size={18} />}
                  bg="black"
                  color="#f5cb81"
                  borderWidth="1px"
                  borderColor="#f5cb81"
                  rounded="full"
                  px={{ base: 4, md: 6 }}
                  py={{ base: 2, md: 3 }}
                  fontWeight={700}
                  _hover={{ bg: '#f5cb81', color: 'black' }}
                >
                  Shea Trees -$15
                </Button>
              </HStack>
            </MotionBox>

            <MotionText {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.35 }} fontSize="0.875rem" fontWeight={500} pt={2} display={{ base: 'flex', lg: 'none' }}>
              © {currentYear} HB Fine Honey Suppliers Limited. All rights reserved
            </MotionText>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Footer
