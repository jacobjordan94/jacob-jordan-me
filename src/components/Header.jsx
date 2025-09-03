import MenuIcon from './icons/MenuIcon';
import DropdownButton from "./DropdownButton";
import SourceCodeMagnifyingGlassIcon from "./icons/SourceCodeMagnifyingGlassIcon";
import AppLink from "./AppLink";
import GithubIcon from "./icons/GithubIcon";
import { useLocation } from "react-router";
import OldPCIcon from './icons/OldPCIcon';
import DPadIcon from './icons/DPadIcon';
import HeathcliffIcon from './icons/HeathcliffIcon';

export function Header({ setSideNavOpen }) {
    return (
        <header className='z-10'>
            <div className="inner-content p-4 shadow-[rgba(0,0,0,0.5)] shadow-xl pointer-fine:pb-2">
                <div className="mobile-nav-container inline float-start pointer-fine:hidden">
                    <MobileNav setSideNavOpen={setSideNavOpen} />
                </div>
                <div className="flex justify-between not-pointer-fine:contents">
                    <Title name="jacob-jordan.me">jacob-jordan.me</Title>
                    <HeaderIcons className="pointer-coarse:hidden" />
                </div>
                <div className="desktop-nav-container pointer-coarse:hidden mt-4">
                    <DesktopNav />
                </div>
            </div>
        </header>
    );
}

function MobileNav({ setSideNavOpen }) {
    return (
        <div className="nav-button-container">
            <HeaderButton onClick={() => setSideNavOpen(true)}>
                <MenuIcon size={30} />
            </HeaderButton>
        </div>
    );
}

function Title({children}) {
    return (
        <div className="title-container uppercase text-3xl pointer-coarse:text-center">
            { children }
        </div>
    );
}

function DesktopNav() {
    const loc = useLocation();
    const links = [
        { to: '', text: 'home' },
        { to: 'experience', text: 'experience' },
        { to: 'projects', text: 'projects' },
        { to: 'skills', text: 'skills' },
        { to: 'about', text: 'about_this_website' },

    ];
    const externalLinks = [
        {
            href: 'https://github.com/jacobjordan94',
            icon: () => <GithubIcon />,
            text: 'github',
        },
        {
            href: 'https://github.com/jacobjordan94/jacob-jordan-me',
            icon: () => <SourceCodeMagnifyingGlassIcon />,
            text: 'source'
        }
    ];
    return (
        <div className="desktop-nav flex justify-between">
            <div className="nav-links flex gap-2">
            {
                links.map((link, i) => 
                    <div key={i} data-active={('/' + link.to) === loc.pathname} className="group data-[active=false]:opacity-40 data-[active=false]:hover:opacity-100">
                        <AppLink decoration={false} to={link.to}>
                            <div className="desktop-nav-link-inner-content flex items-center gap-1.5 group-data-[active=false]:text-transparent group-data-[active=false]:hover:text-white duration-300 transition-colors">
                                <span className="text-xs mt-1">{ '>' }</span>
                                <span className="text-white">{link.text}</span>
                                <span className="text-xs mt-1">{ '<' }</span>
                            </div>
                        </AppLink>
                    </div>
            )}
            </div>
            <div className="external-links">
                <DropdownButton ButtonContent={() => <span className="ps-4 hover:ps-12">more</span>} dropdownContentClassName={'right-[10px]'}>
                    <div className="external-links-dropdown bg-neutral-700 shadow-black shadow-md rounded-md overflow-hidden">
                    {
                        externalLinks.map((el, i) =>
                            <div key={i} className="external-link-container duration-700 transition-colors border-b-neutral-500 border-b-1 last-of-type:border-0 p-2 hover:bg-neutral-800 cursor-pointer">
                                <AppLink href={el.href} decoration={false} animate={false} className='w-full'>
                                    <div className="external-link-content flex w-full gap-2">
                                        <div className="text flex-1 text-end">
                                            {el.text}
                                        </div>
                                        <el.icon className />
                                    </div>
                                </AppLink>
                            </div>
                    )}
                    </div>
                </DropdownButton>
            </div>
        </div>
    );
}

function HeaderButton({ className = '', children, onClick }) {
    return (
        <button onClick={onClick} className={"p-0 cursor-pointer hover:animate-pulse " + className}>
            { children }
        </button>
    );
}

export function HeaderIcons({ className }) {
    return (
        <span className={'flex gap-4 *:text-neutral-200 *:size-[34px] ' + className}>
            <OldPCIcon/>
            <DPadIcon />
            <HeathcliffIcon />
        </span>
    );
}


