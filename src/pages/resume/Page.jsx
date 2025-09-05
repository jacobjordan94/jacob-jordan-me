import styles from './PageStyles.module.css';
import './Page.css';

export default function Page({ size = 'letter', children }) {
    return (
        <div className={"page printable-page m-auto " + (size === 'letter' ? styles.letter : styles.a4)} size={size}>
            { children }
        </div>
    )
}