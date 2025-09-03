import { Outlet } from "react-router";

export default function StandardLayout() {
    return (
        <div className="page-standard p-4 @container">
            <Outlet />
        </div>
    );
}
