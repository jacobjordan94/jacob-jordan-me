import Icon from "./Icon";

export default function SiteBadge({ className = '' }) {
    return (
        <div
            className={`
                badge inline-flex items-center gap-2 px-3 py-1 
                rounded-full border-1 border-neutral-600 
                bg-gradient-to-b from-neutral-800 via-neutral-500 to-neutral-800 
                text-sm tracking-widest uppercase shadow-black/30 ${className}
                font-[MisterPixel] text-neutral-300
            `}
        >
            <Icon.Star size={16} />
            <span>made in u.s.a.</span>
            <Icon.Star size={16} />
        </div>
    );
}
