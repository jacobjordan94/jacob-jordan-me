import StarIcon from "./icons/StarIcon";

export default function SiteBadge ({ ...props  }) {
    return (
        <div className={"badge items-center flex gap-3 " + props.className}>
            <StarIcon size={14} />
            <div className="badge-text text-center">
                <span>made in u.s.a.</span>
                <StarIcon className="inline mx-2.5" size={14} />
                <span>no a.i. or llms used</span>
            </div>
            <StarIcon size={14} />
        </div>
    );
}