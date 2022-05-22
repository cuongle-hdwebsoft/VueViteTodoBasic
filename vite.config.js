import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
  console.log(mode, loadEnv(mode, process.cwd(), "VITE_"));

  return {
    cacheDir: ".vite",
    publicDir: "public",
    resolve: {
      alias: {
        "@": "/src/",
      },
    },
  };
});
