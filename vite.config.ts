import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

function markdownPlugin() {
  return {
    name: "vite-plugin-markdown",
    transform(code: string, id: string) {
      if (id.endsWith(".md")) {
        return {
          code: `export default ${JSON.stringify(code)};`,
          map: null,
        };
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), markdownPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
