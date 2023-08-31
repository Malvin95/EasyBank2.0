import styles from './card.module.css';
import Image from 'next/image';

interface cardProps {
    imageUrl: string;
    author: string;
    title: string;
    content: string;
    alt: string;
}

export default function Card({imageUrl, author, title, content, alt}: cardProps) {
    return(
        <div className={styles.cardContainer}>
            <div className={styles.cardFrame}>
                <div className={styles.cardImageContainer}>
                    <Image 
                        src={imageUrl}
                        className={styles.cardImage}
                        fill={true}
                        alt={alt} 
                    /> 
                </div>
                <div className={styles.cardContentWrapper}>
                    <p className={styles.authorText}>By {author}</p>
                    <p className={styles.titleText}>{title}</p>
                    <p className={styles.contentText}>{content}</p>
                </div>
            </div>
        </div>
    )
}