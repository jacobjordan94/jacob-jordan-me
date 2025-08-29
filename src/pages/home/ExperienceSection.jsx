import { useContext } from "react";
import Section from "../../components/Section";
import { GlobalContext } from "../../App";
import JobWithDescription from "../../components/jobs/JobWithDescription";
import SeeMoreButton from "../../components/SeeMoreButton";

export default function Experience({}) {
    const { experience } = useContext(GlobalContext);

    return (
        <Section title="experience" link="/experience">
            <div className="experience">
                <JobsContainer jobs={experience} />
                <SeeMoreButton to="experience" className="mt-8" />
            </div>
        </Section>
    );
}

function JobsContainer({ jobs }) {
    return (
        <div className="jobs-container flex flex-col flex-wrap @2xl:flex-row @2xl:*:flex-1/2 "
        >
            <JobWithDescription className="" job={jobs[0]} />
            <JobWithDescription className="mt-5" job={jobs[1]} />
            <div className="hidden @2xl:contents @2xl:*:flex-1/2">
                <JobWithDescription className="mt-5" job={jobs[2]} />
                <JobWithDescription className="mt-5" job={jobs[3]} />
            </div>
        </div>
    );
}
