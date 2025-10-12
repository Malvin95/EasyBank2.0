import Card, { CardType } from '@components/atoms/card/Card';
import styles from './latestArticleSection.module.css';

import { blogContent } from '@components/atoms/card/CardContent';

export default function LatestSection() {
    return(
        <div className={styles.latestSectionContainer}>
            <div className={styles.wrapper}>
                <div className={styles.headerContainer}>
                    <p className={styles.header}>Latest Articles</p>
                </div>
                <div className={styles.contentContainer}>
                    {blogContent.map((item, key) => (
                            <Card
                                cardType={CardType.BLOG}
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