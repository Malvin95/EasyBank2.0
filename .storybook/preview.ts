import type { Preview } from '@storybook/nextjs';
import 'tailwindcss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  initialGlobals: {
    theme: 'dark'
  }
};

export default preview;