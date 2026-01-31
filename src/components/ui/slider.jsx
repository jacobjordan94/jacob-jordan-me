import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import { cn } from "@/lib/utils"
import { Triangle } from "lucide-react"
import { motion } from "motion/react";

const Slider = React.forwardRef(({
  className,
  orientation = "horizontal",
  tooltipContent,
  ...props
}, ref) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  const thumb = (
    <SliderPrimitive.Thumb
      onPointerDown={() => setShowTooltip(true)}
      onPointerUp={() => setShowTooltip(false)}
      onPointerLeave={() => setShowTooltip(false)}
      className={cn(
        "block drop-shadow-black drop-shadow-xs h-5 w-5 rounded-full border-2 border-transparent bg-white transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        orientation === "vertical" && "-ml-[6px]",
      )}
    />
  );

  return (
    <SliderPrimitive.Root
      ref={ref}
      orientation={orientation}
      className={cn(
        "relative flex touch-none select-none",
        orientation === "horizontal" ? "w-full items-center" : "h-full flex-col justify-center",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        className={cn(
          "relative grow overflow-hidden rounded-full bg-white",
          orientation === "horizontal" ? "h-2 w-full" : "w-2 h-full"
        )}
      >
        <SliderPrimitive.Range
          className={cn(
            "absolute bg-primary",
            orientation === "horizontal" ? "h-full" : "w-full"
          )}
        />
      </SliderPrimitive.Track>

      {tooltipContent !== undefined ? (
        <TooltipProvider>
          <Tooltip open={showTooltip}>
            <TooltipTrigger asChild>
              {thumb}
            </TooltipTrigger>
            <TooltipContent
              side={orientation === "vertical" ? "right" : "top"}
              sideOffset={0}
              className="border-0 shadow-none"
            >
              <motion.div layout="size" className="flex items-center drop-shadow-black drop-shadow-sm">
                <Triangle className="-rotate-90" fill="#262626" color="#262626" />
                <div className="tooltip-content rounded-r-full rounded-l-full p-2 bg-neutral-800 text-white text-xl font-[MisterPixel] -translate-x-2">
                  {tooltipContent}
                </div>
              </motion.div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : thumb}
    </SliderPrimitive.Root>
  );
})
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
