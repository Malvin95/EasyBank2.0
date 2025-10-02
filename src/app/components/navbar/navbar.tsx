import styles from './navbar.module.css';

import Image from 'next/image';

import logo from '/public/images/logo.svg';

import MenuItem from './menuItem/menuItem';
import InviteButton from '../inviteButton/inviteButton';

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