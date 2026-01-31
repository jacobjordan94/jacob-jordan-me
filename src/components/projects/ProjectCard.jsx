import Icon from "../Icon";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "../ui/card";
import UnderConstructionBanner from "../UnderConstructionBanner";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function ProjectCard({ project, type, className = '' }) {
    return (
        <Card
            data-wip={project.wip}
            className={cn(
                "projects-card group/projectCard relative overflow-hidden bg-neutral-900 transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl shadow-md",
                "rounded-xl",
                className
            )}
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

            <CardHeader className="px-4 pt-3 pb-1">
                <div className="flex justify-between items-center">
                    <motion.div
                        layoutId={`title-${project.title}`}
                    >
                        <CardTitle className="text-white text-lg sm:text-xl font-semibold tracking-normal">
                            {project.title}
                        </CardTitle>
                    </motion.div>
                    {project.source && <SourceCodeButton href={project.source} />}
                </div>
            </CardHeader>

            <CardContent className="px-4 pb-4">
                <motion.div
                    layoutId={`description-${project.title}`}
                >
                    <CardDescription className="text-sm text-neutral-400 font-[MisterPixel,monospace]">
                        {project.description}
                    </CardDescription>
                </motion.div>
            </CardContent>

            {type && (
                <CardFooter className="absolute top-3 right-3 p-0">
                    <div className="badge bg-neutral-900 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-sm uppercase tracking-wide">
                        {type}
                    </div>
                </CardFooter>
            )}
        </Card>
    );
}

function SourceCodeButton({ href }) {
    const onClick = (e) => {
        e.preventDefault();
        window.open(href, '_blank', 'noopener,noreferrer');
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
