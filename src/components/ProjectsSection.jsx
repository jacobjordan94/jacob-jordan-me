import { useContext } from "react";
import { GlobalContext } from '../App';
import Section from "./Section";

export default function Projects() {
    const { projects } = useContext(GlobalContext);

    return (
        <Section title="projects">
            <div className="projects">
                
            </div>
        </Section>
    );
}