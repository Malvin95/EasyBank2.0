import Image from "next/image";
import logo from '@images/logo.svg';
import useMediaQuery from "@mui/material/useMediaQuery";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";

import * as MenuListItem from '@components/atoms/menu-item/MenuItem';

const menuElements: string[] = ['Home', 'About', 'Contact', 'Blog', 'Careers'];

function RenderSmallMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <>
            <div className="m-auto mr-2">
                <IconButton
                    id='sandwichBtn'
                    aria-label='menu'
                    aria-controls={open ? 'small-menu' : undefined}
                    aria-haspopup='true'
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <MenuIcon />
                </IconButton>
            </div>

            <Menu
                id='small-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                list: {
                    'aria-labelledby': 'sandwichBtn',
                },
                }}
            >
                {menuElements.map((menuItem, key) => (
                        <MenuItem onClick={handleClose} key={key}>{menuItem}</MenuItem>
                    )
                )}
            </Menu>
        </>
    )
}

function RenderWideMenu() {
    return(
        <div className="flex w-1/2 content-center flex-wrap text-center justify-center">
            <div className="w-2/3 h-full justify-between flex">
                {menuElements.map((menuItem, key) => (
                    <MenuListItem.default title={menuItem} key={key} />
                ))}
            </div>
        </div>
    )
}

export default function Navbar() {
    const matches = useMediaQuery('(min-width:769px)');

    return(
        <div className="flex w-full h-20 z-[3] bg-white">
            <div className="flex w-1/4 ml-4 content-center flex-wrap text-center justify-center">
                <Image 
                    src={logo}
                    alt="logo"
                />
            </div>
            {/* If we are at mobile size 768px*/}
            {!matches && (
                <RenderSmallMenu />
            )}
            
            {/* If media is >= 769px */}
            {matches && (
                <RenderWideMenu />
            )}
        </div>
    )
}