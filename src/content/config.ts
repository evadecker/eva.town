import { defineCollection, z } from "astro:content";

const pagesCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      datePublished: z.date(),
      dateModified: z.date().optional(),
      img: image().array().optional(),
      imgAlt: z.string().optional(),
      ogImage: image().optional(),
    }),
});

const notesCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      datePublished: z.date(),
      dateModified: z.date().optional(),
      img: image().array().optional(),
      imgAlt: z.string().optional(),
      ogImage: image().optional(),
    }),
});

export const collections = {
  pages: pagesCollection,
  notes: notesCollection,
};
