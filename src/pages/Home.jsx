import About from "../components/AboutSection";
import Contact from "../components/ContactSection";
import Education from "../components/EducationSection";
import Experience from "../components/ExperienceSection";
import Projects from "../components/ProjectsSection";
import Skills from "../components/SkillsSection";

export default function HomePage({}) {
    return (
        <div className="home-page p-4 flex flex-col gap-8 *:flex *:flex-col *:gap-8 md:*:flex-row">
            <div className="md:*:flex-1/2">
                <About />
                <Education />
            </div>
            <div className="experience-wrap">
                <Experience />
            </div>
            <div className="projects-wrap">
                <Projects />
            </div>
            <div className="md:*:flex-1/2">
                <Skills />
                <Contact />
            </div>
        </div>
    );
}
