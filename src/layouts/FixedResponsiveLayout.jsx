import { Outlet } from "react-router";

export default function ResponsiveLayout({}) {
    return (
        <div className="responsive-layout @container h-full">
            <div className="@6xl:max-w-2/3 @6xl:m-auto h-full p-4 @6xl:p-0 @6xl:py-4">
                <Outlet />
            </div>
        </div>
    );
}