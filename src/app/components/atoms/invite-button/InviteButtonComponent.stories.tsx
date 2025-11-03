import type { Meta, StoryObj } from '@storybook/nextjs/*';
import InviteButton from './InviteButtonComponent';

const meta: Meta<typeof InviteButton> = {
  title: 'Atoms/InviteButton',
  component: InviteButton,
};

export default meta;
type Story = StoryObj<typeof InviteButton>;

export const Default: Story = {};

export const InContext: Story = {
  render: () => (
    <div className="p-6 bg-gray-50 rounded">
      <p className="mb-4">Try the invite button inside a container:</p>
      <InviteButton />
    </div>
  ),
};


