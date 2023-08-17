import styles from './iconItem.module.css';
import Image from 'next/image';


interface iconProps {
    src: any;
    alt: string;
}

export default function IconItem(props: iconProps) {
    return(
        <Image src={props.src} alt={props.alt} className={styles.iconItem} />
    )
}
