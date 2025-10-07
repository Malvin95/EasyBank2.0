import { Meta, StoryObj } from "@storybook/nextjs/*";
import Footer from "./footer";


const meta = {
    title: 'Organism/Footer',
    component: Footer,
    tags: [' autodocs']
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof Footer>;

export const footer: Story = {} satisfies Story;