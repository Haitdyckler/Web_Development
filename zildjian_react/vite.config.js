// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // assets/ folder is in public/ so Vite serves it at the root
  publicDir: "public",
});
