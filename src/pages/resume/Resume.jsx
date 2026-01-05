import { useContext } from "react";
import Page from "./Page";
import { GlobalContext } from "../../App";
import ResumePDF from "./ResumePDF";
import './Resume.css';
import { useSearchParams } from "react-router";
import Seo from "../../components/Seo";
import clsx from "clsx";
import Icon from "../../components/Icon";

export default function ResumePage({}) {
    const [ searchParams ] = useSearchParams();
    const pageSize = searchParams.get('size') || 'letter';
    const { contact, experience, skills, education, projects } = useContext(GlobalContext);

    return (
        <>
            <Seo
                title="jacob-jordan.me - resumé/cv"
                description="Resumé or business card? Letter or A4? I got you covered."
                pathname="/resume"
            />
            <main role="document" data-page-size={pageSize} className="resume-page group relative py-20 print:p-0 hidden pointer-fine:block 
                                                                       data-[page-size=business]:h-full data-[page-size=business]:pointer-fine:flex
                                                                       data-[page-size=business]:items-center data-[page-size=business]:justify-center
                                                                       "
            >
                <Page size={pageSize} className="flex flex-col rounded-md shadow-black shadow-lg 
                                                print:shadow-none outline-black group-data-[page-size=business]:print:outline-2
                                                group-data-[page-size=business]:print:outline-dashed
                                                "
                >
                    <div className="header flex flex-col group-data-[page-size=business]:h-full">
                        <div className="header-inner flex items-center justify-evenly 
                                        group-data-[page-size=business]:p-1 group-data-[page-size=business]:px-3 
                                        group-data-[page-size=business]:pt-3">
                            <div className="flex name-icons gap-4 py-2 group-data-[page-size=business]:*:flex-1/2">
                                <span className="name text-3xl group-data-[page-size=business]:h-full text-center">JACOB A. JORDAN</span>
                                <div className="icons-business-card-disclaimer">
                                    <div className="icons *:text-black flex *:size-[30px] 
                                                    group-data-[page-size=business]:w-full gap-2 group-data-[page-size=business]:gap-0 
                                                    group-data-[page-size=business]:justify-around group-data-[page-size=business]:*:size-[24px]">
                                        <Icon.OldPC />
                                        <Icon.DPad />
                                        <Icon.Heathcliff />
                                    </div>
                                    <ResumeDisclaimer className="business-card hidden group-data-[page-size=business]:block p-0 mt-2 py-1 text-[11px]">
                                        this business card was created using react + tailwind!
                                    </ResumeDisclaimer>
                                </div>
                            </div>
                            <ResumeDisclaimer className="default group-data-[page-size=business]:hidden">
                                this resumé was created using react + tailwind!
                            </ResumeDisclaimer>
                        </div>
                        <div className="
                                contact [&_*]:text-black text-md flex justify-around 
                                border-b-0 border-dashed pb-2 
                                group-data-[page-size=business]:flex-wrap group-data-[page-size=business]:pb-2
                                group-data-[page-size=business]:flex-grow group-data-[page-size=business]:[&_*]:text-[14px]
                                "
                            >
                            <ContactLink Icon={() => <Icon.WWW      size={18}/>} text={'jacob-jordan.me'} />
                            <ContactLink Icon={() => <Icon.Phone    size={18}/>} text={contact.phone.text} />
                            <ContactLink Icon={() => <Icon.Envelope size={18}/>} text={contact.email.text} />
                            <ContactLink Icon={() => <Icon.Github   size={18}/>} text={'github.com/jacobjordan94'} />
                        </div>
                    </div>
                    <div className="resume-body px-3 pt-2 flex flex-col flex-grow justify-between font-[MisterPixel,monospace]">
                        <ResumeExperience experience={experience} />
                        <ResumeProjects projects={projects} />
                        <div className="flex pb-4">
                            <ResumeEducation className="flex-2/5" education={education} />
                            <ResumeSkills className="flex-3/5" skills={skills} />
                        </div>
                    </div>
                </Page>
            </main>
            <ResumePDF pageSize={pageSize} />
        </>
    );
}

function ContactLink({ Icon, text }) {
    return (
        <div className="contact-link flex gap-2 items-center">
            <Icon />
            <span className="text-sm">{ text }</span>
        </div>
    );
}

function ResumeJob({ job, bullets }) {
    return (
        <div className="job">
            <div className="job-header flex">
                <div className="job-start pe-2">
                    {'>'}
                </div>
                <div className="job-info min-w-[180px]">
                    <div className="name uppercase">{ job.name }</div>
                    <div className="location text-sm">{ job.location }</div>
                    <div className="dates text-sm">{ job.dates[0] } &mdash; { job.dates[1] }</div>
                </div>
                <div className="description">
                    <div className="description text-[14px]">{ job.description }</div>
                    <div className="detailed text-[13px] opacity-70">{ job.detailedDescription }</div>
                </div>
            </div>
            <div className="job-content ps-[16px]">
                <hr />
                <p className="mt-2 text-[13px]/5 text-center opacity-85" dangerouslySetInnerHTML={{__html: bullets.join('<span class="mx-2">&bull;</span>')}} />
            </div>
        </div>
    );
}

function ResumeExperience({ experience, className }) {
    return (
        <ResumeSection title="experience" className={className} showDivider>
            <div className="resume-experience-content flex flex-col gap-4 lowercase">
                <ResumeJob job={experience[0]} bullets={[experience[0].bullets[0], experience[0].bullets[1], experience[0].bullets[2], experience[1].bullets[3]]} />
                <ResumeJob job={experience[1]} bullets={[experience[1].bullets[0], experience[1].bullets[1], experience[1].bullets[2]]} />
                <ResumeJob job={experience[2]} bullets={[experience[2].bullets[0], experience[2].bullets[1], experience[2].bullets[3], experience[2].bullets[4]]} />
                <ResumeJob job={experience[3]} bullets={[experience[3].bullets[0], experience[3].bullets[2], experience[3].bullets[3], experience[3].bullets[4]]} />
            </div>
        </ResumeSection>
    )
}


function ResumeEducation({ education, className }) {
    return (
        <ResumeSection title="education" className={className} contentClassName="flex flex-grow flex-col justify-between" showDivider>
            <div className="name-location">
                <span className="education-name">{education.name}</span>
                <span className="mx-2 text-sm">&bull;</span>
                <span className="education-location">{ education.city }</span>
            </div>
            <div className="degree-dates text-sm text-neutral-800 opacity-80">
                <span className="degree">{ education.degree }</span>
                <span className="mx-2 text-xs">&bull;</span>
                <span className="dates">{education.dates[0]} &mdash; {education.dates[1]}</span>
            </div>
            <div className="awards text-xs opacity-50">
                { education.awards }
            </div>
        </ResumeSection>
    );
}

function ResumeSkills({ skills, className }) {
    return (
        <ResumeSection title="skills" className={className} showDivider>
            <div className="skills-container flex flex-wrap gap-2.5 justify-center text-xs opacity-75">
            {
                skills.map(skill => skill.split(' ').join('_')).map((skill, i) => <span key={i}>{ skill }</span>)
            }
            </div>
        </ResumeSection>
    );
}

function ResumeProjects({ projects }) {
    function ResumeProject({project}) {
        return (
            <div className="resume-project flex flex-col">
                <div className="resume-project-name before:content-['>'] before:pe-2">{project.title}</div>
                <div className="resume-project-description text-[13px]">{ project.resumeDescription || project.description}</div>
                <div className="external text-xs flex-grow flex flex-col justify-end  text-center opacity-50 pb-1.5">
                    <div className="url">{ project.displayUrl }</div>
                    <div className="github">{ project.displaySource }</div>
                </div>
            </div>
        );
    }
    return (
        <ResumeSection title="projects" showDivider>
            <div className="resume-projects-content flex *:flex-1/3 gap-3">
                <ResumeProject project={projects[1]} />
                <ResumeProject project={projects[10]} />
                <ResumeProject project={projects[12]} />
            </div>
        </ResumeSection>
    );
}

function ResumeDisclaimer({ children, className = '' }) {
    return (
        <div className={"resume-disclaimer text-center text-xs border-1 border-dashed py-1 px-2 rounded-sm font-[MisterPixel,monospace] opacity-50 " + className}>
            { children }
        </div>
    );
}

function ResumeSection({ title, children, className = '', showDivider = false, contentClassName = '' }) {
    const sectionId = `${title}-heading`;
    return (
        <section 
            aria-labelledby={sectionId} 
            className={clsx("resume-section flex flex-col", `resume-section-${title}`, className)}
        >
            <div className="resume-section-title ps-1 flex items-center">
                <h2 id={sectionId} className="title-text text-[20px] uppercase">
                    { title }
                </h2>
                <div data-show-divider={showDivider} className="hidden data-[show-divider=true]:block divider flex-grow ms-3 me-1.5">
                    <hr className="border-1 border-dashed" />
                </div>
            </div>
            <div className={clsx("resume-section-content ps-5", contentClassName)}>
                { children }
            </div>
        </section>
    ); 
}
