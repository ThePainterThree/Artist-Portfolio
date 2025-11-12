"use client";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Spacer,
  Drawer,
} from "@chakra-ui/react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { ColorModeButton } from "../ui/color-mode";

const NavLink = (props) => (
  <Button as={Link} href={props.href} variant="ghost" size="sm" color="fg">
    {props.children}
  </Button>
);

export default function Header() {
  return (
    <Drawer.Root placement="top">
      <Box
        as="header"
        pos="sticky"
        top="0"
        bg="bg"
        borderBottomWidth="1px"
        zIndex="docked"
      >
        <Flex h="60px" align="center" maxW="1300px" mx="auto" px={2}>
          <Button
            as={Link}
            href="/"
            variant="ghost"
            size="md"
            fontWeight="bold"
            fontFamily="monospace"
            color="fg"
          >
          
          </Button>
          <Spacer />
          <HStack gap={2} fontSize="md" display={{ base: "none", md: "flex" }}>
            <NavLink href="/gallery">Gallery</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </HStack>
          <ColorModeButton display={{ base: "none", md: "inline-flex" }} ml={2} />
          <Drawer.Trigger asChild>
            <IconButton
              display={{ base: "inline-flex", md: "none" }}
              aria-label="Open menu"
              variant="ghost"
              icon={<FiMenu />}
              ml={2}
            />
          </Drawer.Trigger>
        </Flex>
      </Box>
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
         
            <Drawer.CloseTrigger asChild>
              <IconButton aria-label="Close menu" variant="ghost" icon={<FiX />} />
            </Drawer.CloseTrigger>
         
          <Drawer.Body>
            <Flex direction="column" gap={2}>
              <Drawer.CloseTrigger asChild>
                <NavLink href="/gallery">Gallery</NavLink>
              </Drawer.CloseTrigger>
              <Drawer.CloseTrigger asChild>
                <NavLink href="/about">About</NavLink>
              </Drawer.CloseTrigger>
              <Drawer.CloseTrigger asChild>
                <NavLink href="/contact">Contact</NavLink>
              </Drawer.CloseTrigger>
            </Flex>
          </Drawer.Body>
          <Flex justify="flex-end" px={4} pb={4}>
            <ColorModeButton />
          </Flex>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  );
}

