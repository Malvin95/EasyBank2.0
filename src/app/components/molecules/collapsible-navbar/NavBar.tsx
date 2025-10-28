'use client'; 

import React, { useRef } from "react";
import Image from "next/image";

import logo from '@images/logo.svg';

import useMediaQuery from "@mui/material/useMediaQuery";

import SmallMenu from "@components/atoms/small-menu/SmallMenu";
import LargeMenu from "@components/atoms/large-menu/LargeMenu";
import InviteButton from "@components/atoms/invite-button/InviteButtonComponent";

const menuElements: string[] = ['Home', 'About', 'Contact', 'Blog', 'Careers'];

export default function Navbar() {
    const matches = useMediaQuery('(min-width:897px)');
    const navBarRef = useRef(null);

    return(
        <div ref={navBarRef} className="w-full h-20 z-[3] bg-white">
            <div className="flex h-full m-auto sm:w-[580px] md:flex md:w-2xl lg:w-4xl xl:w-6xl">
                <div className="flex w-1/4 ml-4 content-center flex-wrap text-center justify-center lg:justify-start md:ml-0">
                    <Image 
                        src={logo}
                        alt="logo"
                    />
                </div>
                {/* If we are at mobile size 768px*/}
                {!matches && (
                    <SmallMenu menuStrings={menuElements} navBarRef={navBarRef}/>
                )}
                
                {/* If media is >= 769px */}
                {matches && (
                    <>
                        <LargeMenu menuStrings={menuElements} />
                        <div className="flex w-1/4 align-center content-center flex-wrap text-center justify-center pr-14 lg:pr-0 lg:justify-end">
                            <InviteButton />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}