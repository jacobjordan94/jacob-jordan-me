import { clsx } from 'clsx';
import styles from './PageStyles.module.css';

const SIZE_CLASS_MAP = {
    letter: styles.letter,
    a4: styles.a4,
    business: styles.business,
};

export default function Page({ size = 'letter', children, className = '' }) {
  const pageStyle = SIZE_CLASS_MAP[size] || styles.letter;
  return (
    <div
        data-size={size}
        className={clsx(
            "page printable-page m-auto transition-[width_height] ease-initial duration-[400ms] bg-white text-black overflow-hidden", 
            pageStyle,
            className
        )}
    >
        {children}
    </div>
  );
}
