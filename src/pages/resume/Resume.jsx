import { useContext, useState } from "react";
import Page from "./Page";
import OldPCIcon from '../../components/icons/OldPCIcon';
import DPadIcon from '../../components/icons/DPadIcon';
import HeathcliffIcon from '../../components/icons/HeathcliffIcon';
import { GlobalContext } from "../../App";
import PhoneIcon from "../../components/icons/PhoneIcon";
import EnvelopeIcon from "../../components/icons/EnvelopeIcon";
import GithubIcon from "../../components/icons/GithubIcon";
import WorldWideWebIcon from "../../components/icons/WorldWideWebIcon";

export default function ResumePage({}) {
    const [ pageSize, setPageSize ] = useState('letter');
    const { contact, experience, skills, education, projects } = useContext(GlobalContext);

    return (
        <div data-page-size={pageSize} className="resume-page relative">
            <Page size={pageSize} className="flex flex-col">
                <div className="header">
                    <div className="name-icons flex items-center justify-evenly">
                        <div className="flex gap-4 py-2">
                            <span className="text-3xl">JACOB A. JORDAN</span>
                            <span className="icons *:text-black flex *:size-[30px] gap-2">
                                <OldPCIcon />
                                <DPadIcon />
                                <HeathcliffIcon />
                            </span>
                        </div>
                        <ResumeDisclaimer>this resumé was created using react + tailwind!</ResumeDisclaimer>
                    </div>
                    <div className="contact **:text-black text-md flex justify-around border-b-0 border-dashed pb-2">
                        <ContactLink Icon={() => <WorldWideWebIcon size={18}/>}  text={'jacob-jordan.me'} />
                        <ContactLink Icon={() => <PhoneIcon        size={18}/>}  text={contact.phone.text} />
                        <ContactLink Icon={() => <EnvelopeIcon     size={18}/>}  text={contact.email.text} />
                        <ContactLink Icon={() => <GithubIcon       size={18}/>}  text={'github.com/jacobjordan94'} />
                    </div>
                </div>
                <div className="resume-body px-3 pt-2 flex flex-col flex-grow justify-between">
                    <ResumeExperience experience={experience} />
                    <ResumeProjects projects={projects} />
                    <div className="flex pb-1">
                        <ResumeEducation className="flex-2/5" education={education} />
                        <ResumeSkills className="flex-3/5" skills={skills} />
                    </div>
                </div>
            </Page>
            <LayoutSwitch pageSize={pageSize} setPageSize={setPageSize} className="absolute top-0 left-0" />
        </div>
    );
}

function LayoutSwitch({ pageSize, setPageSize, className }) {

    function LayoutButton({ size, buttonClassName }) {
        return <button data-active={pageSize === size} className={"text-white duration-1000 data-[active=true]:underline data-[active=false]:text-neutral-400 cursor-pointer hover:animate-pulse " + buttonClassName} onClick={() => setPageSize(size)}>{ size }</button>;
    }

    return (
        <div className={"layout-switch inline-flex gap-2 ps-6 pt-6 print:hidden " + className}>
            <LayoutButton size="letter" />
            <LayoutButton size="a4"/>
        </div>
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

function ResumeExperience({ experience, className }) {
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
                        <div className="detailed text-[12px]">{ job.detailedDescription }</div>
                    </div>
                </div>
                <div className="job-content ps-[16px]">
                    <hr />
                    <p className="mt-2 text-xs text-center" dangerouslySetInnerHTML={{__html: bullets.join('<span class="mx-2">&bull;</span>')}} />
                </div>
            </div>
        );
    }
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
        <ResumeSection title="education" className={className} showDivider>
            <div className="name-location">
                <span className="education-name">{education.name}</span>
                <span className="mx-2 text-sm">&bull;</span>
                <span className="education-location">{ education.city }</span>
            </div>
            <div className="degree-dates text-sm text-neutral-800">
                <span className="degree">{ education.degree }</span>
                <span className="mx-2 text-xs">&bull;</span>
                <span className="dates">{education.dates[0]} &mdash; {education.dates[1]}</span>
            </div>
            <div className="awards text-xs">
                { education.awards }
            </div>
        </ResumeSection>
    );
}

function ResumeSkills({ skills, className }) {
    return (
        <ResumeSection title="skills" className={className} showDivider>
            <div className="skills-container flex flex-wrap gap-2.5 justify-center text-xs">
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
                <div className="resume-project-description text-[13px]">{project.description}</div>
                <div className="external text-xs flex-grow flex flex-col justify-end *:first-of-type:mt-2 text-center">
                    <div className="url">{ project.url }</div>
                    <div className="github">{ project.source }</div>
                </div>
            </div>
        );
    }
    return (
        <ResumeSection title="projects" showDivider>
            <div className="resume-projects-content flex *:flex-1/3 gap-3">
                <ResumeProject project={projects[1]} />
                <ResumeProject project={projects[4]} />
                <ResumeProject project={projects[6]} />
            </div>
        </ResumeSection>
    );
}

function ResumeDisclaimer({ children }) {
    return (
        <div className="resume-disclaimer text-center text-xs border-1 border-dashed py-1 px-2 rounded-sm">
            { children }
        </div>
    );
}

function ResumeSection({ title, children, className = '', showDivider = false }) {
    return (
        <div className={"resume-section resume-section-" + title + ` ${className}`}>
            <div className="resume-section-title uppercase text-[20px] ps-1 flex items-center">
                <div className="title-text">
                    { title }
                </div>
                <div data-show-divider={showDivider} className="hidden data-[show-divider=true]:block divider flex-grow ms-3 me-1.5">
                    <hr className="border-1 border-dashed" />
                </div>
            </div>
            <div className="resume-section-content ps-5">
                { children }
            </div>
        </div>
    ); 
}