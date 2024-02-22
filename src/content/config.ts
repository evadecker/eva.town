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
    type: "content",
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string(),
        datePublished: z.date(),
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
        repo: z.string().optional(), // GitHub repo, e.g. evadecker/america-my-face
        cta: z.object({
          text: z.string(),
          url: z.string().optional(), // If no URL is set, button will be disabled
        }),
        tags: z.array(z.string()),
      }),
  }),
};
