import Section from "../../components/Section";
import SeeMoreButton from "../../components/SeeMoreButton";
import ProjectGallery from "../../components/projects/ProjectGallery";

export default function Projects() {
    return (
        <Section title="projects" link="/projects">
            <div className="projects">
                <ProjectGallery />
                <SeeMoreButton to="projects" className="mt-8" />
            </div>
        </Section>
    );
}