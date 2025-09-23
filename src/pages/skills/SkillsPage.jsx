import { useContext } from "react";
import { GlobalContext } from "../../App";
import Skill from "../../components/Skill";
import Seo from "../../components/Seo";

export default function SkillsPage({}) {
    const { skills } = useContext(GlobalContext);
    const Skills = () => skills.map(value => value.split(' ').join('_'))
                                   .map(value => ({ value, sort: Math.random() }))
                                   .sort((a, b) => a.sort - b.sort)
                                   .map((skill, i) => <Skill key={i} value={skill.value} className="text-xl" />)
    return (
        <>
            <Seo
                title="jacob-jordan.me - skills"
                description="Jack of all, master of none"
                pathname="/skills"
            />
            <div className="skills-page flex flex-wrap items-center justify-evenly gap-8 min-h-full">
                <Skills />
            </div>
        </>
    );
}