import db from "@astrojs/db";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import imgAttr from "remark-imgattr";
import { autolinkConfig } from "./plugins/rehype-autolink-config";

export default defineConfig({
  site: "https://eva.town",
  prefetch: true,
  integrations: [
    react(),
    expressiveCode({
      styleOverrides: {
        codeFontFamily:
          "'MonoLisa', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
      },
    }),
    mdx(),
    sitemap(),
    db(),
  ],
  trailingSlash: "never",
  adapter: netlify(),
  markdown: {
    rehypePlugins: [rehypeHeadingIds, [rehypeAutolinkHeadings, autolinkConfig]],
    remarkPlugins: [imgAttr],
  },
  vite: {
    optimizeDeps: {
      exclude: ["fsevents"],
    },
  },
  experimental: {
    fonts: [
      {
        provider: "local",
        name: "HEX Franklin",
        cssVariable: "--font-sans",
        fallbacks: ["sans-serif"],
        variants: [
          {
            src: ["./src/fonts/HEX_Franklin_v0.3_Variable.woff2"],
          },
        ],
      },
      {
        provider: "local",
        name: "MonoLisa",
        cssVariable: "--font-mono",
        fallbacks: ["monospace"],
        variants: [
          {
            src: ["./src/fonts/MonoLisaVariableNormal.woff2"],
          },
        ],
      },
    ],
  },
  redirects: {
    "/projects": "/",
    "/projects/genderswap": "/posts/genderswap",
    "/projects/boundaries-map": "/posts/boundaries-map",
    "/projects/commonplace": "/posts/commonplace",
    "/friends": "/webrings",
  },
});
