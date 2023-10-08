import { defineCollection, z } from "astro:content";

const pagesCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      datePublished: z.date(),
      dateModified: z.date().optional(),
      img: image().optional(),
      imgAlt: z.string().optional(),
    }),
});

const notesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    datePublished: z.date(),
    dateModified: z.date().optional(),
    img: z.string(),
    imgAlt: z.string(),
  }),
});

export const collections = {
  pages: pagesCollection,
  notes: notesCollection,
};
