import LinkIcon from "./icons/LinkIcon";
import AppLink from "./AppLink";

export default function Section({ title, children, link }) {
    return (
        <div data-link={Boolean(link)} className="group section lowercase w-full">
            <div className="title text-2xl flex items-center">
                { link && <SectionLink link={link}>{title}</SectionLink> }
                <span className="group-data-[link=true]:hidden">{ title }</span>
            </div>
            <div className="section-content p-3 @container">
                { children }
            </div>
        </div>
    );
}

const SectionLink = ({ link, children }) => link &&
    <AppLink decoration={false} to={link}>
        <div className="inner-section-link flex items-center">
            <LinkIcon decoration size={20}></LinkIcon>
            <span className="ms-2">{ children }</span>
        </div>
    </AppLink>;
