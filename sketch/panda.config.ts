import { defineConfig } from "@pandacss/dev";

const config = defineConfig({
  // The output directory for your css system
  outdir: "@deopea.sketch/styled-system",
  emitPackage: true,

  jsxFramework: "qwik",

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{ts,tsx}",
    "./src/**/*.stories.{ts,tsx}",
    "../node_modules/@deopea.sketch/**/lib/panda.buildinfo.json",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },
});

console.log(config);

export default config;
