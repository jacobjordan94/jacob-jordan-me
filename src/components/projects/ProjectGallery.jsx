import { useContext, useMemo, useState } from "react";
import { GlobalContext } from "../../App";
import ExpandableProjectCard from "./ExpandableProjectCard";
import { AnimatePresence, motion } from 'motion/react';

export default function ProjectGallery({ }) {
    const { projects } = useContext(GlobalContext);
    const [currentProjectType, setCurrentProjectType] = useState('all');

    const projectTypes = useMemo(() => (
        ['all', ...new Set(projects.map(project => project.type))]
    ), []);

    const visibleProjects = useMemo(() => (
        currentProjectType === 'all' ? [...projects] : [...projects].filter(project => project.type === currentProjectType)
    ), [currentProjectType]);

    return (
        <div className="projects-gallery">
            <fieldset className="selector flex justify-between @2xl:justify-start @2xl:gap-4" role="radiogroup" aria-label="Filter projects by type">
                {
                    projectTypes.map((pt, i) =>
                        <button
                            key={i}
                            onClick={() => setCurrentProjectType(pt)}
                            aria-pressed={pt === currentProjectType}
                            className="rounded-lg cursor-pointer transition-opacity aria-[pressed=false]:opacity-50 text-lg"
                            type="button"
                        >
                            {pt}
                        </button>
                    )
                }
            </fieldset>
            <hr className="bg-white mb-6 h-[1px] opacity-50" />
            <div className="project-gallery-content flex flex-col gap-8 @2xl:grid @2xl:grid-cols-2 @4xl:grid-cols-3 6xl:grid-cols-4">
                <AnimatePresence mode="popLayout">
                    {visibleProjects.map((vp) => (
                        <motion.div
                            key={vp.title}
                            layout
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.5 }}
                        >
                            <ExpandableProjectCard
                                project={vp}
                                type={currentProjectType === 'all' ? vp.type : ''}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}
