import Image from "next/image";


export enum CardFormat {
    INFO = 'InfoCard',
    BLOG = 'BlobCard'
};

export type CardData = {
    cardType: CardFormat,
    imageUrl: string,
    author?: string,
    title: string,
    content: string,
    alt: string,
}

export default function Card({cardType, imageUrl, author, title, content, alt}: CardData){
    const cardWrapper = cardType == CardFormat.BLOG ? "min-h-[425px]" : "min-h-[200px]";
    const blogCardFrame = cardType == CardFormat.BLOG ? "rounded-sm bg-white" : "";
    const cardContentContainer = cardType == CardFormat.BLOG ? "m-8" : "";

    return(
        <div className={`w-72 inline-flex mr-8 ${cardWrapper}`}>
            <div className={`w-full ${blogCardFrame}`}>
                {cardType === CardFormat.BLOG && (
                    <div className="w-full">
                        <Image 
                            src={imageUrl}
                            className="rounded-t-sm h-48"
                            height={192}
                            width={288}
                            alt={alt} 
                        /> 
                    </div>
                )}
                <div className={cardContentContainer}>
                    {cardType === CardFormat.INFO && (
                        <Image 
                            src={imageUrl}
                            className="rounded-t-sm mb-6"
                            height={70}
                            width={70}
                            alt={alt} 
                        />
                    )}
                    {author && <p className="mt-1 mr-auto ml-auto mb-2.5 text-xs font-light text-gray-400">By {author}</p>}
                    <p className="font-normal text-lg mt-3.5 mb-2 m-auto text-gray-900">{title}</p>
                    <p className="mb-1 text-xs font-light text-gray-400">{content}</p>
                </div>
            </div>
        </div>
    )
}
