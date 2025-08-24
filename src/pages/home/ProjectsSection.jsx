import { useContext } from "react";
import { GlobalContext } from '../../App';
import Section from "../../components/Section";

export default function Projects() {
    const { projects } = useContext(GlobalContext);

    return (
        <Section title="projects" link="/projects">
            <div className="projects">
                
            </div>
        </Section>
    );
}