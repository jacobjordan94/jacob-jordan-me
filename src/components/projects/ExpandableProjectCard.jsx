import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function ExpandableProjectCard({ project, type }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <motion.div
                layoutId={`card-${project.title}`}
                onClick={() => setIsExpanded(true)}
                className="cursor-pointer"
            >
                <ProjectCard project={project} type={type} />
            </motion.div>

            <AnimatePresence>
                {isExpanded && (
                    <ProjectModal
                        project={project}
                        onClose={() => setIsExpanded(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
