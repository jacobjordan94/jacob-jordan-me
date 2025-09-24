import Icon from "../Icon";
import UnderConstructionBanner from "../UnderConstructionBanner";

export default function ProjectCard({ project, type, className = '' }) {
    return (
        <div data-wip={project.wip} className={"projects-card group/projectCard relative shadow-black rounded-md overflow-hidden transition-[transform_shadow] hover:transform-[scale(1.025)] shadow-md hover:shadow-lg " + className}>
            <div className="group-data-[wip=true]/projectCard:relative">    
                <div className={`image overflow-hidden h-[256px] border-b-1 border-[rgba(255,255,255,0.25)]`}>
                    <img 
                        src={ project.image === '' ? 'https://placehold.co/600x400' : project.image } 
                        alt={`project image for ${project.title}`} 
                        className="w-full h-full transition-[width_height] object-cover object-center"
                        />
                </div>
                <UnderConstructionBanner className="hidden group-data-[wip=true]/projectCard:block absolute bottom-2 left-0 w-full" />
            </div>
            <div className="information px-4 py-3">
                <div className="title-row flex justify-between">
                    <div className="title text-xl">{ project.title }</div>
                    { project.source && <SourceCodeButton href={project.source} /> }
                </div>
                <div className="description text-neutral-400">{ project.description }</div>
            </div>
            {
                type &&
                <div className="badge absolute top-0 text-lg shadow-black shadow-sm right-4 bg-neutral-700 py-1 px-2 pt-0 rounded-b-sm">{ type }</div>
            }
        </div>
    );
}

function SourceCodeButton({ href }) {

    function onClick(e) {
        e.preventDefault();
        window.open(href, '_blank', 'noopener noreferrer');
    }

    return (
        <button className="cursor-pointer hover:scale-125" href={href} onClick={onClick}>
            <Icon.Github />
        </button>
    );
}