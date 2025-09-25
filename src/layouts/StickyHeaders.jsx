import { Outlet } from "react-router";

export default function StickyHeadersLayout({}) {
    const context = {
        responsiveClass: '@6xl:max-w-2/3 @6xl:m-auto'
    };
    return (
        <div className="sticky-headers-layout @container relative flex flex-col items-grow">
            <Outlet context={context} />
        </div>
    );
}