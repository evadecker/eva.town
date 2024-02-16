import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/static";
import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import glsl from "vite-plugin-glsl";

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
  },
  plugins: [glsl()],
  vite: {
    optimizeDeps: {
      exclude: ["fsevents"],
    },
  },
});
