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
        roles: z.array(z.string()),
        timeline: z.string(),
        collaborators: z
          .array(
            z.object({
              name: z.string(),
              url: z.string(),
              img: image(),
            })
          )
          .optional(),
        tech: z.array(z.string()).optional(),
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
        cta: z
          .object({
            text: z.string(),
            url: z.string().optional(), // If no URL is set, button will be disabled
          })
          .optional(),
      }),
  }),

  sideProjects: defineCollection({
    type: "data",
    schema: () =>
      z.object({
        title: z.string(),
        description: z.string().optional(),
        url: z.string(),
      }),
  }),
};
