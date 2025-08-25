import JobBase from "./JobBase";

export default function JobWithDescription({ job, className = '' }) {
    return (
        <JobBase job={job} className={'flex flex-col @5xl:flex-row @5xl:flex-1/2 ' + className}>
            <div className="description text-sm ms-8 @5xl:ms-0 mt-2 @5xl:mt-0 text-neutral-500 @5xl:ps-2 @5xl:pe-4">
                { job.description }
            </div>
        </JobBase>
    );
}
