import styles from './PageStyles.module.css';
import { useMemo } from 'react';

export default function Page({ size = 'letter', children, className = '' }) {
    const pageStyle = useMemo(() => {
        switch(size) {
            case 'letter':   return styles.letter;  
            case 'a4':       return styles.a4;      
            case 'business': return styles.business;

            default:         return styles.letter;
        }
    }, [ size ]);
    return (
        <div className={"page printable-page m-auto transition-[width_height] ease-initial duration-[400ms] bg-white text-black overflow-hidden " + pageStyle + ` ${className}`} size={size}>
            { children }
        </div>
    )
}