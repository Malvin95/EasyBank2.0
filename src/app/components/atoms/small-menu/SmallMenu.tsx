import { useState } from "react";

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { IconButton, MenuItem, Popover, PopoverOrigin } from "@mui/material";


export default function SmallMenu({ menuStrings }: { menuStrings: string[] }) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
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
                anchorOrigin={anchorOrigin}
                transformOrigin={transformOrigin}
                anchorEl={null}
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
