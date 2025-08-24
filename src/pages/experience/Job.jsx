import WorldWideWebIcon from "../../components/icons/WorldWideWebIcon";

export default function Job({ job }) {
    return (
        <div className="job">
            <div className="name text-2xl inline hover:border-b-2">
                <a className="inline-flex items-center gap-3" href={job.href}>
                    <WorldWideWebIcon size="20" />
                    <span className="uppercase flex">{ job.name }</span>
                </a>
            </div>
            <div className="ms-8">
                <div className="position text-neutral-400 text-xl">
                    <span>{ job.position }</span>
                </div>
                <div className="location-dates">
                    <span>{ job.location }</span>
                    <span className="mx-2 text-xs">&bull;</span>
                    <span>{ job.dates[0] } &mdash; { job.dates[1] }</span>
                </div>
                <div className="description">
                    { job.description }
                </div>
            </div>
        </div>
    );
}