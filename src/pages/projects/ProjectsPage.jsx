import { useContext } from "react";
import { GlobalContext } from '../../App';
import ProjectTypeSection from "./ProjectTypeSection";
import Seo from "../../components/Seo";
import { useOutletContext } from "react-router";

export default function ProjectsPage({}) {
    const { projects } = useContext(GlobalContext);
    const { responsiveClass } = useOutletContext();

    const ProjectTypes = () =>
        [...new Set(projects.map(project => project.type))].map((type, i) => (
            <ProjectTypeSection
                key={i}
                type={type}
                projects={projects.filter(project => project.type === type)}
                responsiveClass={responsiveClass}
            />
        ));

    return (
        <>
            <Seo
                title='jacob-jordan.me - projects'
                description='Some projects I have either worked on.'
                pathname='/projects'
            />
            {/* Extended header */}
            <div className="h-[52px] w-full fixed left-0 bg-neutral-900 z-30" />
            <div className="flex-grow">
                <ProjectTypes />
            </div>
        </>
    );
}
