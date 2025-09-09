import { Outlet } from "react-router";

export default function PrintLayout() {
    return (
        <div className="print-layout pointer-coarse:h-full">
            <Outlet />
        </div>
    );
}