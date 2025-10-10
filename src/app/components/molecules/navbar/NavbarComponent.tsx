import styles from './navbar.module.css';

import Image from 'next/image';

import logo from '@images/logo.svg';

import InviteButton from '@components/atoms/inviteButton/InviteButtonComponent';
import MenuItem from '@components/atoms/menuItem/MenuItem';

export default function Navbar() {
    return(
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <Image src={logo} alt='logo'/>
            </div>
            <div className={styles.navListContainer}>
                <div className={styles.listContainer}>
                    <MenuItem title='Home'/>
                    <MenuItem title='About'/>
                    <MenuItem title='Contact'/>
                    <MenuItem title='Blog'/>
                    <MenuItem title='Careers'/>
                </div>
            </div>
            <div className={styles.btnContainer}>
                <InviteButton />
            </div>
        </div>
    );
}