"use client";

import {
  AspectRatio,
  Card,
  Heading,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";

export default function CategoryCard({ category }) {
  return (
    <Card.Root
      as={Link}
      href={`/gallery/${category.slug}`}
      minW={0}
      overflow="hidden"
      variant="outline"
      borderWidth="2px"
      borderColor={{ base: "blackAlpha.200", _dark: "whiteAlpha.200" }}
      boxShadow={{ base: "sm", _dark: "none" }}
      rounded="lg"
      _hover={{ transform: "translateY(-2px)" }}
      transition="transform 0.15s ease"
    >
      <AspectRatio ratio={4 / 3}>
        <Image
          src={category.image}
          alt={category.title}
          objectFit="cover"
          borderTopRadius="lg"
        />
      </AspectRatio>

      <Card.Body p={{ base: 4, md: 5 }}>
        <Stack spacing={1}>
          <Heading size="md">{category.title}</Heading>
          <Text color="gray.500" fontSize="sm">
            {category.description}
          </Text>
        </Stack>
      </Card.Body>
    </Card.Root>
  );
}