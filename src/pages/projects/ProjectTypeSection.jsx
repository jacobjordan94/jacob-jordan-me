import AppLink from "../../components/AppLink";
import ProjectCard from "../../components/projects/ProjectCard";

export default function ProjectTypeSection({ type, projects }) {
    return (
        <div className="project-type-section">
            <div className="title-row text-3xl mb-6 flex items-center">
                <div className="title">{ type }</div>
                <div className="divider flex-grow opacity-25 ps-4"><hr /></div>
            </div>
            <div className="project-type-section-body flex flex-col gap-4 @2xl:grid @2xl:grid-cols-3">
            {
                projects.map((project, i) =>
                    project.url ? 
                    <AppLink key={i} className={'contents'} href={project.url}>
                        <ProjectCard project={project} />
                    </AppLink> :
                    <ProjectCard key={i} project={project} />
            )}
            </div>
        </div>
    );
}