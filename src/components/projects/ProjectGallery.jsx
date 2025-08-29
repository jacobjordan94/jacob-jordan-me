import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../App";
import ProjectCard from "./ProjectCard";

export default function ProjectGallery({}) {
    const { projects } = useContext(GlobalContext);
    const getAllProjects = () => Object.values(projects).flatMap(val => [...val]);
    const [ currentProjectType, setCurrentProjectType ] = useState('all');
    const [ visibleProjects, setVisibleProjects ] = useState(getAllProjects());
    const projectTypes = Object.keys(projects);
    projectTypes.unshift('all');


    function setAllProjects() {
        setVisibleProjects(
            getAllProjects()
        );
    }

    useEffect(() => {
        if(currentProjectType === 'all') { setAllProjects(); return; }
        setVisibleProjects(
            projects[currentProjectType]
        );
    }, [ currentProjectType ]);

    return (
        <div className="projects-gallery">
            <div className="selector flex justify-between @2xl:justify-start @2xl:gap-4">
            {
                projectTypes.map((pt, i) => 
                    <button key={i} 
                            onClick={() => setCurrentProjectType(pt)} 
                            data-active={pt === currentProjectType}
                            className="rounded-lg cursor-pointer data-[active=false]:opacity-50 text-lg"
                    >{ pt }</button>
                )
            }
            </div>
            <hr className="bg-white mb-6 h-[1px] opacity-50" />
            <div className="project-gallery-content flex flex-col gap-8 @2xl:grid @2xl:grid-cols-2 @ @4xl:grid-cols-3 6xl:grid-cols-4">
            {
                visibleProjects.map((vp, i) => <ProjectCard key={i} project={vp} type={currentProjectType === 'all' ? vp.type : ''} className="cursor-pointer" />)
            }
            </div>
        </div>
    );
}