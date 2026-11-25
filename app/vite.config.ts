import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// The built app goes to /books at the repo root, so GitHub Pages serves it at …/joewestlakellc/books/
// next to the current dashboard (which stays at …/joewestlakellc/).
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: { outDir: "../books", emptyOutDir: true, chunkSizeWarningLimit: 1200 },
  test: { include: ["tests/**/*.test.ts"] }
});
