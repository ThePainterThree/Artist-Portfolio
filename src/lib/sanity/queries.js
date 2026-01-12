import { client } from "./client";

const artworksByCategoryQuery = `
  *[_type == "artwork" && category == $category]
  | order(year desc, _createdAt desc) {
    _id,
    title,
    slug,
    year,
    medium,
    category,
    "image": images[0],
    tags,
    description
  }
`;

export async function getArtworksByCategory(category) {
  return client.fetch(artworksByCategoryQuery, { category });
}

