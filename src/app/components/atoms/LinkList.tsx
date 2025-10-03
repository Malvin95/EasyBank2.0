

export default function LinkList({ list }: {list: string[]}) {
    return(
        <>
            {list.map((item, key) => {
                return (
                    <div key={key}>
                        <a>{item}</a>
                    </div>
                )
            })}
        </>
    );
}