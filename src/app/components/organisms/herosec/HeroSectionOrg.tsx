import styles from './heroSection.module.css';
import Image from 'next/image';

import imageMockup from 'app/public/images/image-mockups.png';
import InviteButton from '@components/atoms/inviteButton/InviteButtonComponent';

export default function HeroSection() {
    return(
        <div className={styles.heroSectionContainer}>
            <div className={styles.leftHeroContainer}>
                <div className={styles.lfhSubject}>
                    <div className={styles.lfhSubItem}>
                        <p className={styles.heroSecHeader}>Next generation digital banking</p>
                        <p className={styles.heroSecSubtitle}>
                            Take your financial life online. Your Easybank account will be a one-stop-shop 
                            for spending, saving, budgeting, investing, and much more.
                        </p>
                        <div className={styles.btnContainer}>
                            <InviteButton />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.rightHeroContainer}>
                <Image className={styles.mockupOverlay} src={imageMockup} alt='imgMockups' />
            </div>
        </div>
    )
}