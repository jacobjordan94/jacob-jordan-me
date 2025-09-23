import { useContext, useMemo, useState } from "react";
import { GlobalContext } from "../../App";
import ProjectCard from "./ProjectCard";
import { AppAnchor } from "../AppLink";

export default function ProjectGallery({}) {
    const { projects } = useContext(GlobalContext);
    const [ currentProjectType, setCurrentProjectType ] = useState('all');
    const projectTypes = [...new Set(projects.map(project => project.type))]
    projectTypes.unshift('all');

    const visibleProjects = useMemo(() => 
        currentProjectType === 'all' ? [...projects] : [...projects].filter(project => project.type === currentProjectType)
        , [ currentProjectType ]
    );

    return (
        <div className="projects-gallery">
            <div className="selector flex justify-between @2xl:justify-start @2xl:gap-4">
            {
                projectTypes.map((pt, i) => 
                    <button key={i} 
                            onClick={() => setCurrentProjectType(pt)} 
                            data-active={pt === currentProjectType}
                            className="rounded-lg cursor-pointer transition-opacity data-[active=false]:opacity-50 text-lg"
                    >{ pt }</button>
                )
            }
            </div>
            <hr className="bg-white mb-6 h-[1px] opacity-50" />
            <div className="project-gallery-content flex flex-col gap-8 @2xl:grid @2xl:grid-cols-2 @ @4xl:grid-cols-3 6xl:grid-cols-4">
            {
                visibleProjects.map((vp, i) =>
                    vp.url ? <AppAnchor key={i} href={vp.url} className="contents">
                                <ProjectCard project={vp} type={currentProjectType === 'all' ? vp.type : ''} />
                            </AppAnchor> : <ProjectCard key={i} project={vp} type={currentProjectType === 'all' ? vp.type : ''} />
)}
            </div>
        </div>
    );
}