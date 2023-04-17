import type { StorybookConfig } from "@storybook/nextjs";
const path = require('path');
const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx", 
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-controls",
    'storybook-addon-next',
    {
      name: 'storybook-addon-next',
      options: {
        nextConfigPath: path.resolve(__dirname, '../next.config.js')
      }
    }
  ],
  framework: {
    name: "@storybook/nextjs",
    options:{

    }
  },
  webpackFinal: async (config) => {
    if(!config || !config.module)
      return config;
    if(config.module.rules)
      config.module.rules.push({
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      });
    return config;
  },
  docs: {
    autodocs: "tag",
    defaultName: 'document'
    // docsMode: true
  },
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
};
export default config;
