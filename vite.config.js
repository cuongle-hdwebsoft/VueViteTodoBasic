import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
  console.log(mode, loadEnv(mode, process.cwd(), "VITE_"));

  return {
    root: process.cwd(),
    base: "/",
    mode: mode === "development" ? "development" : "production",
    define: {},
    cacheDir: ".vite",
    publicDir: "public",
    resolve: {
      alias: {
        "@": "/src/",
      },
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    },
    css: {
      modules: {
        localsConvention: "camelCaseOnly",
      },
      preprocessorOptions: {
        scss: {
          additionalData: "",
        },
      },
      devSourcemap: true,
    },
  };
});
