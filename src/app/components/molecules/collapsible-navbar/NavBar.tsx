import React from "react";
import Image from "next/image";

import logo from '@images/logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import useMediaQuery from "@mui/material/useMediaQuery";
import { IconButton, MenuItem, Popover } from "@mui/material";

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
                    {open ? (<CloseIcon />) : (<MenuIcon />) }
                </IconButton>
            </div>

            <Popover
                id='small-menu'
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                anchorEl={null}
                open={open}
                onClose={handleClose}
                slotProps={{
                    root: {
                        style: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }
                    },
                    paper: {
                        style: {
                            width: '82%',
                            maxWidth: '300px'
                        }
                    }
                }}
            >
                    {menuElements.map((menuItem, key) => (
                            <MenuItem 
                                onClick={handleClose} 
                                key={key}
                                className="flex"
                            >
                                <div className="m-auto">
                                    {menuItem}
                                </div>
                            </MenuItem>
                        )
                    )}
            </Popover>
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
    const matches = useMediaQuery('(min-width:897px)');

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