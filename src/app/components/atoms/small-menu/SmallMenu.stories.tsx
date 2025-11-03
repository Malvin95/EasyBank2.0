import { Meta, StoryObj } from '@storybook/nextjs/*';
import SmallMenu from "./SmallMenu";
import { useRef } from "react";
import { expect, screen } from "storybook/test";

const menuStrings = ['menu item 1', 'menu item 2', 'menu item 3', 'menu item 4'];
const simpleMenuStrings = ['menu item', 'menu item', 'menu item', 'menu item'];

const meta = {
    title: 'Atoms/Small Menu',
    component: SmallMenu,
    tags: ['autodocs']
} satisfies Meta<typeof SmallMenu>;

export default meta;
type Story = StoryObj<typeof SmallMenu>;

export const SmallMenuComponent: Story = {
    args:{
        menuStrings: menuStrings,
    },
    render: (args) => {
        const testRef = useRef<HTMLDivElement|null>(null);
        return(
            <div className="w-full bg-white flex" ref={testRef}>
                <SmallMenu menuStrings={args.menuStrings} />
            </div>
        )
    },
} satisfies Story;

export const MenuIconSwitches: Story = {
    args: {
        menuStrings: simpleMenuStrings,
    },
    render: (args) => {
        const testRef = useRef<HTMLDivElement|null>(null);
        return(
            <div className="w-full bg-white flex" ref={testRef}>
                <SmallMenu menuStrings={args.menuStrings} />
            </div>
        )
    },
    play: async({canvas, userEvent}) => {

        // Check the initial state of the navbar
        const menuBtn = await canvas.findByRole('menu-btn');
        const menuIcon = await canvas.findByRole('menu-icon');
        expect(menuIcon).toHaveAttribute('alt', 'open menu');

        // Click on the menu btn and expect it to switch Icon
        await userEvent.click(menuBtn);
        await expect(menuIcon).toHaveAttribute('alt', 'close menu'); // Expect the open menu icon to disappear

        // Check that popover menu appears and populates with options
        const menuItems = await screen.findAllByText('menu item');
        await expect(menuItems).toHaveLength(4);

        // Click on an item and the menu should disappear
        await userEvent.click(menuItems[1]);

        // Check that the Close menu icon switches out
        expect(menuIcon).toHaveAttribute('alt', 'open menu');
    }
}
