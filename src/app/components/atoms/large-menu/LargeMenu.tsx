import MenuItem from "../menu-item/MenuItem";

export default function LargeMenu({menuStrings}: {menuStrings: string[]}) {
    return(
        <div className="flex w-1/2 content-center flex-wrap text-center justify-center">
            <div className="w-2/3 h-full justify-between flex">
                {menuStrings.map((menuItem, key) => (
                    <MenuItem title={menuItem} key={key} />
                ))}
            </div>
        </div>
    )
}
