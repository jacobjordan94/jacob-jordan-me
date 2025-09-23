import { Helmet } from 'react-helmet-async';
import About from './AboutSection';
import Contact from './ContactSection';
import Education from './EducationSection';
import Experience from './ExperienceSection';
import Projects from './ProjectsSection';
import Skills from './SkillsSection';
import Seo from '../../components/Seo';

export default function HomePage({}) {
    return (
        <>
            <Seo />
            <div className="home-page flex flex-col gap-8 *:flex *:flex-col *:gap-8 md:*:flex-row">
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
        
        </>
    );
}
