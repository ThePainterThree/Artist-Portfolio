"use client";

import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import ArtCard from "@/components/artCard";

// TODO: images dir
const artworks = [
  {
    title: "Untitled 1",
    medium: "Acrylic on canvas",
    year: 2018,
    size: "80 x 100 cm",
    image: "/studioMobileDarkTheme.jpg",
    tags: ["Private Collection"],
  },
  {
    title: "Untitled 2",
    medium: "Acrylic on canvas",
    year: 2018,
    size: "80 x 80 cm",
    image: "/studioLightTheme.jpg",
  },
  {
    title: "Untitled 3",
    medium: "Acrylic on canvas",
    year: 2018,
    size: "80 x 80 cm",
    image: "/studioMobileLightTheme.jpg",
  },
  {
    title: "Untitled 4",
    medium: "Acrylic on canvas",
    year: 2025,
    size: "50 x 120 cm",
    image: "/studioMobileDarkTheme.jpg",
    tags: ["New work"],
  },
  {
    title: "Untitled 5",
    medium: "Acrylic on canvas",
    year: 2025,
    size: "42 x 58 cm",
    image: "/studioMobileDarkTheme.jpg",
    tags: ["New work", "Sold"],
  },
  {
    title: "Untitled 6",
    medium: "Acrylic on canvas",
    year: 2025,
    size: "42 x 58 cm",
    image: "/studioMobileDarkTheme.jpg",
    tags: ["New work", "Study"],
  },
];

export default function GalleryPage() {
  return (
    <Box as="main" px={{ base: 4, md: 8 }} py={{ base: 10, md: 16 }}>
      <Stack spacing={{ base: 6, md: 8 }} maxW="1200px" mx="auto">

        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 4 }}
          columnGap={{ base: 6, md: 8, lg: 10 }}
          rowGap={{ base: 8, md: 10, lg: 12 }}
        >
          {artworks.map((artwork) => (
            <ArtCard key={artwork.title} artwork={artwork} />
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
}
