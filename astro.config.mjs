import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/static";
import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import imgAttr from "remark-imgattr";

import { autolinkConfig } from "./plugins/rehype-autolink-config";

export default defineConfig({
  site: "https://eva.town",
  integrations: [react(), mdx(), sitemap()],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
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
});
