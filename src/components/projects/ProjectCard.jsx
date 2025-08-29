import AppLink from "../AppLink";
import LinkIcon from "../icons/LinkIcon";

export default function ProjectCard({ project, type, className = '', showLink = false, detailed = false }) {
    return (
        <div className={"projects-card relative group shadow-black rounded-md overflow-hidden transition-[transform_shadow] hover:transform-[scale(1.025)] shadow-md hover:shadow-lg " + className}>
            <div className={`image overflow-hidden h-[256px] border-b-1 border-[rgba(255,255,255,0.25)]`}>
                <img 
                    src={ project.image === '' ? 'https://placehold.co/600x400' : project.image } 
                    alt={`project image for ${project.title}`} 
                    className="w-full h-full transition-[width_height] object-cover group-hover:h-[125%] group-hover:w-[125%]"
                />
            </div>
            <div className="information px-4 py-3">
                <div className="title-row flex justify-between">
                    <div className="title text-xl">{ project.title }</div>
                    {
                        showLink && project.url &&
                        <AppLink href={project.url} decoration={false}>
                            <LinkIcon />
                        </AppLink>
                    }
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
