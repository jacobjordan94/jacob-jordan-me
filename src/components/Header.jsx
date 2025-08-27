import DotsMenuIcon from "./icons/DotsMenuIcon";
import MenuIcon from './icons/MenuIcon';

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
        <div className="title-container uppercase workbench-font text-3xl text-center">
            { children }
        </div>
    );
}

function Links() {
    return (
        <div className="links-container">
            <HeaderButton className="float-right">
                <DotsMenuIcon size={30} />
            </HeaderButton>
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
