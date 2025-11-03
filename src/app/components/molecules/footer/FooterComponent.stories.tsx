import { Meta, StoryObj } from '@storybook/nextjs/*';
import Footer from "./FooterComponent";


const meta = {
    title: 'Molecules/Footer',
    component: Footer,
    tags: [' autodocs']
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof Footer>;

export const PrimaryFooterSection: Story = {} satisfies Story;