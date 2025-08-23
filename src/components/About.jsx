import { useContext } from "react";
import Section from "./Section";
import { GlobalContext } from "../App";

export default function About() {
    const { about } = useContext(GlobalContext);
    return (
        <Section title="about">
            <div className="about">
                { about }
            </div>
        </Section>
    );
}