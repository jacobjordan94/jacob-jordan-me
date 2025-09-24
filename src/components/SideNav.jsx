import { useLocation } from "react-router";
import AppLink from "./AppLink";
import { useEffect } from "react";
import HomeIcon from "./icons/HomeIcon";
import InfoIcon from "./icons/InfoIcon";
import SkillsIcon from "./icons/SkillsIcon";
import PaintingIcon from "./icons/PaintingIcon";
import ExperienceIcon from "./icons/ExperienceIcon";
import GithubIcon from './icons/GithubIcon';
import SourceCodeMagnifyingGlassIcon from './icons/SourceCodeMagnifyingGlassIcon';
import { HeaderIcons } from "./Header";
import ResumeIcon from "./icons/ResumeIcon";

export default function SideNav({ open = false, setSideNavOpen }) {
    const loc = useLocation();

    useEffect(() => {
        setSideNavOpen(false);
    }, [loc]);

    const navItems = [
        { to: '', icon: () => <HomeIcon />, text: 'home' },
        { to: 'experience', icon: () => <ExperienceIcon />, text: 'experience' },
        { to: 'projects', icon: () => <PaintingIcon />, text: 'projects' },
        { to: 'skills', icon: () => <SkillsIcon />, text: 'skills' },
        { to: 'about', icon: () => <InfoIcon />, text: 'about this website' },
        { to: 'resume', icon: () => <ResumeIcon />, text: 'resume' },
    ];

    return (
        <nav
            data-open={open}
            aria-label="Mobile navigation"
            className={
                "side-nav h-full w-full fixed z-10 top-0 left-0 flex transition-[background-color] overflow-x-hidden " +
                (open ? 'bg-[rgba(0,0,0,0.5)]' : 'bg-transparent pointer-events-none')
            }
        >
            <aside
                className={
                    "inner-menu w-0 bg-neutral-800 overflow-x-hidden transition-[width] " +
                    (open ? 'w-[256px]' : '')
                }
                aria-label="Sidebar"
            >
                <div className="p-4 h-full flex flex-col">
                    {/* HEADER */}
                    <header className="nav-header flex justify-end pe-2">
                        <button
                            className="cursor-pointer text-4xl"
                            onClick={() => setSideNavOpen(false)}
                            aria-label="Close navigation"
                        >
                            &times;
                        </button>
                    </header>

                    {/* MAIN NAV CONTENT */}
                    <section className="navbody flex flex-col justify-between flex-grow">
                        {/* Primary navigation */}
                        <section className="top-navbody" aria-labelledby="primary-nav-heading">
                            <h2 id="primary-nav-heading" className="sr-only">Main navigation</h2>
                            <NavList items={navItems} currentPath={loc.pathname} />
                        </section>

                        {/* Footer / External Links */}
                        <footer className="bottom-navbody">
                            <HeaderIcons className={'pointer-coarse:visible justify-between'} />

                            <div className="bottom-navbody-text text-center text-md my-4 flex items-center opacity-50">
                                <hr className="flex-grow" />
                                <span className="mx-4 tracking-widest">more</span>
                                <hr className="flex-grow" />
                            </div>

                            <section className="external-links" aria-labelledby="external-links-heading">
                                <h2 id="external-links-heading" className="sr-only">External links</h2>
                                <NavList currentPath={loc.pathname}>
                                    <NavItem
                                        href="https://github.com/jacobjordan94/jacob-jordan-me"
                                        Icon={() => <SourceCodeMagnifyingGlassIcon />}
                                    >
                                        source code
                                    </NavItem>
                                    <NavItem
                                        href="https://github.com/jacobjordan94"
                                        Icon={() => <GithubIcon />}
                                    >
                                        github
                                    </NavItem>
                                </NavList>
                            </section>
                        </footer>
                    </section>
                </div>
            </aside>

            {/* Backdrop Click Handler */}
            <div className="empty-space flex-grow" onClick={() => setSideNavOpen(false)}></div>
        </nav>
    );
}

function NavList({ items, currentPath, children }) {
    return (
        <ul className="nav-body flex flex-col gap-2">
            {children ||
                items.map((item, i) => (
                    <li key={'nav-' + i}>
                        <NavItem
                            to={item.to}
                            href={item.href}
                            Icon={item.icon}
                            currentPath={currentPath}
                        >
                            {item.text}
                        </NavItem>
                    </li>
                ))}
        </ul>
    );
}

function NavItem({ to, href, Icon, children, currentPath }) {
    const isActive = ('/' + to) === currentPath;
    return (
        <div
            data-active={isActive}
            className="nav-item whitespace-nowrap data-[active=true]:opacity-50 data-[active=true]:pointer-events-none"
        >
            <AppLink to={to} href={href} className="flex items-center">
                <span className="icon me-3" aria-hidden="true">
                    <Icon />
                </span>
                <span className="text text-xl">{children}</span>
            </AppLink>
        </div>
    );
}
