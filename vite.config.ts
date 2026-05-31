import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/

export default defineConfig({
  base: "/Afro/", // 👈 ADD THIS LINE (Make sure to include the slashes)
  plugins: [react()],
  // ... rest of your config
});
