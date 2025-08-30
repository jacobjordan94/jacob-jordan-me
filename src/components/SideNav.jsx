import { useLocation } from "react-router";
import AppLink from "./AppLink";
import { useEffect } from "react";
import HomeIcon from "./icons/HomeIcon";
import InfoIcon from "./icons/InfoIcon";
import SkillsIcon from "./icons/SkillsIcon";
import PaintingIcon from "./icons/PaintingIcon";
import ExperienceIcon from "./icons/ExperienceIcon";

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
                <div className="px-4">
                    <div className="nav-header flex justify-end pt-2">
                        <button className="cursor-pointer" onClick={() => setSideNavOpen(false)}>X</button>
                    </div>
                    <NavBody items={navItems} currentPath={loc.pathname} />
                </div>
            </div>
            <div className="empty-space flex-grow" onClick={() => setSideNavOpen(false)}></div>
        </div>
    );
}

function NavBody({ items, currentPath }) {
    return (
        <div className="nav-body flex flex-col gap-2">
        {
            items.map((item, i) => <NavItem key={'nav-' + i} to={item.to} href={item.href} Icon={item.icon} currentPath={currentPath}>{ item.text }</NavItem>)
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