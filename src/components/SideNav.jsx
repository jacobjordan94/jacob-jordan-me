import { useLocation } from "react-router";
import AppLink from "./AppLink";
import { useEffect } from "react";
import HomeIcon from "./icons/HomeIcon";
import InfoIcon from "./icons/InfoIcon";
import SkillsIcon from "./icons/SkillsIcon";
import PaintingIcon from "./icons/PaintingIcon";
import ExperienceIcon from "./icons/ExperienceIcon";
import GithubIcon from './icons/GithubIcon';
import SourceCddeMagnifyingGlassIcon from './icons/SourceCodeMagnifyingGlassIcon';
import { HeaderIcons } from "./Header";

export default function SideNav({ open = false, setSideNavOpen }) {

    const loc = useLocation();
    useEffect(() => setSideNavOpen(false), [ loc ])
    
    const navItems = [
        {
            to: '',
            icon: () => <HomeIcon />,
            text: 'home',
        },
        {
            to: 'experience',
            icon: () => <ExperienceIcon />,
            text: 'experience',
        },
        {
            to: 'projects',
            icon: () => <PaintingIcon />,
            text: 'projects',
        },
        {
            to: 'skills',
            icon: () => <SkillsIcon />,
            text: 'skills'
        },
        {
            to: 'about',
            icon: () => <InfoIcon />,
            text: 'about this website'
        }
    ];
    
    return (
        <div className={"side-nav h-full w-full fixed z-10 top-0 left-0 flex bg-[rgba(0,0,0,0.5)] transition-[background-color] overflow-x-hidden " + (!open ? 'bg-transparent pointer-events-none' : '')}>
            <div className={"inner-menu w-0 bg-neutral-800 overflow-x-hidden transition-[width] " + (open ? 'w-[256px]' : '')}>
                <div className="p-4 h-full flex flex-col">
                    <div className="nav-header flex justify-end pe-2">                    
                        <button className="float-right cursor-pointer text-4xl" onClick={() => setSideNavOpen(false)}>&times;</button>
                    </div>
                    <div className="navbody flex flex-col justify-between flex-grow">
                        <div className="top-navbody">
                            <NavBody items={navItems} currentPath={loc.pathname} />
                        </div>
                        <div className="bottom-navbody">
                            <HeaderIcons className={'pointer-coarse:visible justify-between'}/>
                            <div className="bottom-navbody-text text-center text-md my-4 flex items-center opacity-50">
                                <hr className="flex-grow" />
                                <span className="mx-4 tracking-widest">more</span>
                                <hr className="flex-grow"/>
                            </div>
                            <div className="external-links">
                                <NavBody currentPath={loc.pathname}>
                                    <NavItem href="https://github.com/jacobjordan94/jacob-jordan-me" Icon={() => <SourceCddeMagnifyingGlassIcon />}>source code</NavItem>
                                    <NavItem href="https://github.com/jacobjordan94" Icon={() => <GithubIcon />}>github</NavItem>
                                </NavBody>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="empty-space flex-grow" onClick={() => setSideNavOpen(false)}></div>
        </div>
    );
}

function NavBody({ items, currentPath, children }) {
    return (
        <div className="nav-body flex flex-col gap-2">
        {
            children || items.map((item, i) => <NavItem key={'nav-' + i} to={item.to} href={item.href} Icon={item.icon} currentPath={currentPath}>{ item.text }</NavItem>)
        }
        </div>
    );
}

function NavItem({ to, href, Icon, children, currentPath }) {
    return (
        <div data-active={('/' + to) === currentPath} className="nav-item whitespace-nowrap data-[active=true]:opacity-50 data-[active=true]:pointer-events-none">
            <AppLink to={to} href={href} className="flex">
                <div className="icon me-3">
                    <Icon />
                </div>
                <div className="text text-xl">
                    { children }
                </div>
            </AppLink>
        </div>
    );
}