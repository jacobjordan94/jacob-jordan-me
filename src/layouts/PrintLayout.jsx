import { Outlet } from "react-router";

export default function PrintLayout() {
    return (
        <div className="print-layout h-full bg-neutral-300 overflow-scroll">
            <Outlet />
        </div>
    );
}