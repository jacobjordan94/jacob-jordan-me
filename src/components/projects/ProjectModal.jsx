import { motion } from "motion/react";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "../ui/card";
import Icon from "../Icon";
import UnderConstructionBanner from "../UnderConstructionBanner";

export default function ProjectModal({ project, onClose }) {
    return (
        <>
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 bg-black/80 z-40"
            />

            {/* Modal container */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
                <motion.div
                    layoutId={`card-${project.title}`}
                    onClick={(e) => e.stopPropagation()}
                    className="w-full max-w-2xl max-h-[90vh] overflow-auto"
                >
                    <Card
                        data-wip={project.wip}
                        className="projects-card group/projectCard relative overflow-hidden bg-neutral-900 shadow-2xl rounded-xl"
                    >
                        <div className="group-data-[wip=true]/projectCard:relative">
                            <div className="image overflow-hidden aspect-[16/9] border-b border-white/10">
                                <img
                                    src={project.image || 'https://placehold.co/600x400?text=No+Image'}
                                    alt={`project image for ${project.title}`}
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                            <UnderConstructionBanner className="hidden group-data-[wip=true]/projectCard:block absolute bottom-2 left-0 w-full z-10" />
                        </div>

                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 text-white/70 hover:text-white transition-colors bg-black/50 rounded-full p-1 z-10"
                            aria-label="Close modal"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>

                        <CardHeader className="px-6 pt-4 pb-2">
                            <motion.div
                                layoutId={`title-${project.title}`}
                            >
                                <CardTitle className="text-white text-2xl font-semibold tracking-normal">
                                    {project.title}
                                </CardTitle>
                            </motion.div>
                        </CardHeader>

                        <CardContent className="px-6 pb-4">
                            
                            <motion.div
                                layoutId={`description-${project.title}`}
                            >
                                <CardDescription className="text-base text-neutral-300 font-[MisterPixel,monospace]">
                                    {project.description}
                                </CardDescription>
                            </motion.div>

                            {project.tags && project.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="bg-neutral-800 text-neutral-300 text-xs px-2 py-1 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </CardContent>

                        <CardFooter className="px-6 pb-6 pt-2 flex flex-wrap gap-3">
                            {project.url && (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-white text-neutral-900 px-4 py-2 rounded-lg font-medium hover:bg-neutral-200 transition-colors"
                                >
                                    <Icon.Link size={16} />
                                    Visit Project
                                </a>
                            )}
                            {project.source && (
                                <a
                                    href={project.source}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-neutral-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-neutral-700 transition-colors"
                                >
                                    <Icon.Github size={16} />
                                    Source Code
                                </a>
                            )}
                            {project.youtube && (
                                <a
                                    href={project.youtube}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
                                >
                                    <Icon.Youtube size={16} />
                                    Watch Video
                                </a>
                            )}
                        </CardFooter>
                    </Card>
                </motion.div>
            </div>
        </>
    );
}
