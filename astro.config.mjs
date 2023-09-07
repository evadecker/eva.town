import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  redirects: {
    // "/work": "/work/cityblock",
  },
  vite: {
    optimizeDeps: {
      exclude: ["fsevents"],
    },
  },
  output: "server",
  adapter: vercel({
    analytics: true,
  }),
});
