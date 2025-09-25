import clsx from "clsx";
import AppLink from "../../components/AppLink";
import ProjectCard from "../../components/projects/ProjectCard";

export default function ProjectTypeSection({ type, projects, responsiveClass }) {
    return (
        <div className="project-type-section">
            <div className="title-row sticky top-0 z-30">
                <div className={clsx(
                        "inner-title-container py-2 px-6 flex items-grow items-center text-3xl w-full ", 
                        responsiveClass, 
                        '@6xl:max-w-3/4'
                    )}>
                    <div className="title">{ type }</div>
                    <div className="divider flex-grow opacity-25 ps-4"><hr /></div>
                </div>
            </div>
            <div className={clsx(
                    "project-type-section-body py-8 px-6 flex flex-col gap-4 @lg:grid @lg:grid-cols-2 @6xl:grid-cols-3",
                    responsiveClass,
                )
            }>
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