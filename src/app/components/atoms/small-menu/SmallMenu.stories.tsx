import { Meta, StoryObj } from "@storybook/nextjs/*";
import SmallMenu from "./SmallMenu";

const menuList = ['menu item 1', 'menu item 2', 'menu item 3', 'menu item 4']

const meta = {
    title: 'Atom/Small Menu',
    component: SmallMenu,
    tags: ['autodocs']
} satisfies Meta<typeof SmallMenu>;

export default meta;
type Story = StoryObj<typeof SmallMenu>;

export const SmallMenuComponent: Story = {
    args:{
        menuStrings: menuList
    }
} satisfies Story;
