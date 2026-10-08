import { defineCollection, z } from 'astro:content';

const productsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    collection: z.string(),
    category: z.string(),
    description: z.string(),
    materials: z.array(z.string()),
    dimensions: z.string(),
    leadTime: z.string(),
    images: z.array(z.object({
      src: z.string(),
      alt: z.string()
    })),
    variants: z.array(z.object({
      id: z.string(),
      name: z.string(),
      finish: z.string(),
      image: z.string(),
      colorHex: z.string()
    })),
    enquiry: z.object({
      label: z.string(),
      reference: z.string()
    }),
    featured: z.boolean().default(false)
  })
});

const collectionsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    coverImage: z.string()
  })
});

export const collections = {
  products: productsCollection,
  collections: collectionsCollection
};
