import Image from "next/image";


export enum CardType {
    INFO = 'InfoCard',
    BLOG = 'BlobCard'
};

export type CardData = {
    cardType: CardType,
    imageUrl: string,
    author?: string,
    title: string,
    content: string,
    alt: string,
}

export default function Card({cardType, imageUrl, author, title, content, alt}: CardData){
    const blogCardFrame = cardType == CardType.BLOG ? "rounded-sm bg-white" : "";

    return(
        <div className="w-72 min-h-[425px] mr-8 inline-flex">
            <div className={`w-full ${blogCardFrame}`}>
                {cardType === CardType.BLOG && (
                    <div className="w-full object-fill">
                        <Image 
                            src={imageUrl}
                            className="rounded-t-sm"
                            height={150}
                            width={288}
                            alt={alt} 
                        /> 
                    </div>
                )}
                <div className="m-8">
                    {cardType === CardType.INFO && (
                        <Image 
                            src={imageUrl}
                            className="rounded-t-sm"
                            fill={false}
                            alt={alt} 
                        />
                    )}
                    {author && <p className="mt-1 mr-auto ml-auto mb-2.5 text-xs font-light text-gray-400">By {author}</p>}
                    <p className="font-normal text-lg mt-3.5 m-auto text-gray-900">{title}</p>
                    <p className="mb-1 text-xs font-light text-gray-400">{content}</p>
                </div>
            </div>
        </div>
    )
}
