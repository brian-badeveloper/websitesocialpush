const path = require('path')

import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: false,
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: async (config, { configType }) => {
    (config.resolve as any).alias = {
      ...config.resolve?.alias,
      '@/app': path.resolve(__dirname, "../src/app"),
      '@/assets': path.resolve(__dirname, "../src/assets"),
      '@/components': path.resolve(__dirname, "../src/components"),
      '@/helpers': path.resolve(__dirname, "../src/helpers"),
      '@/infraestructure': path.resolve(__dirname, "../src/infraestructure"),
      '@/models': path.resolve(__dirname, "../src/models"),
      '@/store': path.resolve(__dirname, "../src/store"),
      '@/stories': path.resolve(__dirname, "../src/stories"),
    }

    return config
  },
};
export default config;
