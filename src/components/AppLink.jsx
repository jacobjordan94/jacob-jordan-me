import { Link } from "react-router"

export default function AppLink({ href, to, className = '', children }) {
    const sharedClass = '';
    return (
        <div className="inline hover:border-b-2 hover:animate-pulse">
        {
            href ?  <AppAnchor href={href} className={sharedClass + ' ' + className} >{ children }</AppAnchor> :
                    <AppRouterLink to={to} className={sharedClass + ' ' + className} >{ children }</AppRouterLink>
        }
        </div>
    );
}

const AppAnchor = ({ href, className, children }) => <a target="_blank" rel="noopener noreferrer" className={className} href={href}>{ children }</a>;
const AppRouterLink = ({ to, className, children }) => <Link className={className} to={to}>{ children }</Link>
