import { useContext } from "react";
import { GlobalContext } from "../../App";
import Skill from "../../components/Skill";

export default function SkillsPage({}) {
    const { skills } = useContext(GlobalContext);
    const Skills = () => skills.map(value => value.split(' ').join('_'))
                                   .map(value => ({ value, sort: Math.random() }))
                                   .sort((a, b) => a.sort - b.sort)
                                   .map((skill, i) => <Skill key={i} value={skill.value} className="text-xl" />)
    return (
        <div className="skills-page flex flex-wrap items-center justify-evenly gap-8 min-h-full">
            <title>jacob-jordan.me - skills</title>
            <Skills />
        </div>
    );
}