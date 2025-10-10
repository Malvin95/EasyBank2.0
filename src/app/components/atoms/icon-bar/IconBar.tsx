import Image from 'next/image';

import facebookIcon from '@images/icon-facebook.svg';
import youtubeIcon from '@images/icon-youtube.svg';
import twitterIcon from '@images/icon-twitter.svg';
import pinterestIcon from '@images/icon-pinterest.svg';
import instagramIcon from '@images/icon-instagram.svg';

export type iconBarProps = {
    src: any;
    alt: string;
}

const iconList: iconBarProps[] = [
    {'src': facebookIcon, 'alt':'Facebook'},
    {'src': youtubeIcon, 'alt': 'Youtube'},
    {'src': twitterIcon, 'alt': 'Twitter'},
    {'src': pinterestIcon, 'alt': 'Pinterest'},
    {'src': instagramIcon, 'alt': 'Instagram'}
];

export default function IconBar() {
    return(
        <>
            {iconList.map((icon, key) => {
                return(
                    <Image
                        key={key}
                        src={icon.src} 
                        alt={icon.alt} 
                        className="m-auto ml-1.5 mr-1.5 h-5 hover:bg-lime-400"
                    />
                )
            })}
        </>
    );
}