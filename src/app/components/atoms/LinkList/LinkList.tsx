

export default function LinkList({ list }: {list: string[]}) {
    return(
        <div className="m-auto h-full flex-col">
            {list.map((item, key) => {
                return (
                    <div key={key} className="w-full h-12 m-auto text-white content-center">
                        <button className="mt-auto mb-auto hover:text-lime-400 hover:cursor-pointer">{item}</button>
                    </div>
                )
            })}
        </div>
    );
}