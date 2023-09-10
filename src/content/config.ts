import { defineCollection,z } from "astro:content";

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
  work: workCollection,
};
