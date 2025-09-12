import { Box, Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Section from './Section'

export default function HeroSection({
  title,
  subtitle,
  bgImage,
  overlay = false,
  children,
  py = { base: 12, md: 20 },
}) {
  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.6 },
    transition: { duration: 0.6, ease: 'easeOut' },
  }

  return (
    <Box
      position="relative"
      bgImage={bgImage ? `linear-gradient(rgba(0,0,0,0.05), rgba(0,0,0,0.5)), url('${bgImage}')` : undefined}
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      py={py}
      minH={{base: '35vh', md: '30vh'}}
      borderBottomRadius="4xl"
      overflow="hidden"
    >
      {overlay && <Box position="absolute" inset={0} bg="rgba(0,0,0,0.35)" />}
      <Section>
        {title && (
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={fadeUp.viewport}
            transition={fadeUp.transition}
          >
            <Heading as="h1" size={{base:"4xl", md: "7xl"}} color={overlay ? 'white' : undefined} fontFamily='var(--font-hanken)'
              textAlign={{base:'center', md: 'none'}}
            >
              {title}
            </Heading>
          </motion.div>
        )}
        {subtitle && (
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={fadeUp.viewport}
            transition={{ ...fadeUp.transition, delay: 0.08 }}
          >
            <Text color={overlay ? 'white' : '#000819'} mt={3} 
            textAlign='center'
            fontSize={{base:"xl", md: "2xl"}} fontFamily='var(--font-hanken)'>
              {subtitle}
            </Text>
          </motion.div>
        )}
        {/* {children && (
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={fadeUp.viewport}
            transition={{ ...fadeUp.transition, delay: 0.16 }}
          >
            {children}
          </motion.div>
        )} */}
      </Section>
    </Box>
  )
}
