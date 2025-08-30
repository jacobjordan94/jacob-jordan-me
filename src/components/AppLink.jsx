import { Link } from "react-router"

export default function AppLink({ href, to, className = '', children, animate = true, decoration = true }) {
    return (
        <div className={`inline border-b-2 border-transparent ${decoration ? 'hover:border-white' : ''} ${animate ? 'hover:animate-pulse' : ''}`}>
        {
            href ?  <AppAnchor href={href} className={'inline-flex ' + className} >{ children }</AppAnchor> :
                    <AppRouterLink to={to} className={'inline-flex ' + className} >{ children }</AppRouterLink>
        }
        </div>
    );
}

export const AppAnchor = ({ href, className, children }) => <a target="_blank" rel="noopener noreferrer" className={className} href={href}>{ children }</a>;
export const AppRouterLink = ({ to, className, children }) => <Link className={className} to={to}>{ children }</Link>
