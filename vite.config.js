import { defineConfig } from "vite";

export default defineConfig({
  cacheDir: ".vite",
  publicDir: "public",
  resolve: {
    alias: {
      "@": "/src/",
    },
  },
});
