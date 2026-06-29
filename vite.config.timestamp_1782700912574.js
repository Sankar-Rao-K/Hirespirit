// vite.config.ts
import { defineConfig } from "@tanstack/react-start/config";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";
var vite_config_default = defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        // Resolves "@/..." imports in both client and SSR bundles
        "@": fileURLToPath(new URL("./src", import.meta.url))
      }
    }
  },
  routers: {
    server: {
      entry: "server"
    }
  }
});
export {
  vite_config_default as default
};
