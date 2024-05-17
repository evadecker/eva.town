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
          .array()
          .optional(),
        video: z
          .object({
            src: z.string(),
            poster: z.string(),
          })
          .array()
          .optional(),
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

  webrings: defineCollection({
    type: "data",
    schema: () =>
      z.object({
        title: z.string(),
        description: z.string(),
        url: z.string().url(),
        prev: z.string().url(),
        next: z.string().url(),
        random: z.string().url().optional(),
        color: z.string(), // Radix color
      }),
  }),

  badges: defineCollection({
    type: "data",
    schema: ({ image }) =>
      z
        .object({
          img: image(),
          alt: z.string(),
          url: z.string().optional(),
        })
        .array(),
  }),
};
