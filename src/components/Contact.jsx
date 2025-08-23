import { useContext, useState } from "react";
import { GlobalContext } from "../App";
import Section from "./Section";
import EnvelopeIcon from "./icons/EnvelopeIcon";
import PhoneIcon from "./icons/PhoneIcon";
import PaperAirplaneIcon from "./icons/PaperAirplaneIcon";

export default function Contact() {
    const { phoneNumber, email, phoneNumberLink, emailLink } = useContext(GlobalContext);
    return (
        <Section title="Contact">
            <div className="contact flex flex-col gap-2">
                <PhoneContact href={phoneNumberLink} linkText={phoneNumber} />
                <EmailContact href={emailLink} linkText={email} />
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
                <a href={href} className="underline">{ linkText }</a>
            </div>
            { children &&
            <div className="contact-body">
                { children }
            </div>
            }
        </div>
    );
}

const PhoneContact = ({ href, linkText }) => <ContactSection title="phone" href={href} linkText={linkText} Icon={() => <PhoneIcon />} />;
function EmailContact({ href, linkText }) {
    const [ emailBody, setEmailBody ]  = useState();

    function bodyOnChange(e) {
        e.preventDefault();
        setEmailBody(e.target.value);
    }

    return (
        <ContactSection title="email" href={href} linkText={linkText} Icon={() => <EnvelopeIcon size={20} />}>
            <div className="email-contact-body ms-[36px]">
                <div className="email-contact-body-content">
                    <textarea name="email-body" className="w-full min-h-[112px] p-2 focus-visible:outline-0 resize-none" 
                              onChange={bodyOnChange} placeholder="Hello, I am writing to say that this is one of the most incredible websites that I have ever visited."
                    />
                </div>
                <div className="email-contact-footer mt-2">
                    <div className="inline group border-white hover:border-b-2 float-end aria-disabled:pointer-events-none aria-disabled:opacity-50" aria-disabled={!emailBody}>
                        <a href={href + ((emailBody && emailBody !== '') ? `?body=${emailBody}` : '')} className="inline-flex">
                            <span className="me-2">Send</span>
                            <PaperAirplaneIcon size={24} className="scale-x-[-1]" />
                        </a>
                    </div>
                </div>
            </div>

        </ContactSection>
    )
}
 