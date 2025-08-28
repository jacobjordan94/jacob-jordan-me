import { useContext } from "react";
import { GlobalContext } from "../../App";
import Section from "../../components/Section";
import Skill from "../../components/Skill";

export default function Skills() {
    const { skills } = useContext(GlobalContext);
    const Skills = () => skills.map(value => value.split(' ').join('_'))
                               .map(value => ({ value, sort: Math.random() }))
                               .sort((a, b) => a.sort - b.sort)
                               .map((skill, i) => <Skill key={i} value={skill.value} />)
    return (
        <Section title={'skills'}>
            <div className="skills flex flex-wrap gap-3 justify-center cursor-default **:cursor-default select-none py-4">
                <Skills />
            </div>
        </Section>
    );
}
