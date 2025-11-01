'use client';

import { useMediaQuery } from "usehooks-ts";
import SmallMenu from "@components/atoms/small-menu/SmallMenu";
import LargeMenu from "@components/atoms/large-menu/LargeMenu";
import Image from "next/image";
import logo from '@images/logo.svg';
import ContainerWrapper from "@components/atoms/container-wrapper/ContainerWrapper";

const menuElements: string[] = ['Home', 'About', 'Contact', 'Blog', 'Careers'];

export default function Navbar() {
    const matches = useMediaQuery('(min-width:769px)');

    return(
        <div className="w-full h-20 z-3 bg-white fixed">
            <div className="flex h-full m-auto w-2xs sm:w-[580px] md:w-2xl lg:w-4xl xl:w-6xl">
                <div className="flex w-1/4 ml-4 content-center flex-wrap text-center justify-center lg:justify-start md:ml-0">
                    <Image 
                        src={logo}
                        alt="logo"
                    />
                </div>
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