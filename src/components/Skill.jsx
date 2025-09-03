export default function Skill({ value, className }) {
    return <span className={"text-neutral-500 hover:text-white transition-[colors_scale] hover:animate-pulse hover:scale-110 select-none " + className}>{ value }</span>
}
