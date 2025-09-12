import { Box, Toaster, ToastRoot, ToastTitle, ToastDescription, ToastCloseTrigger, ToastIndicator } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { toaster } from '@/lib/toaster'

export default function PageLayout({ children, navbarProps }) {
  const overlayOnHero = navbarProps?.overlayOnHero || false
  return (
    <Box bg={'#FFF2D7'}>
      <Navbar {...(navbarProps || {})} />
      {/* Prevent floating nav pill from overlapping non-hero content on desktop */}
      <Box as="main" pt={{ base: 0, lg: overlayOnHero ? 0 : 28 }}>{children}</Box>
      <Footer />
      <Toaster toaster={toaster}>
        {(toast) => (
          <ToastRoot>
            <ToastIndicator />
            <Box>
              <ToastTitle>{toast.title}</ToastTitle>
              {toast.description ? <ToastDescription>{toast.description}</ToastDescription> : null}
            </Box>
            <ToastCloseTrigger />
          </ToastRoot>
        )}
      </Toaster>
    </Box>
  )
}
