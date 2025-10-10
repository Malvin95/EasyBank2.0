import styles from './footer.module.css';
import Image from 'next/image';

import footerlogo from '@images/footer-logo.svg';
import InviteButton from '@components/atoms/inviteButton/InviteButtonComponent';
import LinkList from '@components/atoms/link-list/LinkList';
import IconBar from '@components/atoms/icon-bar/IconBar';

export default function Footer() {
    return(
        <div className={styles.footerContainer}>
            <div className={styles.footerSubject}>
                <div className="h-full w-fit m-auto ml-0">
                    <div className={styles.logoContainer}>
                        <Image src={footerlogo} alt='logo' className="m-auto" />
                    </div>
                    <div className={styles.faviconContainer}>
                        <IconBar />
                    </div>
                </div>
            </div>
            <div className={styles.footerSubject}>
                <div className="m-auto h-full flex">
                    <LinkList list={['About Us', 'Contact', 'Blog']} />
                    <LinkList list={['Careers', 'Support', 'Privacy Policy']} />
                </div>
            </div>
            <div className={styles.footerSubject}>
                <div className="h-full text-right mt-auto mb-auto">
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