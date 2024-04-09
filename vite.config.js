import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    server:{
      "/api":{
        target: "https://social-media-backend-o1q8.onrender.com",
      }
    }
  },
  plugins: [react()],
});
