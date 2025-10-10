import { fn } from "storybook/internal/test";
import IconBar from "./IconBar";
import { StoryObj } from "@storybook/nextjs/*";


const meta = {
    title: 'Atom/IconList',
    component: IconBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { 
            control: 'color',
         },
    },
    args: { 
        onClick: fn(),
    },
};

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        primary: true,
        label: 'IconList',
    },
};