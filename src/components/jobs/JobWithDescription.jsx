import JobBase from "./JobBase";

export default function JobWithDescription({ job, className = '',  descriptionClass = ''}) {
    return (
        <JobBase job={job} className={`job-with-description ${className}`}>
            <div className={`description ms-8 mt-2 h-full text-neutral-500 ${descriptionClass}`}>
                { job.description }
            </div>
        </JobBase>
    );
}
