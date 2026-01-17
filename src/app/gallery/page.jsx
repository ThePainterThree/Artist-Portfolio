"use client";

import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/lib/categories";

export default function GalleryPage() {
  return (
    <Box as="main" px={{ base: 4, md: 8 }} py={{ base: 8, md: 12 }}>
      <Stack maxW="1200px" mx="auto" textAlign="left" >
        <Text color="gray.500" fontSize="md">
          Choose a category to explore.
        </Text>

        <SimpleGrid
          mt={{ base: 12, md: 12, lg:12 }}
          columns={{ base: 1, md: 3 }}
          columnGap={{ base: 6, md: 8, lg: 8 }}
          rowGap={{ base: 8, md: 10, lg: 12 }}
        >
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
}