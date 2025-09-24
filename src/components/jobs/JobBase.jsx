import AppLink from "../AppLink";
import Icon from "../Icon";

export default function JobBase({ job, children, className = '' }) {
    return (
        <div className={"job flex flex-col " + className}>
            <div className="information">
                <AppLink href={job.href} className="inline-flex text-2xl gap-2 items-center">
                    <Icon.WWW size="20" />
                    <span className="uppercase flex">{ job.name }</span>
                </AppLink>
                <div className="ms-8 *:before:content-['>'] *:before:me-2 *:before:text-xs *:before:h-full">
                    <div className="position text-neutral-400 text-xl">
                        <span>{ job.position }</span>
                    </div>
                    <div className="location-dates">
                        <span>{ job.location }</span>
                        <span className="mx-2 text-xs">&bull;</span>
                        <span>{ job.dates[0] } &mdash; { job.dates[1] }</span>
                    </div>
                </div>
            </div>
            <div className="more">
                { children }
            </div>
        </div>
    );
}