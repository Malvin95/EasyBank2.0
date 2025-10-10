import styles from './latestArticleSection.module.css';

import { Content } from '@components/atoms/card/CardContent';
import Card from '@components/atoms/card/CardComponent';

export default function LatestSection() {
    return(
        <div className={styles.latestSectionContainer}>
            <div className={styles.wrapper}>
                <div className={styles.headerContainer}>
                    <p className={styles.header}>Latest Articles</p>
                </div>
                <div className={styles.contentContainer}>
                    {Content.map((item, key) => (
                            <Card 
                                imageUrl={item.imageUrl}
                                author={item.author}
                                title={item.title}
                                content={item.content}
                                alt={item.alt}
                                key={key}
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    )
}