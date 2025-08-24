import { Link, useNavigate } from "react-router";
import LinkIcon from "./icons/LinkIcon";

export default function Section({ title, children, link }) {
    const navigate = useNavigate();
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
    <Link to={link}>
        <LinkIcon size={20}></LinkIcon>
    </Link>;
