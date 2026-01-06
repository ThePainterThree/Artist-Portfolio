"use client";

import {
  AspectRatio,
  Badge,
  Box,
  Card,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  Image,
} from "@chakra-ui/react";

//TODO: images dir
const artworks = [
  {
    title: "Untitled 1",
    medium: "Acrylic on canvas",
    year: 2018,
    size: "80 x 100 cm",
    image: "/studioMobileDarkTheme.jpg",
    tags: ["Older work", "Private Collection"],
  },
  {
    title: "Untitled 2",
    medium: "Acrylic on canvas",
    year: 2018,
    size: "80 x 80 cm",
    image: "/studioLightTheme.jpg",
    tags: ["Older work"],
  },
  {
    title: "Untitled 3",
    medium: "Acrylic on canvas",
    year: 2018,
    size: "80 x 80 cm",
    image: "/studioMobileLightTheme.jpg",
    tags: ["Older work"],
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
    tags: ["New work", "Study"],
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
    <Box as="main" px={{ base: 4, md: 8 }} py={{ base: 10, md: 16 }} bg="bg">
      <Stack spacing={4} maxW="1200px" mx="auto">
        <Stack spacing={1}>
          <Heading size="2xl">Gallery</Heading>

          <Text color="gray.500">A selection of art works.</Text>
        </Stack>

        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 3 }}
          spacing={{ base: 4, md: 6 }}
        >
          {artworks.map((artwork) => (
            <Card.Root
              key={artwork.title}
              overflow="hidden"
              variant="outline"
              borderColor="blackAlpha.200"
            >
              <AspectRatio ratio={4 / 5}>
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  objectFit="cover"
                />
              </AspectRatio>

              <Card.Body>
                <Stack spacing={2}>
                  <HStack justify="space-between" align="flex-start">
                    <Heading size="md">{artwork.title}</Heading>
                    <Badge colorScheme="gray" borderRadius="full">
                      {artwork.year}
                    </Badge>
                  </HStack>
                  <Text fontWeight="medium">{artwork.medium}</Text>
                  <Text color="gray.500" fontSize="sm">
                    {artwork.size}
                  </Text>
                  {artwork.tags?.length ? (
                    <Box>
                      <HStack spacing={2} flexWrap="wrap">
                        {artwork.tags.map((tag) => (
                          <Tag.Root
                            key={tag}
                            size="sm"
                            variant="subtle"
                            colorScheme="purple"
                          >
                            <Tag.Label> {tag}</Tag.Label>
                          </Tag.Root>
                        ))}
                      </HStack>
                    </Box>
                  ) : null}
                </Stack>
              </Card.Body>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
}
