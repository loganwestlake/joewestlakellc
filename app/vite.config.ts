import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// The built app goes to /books at the repo root, so GitHub Pages serves it at …/joewestlakellc/books/
// next to the current dashboard (which stays at …/joewestlakellc/).
// React APIs, Preact runtime (~4 KB instead of ~45 KB). Firebase loads only after sign-in (the demo never needs it).
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "react-dom/client": "preact/compat/client",
      "react-dom": "preact/compat",
      "react/jsx-runtime": "preact/jsx-runtime",
      "react/jsx-dev-runtime": "preact/jsx-dev-runtime",
      react: "preact/compat"
    }
  },
  base: "./",
  build: { outDir: "../books", emptyOutDir: true, chunkSizeWarningLimit: 1200 },
  test: { include: ["tests/**/*.test.ts"] }
});
