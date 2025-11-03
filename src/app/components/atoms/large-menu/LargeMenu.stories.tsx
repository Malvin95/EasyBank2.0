import { Meta, StoryObj } from "@storybook/nextjs/*";
import LargeMenu from "./LargeMenu";

const menuList = ['menu item 1', 'menu item 2', 'menu item 3', 'menu item 4'];

const meta = {
    title: 'Atom/Large Menu',
    component: LargeMenu,
    tags: ['autodocs']
} satisfies Meta<typeof LargeMenu>;

export default meta;
type Story = StoryObj<typeof LargeMenu>;

export const LargeMenuComponent: Story = {
    args:{
        menuStrings: menuList
    },
    render: (args) => {
        return(
            <div className="flex">
                <LargeMenu menuStrings={args.menuStrings} />
            </div>
        )
    },
} satisfies Story;;
