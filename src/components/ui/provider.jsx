'use client'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'
import Header from "@/components/ui/header";

export function Provider({ children }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider>
        <Header />
        {children}
      </ColorModeProvider>
    </ChakraProvider>
  )
}
