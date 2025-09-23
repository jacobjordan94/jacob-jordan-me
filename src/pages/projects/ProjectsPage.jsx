import { useContext } from "react";
import { GlobalContext } from '../../App';
import ProjectTypeSection from "./ProjectTypeSection";
import Seo from "../../components/Seo";

export default function ProjectsPage({}) {
    const { projects } = useContext(GlobalContext);
    const ProjectTypes = () => [...new Set([...projects].map(project => project.type))]
        .map((type, i) => <ProjectTypeSection key={i} type={type} projects={[...projects].filter(project => project.type === type)} />)
    return (
        <>
            <Seo
                title='jacob-jordan.me - projects'
                description='Some projects I have either worked on.'
                pathname='/projects'
            />
            <div className="projects-page flex flex-col gap-6 @6xl:py-5">
                <ProjectTypes />
            </div>
        </>
    );
}

