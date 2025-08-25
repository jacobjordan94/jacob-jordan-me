import { useContext, useState } from "react";
import { GlobalContext } from "../../App";
import Section from "../../components/Section";
import EnvelopeIcon from "../../components/icons/EnvelopeIcon";
import PhoneIcon from "../../components/icons/PhoneIcon";
import PaperAirplaneIcon from "../../components/icons/PaperAirplaneIcon";
import DiscordIcon from "../../components/icons/DiscordIcon";
import LinkedInIcon from "../../components/icons/LinkedInIcon";
import AppLink from "../../components/AppLink";

export default function Contact() {
    const { contact } = useContext(GlobalContext);
    return (
        <Section title="Contact">
            <div className="contact">
                <div className="@xl:grid @xl:grid-cols-2 *:mb-2">
                    <PhoneContact href={contact.phone.href} linkText={contact.phone.text} />
                    <DiscordContact href={contact.discord.href} linkText={contact.discord.text} />
                    <LinkedInContact href={contact.linkedin.href} linkText={contact.linkedin.text} />
                    <EmailContact href={contact.email.href} linkText={contact.email.text} />
                </div>
                <EmailForm href={contact.email.href} />
            </div>
        </Section>
    );
}

function ContactSection({ title, href, linkText, Icon, children }) {
    return (
        <div className={"contact-section flex flex-col gap-4 " + title}>
            <div className="contact-header flex gap-2 items-center">
                <div className="icon-wrap me-1 size-[24px] inline-flex items-center justify-center">
                    <Icon />
                </div>
                <span className="text-xl">{ title + ':' }</span>
                <AppLink href={href} decoration={false} className="underline">{ linkText }</AppLink>
            </div>
            { children &&
            <div className="contact-body">
                { children }
            </div>
            }
        </div>
    );
}

const DiscordContact = ({href, linkText}) => <ContactSection title="discord" href={href} linkText={linkText} Icon={() => <DiscordIcon /> } />;
const PhoneContact = ({ href, linkText }) => <ContactSection title="phone" href={href} linkText={linkText} Icon={() => <PhoneIcon /> } />;
const EmailContact = ({href, linkText}) => <ContactSection title="email" href={href} linkText={linkText} Icon={() => <EnvelopeIcon size={20} /> } />;
const LinkedInContact = ({ href, linkText }) => <ContactSection title="linkedin" href={href} linkText={linkText} Icon={() => <LinkedInIcon />} />;
function EmailForm({ href }) {
    const [ emailBody, setEmailBody ]  = useState();

    function bodyOnChange(e) {
        e.preventDefault();
        setEmailBody(e.target.value);
    }

    return (
        <div className="email-contact-body ms-[36px]">
            <div className="email-contact-body-content">
                <textarea name="email-body" className="w-full min-h-[112px] p-2 focus-visible:outline-0 resize-none" 
                            onChange={bodyOnChange} placeholder="Hello, I am writing to say that this is one of the most incredible websites that I have ever visited."
                />
            </div>
            <div className="email-contact-footer mt-2">
                <div className="inline float-end aria-disabled:pointer-events-none aria-disabled:opacity-50" aria-disabled={!emailBody}>
                    <AppLink href={href + ((emailBody && emailBody !== '') ? `?body=${emailBody}` : '')} className="inline-flex">
                        <span className="me-2">Send</span>
                        <PaperAirplaneIcon size={24} className="scale-x-[-1]" />
                    </AppLink>
                </div>
            </div>
        </div>
    )
}
 