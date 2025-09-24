export default function Skill({ value, className, ...props }) {
    return (
        <span
            {...props}
            aria-label={`Skill: ${value}`}
            className={
                "text-neutral-500 hover:text-white transition-all duration-300 ease-out hover:scale-110 hover:drop-shadow-[0_0_8px_#ffffff88] " + className
            }
        >
            {value}
        </span>
    );
}
