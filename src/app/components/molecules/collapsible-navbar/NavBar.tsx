'use client';

import { useMediaQuery } from "usehooks-ts";
import SmallMenu from "@components/atoms/small-menu/SmallMenu";
import LargeMenu from "@components/atoms/large-menu/LargeMenu";

const menuElements: string[] = ['Home', 'About', 'Contact', 'Blog', 'Careers'];

export default function Navbar() {
    const matches = useMediaQuery('(min-width:769px)');

    return(
        <div className="flex w-screen h-20 z-3 bg-white fixed">
            {/* If we are at mobile size 768px*/}
            {!matches && (
                <SmallMenu menuStrings={menuElements}/>
            )}
            
            {/* If media is >= 769px */}
            {matches && (
                <LargeMenu menuStrings={menuElements} />
            )}
        </div>
    )
}