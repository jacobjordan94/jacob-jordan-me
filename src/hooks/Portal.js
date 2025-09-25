import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export function usePortal(id = 'portal-root') {
    const [mounted, setMounted] = useState(false);
    const rootRef = useRef(null);

    useEffect(() => {
        let root = document.getElementById(id);
        if (!root) {
            root = document.createElement('div');
            root.id = id;
            document.body.appendChild(root);
        }
        rootRef.current = root;
        setMounted(true);

        return () => {
            if (root && root.childNodes.length === 0) {
                root.remove();
            }
        };
    }, [id]);

    const Portal = ({ children }) => {
        if (!mounted || !rootRef.current) return null;
        return createPortal(children, rootRef.current);
    };

    return Portal;
}
