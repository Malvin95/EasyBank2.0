import MenuItem from "../menu-item/MenuItem";
import Image from "next/image";
import logo from '@images/logo.svg';
import InviteButton from "../invite-button/InviteButtonComponent";

export default function LargeMenu({menuStrings}: {menuStrings: string[]}) {
    return(
        <div className="flex w-full content-center flex-wrap text-center justify-center">
            <div className="flex w-1/4 content-center flex-wrap text-center justify-center">
                <Image 
                    src={logo}
                    alt="logo"
                />
            </div>
            <div className="h-full justify-between flex min-w-80 m-auto">
                {menuStrings.map((menuItem, key) => (
                    <MenuItem title={menuItem} key={key} />
                ))}
            </div>
            <div className="flex m-auto">
                <InviteButton />
            </div>
        </div>
    )
}
