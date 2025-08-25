import LinkIcon from "./icons/LinkIcon";
import AppLink from "./AppLink";

export default function Section({ title, children, link }) {
    return (
        <div className="section workbench-font lowercase w-full">
            <div className="title text-2xl flex justify-between items-center">
                <span>{ title }</span>
                <SectionLink link={link} />
            </div>
            <div className="section-content p-3 @container">
                { children }
            </div>
        </div>
    );
}

const SectionLink = ({ link }) => link &&
    <AppLink decoration={false} to={link}>
        <LinkIcon size={20}></LinkIcon>
    </AppLink>;
