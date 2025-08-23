import About from "../components/About";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

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
