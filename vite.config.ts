import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages project sites need base `/repo-name/`. Set VITE_BASE in CI or .env.production
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || "/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          motion: ["framer-motion"],
        },
      },
    },
  },
});
