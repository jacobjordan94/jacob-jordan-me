import Icon from "../Icon";
import UnderConstructionBanner from "../UnderConstructionBanner";

export default function ProjectCard({ project, type, className = '' }) {
    return (
        <div
            data-wip={project.wip}
            className={
                "projects-card group/projectCard relative rounded-xl overflow-hidden bg-neutral-900 transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl shadow-md " +
                className
            }
        >
            <div className="group-data-[wip=true]/projectCard:relative">
                <div className="image overflow-hidden aspect-[16/9] border-b border-white/10">
                    <img
                        src={project.image || 'https://placehold.co/600x400?text=No+Image'}
                        alt={`project image for ${project.title}`}
                        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover/projectCard:scale-105"
                    />
                </div>

                <UnderConstructionBanner className="hidden group-data-[wip=true]/projectCard:block absolute bottom-2 left-0 w-full z-10" />
            </div>

            <div className="information px-4 py-3 space-y-1">
                <div className="title-row flex justify-between items-center">
                    <div className="title font-semibold text-white text-lg sm:text-xl">{project.title}</div>
                    {project.source && <SourceCodeButton href={project.source} />}
                </div>
                <div className="description text-sm text-neutral-400 font-[MisterPixel,monospace]">{project.description}</div>
            </div>

            {type && (
                <div className="badge absolute top-3 right-3 bg-neutral-900 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-sm uppercase tracking-wide">
                    {type}
                </div>
            )}
        </div>
    );
}

function SourceCodeButton({ href }) {
    const onClick = (e) => {
        e.preventDefault();
        window.open(href, '_blank', 'noopener noreferrer');
    };

    return (
        <button
            onClick={onClick}
            className="hover:scale-125 transition-transform duration-150"
            aria-label="View source code"
        >
            <Icon.Github size={20} className="text-white/70 hover:text-white" />
        </button>
    );
}
