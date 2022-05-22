import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
  console.log(mode, loadEnv(mode, process.cwd(), "VITE_"));

  return {
    root: process.cwd(),
    base: "/",
    mode: mode === "development" ? "development" : "production",
    define: {
      __APP_ENV__: "ADMIN", // this is not working now
    },
    resolve: {
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    },
    cacheDir: ".vite",
    publicDir: "public",
    resolve: {
      alias: {
        "@": "/src/",
      },
    },
  };
});
