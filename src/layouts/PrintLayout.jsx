import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { ZoomIn, ZoomOut } from "lucide-react";
import { useState } from "react";
import { Outlet } from "react-router";

export default function PrintLayout() {
    const [pageSize, setPageSize] = useState('letter');
    const [scale, setScale] = useState(1);

    return (
        <div className="print-layout h-full max-h-full bg-neutral-300 print:bg-white relative">
            <div
                className="overflow-hidden h-full"
                onWheel={(e) => {
                    e.preventDefault();
                    setScale((prev) => {
                        const delta = e.deltaY > 0 ? -0.1 : 0.1;
                        return Math.min(2.5, Math.max(0.1, prev + delta));
                    });
                }}
            >
                <Outlet context={{ scale, pageSize }} />
            </div>
            <div className="absolute-container absolute left-0 right-0 pointer-fine:top-0 pointer-coarse:bottom-0 pointer-events-none">
                <div className="layout-switch-container print:hidden my-5 flex justify-center">
                    <LayoutSwitch pageSize={pageSize} setPageSize={setPageSize} />
                </div>
            </div>
            <div className="absolute left-0 top-0 bottom-0 flex items-center ms-5 pointer-events-none pointer-coarse:hidden">
                <ScaleRange scale={scale} setScale={setScale} />
            </div>
        </div>
    );
}

function LayoutSwitch({ pageSize, setPageSize, className }) {
    function LayoutButton({ size, buttonClassName, text }) {
        return <button
            data-active={pageSize === size}
            className={cn("text-white duration-1000 data-[active=false]:opacity-60 cursor-pointer hover:animate-pulse", buttonClassName)}
            onClick={() => setPageSize(size)}>
            {text || size}
        </button>;
    }
    return (
        <ControlWrapper className={cn("layout-switch rounded-s-full rounded-e-full px-6", className)}>
            <LayoutButton size="letter" />
            <LayoutButton size="a4" />
            <LayoutButton size="business" text="business_card" />
        </ControlWrapper>
    );
}

function ScaleRange({ scale, setScale }) {
    return (
        <ControlWrapper className="flex flex-col h-[50%] rounded-t-full rounded-b-full items-center">
            <ZoomIn />
            <Slider
                value={[scale]}
                onValueChange={([value]) => setScale(value)}
                min={0.1}
                max={2.5}
                step={0.1}
                orientation="vertical"
                className="flex-1"
                tooltipContent={`${Math.round(scale * 100)}%`}
            />
            <ZoomOut />
        </ControlWrapper>
    );
}

function ControlWrapper({ className, children }) {
    return (
        <div
            className={cn(
                'bg-neutral-800 p-2 shadow-black shadow-md inline-flex print:hidden gap-4 pointer-events-auto',
                className
            )}
        >
            {children}
        </div>
    );
}