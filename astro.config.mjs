import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/static";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import { autolinkConfig } from "./plugins/rehype-autolink-config";
import {
  remarkDateModified,
  remarkDatePublished,
} from "./plugins/remark-publish-times.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://evadecker.com",
  integrations: [react(), mdx()],
  output: "static",
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
    remarkPlugins: [remarkDateModified, remarkDatePublished],
  },
  vite: {
    plugins: [vanillaExtractPlugin()],
    optimizeDeps: {
      exclude: ["fsevents"],
    },
  },
});
