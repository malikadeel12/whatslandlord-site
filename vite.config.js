import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite is only the local workshop for this static public site.
// There is no backend in this phase, matching the developer brief.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
  },
});
