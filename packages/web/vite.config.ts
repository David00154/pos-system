import { defineConfig, HttpProxy } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"
export const PORT = parseInt(process.env.PORT) || 3455;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/trpc": {
        target:"http://localhost:2974"
      },
      "/api": "http://localhost:2974",
    },
  },
  resolve:{
    alias:[
      {
        find:'~',
        replacement:path.resolve(process.cwd(), 'src')
      }
    ]
  }
});
