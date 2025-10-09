import WhyList from '../../atoms/infoList/whyList';
import styles from './whySection.module.css';

export default function WhySection() {
    let subtext = 'We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.';
    
    return(
        <div className={styles.whySectionContainer}>
            <div className={styles.wrapper}>
                <div className={styles.headerContainer}>
                    <p className={styles.header}>Why choose Easybank?</p>
                    <p className={styles.subHeading}>{subtext}</p>
                </div>
                <div className={styles.contentContainer}>
                    <WhyList />
                </div>
            </div>
        </div>
    )
}
