'use client';

import { useEffect, useState } from "react";

import Image from "next/image";
import logo from '@images/logo.svg';

import openIcon from '@images/icon-hamburger.svg';
import crossIcon from '@images/icon-close.svg';

import * as MenuListItem from '@components/atoms/menu-item/MenuItem';
import { Popover, PopoverAnchor, PopoverContent, PopoverTrigger } from '@components/shadcn/ui/popover';
import { Button } from '@components/shadcn/ui/button';

export default function SmallMenu({ menuStrings }: { menuStrings: string[] }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [menuIcon, setMenuIcon] = useState<any>(openIcon);

    useEffect(() => {
        if (isOpen) {
            setMenuIcon(crossIcon);
        } else {
            setMenuIcon(openIcon);
        }
    }, [isOpen]);

    return(
        <Popover>
            <PopoverAnchor className="w-full flex">
                <div className="flex w-1/4 ml-4 content-center flex-wrap text-center justify-center">
                    <Image 
                        src={logo}
                        alt="logo"
                    />
                </div>
                <PopoverTrigger asChild className='m-auto mr-0 bg-white'>
                    <Button onClick={() => {
                            setIsOpen(!isOpen)
                        }}
                    >
                        <Image src={menuIcon} alt={isOpen ? "close menu" : "open menu"} />
                    </Button>
                </PopoverTrigger>

                <PopoverContent className="w-72 mt-4 border-none">
                    {menuStrings.map((menuItem, key) => (
                        <MenuListItem.default title={menuItem} key={key} />
                    ))}
                </PopoverContent>
            </PopoverAnchor>
        </Popover>
    )
}
