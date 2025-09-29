import { Container } from '@chakra-ui/react'

export default function Section({ children, maxW="5xl", px = { base: 6, md: 8 }, py = { base: 32, md: 32 }, ...rest }) {
  return (
    <Container maxW={maxW} px={px} py={py} {...rest}>
      {children}
    </Container>
  )
}

