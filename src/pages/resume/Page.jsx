import styles from './PageStyles.module.css';
import './Page.css';

export default function Page({ size = 'letter', children, className = '' }) {
    return (
        <div className={"page printable-page m-auto " + (size === 'letter' ? styles.letter : styles.a4) + ` ${className}`} size={size}>
            { children }
        </div>
    )
}