import { Box } from '@chakra-ui/react'

export default function StyledCard({ children, ...props }) {
  return (
    <Box
      bg="brand.red"
      borderColor="#000819"
      borderWidth={'2px'}
      borderRadius="lg"
      // boxShadow="4px 4px 0px 0px rgba(0, 0, 0, 1)"
      overflow="hidden"
      // _hover={{ transform: 'translateY(-4px)', transition: 'transform 0.2s' }}
      h="100%"
      mx={2}
      display="flex"
      flexDirection="column"
      fontFamily='var(--font-hanken)'
      {...props}
    >
      {children}
    </Box>
  )
}
