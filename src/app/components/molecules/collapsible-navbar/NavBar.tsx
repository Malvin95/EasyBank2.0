'use client';

import { useMediaQuery } from "usehooks-ts";
import SmallMenu from "@components/atoms/small-menu/SmallMenu";
import LargeMenu from "@components/atoms/large-menu/LargeMenu";

const menuElements: string[] = ['Home', 'About', 'Contact', 'Blog', 'Careers'];

export default function Navbar() {
    const matches = useMediaQuery('(min-width:769px)');

    return(
        <div className="w-full h-20 z-3 bg-white fixed">
            <div className="flex h-full m-auto w-80 min-[576px]:w-[500px] sm:w-[580px] md:w-2xl lg:w-4xl xl:w-6xl">
                {/* If we are at mobile size 768px*/}
                {!matches && (
                    <SmallMenu menuStrings={menuElements} />
                )}
                
                {/* If media is >= 769px */}
                {matches && (
                    <LargeMenu menuStrings={menuElements} />
                )}
            </div>
        </div>
    )
}