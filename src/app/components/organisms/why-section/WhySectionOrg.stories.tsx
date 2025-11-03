import type { Meta, StoryObj } from '@storybook/nextjs/*';
import WhySection from './WhySectionOrg';

const meta: Meta<typeof WhySection> = {
  title: 'Organisms/WhySection',
  component: WhySection,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof WhySection>;

export const Default: Story = {};


