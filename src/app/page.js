"use client";
import { AspectRatio, Box, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function HomePage() {
  
  const { resolvedTheme } = useTheme();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

   const imageSrc = resolvedTheme === "dark" ? "/studioDarkTheme.jpg" : "/studioLightTheme.jpg";

  return (
    
    <AspectRatio
      ratio={{ base: 3 / 4, sm: 4 / 5, md: 16 / 9 }}
      width="100%"
      maxW="1400px"
        overflow="auto"
    > 
      <Box position="relative">
        <Image
          src={imageSrc}
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
