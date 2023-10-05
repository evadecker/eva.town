import { defineCollection, z } from "astro:content";

const pagesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    datePublished: z.date(),
    dateModified: z.date().optional(),
  }),
});

const notesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    datePublished: z.date(),
    dateModified: z.date().optional(),
  }),
});

export const collections = {
  pages: pagesCollection,
  notes: notesCollection,
};
