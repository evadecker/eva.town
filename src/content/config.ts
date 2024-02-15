import { defineCollection, z } from "astro:content";

export const collections = {
  notes: defineCollection({
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
  }),

  pages: defineCollection({
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
  }),

  projects: defineCollection({
    type: "data",
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string(),
        datePublished: z.date(),
        img: image().optional(),
        imgAlt: z.string().optional(),
        url: z.string().optional(),
        repo: z.string().optional(), // GitHub repo, e.g. evadecker/america-my-face
        draft: z.boolean().optional(),
      }),
  }),
};
