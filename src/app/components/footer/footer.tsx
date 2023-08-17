import styles from './footer.module.css';
import logo from '../../../../public/images/logo.svg';
import Image from 'next/image';
import facebookIcon from '../../../../public/images/icon-facebook.svg';
import youtubeIcon from '../../../../public/images/icon-youtube.svg';
import twitterIcon from '../../../../public/images/icon-twitter.svg';
import pinterestIcon from '../../../../public/images/icon-pinterest.svg';
import instagramIcon from '../../../../public/images/icon-instagram.svg';
import IconItem from './components/iconItem';
import InviteButton from '../inviteButton/inviteButton';

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
                        <Image src={logo} alt='logo' className={styles.footerLogo}/>
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