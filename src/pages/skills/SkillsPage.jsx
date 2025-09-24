import { useContext, useMemo } from "react";
import { GlobalContext } from "../../App";
import Skill from "../../components/Skill";
import Seo from "../../components/Seo";

export default function SkillsPage({}) {
    const { skills } = useContext(GlobalContext);

    const skillElements = useMemo(() => {
        return skills
            .map(value => value.split(' ').join('_'))
            .map((value, i) => ({ value, sort: Math.random(), delay: i * 50 }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value, delay }) => (
                <Skill
                    key={value}
                    value={value}
                    className="
                        pointer-events-auto
                        text-base sm:text-lg md:text-xl
                        opacity-0 cursor-pointer
                        animate-[fade-in_0.5s_ease-out_forwards]
                        will-change-transform
                    "
                    style={{ animationDelay: `${delay}ms` }}
                />

            ));
    }, [skills]);

    return (
        <>
            <Seo
                title="jacob-jordan.me - skills"
                description="Jack of all, master of none"
                pathname="/skills"
            />
            <div className="skills-page flex flex-wrap items-center justify-evenly gap-8 min-h-full">
                { skillElements }
            </div>
        </>
    );
}