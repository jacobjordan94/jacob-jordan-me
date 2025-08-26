import { useContext } from "react";
import { GlobalContext } from "../../App";
import Job from "./Job";
import UPMCJob from './UPMCJob';
import IQIncJob from './IQIncJob';
import VerticalLifeJob from './VerticalLifeJob';
import AffiliatedFoodsJob from './AffiliatedFoodsJob';

export default function ExperiencePage({}) {
    const { experience } = useContext(GlobalContext);
    return (
        <div className="experience-page @6xl:max-w-2/3 @6xl:m-auto">
            <div className="experience-container flex flex-col gap-6">
                <UPMCJob job={experience[0]} />
                <IQIncJob job={experience[1]} />
                <VerticalLifeJob job={experience[2]} />
                <AffiliatedFoodsJob job={experience[3]} />
            </div>
        </div>
    );
}
