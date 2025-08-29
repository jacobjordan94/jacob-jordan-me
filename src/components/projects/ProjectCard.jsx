export default function ProjectCard({ project, type, className = '' }) {
    return (
        <div className={"projects-card relative group shadow-black rounded-md overflow-hidden transition-[transform_shadow] hover:transform-[scale(1.025)] shadow-md hover:shadow-lg " + className}>
            <div className={`image overflow-hidden h-[256px]`}>
                <img 
                    src={ project.image === '' ? 'https://placehold.co/600x400' : project.image } 
                    alt={`project image for ${project.title}`} 
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="information p-2">
                <div className="title text-xl">{ project.title }</div>
                <div className="description text-neutral-400">{ project.description }</div>
            </div>
            {
                type &&
                <div className="badge absolute top-0 text-lg shadow-black shadow-sm right-4 bg-neutral-700 p-1 pt-0 rounded-b-sm">{ type }</div>
            }
        </div>
    );
}
