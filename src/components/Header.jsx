export function Header() {
    return (
        <header>
            <div className="inner-content flex *:flex-auto p-4 shadow-[rgba(0,0,0,0.5)] shadow-xl items-center">
                <Nav />
                <Title name="jacob-jordan.me">jacob-jordan.me</Title>
                <Links />
            </div>
        </header>
    );
}

function Nav() {
    return (
        <div className="nav-button-container">
            <div className="nav size-6 bg-white inline-flex"></div>
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
            <div className="links float-right">
                <div className="github-link size-6 bg-white inline-flex text-black items-center justify-center">G</div>
            </div>
        </div>
    );
}
