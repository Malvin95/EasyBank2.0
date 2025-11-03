import type { Meta, StoryObj } from '@storybook/nextjs/*';
import LatestSection from './LatestArticlesOrg';

const meta: Meta<typeof LatestSection> = {
  title: 'Organisms/LatestSection',
  component: LatestSection,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof LatestSection>;

export const Default: Story = {};


