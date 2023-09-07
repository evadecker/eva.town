import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  redirects: {
    // "/work": "/work/cityblock",
  },
  vite: {
    optimizeDeps: { exclude: ["fsevents"] },
  },
});
