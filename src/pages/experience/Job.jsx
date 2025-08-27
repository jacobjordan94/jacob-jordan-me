import JobBase from "../../components/jobs/JobBase";
import List from "../../components/List";

export default function Job({ job, children }) {
    return (
        <div className="job-full @container">
            <div className="flex flex-col @5xl:flex-row">
                <div className="job-base-wrap">
                    <JobBase className="" job={job}/>
                </div>
                <div className="ms-8 my-2 description @5xl:m-0 @5xl:ps-5 @5xl:flex @5xl:items-end">
                    <span className="text-neutral-400 text-md">
                        { job.description }
                    </span>
                </div>
            </div>
            <hr className="my-2 opacity-50" />
            {
                job.detailedDescription &&
                <div className="full-description indent-8 mt-2">
                    { job.detailedDescription }
                </div>
            }
            {
                job.bullets &&
                <div className="bullet-points">
                    <List cols={3} items={job.bullets} />
                </div>
            }
            <div className="job-body">
                { children }
            </div>
        </div>
        
    );
}
