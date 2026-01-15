"use client";
import {Box} from "@chakra-ui/react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function HomePage() {
  
  const { resolvedTheme } = useTheme();
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  const isDark = resolvedTheme === "dark";
  const imageDesktopSrc = isDark ? "/theme/darkTheme-YA.jpeg" : "/theme/lightTheme-YA.jpeg";
  const imageMobileScr = isDark ? "/theme/mobile-darkTheme-YA.jpeg" : "/theme/mobile-lightTheme-YA.jpeg"
  
  return (
    <Box position="relative" w="auto" 
          h={{ base: "75vh", md: "80vh" }} 
          display="flex"
          alignItems="center"
          justifyContent="center"
          overflow="auto" 
          >
    
        <Box position="absolute" inset="0" display={{ base: "none", md: "block" }}>
        <Image
          key={imageDesktopSrc}
          src={imageDesktopSrc}
          alt="Artist studio"
          fill
          priority
          sizes="100vw"
          style={{ 
            objectFit: "cover", 
            objectPosition: "center", 
            opacity: 1 }}
        />
      </Box>

      <Box position="absolute" inset="0" display={{ base: "block", md: "none" }}>
        <Image
          key={imageMobileScr}       
          src={imageMobileScr}
          alt="Artist studio"
          fill
          priority
          sizes="120vh"
          style={{ 
            objectFit: "cover", 
            objectPosition: "center", 
            opacity: 1 }}
        />
      </Box>
    </Box>
  );
}
