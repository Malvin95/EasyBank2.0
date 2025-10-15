'use client';

import { RefObject, useState } from "react";

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { IconButton, MenuItem, Popover, PopoverOrigin } from "@mui/material";


export default function SmallMenu({ menuStrings, navBarRef }: { menuStrings: string[], navBarRef: RefObject<HTMLElement|null> }) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = () => {
        setAnchorEl(navBarRef.current);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const slotProps = {
        root: {
            style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }
        },
        paper: {
            style: {
                marginTop: '15px',
                width: '82%',
                maxWidth: '300px'
            }
        }
    };

    const anchorOrigin: PopoverOrigin = {
        vertical: 'bottom',
        horizontal: 'center',
    };
    const transformOrigin: PopoverOrigin = {
        vertical: 'top',
        horizontal: 'center',
    };

    return(
        <>
            <div className="m-auto mr-2">
                <IconButton
                    role="menu-btn"
                    id='sandwichBtn'
                    aria-label='menu'
                    aria-controls={open ? 'small-menu' : undefined}
                    aria-haspopup='true'
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    {open ? (<CloseIcon role="close-icon"/>) : (<MenuIcon role="open-icon"/>)}
                </IconButton>
            </div>

            <Popover
                id='small-menu'
                anchorOrigin={anchorOrigin}
                transformOrigin={transformOrigin}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={slotProps}
            >
                {menuStrings.map((menuItem, key) => (
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
