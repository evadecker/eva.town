import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const collections = {
  posts: defineCollection({
    loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/posts" }),
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
        features: z
          .object({
            name: z.string(),
            url: z.string().url(),
          })
          .array()
          .optional(),
      }),
  }),

  pages: defineCollection({
    loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/pages" }),
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
    loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/work" }),
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
    loader: glob({
      pattern: "**/[^_]*.yml",
      base: "./src/content/experiments",
    }),
    schema: () =>
      z.object({
        title: z.string(),
        datePublished: z.date(),
        description: z.string().optional(),
        url: z.string(),
        features: z
          .object({
            name: z.string(),
            url: z.string().url(),
          })
          .array()
          .optional(),
      }),
  }),

  webrings: defineCollection({
    loader: glob({ pattern: "**/[^_]*.yml", base: "./src/content/webrings" }),
    schema: () =>
      z.object({
        title: z.string(),
        description: z.string(),
        url: z.string().url(),
        prev: z.string().url(),
        next: z.string().url(),
        color: z.string(), // Radix color
      }),
  }),

  badges: defineCollection({
    loader: glob({ pattern: "**/[^_]*.yml", base: "./src/content/badges" }),
    schema: ({ image }) =>
      z
        .object({
          img: image(),
          alt: z.string(),
          url: z.string().optional(),
        })
        .array(),
  }),

  now: defineCollection({
    loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/now" }),
    schema: () =>
      z.object({
        date: z.date(),
      }),
  }),
};
