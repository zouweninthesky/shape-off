import type { UserConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default {
  server: {
    port: 3000,
  },
  plugins: [tailwindcss()],
} satisfies UserConfig;
