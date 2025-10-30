import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ← Agrega esto si no está
  ],
  server: {
    host: "0.0.0.0",
    port: 3000, // Cambia el puerto a 3000 o cualquier otro puerto disponible
  },
});
