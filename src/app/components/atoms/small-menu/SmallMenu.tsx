'use client';

import { useEffect, useState } from "react";

import Image from "next/image";

import logo from '@images/logo.svg';
import openIcon from '@images/icon-hamburger.svg';
import crossIcon from '@images/icon-close.svg';

import * as MenuListItem from '@components/atoms/menu-item/MenuItem';
import { Popover, PopoverAnchor, PopoverContent, PopoverTrigger } from '@components/shadcn/ui/popover';
import { Button } from '@components/shadcn/ui/button';
import { PopoverClose } from "@radix-ui/react-popover";

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
        <div className="w-full flex">
            <div className="flex basis-[fit-content] w-1/5 content-center flex-wrap text-center justify-center md:ml-0 lg:justify-start">
                <Image 
                    src={logo}
                    alt="logo"
                />
            </div>
            <Popover>
                <PopoverAnchor className="w-full flex">
                    <PopoverTrigger asChild className='m-auto mr-0 bg-white pr-0'>
                        <Button onClick={() => {
                                setIsOpen(!isOpen)
                            }}
                            role="menu-btn"
                        >
                            <Image src={menuIcon} alt={isOpen ? "close menu" : "open menu"} role="menu-icon"/>
                        </Button>
                    </PopoverTrigger>

                    <PopoverContent className="w-72 mt-4 border-none">
                        <PopoverClose
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                            className="w-full"
                        >
                            {menuStrings.map((menuItem, key) => (
                                <MenuListItem.default title={menuItem} key={key} />
                            ))}
                        </PopoverClose>
                    </PopoverContent>
                </PopoverAnchor>
            </Popover>
        </div>
    )
}
