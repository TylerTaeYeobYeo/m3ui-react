import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: [
    "../lib/**/*.stories.@(js|jsx|ts|tsx)",
    "**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-essentials"],
  docs: {
    autodocs: "tag",
    defaultName: "Documentation",
  },
  core: {
    builder: "@storybook/builder-vite",
  },
};

export default config;
