import { Meta, StoryObj } from "@storybook/nextjs/*";
import SmallMenu from "./SmallMenu";
import { useRef } from "react";
import { expect, screen } from "storybook/test";

const menuStrings = ['menu item 1', 'menu item 2', 'menu item 3', 'menu item 4'];
const simpleMenuStrings = ['menu item', 'menu item', 'menu item', 'menu item'];

const meta = {
    title: 'Atom/Small Menu',
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
        let menuIcon = await canvas.findByRole('open-icon', { hidden: true});
        await expect(menuIcon).toBeVisible();

        // Click on the menu btn and expect it to switch Icon
        await userEvent.click(menuBtn);
        await expect(menuIcon).not.toBeVisible(); // Expect the open menu icon to disappear

        // Check that the close menu Icon is visible
        const closeMenu = await canvas.findByRole('close-icon', { hidden: true});
        await expect(closeMenu).toBeVisible();

        // Check that popover menu appears and populates with options
        const menuItems = await screen.findAllByText('menu item');
        await expect(menuItems).toHaveLength(4);

        // Click on an item and the menu should disappear
        await userEvent.click(menuItems[1]);

        // Check that the Close menu icon switches out
        await expect(closeMenu).not.toBeVisible();

        // Check that the Menu Icon switches in.
        menuIcon = await canvas.findByRole('open-icon', { hidden: true});
        await expect(menuIcon).toBeVisible();
    }
}
