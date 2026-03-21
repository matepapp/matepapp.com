import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import { SITE } from "./src/site";

export default defineConfig({
  site: SITE.url,
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
