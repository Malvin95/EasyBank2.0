import type { Meta, StoryObj } from '@storybook/nextjs/*';
import ContainerWrapper from './ContainerWrapper';
import { TemplateFormat } from '@components/molecules/sectionContainer/SectionContainer';

const meta: Meta<typeof ContainerWrapper> = {
  title: 'Atoms/ContainerWrapper',
  component: ContainerWrapper,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    templateFormat: TemplateFormat.WHY,
  },
};

export default meta;
type Story = StoryObj<typeof ContainerWrapper>;

export const Why: Story = {
  args: {
    templateFormat: TemplateFormat.WHY,
    children: (
      <div className="p-8">
        <h2 className="text-2xl mb-2">Why Section Wrapper</h2>
        <p className="text-gray-500">Content goes here.</p>
      </div>
    ),
  },
};

export const Latest: Story = {
  args: {
    templateFormat: TemplateFormat.LATEST,
    children: (
      <div className="p-8">
        <h2 className="text-2xl mb-2">Latest Section Wrapper</h2>
        <p className="text-gray-500">Content goes here.</p>
      </div>
    ),
  },
};

export const Hero: Story = {
  args: {
    templateFormat: TemplateFormat.HERO,
    children: (
      <div className="p-8">
        <h2 className="text-2xl mb-2">Hero Section Wrapper</h2>
        <p className="text-gray-500">Content goes here.</p>
      </div>
    ),
  },
};


