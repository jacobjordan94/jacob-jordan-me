import { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

export default function DropdownButton({
    children,
    className = '',
    dropdownContentClassName = '',
    ButtonContent,
    align = 'left', // 'left' | 'right' | 'center'
    dropdownWidth = null,
    behavior = 'click', // 'click' | 'hover'
    arrowPosition = null // 'left' | 'right'
}) {
    const buttonRef = useRef(null);
    const dropdownRef = useRef(null);
    const hoverTimeout = useRef(null);

    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState(null);
    const [measuredWidth, setMeasuredWidth] = useState(null);
    const [portalRoot, setPortalRoot] = useState(null);

    useEffect(() => {
        const existing = document.getElementById('portal-root');
        if (existing) setPortalRoot(existing);
    }, []);

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

    useLayoutEffect(() => {
        if (isOpen && dropdownRef.current && dropdownWidth == null) {
            const rect = dropdownRef.current.getBoundingClientRect();
            setMeasuredWidth(rect.width);
        }
    }, [isOpen, dropdownWidth]);

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

        const maxLeft = window.innerWidth - width - 10;
        if (left > maxLeft) left = maxLeft;
        if (left < 10) left = 10;

        setPosition({ top: rect.bottom, left });
    }, [isOpen, dropdownWidth, measuredWidth, align]);

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
        }, 150);
    };

    const isReadyToShow = !!dropdownWidth || !!measuredWidth;

    const arrowGlyph = arrowPosition === 'left' ? '›' : arrowPosition === 'right' ? '‹' : '';

    const arrow = arrowPosition && (
        <span
            className={`
                inline-flex w-4 h-4 items-center justify-center
                transition-transform duration-300 transform-gpu origin-center
                ${arrowPosition === 'left'
                    ? isOpen
                        ? 'rotate-90'
                        : 'rotate-0'
                    : isOpen
                    ? '-rotate-90'
                    : 'rotate-0'
                }
            `}
        >
            <span className="block text-sm leading-none">
                {arrowGlyph}
            </span>
        </span>
    );



    return (
        <div
            className={`relative inline-block ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                ref={buttonRef}
                onClick={handleClickToggle}
                className="cursor-pointer flex items-center gap-1"
            >
                {arrowPosition === 'left' && arrow}
                {ButtonContent && <ButtonContent />}
                {arrowPosition === 'right' && arrow}
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
                        {/* Optional top arrow (CSS triangle) */}
                        {arrowPosition && (
                            <div className="relative">
                                <div
                                    className={`absolute -top-2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-neutral-600 ${
                                        arrowPosition === 'left' ? 'left-4' : 'right-4'
                                    }`}
                                ></div>
                            </div>
                        )}
                        {children}
                    </div>,
                    portalRoot
                )
            }
        </div>
    );
}
