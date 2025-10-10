import Image from 'next/image';

import styles from './infoList.module.css';

import onlineIcon from 'app/public/images/icon-online.svg';
import budgetingIcon from 'app/public/images/icon-budgeting.svg';
import onboardingIcon from 'app/public/images/icon-onboarding.svg';
import apiIcon from 'app/public/images/icon-api.svg';


export default function InfoList () {
    return (
        <>
            <div className={styles.il_ItemContainer}>
                <Image src={onlineIcon} className={styles.il_ItemImage} alt='whyIcon'/>
                <p className={styles.il_ItemTitle}>Online Banking</p>
                <p className={styles.wl_ItemSubtitle}>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
            </div>
            <div className={styles.il_ItemContainer}>
                <Image src={budgetingIcon} className={styles.il_ItemImage} alt='budgetingIcon'/>
                <p className={styles.il_ItemTitle}>Simple Budgeting</p>
                <p className={styles.wl_ItemSubtitle}>See exactly where your money goes each month. Receive notifications when you`re close to hitting your limits.</p>
            </div>
            <div className={styles.il_ItemContainer}>
                <Image src={onboardingIcon} className={styles.il_ItemImage} alt='onboardingIcon'/>
                <p className={styles.il_ItemTitle}>Fast Onboarding</p>
                <p className={styles.il_ItemSubtitle}>We don`t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
            </div>
            <div className={styles.il_ItemContainer}>
                <Image src={apiIcon} className={styles.il_ItemImage} alt='apiIcon'/>
                <p className={styles.il_ItemTitle}>Open API</p>
                <p className={styles.il_ItemSubtitle}>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
            </div>
        </>
    )
}
