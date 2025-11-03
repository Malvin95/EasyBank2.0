import type { Meta, StoryObj } from '@storybook/nextjs/*';
import { ResponsiveHeroSection } from './HeroSectionOrg';

const meta: Meta<typeof ResponsiveHeroSection> = {
  title: 'Organisms/ResponsiveHeroSection',
  component: ResponsiveHeroSection,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ResponsiveHeroSection>;

export const Default: Story = {};


