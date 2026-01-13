"use client";

import {
  AspectRatio,
  Badge,
  Card,
  Heading,
  HStack,
  Stack,
  Tag,
  Text,
  Image,
} from "@chakra-ui/react";

export default function ArtCard({ artwork }) {
  return (
    <Card.Root
        borderColor={{ base: "blackAlpha.200", _dark: "whiteAlpha.200" }}
        borderWidth="2px"
        boxShadow={{ base: "sm", _dark: "none" }}
        rounded="lg"
    >
      <AspectRatio ratio={5/5}>
        <Image
          src={artwork.image}
          alt={artwork.title}
          objectFit="cover"
          borderTopRadius="lg"
        />
      </AspectRatio>

      <Card.Body p={{ base: 4, md: 5 }}>
        <Stack spacing={3}>
          <HStack justify="space-between" align="flex-start">
            <Heading size="sm">{artwork.title}</Heading>
            <Badge colorScheme="gray">
              {artwork.year}
            </Badge>
          </HStack>

          <Text fontWeight="small">{artwork.medium}</Text>

          <Text color="gray.500" fontSize="sm">
            {artwork.size}
          </Text>

          {artwork.tags?.length && (
            <HStack pt={1} spacing={2} rowGap={2} flexWrap="wrap">
              {artwork.tags.map((tag) => (
                <Tag.Root
                  key={tag}
                  size="sm"
                  variant="subtle"
                  colorScheme="gray"
                >
                  <Tag.Label>{tag}</Tag.Label>
                </Tag.Root>
              ))}
            </HStack>
          )}
        </Stack>
      </Card.Body>
    </Card.Root>
  );
}
