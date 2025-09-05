import { useState } from "react";
import Page from "./Page";
import OldPCIcon from '../../components/icons/OldPCIcon';
import DPadIcon from '../../components/icons/DPadIcon';
import HeathcliffIcon from '../../components/icons/HeathcliffIcon';

export default function ResumePage({}) {
    const [ pageSize, setPageSize ] = useState('letter');

    return (
        <div data-page-size={pageSize} className="resume-page relative">
            <Page size={pageSize} className="w-full">
                <div className="header flex items-start gap-4">
                    <span className="text-3xl">JACOB A. JORDAN</span>
                    <span className="icons *:text-black flex *:size-[30px] gap-2">
                        <OldPCIcon />
                        <DPadIcon />
                        <HeathcliffIcon />
                    </span>
                </div>
                <div>

                </div>
            </Page>
            <LayoutSwitch pageSize={pageSize} setPageSize={setPageSize} className="absolute top-0 left-0" />
        </div>
    );
}

function LayoutSwitch({ pageSize, setPageSize, className }) {

    function LayoutButton({ size, buttonClassName }) {
        return <button data-active={pageSize === size} className={"text-white duration-1000 data-[active=true]:underline data-[active=false]:text-neutral-400 cursor-pointer hover:animate-pulse " + buttonClassName} onClick={() => setPageSize(size)}>{ size }</button>;
    }

    return (
        <div className={"layout-switch inline-flex gap-2 ps-6 pt-6 print:hidden " + className}>
            <LayoutButton size="letter" />
            <LayoutButton size="a4"/>
        </div>
    );
}