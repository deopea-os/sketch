import { defineConfig } from "@pandacss/dev";

const config = defineConfig({
  // The output directory for your css system
  outdir: "@deopea.sketch/styled-system",
  emitPackage: true,
  forceConsistentTypeExtension: true,

  jsxFramework: "qwik",

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{ts,tsx}", "./src/**/*.stories.{ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          primary: {
            DEFAULT: { value: "{colors.teal.500}" },
            text: { value: "{colors.white}" },
            container: {
              DEFAULT: { value: "{colors.teal.300}" },
              text: { value: "{colors.teal.950}" },
            },
          },
          secondary: {
            DEFAULT: { value: "{colors.fuchsia.500}" },
            text: { value: "{colors.white}" },
            container: {
              DEFAULT: { value: "{colors.fuchsia.300}" },
              text: { value: "{colors.fuchsia.950}" },
            },
          },
          tertiary: {
            DEFAULT: { value: "{colors.pink.500}" },
            text: { value: "{colors.white}" },
            container: {
              DEFAULT: { value: "{colors.pink.300}" },
              text: { value: "{colors.pink.950}" },
            },
          },

          error: {
            DEFAULT: { value: "{colors.red.500}" },
            text: { value: "{colors.white}" },
            container: {
              DEFAULT: { value: "{colors.red.300}" },
              text: { value: "{colors.red.950}" },
            },
          },
          warn: {
            DEFAULT: { value: "{colors.amber.500}" },
            text: { value: "{colors.white}" },
            container: {
              DEFAULT: { value: "{colors.amber.300}" },
              text: { value: "{colors.amber.950}" },
            },
          },
          info: {
            DEFAULT: { value: "{colors.blue.500}" },
            text: { value: "{colors.white}" },
            container: {
              DEFAULT: { value: "{colors.blue.300}" },
              text: { value: "{colors.blue.950}" },
            },
          },
          success: {
            DEFAULT: { value: "{colors.green.500}" },
            text: { value: "{colors.white}" },
            container: {
              DEFAULT: { value: "{colors.green.300}" },
              text: { value: "{colors.green.950}" },
            },
          },
        },

        spacing: {
          xs: { value: "{spacing.1}" },
          sm: { value: "{spacing.2}" },
          md: { value: "{spacing.3}" },
          lg: { value: "{spacing.4}" },
          xl: { value: "{spacing.5}" },
        },

        sizes: {
          xs: { value: "{sizing.1}" },
          sm: { value: "{sizing.2}" },
          md: { value: "{sizing.3}" },
          lg: { value: "{sizing.4}" },
          xl: { value: "{sizing.5}" },
        },
      },
    },
  },
});

export default config;
