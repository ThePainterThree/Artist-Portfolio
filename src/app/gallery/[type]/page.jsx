import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import ArtCard from "@/components/ArtCard";
import { categories } from "@/lib/categories";
import { getArtworksByCategory } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

export default async function GalleryPerTypePage({ params }) {
  const type = (params?.type || "").toLowerCase();

  const category = categories.find((c) => c.slug === type);
  const title = category?.title ?? "Gallery";

  const artworks = await getArtworksByCategory(type);

  const renderArtworks = artworks.map((a) => ({
    ...a,
    image: a.image ? urlFor(a.image).width(900).quality(80).url() : "",
  }));

  return (
    <Box as="main" px={{ base: 4, md: 8 }} py={{ base: 10, md: 16 }}>
      <Stack spacing={{ base: 6, md: 8 }} maxW="1200px" mx="auto">
        <Stack spacing={2}>
          <Heading size="2xl">{title}</Heading>
        </Stack>

        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 3 }}
          columnGap={{ base: 6, md: 8, lg: 10 }}
          rowGap={{ base: 8, md: 10, lg: 12 }}
        >
          {renderArtworks.map((artwork) => (
            <ArtCard key={artwork._id} artwork={artwork} />
          ))}
        </SimpleGrid>

        {!renderArtworks.length && (
          <Text color="gray.500">New works coming soon.</Text>
        )}
      </Stack>
      <Stack align="flex-end" pt={{ base: 8, md: 12 }}>
        <Text
          as={Link}
          href="/gallery"
          fontSize="sm"
          color="gray.500"
          _hover={{
            color: "gray.700",
            textDecoration: "underline",
          }}
        >
          ← Back
        </Text>
      </Stack>
    </Box>
  );
}
