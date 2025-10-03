import styles from './footer.module.css';
import Image from 'next/image';

import logo from '@images/logo.svg';
import facebookIcon from '@images/icon-facebook.svg';
import youtubeIcon from '@images/icon-youtube.svg';
import twitterIcon from '@images/icon-twitter.svg';
import pinterestIcon from '@images/icon-pinterest.svg';
import instagramIcon from '@images/icon-instagram.svg';

import IconItem from './components/iconItem';
import InviteButton from '@components/inviteButton/inviteButton';

interface iconObject {
    src: any;
    alt: string;
}

let iconList: iconObject[] = [
    {'src': facebookIcon, 'alt':'Facebook'},
    {'src': youtubeIcon, 'alt': 'Youtube'},
    {'src': twitterIcon, 'alt': 'Twitter'},
    {'src': pinterestIcon, 'alt': 'Pinterest'},
    {'src': instagramIcon, 'alt': 'Instagram'}
];


export default function Footer() {
    return(
        <div className={styles.footerContainer}>
            <div className={styles.footerSubject}>
                <div className={styles.leftJustifiedFooter}>
                    <div className={styles.logoContainer}>
                        <Image src={logo} alt='logo' className={styles.footerLogo} style={{color: 'ffffff'}}/>
                    </div>
                    <div className={styles.faviconContainer}>
                        {iconList.map((icon, key) => {
                            return <IconItem src={icon.src} alt={icon.alt} key={key}/>
                        })}
                    </div>
                </div>
            </div>
            <div className={styles.footerSubject}>
                <div className={styles.linkContainer}>
                    <div className={styles.leftLinkList}>
                        {['About Us', 'Contact', 'Blog'].map((item, key) => {
                            return (
                                <div key={key}>
                                    <a>{item}</a>
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.rightLinkList}>     
                    {['Careers', 'Support', 'Privacy Policy'].map((item, key) => {
                            return (
                                <div key={key}>
                                    <a>{item}</a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className={styles.footerSubject}>
                <div className={styles.rightJustifiedFooter}>
                    <div className={styles.btnContainer}>
                        <InviteButton />
                    </div>
                    <div className={styles.copyrightContainer}>
                        <p>© Easybank. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}