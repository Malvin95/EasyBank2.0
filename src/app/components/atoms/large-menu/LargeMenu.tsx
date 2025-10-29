import MenuItem from "../menu-item/MenuItem";
import InviteButton from "../invite-button/InviteButtonComponent";

export default function LargeMenu({menuStrings}: {menuStrings: string[]}) {
    return(
        <div className="flex w-full content-center flex-wrap text-center justify-center">
            <div className="h-full justify-between flex min-w-80 m-auto">
                {menuStrings.map((menuItem, key) => (
                    <MenuItem title={menuItem} key={key} />
                ))}
            </div>
            <div className="flex m-auto mr-0">
                <InviteButton />
            </div>
        </div>
    )
}
