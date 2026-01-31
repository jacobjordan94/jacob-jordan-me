import { useLocation } from "react-router";
import Icon from '@/components/Icon';
import DropdownButton from '@/components/DropdownButton';
import {
    DropdownMenuItem
} from '@/components/ui/dropdown-menu';
import AppLink from '@/components/AppLink';
import { Separator } from "./ui/separator";
import { motion } from 'motion/react';

export default function Header({ setSideNavOpen }) {
    return (
        <header className='z-30 print:hidden bg-neutral-900 relative'>
            <div className="inner-content p-4 shadow-[rgba(0,0,0,0.5)] shadow-xl pointer-fine:pb-2">
                
                {/* Mobile menu button */}
                <div className="mobile-nav-container inline float-start pointer-fine:hidden">
                    <MobileNavButton setSideNavOpen={setSideNavOpen} />
                </div>

                {/* Title and Icons */}
                <div className="flex justify-between not-pointer-fine:contents items-center">
                    <SiteTitle>jacob-jordan.me</SiteTitle>
                    <HeaderIcons className="pointer-coarse:hidden" />
                </div>

                {/* Desktop Navigation */}
                <nav
                    className="desktop-nav-container pointer-coarse:hidden mt-4 font-[MisterPixel]"
                    aria-label="Primary navigation"
                >
                    <DesktopNav />
                </nav>
            </div>
        </header>
    );
}

function MobileNavButton({ setSideNavOpen }) {
    return (
        <div className="nav-button-container">
            <HeaderButton onClick={() => setSideNavOpen(true)} ariaLabel="Open mobile navigation">
                <Icon.Menu size={30} />
            </HeaderButton>
        </div>
    );
}

function SiteTitle({ children }) {
    return (
        <h1 className="title-container uppercase text-3xl pointer-coarse:text-center">
            {children}
        </h1>
    );
}

function DesktopNav() {
    const loc = useLocation();

    const links = [
        { to: '', text: 'home' },
        { to: 'experience', text: 'experience' },
        { to: 'projects', text: 'projects' },
        { to: 'skills', text: 'skills' },
        { to: 'about', text: 'about this website' },
        { to: 'resume', text: 'resumé' }
    ];

    const externalLinks = [
        {
            href: 'https://github.com/jacobjordan94',
            icon: () => <Icon.Github />,
            text: 'github',
        },
        {
            href: 'https://github.com/jacobjordan94/jacob-jordan-me',
            icon: () => <Icon.SourceCodeMagnifyingGlass />,
            text: 'source'
        }
    ];

    return (
        <div className="desktop-nav flex justify-between items-start">
            {/* Internal links */}
            <ul className="nav-links flex gap-2" role="list">
                {links.map((link, i) => {
                    const isActive = ('/' + link.to) === loc.pathname;
                    return (
                        <li
                            key={i}
                            data-active={isActive}
                            className="relative group data-[active=false]:opacity-40 data-[active=false]:hover:opacity-100"
                        >
                            <AppLink decoration={false} to={link.to}>
                                <span className="desktop-nav-link-inner-content flex items-center gap-1.5 group-data-[active=false]:text-transparent group-data-[active=false]:hover:text-white duration-300 transition-colors">
                                    <span className="text-xs mt-1 invisible">{'>'}</span>
                                    <span className="text-white">{link.text}</span>
                                    <span className="text-xs mt-1 invisible">{'<'}</span>
                                </span>
                            </AppLink>
                            {
                                isActive && (
                                    <motion.div 
                                        layoutId="active-desktop-tab"
                                        className="absolute inset-0 flex items-stretch justify-center"
                                    >
                                        <div className="inline-flex items-center text-xs">{'>'}</div>
                                        <div className="flex-1" />
                                        <div className="inline-flex items-center text-xs">{'<'}</div>
                                    </motion.div>
                                )
                            }
                        </li>
                    );
                })}
            </ul>

            {/* External links dropdown */}
            <div className="external-links">
                <ExternalLinksDropdown externalLinks={externalLinks} />
            </div>
        </div>
    );
}

function HeaderButton({ className = '', children, onClick, ariaLabel }) {
    return (
        <button
            onClick={onClick}
            className={`p-0 cursor-pointer hover:animate-pulse ${className}`}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
}

export function HeaderIcons({ className }) {
    return (
        <div className={`flex gap-4 *:text-neutral-200 *:size-[34px] ${className}`} aria-hidden="true">
            <Icon.OldPC />
            <Icon.DPad />
            <Icon.Heathcliff />
        </div>
    );
}
function ExternalLinksDropdown({ externalLinks = [] }) {
    return (
        <DropdownButton
            align="end"
            ButtonContent={() => <span className="px-2 cursor-pointer">more</span>}
            dropdownContentClassName="bg-neutral-700 shadow-black shadow-md rounded-md overflow-hidden font-[Workbench] text-white"
            dropdownWidth={200}
        >
            {externalLinks.map((el, i) => (
                <>
                    <DropdownMenuItem
                        key={i}
                        asChild
                        className="font-[MisterPixel] external-link-container p-2 hover:bg-neutral-800 cursor-pointer transition-colors duration-700"
                    >
                        <AppLink
                            href={el.href}
                            decoration={false}
                            animate={false}
                            className="w-full"
                        >
                            <div className="external-link-content flex w-full gap-2 items-center">
                                <div className="text flex-1 text-end">{el.text}</div>
                                <el.icon />
                            </div>
                        </AppLink>
                    </DropdownMenuItem>
                    <Separator className="bg-neutral-600 last-of-type:hidden" />
                </>

            ))}
        </DropdownButton>
    );
}

