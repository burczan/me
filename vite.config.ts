import { sveltekit } from "@sveltejs/kit/vite";
import { svelteInspector } from "@sveltejs/vite-plugin-svelte-inspector";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit(), svelteInspector()],
  server: {
    host: true,
    open: true,
    port: 5173,
    strictPort: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import 'src/styles/variables.scss';`,
      },
    },
  },
});
