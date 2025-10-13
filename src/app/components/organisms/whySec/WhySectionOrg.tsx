import { infoContent } from '@components/atoms/card/CardContent';
import styles from './whySection.module.css';
import Card, { CardType } from '@components/atoms/card/Card';

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
                    {infoContent.map((item, key) => (
                        <Card
                            cardType={CardType.INFO}
                            imageUrl={item.imageUrl}
                            title={item.title}
                            content={item.content}
                            alt={item.alt}
                            key={key}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
