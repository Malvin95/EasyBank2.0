import { Meta, StoryObj } from "@storybook/nextjs/*";
import LinkList from "./LinkList";


const meta = {
    title: 'Atom/LinkList',
    component: LinkList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof LinkList>;

export default meta;
type Story = StoryObj<typeof LinkList>

export const List: Story = {
    args: {
        list: ['list item 1', 'list item 2', 'list item 3', 'list item 4'],
    },
} satisfies Story;