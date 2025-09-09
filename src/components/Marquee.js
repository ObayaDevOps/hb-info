import { Box, HStack, Text } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`

export default function Marquee({ speed = 75, children, gap = 52 }) {
  // Rough mapping from speed to duration (seconds)
  const durationSec = Math.max(8, Math.round(800 / speed))
  return (
    <Box overflow="hidden" w="100%">
      <Box
        display="flex"
        whiteSpace="nowrap"
        animation={`${scroll} ${durationSec}s linear infinite`}
        // Two copies for seamless loop
      >
        <HStack spacing={gap} pr={gap}>
          {children}
        </HStack>
        <HStack spacing={gap} pl={gap}>
          {children}
        </HStack>
      </Box>
    </Box>
  )
}

