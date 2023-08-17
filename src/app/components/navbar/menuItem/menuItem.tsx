import styles from './menuItem.module.css';

interface menuItemProps {
    title: string;
}

export default function MenuItem({title}: menuItemProps) {
    return(
        <div className={styles.menuItemContainer}>
            <div className={styles.menuButton}>
                {title}
            </div>
            <div className={styles.hoverHighlight}/>
        </div>
    )
}

