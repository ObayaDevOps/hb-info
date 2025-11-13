import { Box } from '@chakra-ui/react'

export default function StyledCard({ children, _hover: hoverProps = {}, ...props }) {
  return (
    <Box
      bg="brand.red"
      borderColor="#000819"
      borderWidth={'2px'}
      borderRadius="lg"
      boxShadow="md"
      overflow="hidden"
      transition="transform 0.25s ease, box-shadow 0.25s ease"
      _hover={{
        transform: 'translateY(-6px)',
        boxShadow: 'lg',
        ...hoverProps,
      }}
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
