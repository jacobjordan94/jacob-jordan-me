import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function HomePage({}) {
    return (
        <div className="home-page p-4 flex flex-col gap-8">
            <Projects />
            <Skills />
            <Contact />
        </div>
    );
}
