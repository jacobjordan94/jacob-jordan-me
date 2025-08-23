import { useContext } from "react";
import Section from "./Section";
import { GlobalContext } from "../App";

export default function About() {
    const { about } = useContext(GlobalContext);
    return (
        <Section title="about">
            <div className="about text-neutral-400 indent-6">
                { about }
            </div>
        </Section>
    );
}