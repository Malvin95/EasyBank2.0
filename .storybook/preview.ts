import type { Preview } from '@storybook/nextjs';
import '../src/app/page.module.css';
import '../src/app/globals.css';

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