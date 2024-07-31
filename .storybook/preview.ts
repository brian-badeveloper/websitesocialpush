import type { Preview } from "@storybook/react";

import '../src/app/[lng]/globals.css'

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'default',
      values: [
        {
          name: 'light',
          value: '#fff',
        },
        {
          name: 'dark',
          value: '#333',
        },
        {
          name: 'twitter',
          value: '#00aced',
        },
        {
          name: 'facebook',
          value: '#3b5998',
        },
        {
          name: 'default',
          value: '#6dd5ed',
        },
      ],
    },
  },
};

export default preview;
