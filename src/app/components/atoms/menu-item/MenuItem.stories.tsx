import type { Meta, StoryObj } from '@storybook/nextjs/*';
import MenuItem from './MenuItem';

const meta: Meta<typeof MenuItem> = {
  title: 'Atoms/MenuItem',
  component: MenuItem,
  args: {
    title: 'Home',
  },
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-6">
      <MenuItem title="Home" />
      <MenuItem title="About" />
      <MenuItem title="Contact" />
      <MenuItem title="Blog" />
      <MenuItem title="Careers" />
    </div>
  ),
};


