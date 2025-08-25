import { useContext } from "react";
import Section from "../../components/Section";
import { GlobalContext } from "../../App";
import { useNavigate } from "react-router";
import JobWithDescription from "../../components/jobs/JobWithDescription";

export default function Experience({}) {
    const { experience } = useContext(GlobalContext);
    const navigate = useNavigate();

    return (
        <Section title="experience" link="/experience">
            <div className="experience">
                <div className="jobs-container flex flex-col flex-wrap gap-4 @5xl:flex-row @5xl:gap-0">
                    <JobWithDescription job={experience[0]} />
                    <JobWithDescription job={experience[1]} />
                    <JobWithDescription className="hidden @5xl:flex @5xl:mt-4" job={experience[2]} />
                    <JobWithDescription className="hidden @5xl:flex @5xl:mt-4" job={experience[3]} />
                </div>
                <div className="see-more text-center mt-8">
                    <a className="cursor-pointer hover:underline" onClick={() => navigate('/experience')}>see more</a>
                </div>
            </div>
        </Section>
    );
}
