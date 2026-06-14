import type { UserConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";

export default {
  server: {
    port: 3000,
  },
  plugins: [reactRouter(), tailwindcss()],
} satisfies UserConfig;
