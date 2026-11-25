/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#F3F4F6",
        ink: { DEFAULT: "#111827", 2: "#4B5563", 3: "#9CA3AF" },
        line: { DEFAULT: "#E5E7EB", strong: "#D1D5DB" },
        slatebtn: { DEFAULT: "#1F2937", hover: "#111827" }
      },
      fontFamily: { sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"] },
      boxShadow: { card: "0 1px 3px rgba(0,0,0,0.04)", pop: "0 10px 30px -10px rgba(17,24,39,0.25)" }
    }
  },
  plugins: []
};
