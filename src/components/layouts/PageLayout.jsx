import { Box } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PageLayout({ children, navbarProps }) {
  return (
    <Box>
      <Navbar {...(navbarProps || {})} />
      <Box as="main">{children}</Box>
      <Footer />
    </Box>
  )
}

