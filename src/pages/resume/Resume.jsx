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
                    <div className="name-icons flex items-start gap-4 p-2">
                        <span className="text-3xl">JACOB A. JORDAN</span>
                        <span className="icons *:text-black flex *:size-[30px] gap-2">
                            <OldPCIcon />
                            <DPadIcon />
                            <HeathcliffIcon />
                        </span>
                    </div>
                    <div className="contact **:text-black text-md flex justify-around border-b-2 border-dashed pb-2">
                        <ContactLink Icon={() => <WorldWideWebIcon />}  text={'jacob-jordan.me'} />
                        <ContactLink Icon={() => <PhoneIcon />}         text={contact.phone.text} />
                        <ContactLink Icon={() => <EnvelopeIcon />}      text={contact.email.text} />
                        <ContactLink Icon={() => <GithubIcon /> }       text={'github.com/jacobjordan94'} />
                    </div>
                </div>
                <div className="resume-body px-3 pt-2 flex flex-col flex-grow justify-between">
                    <ResumeExperience experience={experience} />
                    <ResumeProjects projects={projects} />
                    <div className="flex">
                        <ResumeEducation className="flex-2/5" education={education} />
                        <ResumeSkills className="flex-3/5" skills={skills} />
                    </div>
                    <ResumeDisclaimer />
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
            <span>{ text }</span>
        </div>
    );
}

function ResumeExperience({ experience, className }) {
    function ResumeJob({ job }) {
        return (
            <tr className="job flex items-start">
                <td className="job-start pe-2">
                    {'>'}
                </td>
                <td className="job-info min-w-[180px]">
                    <div className="name uppercase">{ job.name }</div>
                    <div className="location text-sm">{ job.location }</div>
                    <div className="dates text-sm">{ job.dates[0] } &mdash; { job.dates[1] }</div>
                </td>
                <td className="description-bullets">
                    <div className="description text-[14px]">{ job.description }</div>
                    <div className="detailed text-[12px]">{ job.detailedDescription }</div>
                </td>
            </tr>
        );
    }
    return (
        <ResumeSection title="experience" className={className}>
            <table className="resume-experience-content">
                <tbody className="flex flex-col gap-2.5">
                    <ResumeJob job={experience[0]} />
                    <ResumeJob job={experience[1]} />
                    <ResumeJob job={experience[2]} />
                    <ResumeJob job={experience[3]} />
                </tbody>
            </table>
        </ResumeSection>
    )
}


function ResumeEducation({ education, className }) {
    return (
        <ResumeSection title="education" className={className}>
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
        <ResumeSection title="skills" className={className}>
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
                <div className="resume-project-description text-sm">{project.description}</div>
                <div className="external text-xs flex-grow flex flex-col justify-end *:first-of-type:mt-2 text-center">
                    <div className="url">{ project.url }</div>
                    <div className="github">{ project.source }</div>
                </div>
            </div>
        );
    }
    return (
        <ResumeSection title="projects">
            <div className="resume-projects-content flex *:flex-1/3 gap-3">
                <ResumeProject project={projects[1]} />
                <ResumeProject project={projects[4]} />
                <ResumeProject project={projects[6]} />
            </div>
        </ResumeSection>
    );
}

function ResumeDisclaimer() {
    return (
        <div className="resume-disclaimer text-center text-sm mb-4">
            <span className="border-2 border-dashed p-2">this resumé was created using react + tailwind</span>
        </div>
    );
}

function ResumeSection({ title, children, className = '' }) {
    return (
        <div className={"resume-section resume-section-" + title + ` ${className}`}>
            <div className="resume-section-title uppercase text-[20px]">&mdash; { title }</div>
            <div className="resume-section-content ps-6">
                { children }
            </div>
        </div>
    ); 
}