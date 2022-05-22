import { defineConfig } from "vite";

export default defineConfig({
  cacheDir: ".vite",
  resolve: {
    alias: {
      "@": "/src/",
    },
  },
});
