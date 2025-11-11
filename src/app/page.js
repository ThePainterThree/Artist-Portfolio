"use client";
import {Box} from "@chakra-ui/react";
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
      <Box  
      position="relative"
      w="100%"
      h="auto"
      overflow="hidden"
      >
      <Box position="relative" w="100%" minH={{ base: "60vh", md: "80vh" }}>
        <Image
          src={imageSrc}
          alt="Artist studio"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.75,
          }}
        />
        </Box>
      </Box>
  );
}
