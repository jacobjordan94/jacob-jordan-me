import { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

export default function DropdownButton({
    children,
    className = '',
    dropdownContentClassName = '',
    ButtonContent,
    align = 'left', // 'left' | 'right' | 'center'
    dropdownWidth = null, // Optional: let user pass width manually
    behavior = 'click', // 'click' | 'hover'
}) {
    const buttonRef = useRef(null);
    const dropdownRef = useRef(null);
    const hoverTimeout = useRef(null);

    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState(null);
    const [measuredWidth, setMeasuredWidth] = useState(null);
    const [portalRoot, setPortalRoot] = useState(null);

    // Get portal root
    useEffect(() => {
        const existing = document.getElementById('portal-root');
        if (existing) setPortalRoot(existing);
    }, []);

    // Outside click close (click behavior only)
    useEffect(() => {
        if (behavior !== 'click') return;

        const handleClick = (e) => {
            if (
                buttonRef.current &&
                !buttonRef.current.contains(e.target) &&
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target)
            ) {
                setIsOpen(false);
            }
        };

        const handleEscape = (e) => {
            if (e.key === 'Escape') setIsOpen(false);
        };

        document.addEventListener('mousedown', handleClick);
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('mousedown', handleClick);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [behavior]);

    // Measure dropdown width (only once it's visible)
    useLayoutEffect(() => {
        if (isOpen && dropdownRef.current && dropdownWidth == null) {
            const rect = dropdownRef.current.getBoundingClientRect();
            setMeasuredWidth(rect.width);
        }
    }, [isOpen, dropdownWidth]);

    // Positioning
    useLayoutEffect(() => {
        if (!isOpen || !buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const width = dropdownWidth ?? measuredWidth;
        if (!width) return;

        let left = rect.left;

        if (align === 'center') {
            left = rect.left + rect.width / 2 - width / 2;
        } else if (align === 'right') {
            left = rect.right - width;
        }

        // Clamp to viewport
        const maxLeft = window.innerWidth - width - 10;
        if (left > maxLeft) left = maxLeft;
        if (left < 10) left = 10;

        setPosition({ top: rect.bottom, left });
    }, [isOpen, dropdownWidth, measuredWidth, align]);

    // Open state triggers
    const handleClickToggle = () => {
        if (behavior === 'click') {
            setIsOpen(!isOpen);
        }
    };

    const handleMouseEnter = () => {
        if (behavior !== 'hover') return;
        clearTimeout(hoverTimeout.current);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        if (behavior !== 'hover') return;
        hoverTimeout.current = setTimeout(() => {
            setIsOpen(false);
        }, 150); // Small buffer for cursor movement
    };

    const isReadyToShow = !!dropdownWidth || !!measuredWidth;

    return (
        <div
            className={`relative inline-block ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                ref={buttonRef}
                onClick={handleClickToggle}
                className="cursor-pointer"
            >
                {ButtonContent && <ButtonContent />}
            </button>

            {isOpen && portalRoot &&
                createPortal(
                    <div
                        ref={dropdownRef}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className={`z-[9999] ${dropdownContentClassName}`}
                        style={{
                            position: 'fixed',
                            top: isReadyToShow && position ? `${position.top}px` : '-9999px',
                            left: isReadyToShow && position ? `${position.left}px` : '-9999px',
                            width: dropdownWidth ?? 'auto',
                            visibility: isReadyToShow ? 'visible' : 'hidden',
                        }}
                    >
                        {children}
                    </div>,
                    portalRoot
                )
            }
        </div>
    );
}
