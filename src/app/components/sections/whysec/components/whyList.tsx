import styles from './whyList.module.css';
import Image from 'next/image';
import onlineIcon from 'app/public/images/icon-online.svg';
import budgetingIcon from 'app/public/images/icon-budgeting.svg';
import onboardingIcon from 'app/public/images/icon-onboarding.svg';
import apiIcon from 'app/public/images/icon-api.svg';


export default function WhyList () {
    return (
        <>
            <div className={styles.wl_ItemContainer}>
                <Image src={onlineIcon} className={styles.wl_ItemImage} alt='whyIcon'/>
                <p className={styles.wl_ItemTitle}>Online Banking</p>
                <p className={styles.wl_ItemSubtitle}>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
            </div>
            <div className={styles.wl_ItemContainer}>
                <Image src={budgetingIcon} className={styles.wl_ItemImage} alt='budgetingIcon'/>
                <p className={styles.wl_ItemTitle}>Simple Budgeting</p>
                <p className={styles.wl_ItemSubtitle}>See exactly where your money goes each month. Receive notifications when you`re close to hitting your limits.</p>
            </div>
            <div className={styles.wl_ItemContainer}>
                <Image src={onboardingIcon} className={styles.wl_ItemImage} alt='onboardingIcon'/>
                <p className={styles.wl_ItemTitle}>Fast Onboarding</p>
                <p className={styles.wl_ItemSubtitle}>We don`t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
            </div>
            <div className={styles.wl_ItemContainer}>
                <Image src={apiIcon} className={styles.wl_ItemImage} alt='apiIcon'/>
                <p className={styles.wl_ItemTitle}>Open API</p>
                <p className={styles.wl_ItemSubtitle}>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
            </div>
        </>
    )
}
