import styles from './footer.module.css';
import Image from 'next/image';

import footerlogo from '@images/footer-logo.svg';
import InviteButton from '@components/inviteButton/inviteButton';
import LinkList from '@components/atoms/LinkList/LinkList';
import IconList from '@components/atoms/IconList/IconList';

export default function Footer() {
    return(
        <div className={styles.footerContainer}>
            <div className={styles.footerSubject}>
                <div className={styles.leftJustifiedFooter}>
                    <div className={styles.logoContainer}>
                        <Image src={footerlogo} alt='logo' className="m-auto" />
                    </div>
                    <div className={styles.faviconContainer}>
                        <IconList />
                    </div>
                </div>
            </div>
            <div className={styles.footerSubject}>
                <div className={styles.linkContainer}>
                    <LinkList list={['About Us', 'Contact', 'Blog']} />
                    <LinkList list={['Careers', 'Support', 'Privacy Policy']} />
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