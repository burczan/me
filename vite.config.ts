import { sveltekit } from "@sveltejs/kit/vite";
import { svelteInspector } from "@sveltejs/vite-plugin-svelte-inspector";
import devtoolsJson from "vite-plugin-devtools-json";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit(), svelteInspector(), devtoolsJson()],
  server: {
    host: true,
    open: true,
    port: 5173,
    strictPort: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@use 'styles/_variables.scss' as *;`,
      },
    },
  },
});
