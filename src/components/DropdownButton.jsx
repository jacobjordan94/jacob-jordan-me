import DotsMenuIcon from "./icons/DotsMenuIcon";

export default function DropdownButton({ children, className, dropdownContentClassName }) {
    return (
        <div className={"dropdown inline-block group relative " + className}>
            <button className="dropdown-button">
                <DotsMenuIcon size={30} />
            </button>
            <div className={"dropdown-content hidden absolute group-hover:block " + dropdownContentClassName}>
                { children }
            </div>
        </div>
    );
}
