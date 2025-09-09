import { useState } from "react";
import { Outlet, useSearchParams } from "react-router";

export default function PrintLayout() {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ pageSize, _setPageSize ] = useState( searchParams.get('size') || 'letter' );

    function setPageSize(pageSize) {
        setSearchParams({ size: pageSize });
        _setPageSize(pageSize);
    }

    return (
        <div className="print-layout h-full max-h-full bg-neutral-300 print:bg-white relative">
            <div className="overflow-scroll h-full">
                <Outlet />
            </div>
            <div className="absolute-container absolute left-0 right-0 pointer-fine:top-0 pointer-coarse:bottom-0">
                <div className="layout-switch-container print:hidden my-5 flex justify-center">
                    <LayoutSwitch pageSize={pageSize} setPageSize={setPageSize} />
                </div>
            </div>
        </div>
    );
}

function LayoutSwitch({ pageSize, setPageSize, className }) {
    function LayoutButton({ size, buttonClassName, text }) {
        return  <button 
                    data-active={pageSize === size} 
                    className={"text-white duration-1000 data-[active=false]:opacity-60 cursor-pointer hover:animate-pulse " + buttonClassName} 
                    onClick={() => setPageSize(size)}>
                        { text || size }
                </button>;
    }
    return (
        <div className={"layout-switch inline-flex print:hidden gap-4 bg-neutral-800 p-2 px-4 rounded-s-full rounded-e-full shadow-black shadow-md " + className}>
            <LayoutButton size="letter" />
            <LayoutButton buttonClassName="pointer-coarse:hidden" size="a4" />
            <LayoutButton size="business" text="business_card" />
        </div>
    );
}