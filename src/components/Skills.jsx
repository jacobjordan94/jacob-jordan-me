import { useContext } from "react";
import { GlobalContext } from "../App";
import Section from "./Section";

export default function Skills() {
    const { skills } = useContext(GlobalContext);
    const Skills = () => skills.map(value => value.split(' ').join('_'))
                               .map(value => ({ value, sort: Math.random() }))
                               .sort((a, b) => a.sort - b.sort)
                               .map((skill, i) => <Skill key={i} value={skill.value} />)
    return (
        <Section title={'skills'}>
            <div className="skills flex flex-wrap gap-3 justify-center text-neutral-500">
                <Skills />
            </div>
        </Section>
    );
}

function Skill({ value }) {
    return <span>{ value }</span>
}