import { Meta, StoryObj } from "@storybook/nextjs/*";
import Navbar from "./NavBar";

const meta = {
    title: 'Organism/Collapsible NavBar',
    component: Navbar,
    tags: ['autodocs']
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof Navbar>;

export const CollapsibleNavBar: Story = {} satisfies Story;
