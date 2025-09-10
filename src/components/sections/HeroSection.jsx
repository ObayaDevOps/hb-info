import { Box, Heading, Text } from '@chakra-ui/react'
import Section from './Section'

export default function HeroSection({
  title,
  subtitle,
  bgImage,
  minH,
  overlay = false,
  children,
  py = { base: 12, md: 20 },
}) {
  return (
    <Box
      position="relative"
      bgImage={bgImage ? `url('${bgImage}')` : undefined}
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      py={py}
      minH={minH}
    >
      {overlay && <Box position="absolute" inset={0} bg="rgba(0,0,0,0.35)" />}
      <Section>
        {title && (
          <Heading as="h1" size="lg" color={overlay ? 'white' : undefined}>
            {title}
          </Heading>
        )}
        {subtitle && (
          <Text color={overlay ? 'white' : '#000819'} mt={3} maxW="2xl">
            {subtitle}
          </Text>
        )}
        {children}
      </Section>
    </Box>
  )
}

