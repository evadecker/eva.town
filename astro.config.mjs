import db from "@astrojs/db";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import imgAttr from "remark-imgattr";

import { autolinkConfig } from "./plugins/rehype-autolink-config";

// https://astro.build/config
export default defineConfig({
  site: "https://eva.town",
  output: "hybrid",
  integrations: [react(), mdx(), sitemap(), db()],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  markdown: {
    rehypePlugins: [rehypeHeadingIds, [rehypeAutolinkHeadings, autolinkConfig]],
    remarkPlugins: [imgAttr],
  },
  vite: {
    optimizeDeps: {
      exclude: ["fsevents"],
    },
  },
  redirects: {
    "/projects": "/",
    "/projects/genderswap": "/posts/genderswap",
    "/projects/boundaries-map": "/posts/boundaries-map",
    "/projects/commonplace": "/posts/commonplace",
    "/design": "https://design.eva.town",
    "/friends": "/webrings",
  },
});
