import { defineCollection, z } from "astro:content";

export const collections = {
  posts: defineCollection({
    type: "content",
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string(),
        datePublished: z.date(),
        dateModified: z.date().optional(),
        img: z
          .object({
            src: image(),
            alt: z.string(),
          })
          .optional(),
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

  work: defineCollection({
    type: "content",
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        timeline: z.object({
          start: z.string(),
          end: z.string(),
        }),
        img: z
          .object({
            src: image(),
            alt: z.string(),
          })
          .optional(),
        video: z
          .object({
            src: z.string(),
            poster: z.string(),
          })
          .optional(),
        website: z.string().url().optional(),
        repo: z.string().optional(), // GitHub repo, e.g. evadecker/america-my-face
        url: z.string().optional(),
        ogImage: image().optional(),
      }),
  }),

  experiments: defineCollection({
    type: "data",
    schema: () =>
      z.object({
        title: z.string(),
        description: z.string().optional(),
        url: z.string(),
      }),
  }),
};
