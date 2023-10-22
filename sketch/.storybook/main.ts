import { dirname, join } from "path";
import type { StorybookConfig } from "storybook-framework-qwik";
import { mergeConfig } from "vite";

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../src/components/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],

  framework: {
    name: "storybook-framework-qwik",
  },

  docs: {
    autodocs: "tag",
  },

  viteFinal: (c) => {
    return mergeConfig(c, {
      preview: { host: true },
      ssr: { host: true },
    });
  },
};

console.log(config);

export default config;
