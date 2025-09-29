'use client'

import { ChakraProvider } from '@chakra-ui/react'
import system from '@/styles/theme'
import { ColorModeProvider } from './color-mode'

export function Provider(props) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
