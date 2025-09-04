import { useContext } from "react";
import { GlobalContext } from "../../App";
import UPMCJob from './UPMCJob';
import IQIncJob from './IQIncJob';
import VerticalLifeJob from './VerticalLifeJob';
import AffiliatedFoodsJob from './AffiliatedFoodsJob';

export default function ExperiencePage({}) {
    const { experience } = useContext(GlobalContext);
    return (
        <div className="experience-page flex flex-col gap-20 @6xl:py-5">
            <title>jacob-jordan.me - experience</title>
            <UPMCJob job={experience[0]} />
            <IQIncJob job={experience[1]} />
            <VerticalLifeJob job={experience[2]} />
            <AffiliatedFoodsJob job={experience[3]} />
        </div>
    );
}
