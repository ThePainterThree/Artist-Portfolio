"use client";

import {
  AspectRatio,
  Card,
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
      variant="subtle"
      borderColor={{ base: "blackAlpha.200", _dark: "whiteAlpha.200" }}
      boxShadow={{ base: "sm", _dark: "none" }}
      _hover={{ transform: "translateY(-2px)" }}
      transition="transform 0.15s ease"
    >
      <AspectRatio ratio={3 / 3}>
        <Image
          src={category.image}
          alt={category.title}
          objectFit="cover"
          borderTopRadius="lg"
        />
      </AspectRatio>

      <Card.Body p={{ base: 2, md: 3 }}>
          <Text color="gray.500" size="sm" fontSize="medium">{category.title}</Text>
          <Text color="gray.500" fontSize="sm">
            {category.description}
          </Text>
      </Card.Body>
     </Card.Root>
  );
}
