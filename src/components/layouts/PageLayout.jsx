import { Box, Toaster, ToastRoot, ToastTitle, ToastDescription, ToastCloseTrigger, ToastIndicator } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { toaster } from '@/lib/toaster'

export default function PageLayout({ children, navbarProps }) {
  return (
    <Box>
      <Navbar {...(navbarProps || {})} />
      <Box as="main">{children}</Box>
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
