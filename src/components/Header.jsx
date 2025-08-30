import DotsMenuIcon from "./icons/DotsMenuIcon";
import MenuIcon from './icons/MenuIcon';
import DropdownButton from "./DropdownButton";
import SourceCodeMagnifyingGlassIcon from "./icons/SourceCodeMagnifyingGlassIcon";
import AppLink from "./AppLink";
import GithubIcon from "./icons/GithubIcon";
import { useLocation } from "react-router";

export function Header({ setSideNavOpen }) {
    return (
        <header>
            <div className="inner-content p-4 shadow-[rgba(0,0,0,0.5)] shadow-xl pointer-fine:pb-2">
                <div className="mobile-nav-container inline float-start pointer-fine:hidden">
                    <MobileNav setSideNavOpen={setSideNavOpen} />
                </div>
                <Title name="jacob-jordan.me">jacob-jordan.me</Title>
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
        <div className="title-container uppercase text-3xl pointer-coarse:text-center pointer-fine:ps-2">
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
    return (
        <div className="desktop-nav flex gap-4">
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
    );
}

function HeaderButton({ className = '', children, onClick }) {
    return (
        <button onClick={onClick} className={"p-0 cursor-pointer hover:animate-pulse " + className}>
            { children }
        </button>
    );
}


