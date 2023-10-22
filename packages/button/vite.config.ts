import { qwikVite } from "@builder.io/qwik/optimizer";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: ["src/index.ts", "src/button.tsx"],
      formats: ["es", "cjs"],
      fileName: (format, name) => `${name}.${format === "es" ? "mjs" : "cjs"}`,
    },
    rollupOptions: {
      external: [
        /^@deopea.sketch\/styled-system(\/.*)?$/,
        ...Object.keys({ ...pkg.dependencies, ...pkg.peerDependencies }),
      ],
    },
  },
  plugins: [qwikVite(), dts()],
});
