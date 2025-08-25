import JobBase from "../../components/jobs/JobBase";

export default function Job({ job, children }) {
    return (
        <div className="job-full @container">
            <div className="flex flex-col @5xl:flex-row">
                <div className="job-base-wrap">
                    <JobBase className="" job={job}/>
                </div>
                <div className="ms-8 description @5xl:m-0 @5xl:ps-5 @5xl:flex @5xl:items-end">
                    <span className="text-neutral-400">
                        { job.description }
                    </span>
                </div>
            </div>
            <hr className="my-2 opacity-50" />
            <div className="full-description indent-8 mt-2">
                { job.detailedDescription }
            </div>
            <div className="job-body">
                { children }
            </div>
        </div>
        
    );
}
