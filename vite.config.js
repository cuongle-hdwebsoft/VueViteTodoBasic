/// <reference types="vitest" />
import { defineConfig, loadEnv } from "vite";
import VuePlugin from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());

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
      dedupe: ["vue"],
    },
    css: {
      modules: {
        localsConvention: "camelCaseOnly",
      },
      preprocessorOptions: {
        scss: {
          additionalData: `
            $primary-bg: rgb(0, 118, 202);
            $white-text: #fff;
            @use 'element-plus/theme-chalk/src/index.scss';
          `,
        },
      },
      devSourcemap: true,
    },
    server: {
      host: env.VITE_HOST,
      port: env.VITE_PORT,
      strictPort: true,
      force: true,
      watch: {
        usePolling: true,
      },
    },
    plugins: [
      VuePlugin(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  };
});
