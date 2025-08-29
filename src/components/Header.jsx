import DotsMenuIcon from "./icons/DotsMenuIcon";
import MenuIcon from './icons/MenuIcon';
import DropdownButton from "./DropdownButton";
import SourceCodeMagnifyingGlassIcon from "./icons/SourceCodeMagnifyingGlassIcon";
import AppLink from "./AppLink";
import GithubIcon from "./icons/GithubIcon";

export function Header({ setSideNavOpen }) {
    return (
        <header>
            <div className="inner-content flex *:flex-auto p-4 shadow-[rgba(0,0,0,0.5)] shadow-xl items-center">
                <Nav setSideNavOpen={setSideNavOpen} />
                <Title name="jacob-jordan.me">jacob-jordan.me</Title>
                <Links />
            </div>
        </header>
    );
}

function Nav({ setSideNavOpen }) {
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
        <div className="title-container uppercase text-3xl text-center">
            { children }
        </div>
    );
}

function Links() {
    const links = [
        { href: 'https://github.com/jacobjordan94/jacob-jordan-me', text: 'source code', icon: () => <SourceCodeMagnifyingGlassIcon /> },
        { href: 'https://github.com/jacobjordan94/', text: 'github', icon: () => <GithubIcon />},
    ];
    return (
        <div className="links-container">
            <DropdownButton className="float-right" dropdownContentClassName={'right-0'}>
                <div className="bg-neutral-800 p-2 shadow-black shadow-lg rounded-md flex flex-col gap-2">
                {
                    links.map((link, i) => (
                        <div key={i} className="link-wrap">
                            <AppLink href={link.href} className="float-right">
                                <div className="link flex justify-end gap-2">
                                    <div className="text text-nowrap">
                                        { link.text }
                                    </div>
                                    <div className="icon">
                                        <link.icon />
                                    </div>
                                </div>
                            </AppLink>
                        </div>
                    ))
                }
                </div>
            </DropdownButton>
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


