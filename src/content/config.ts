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

const workCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    startYear: z.number(),
    endYear: z.number(),
    url: z.string().url(),
    challenge: z.string(),
    role: z.string(),
  }),
});

export const collections = {
  notes: notesCollection,
  work: workCollection,
};
