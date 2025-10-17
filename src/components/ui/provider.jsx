'use client'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'
import Header from './header'

export function Provider(props) {
  return (
    <ChakraProvider value={defaultSystem}>
      <Header></Header>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
