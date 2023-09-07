import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  redirects: {
    // "/work": "/work/cityblock",
  },
  output: "static",
  adapter: vercel({ analytics: true }),
  vite: {
    // define: {
    //   "import.meta.env.PUBLIC_VERCEL_ANALYTICS_ID": JSON.stringify(
    //     process.env.VERCEL_ANALYTICS_ID
    //   ),
    // },
    optimizeDeps: {
      exclude: ["fsevents"],
    },
  },
});
