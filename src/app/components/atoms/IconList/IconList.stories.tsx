import { fn } from "storybook/internal/test";
import IconList from "./IconList";
import { Meta, StoryObj } from "@storybook/nextjs/*";


const meta = {
    title: 'Atom/IconList',
    component: IconList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: { 
        onClick: fn(),
    },
    render: () => (
        <div className="w-fit h-[50%] m-auto flex">
            <IconList />
        </div>
    )
} satisfies Meta<typeof IconList>;

export default meta;
type Story = StoryObj<typeof IconList>

export const Default: Story = {
    args: {},
};