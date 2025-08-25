import { Link } from "react-router"

export default function AppLink({ href, to, className = '', children, animate = true, decoration = true }) {
    return (
        <div className={`inline ${decoration ? 'hover:border-b-2' : ''} ${animate ? 'hover:animate-pulse' : ''}`}>
        {
            href ?  <AppAnchor href={href} className={className} >{ children }</AppAnchor> :
                    <AppRouterLink to={to} className={className} >{ children }</AppRouterLink>
        }
        </div>
    );
}

const AppAnchor = ({ href, className, children }) => <a target="_blank" rel="noopener noreferrer" className={className} href={href}>{ children }</a>;
const AppRouterLink = ({ to, className, children }) => <Link className={className} to={to}>{ children }</Link>
