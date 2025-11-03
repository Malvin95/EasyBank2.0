import type { Meta, StoryObj } from '@storybook/nextjs/*';
import ContainerTemplate from './ContainerTemplate';
import { TemplateFormat } from '@components/molecules/sectionContainer/SectionContainer';

const meta: Meta<typeof ContainerTemplate> = {
  title: 'Atoms/ContainerTemplate',
  component: ContainerTemplate,
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Section Title',
    subtitle: 'Optional subtitle explaining the section.',
  },
};

export default meta;
type Story = StoryObj<typeof ContainerTemplate>;

export const Why: Story = {
  args: {
    templateFormat: TemplateFormat.WHY,
    children: <div>Children content</div>,
  },
};

export const Latest: Story = {
  args: {
    templateFormat: TemplateFormat.LATEST,
    title: 'Latest Articles',
    subtitle: undefined,
    children: <div>Latest children</div>,
  },
};

export const Hero: Story = {
  args: {
    templateFormat: TemplateFormat.HERO,
    title: 'Next generation digital banking',
    subtitle: 'Take your financial life online... ',
    children: <div>CTA / Buttons</div>,
  },
};


