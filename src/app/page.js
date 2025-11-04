"use client";
import { AspectRatio, Box, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import { useColorModeValue } from "@/components/ui/color-mode";

export default function HomePage() {
  const imageFilter = useColorModeValue("grayscale(1) invert(1)", "grayscale(1)");

  return (
    
    <AspectRatio
      ratio={{ base: 3 / 4, sm: 4 / 5, md: 16 / 9 }}
      width="100%"
      maxW="1400px"
        overflow="auto"
    > 
      <Box position="relative">
        <Image
          src="/studio.png"
          alt="Artist studio"
          fill
          priority
          sizes="(min-width: 1024px) 1200px, 100vw"
          style={{ objectFit: "cover", filter: imageFilter, opacity: 0.5}}
        />
        <Flex
          position="absolute"
          inset="0"
          align="center"
          justify="center"
          textAlign="center"
          px={{ base: 6, md: 12 }}
        >
            <Heading size={{ base: "xl", md: "2xl" }} mb={3} fontFamily="monospace" fontWeight="bold" >
              Welcome to the Yard
            </Heading>
        </Flex>
      </Box>
    </AspectRatio>
  );
}
