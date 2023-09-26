import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/static";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  redirects: {
    // "/work": "/work/cityblock",
  },
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  }),
  vite: {
    plugins: [vanillaExtractPlugin()],
    optimizeDeps: {
      exclude: ["fsevents"],
    },
  },
});
