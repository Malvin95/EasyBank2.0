

export default function LinkList({ list }: {list: string[]}) {
    return(
        <div className="m-auto h-full">
            {list.map((item, key) => {
                return (
                    <div key={key} className="w-full h-9 m-auto text-white content-center text-center lg:text-left">
                        <button className="mt-auto mb-auto hover:text-lime-400 hover:cursor-pointer">{item}</button>
                    </div>
                )
            })}
        </div>
    );
}