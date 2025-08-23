import Contact from "../components/Contact";
import Skills from "../components/Skills";

export default function HomePage({}) {
    return (
        <div className="home-page p-4 flex flex-col gap-8">
            <Skills />
            <Contact />
        </div>
    );
}
