'use client'
import { Box, Flex, HStack, Button } from '@chakra-ui/react'
import Link from 'next/link'

export default function Header() {
  const links = [
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <Box as="header" bg="bg" borderBottomWidth="1px">
      <Flex
        h="64px"
        align="center"
        justify="space-between"
        maxW="1200px"
        mx="auto"
        px={18}
      >
        <Button as={Link} href="/" variant="ghost" size="sm" fontWeight="bold">
          Patricia's Studio
        </Button>

        <HStack spacing={2}>
          {links.map((l) => (
            <Button key={l.href} as={Link} href={l.href} variant="ghost" size="sm">
              {l.label}
            </Button>
          ))}
        </HStack>
      </Flex>
    </Box>
  )
}
