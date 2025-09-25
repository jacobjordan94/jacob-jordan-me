export default function DropdownButton({ children, className, dropdownContentClassName, ButtonContent }) {
    return (
        <div className={"dropdown inline-block group relative " + className}>
            <button className="dropdown-button cursor-pointer">
                { ButtonContent && <ButtonContent />}
            </button>
            <div className={"dropdown-content hidden absolute group-hover:block z-[100] " + dropdownContentClassName}>
                { children }
            </div>
        </div>
    );
}
