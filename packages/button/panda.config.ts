import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  outdir: "@deopea.sketch/styled-system",
  emitPackage: true,
  include: ["./src/**/*.{ts,tsx}"],
  forceConsistentTypeExtension: true,
});
