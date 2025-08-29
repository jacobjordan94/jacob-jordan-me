import AppLink from "./AppLink";

export default function SeeMoreButton({ to, className = '' }) {
    return (
        <div className={"see-more text-center " + className}>
            <AppLink to={to}>see more</AppLink>
        </div>
    );
}
