import { useContext } from "react";
import { GlobalContext } from "../../App";
import Job from "./Job";

export default function ExperiencePage({}) {
    const { experience } = useContext(GlobalContext);
    return (
        <div className="experience-page flex flex-col gap-6">
        {
            experience.map((job, i) => <Job key={i} job={job} />)
        }
        </div>
    );
}
