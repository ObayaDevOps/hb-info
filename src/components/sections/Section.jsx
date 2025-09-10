import { Container } from '@chakra-ui/react'

export default function Section({ children, maxW = 'container.xl', px = { base: 6, md: 8 }, py, ...rest }) {
  return (
    <Container maxW={maxW} px={px} py={py} {...rest}>
      {children}
    </Container>
  )
}

