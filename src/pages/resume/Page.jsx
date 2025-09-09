import styles from './PageStyles.module.css';
import { useEffect, useState } from 'react';

export default function Page({ size = 'letter', children, className = '' }) {
    const [ pageStyle, setPageStyle ] = useState(styles.letter);
    function determinePageStyle() {
        let ps;
        switch(size) {
            case 'letter':   ps = styles.letter;   break;
            case 'a4':       ps = styles.a4;       break;
            case 'business': ps = styles.business; break;
        }
        setPageStyle(ps);
    }
    useEffect(determinePageStyle, [size])
    return (
        <div className={"page printable-page m-auto transition-[width_height] bg-white text-black " + pageStyle + ` ${className}`} size={size}>
            { children }
        </div>
    )
}