import { defineConfig, HttpProxy } from "vite";
import react from "@vitejs/plugin-react";
export const PORT = parseInt(process.env.PORT) || 3455;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:2974",
    },
  },
});
