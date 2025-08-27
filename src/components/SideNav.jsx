import { useLocation } from "react-router";
import AppLink from "./AppLink";
import WorldWideWebIcon from "./icons/WorldWideWebIcon";
import { useEffect } from "react";

export default function SideNav({ open = false, setSideNavOpen }) {

    const loc = useLocation();
    useEffect(() => setSideNavOpen(false), [ loc ])
    
    const navItems = [
        {
            to: 'experience',
            icon: () => <WorldWideWebIcon />,
            text: 'experience',
        },
        {
            to: 'projects',
            icon: () => <WorldWideWebIcon />,
            text: 'projects',
        },
    ];
    
    return (
        <div className={"side-nav h-full w-full fixed z-10 top-0 left-0 flex bg-[rgba(0,0,0,0.5)] transition-[background-color] " + (!open ? 'bg-transparent pointer-events-none' : '')}>
            <div className={"inner-menu w-0 bg-neutral-800 overflow-x-hidden transition-[width] " + (open ? 'w-[256px]' : '')}>
                <div className="nav-header flex justify-end">
                    <button className="" onClick={() => setSideNavOpen(false)}>X</button>
                </div>
                <NavBody items={navItems} />
            </div>
            <div className="empty-space flex-grow" onClick={() => setSideNavOpen(false)}></div>
        </div>
    );
}

function NavBody({ items }) {
    return (
        <div className="nav-body">
        {
            items.map((item, i) => <NavItem key={'nav-' + i} to={item.to} href={item.href} Icon={item.icon}>{ item.text }</NavItem>)
        }
        </div>
    );
}

function NavItem({ to, href, Icon, children }) {
    return (
        <div className="nav-item">
            <AppLink to={to} href={href} className="flex">
                <div className="icon">
                    <Icon />
                </div>
                <div className="text">
                    { children }
                </div>
            </AppLink>
        </div>
    );
}