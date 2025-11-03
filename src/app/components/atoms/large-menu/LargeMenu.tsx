
import Image from "next/image";

import logo from '@images/logo.svg';
import MenuItem from "../menu-item/MenuItem";
import InviteButton from "../invite-button/InviteButtonComponent";

export default function LargeMenu({menuStrings}: {menuStrings: string[]}) {
    return(
            <div className="w-full contents content-center flex-wrap text-center justify-center">
                <div className="flex basis-[fit-content] w-1/5 content-center flex-wrap text-center justify-center lg:justify-start md:ml-0">
                    <Image 
                        src={logo}
                        alt="logo"
                    />
                </div>
                <div className="h-full w-3/5 justify-between lg:m-auto flex">
                    <div className="flex min-w-80 lg:w-96 m-auto">
                        {menuStrings.map((menuItem, key) => (
                            <MenuItem title={menuItem} key={key} />
                        ))}
                    </div>
                </div>
                <div className="flex w-1/5 justify-end my-auto">
                    <InviteButton />
                </div>
            </div>
    )
}
