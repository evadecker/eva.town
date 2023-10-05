import { defineCollection, z } from "astro:content";

const notesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    datePublished: z.string().datetime({ precision: 0 }),
    dateModified: z.date().optional(),
  }),
});

export const collections = {
  notes: notesCollection,
};
