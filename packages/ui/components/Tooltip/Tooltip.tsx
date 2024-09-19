import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import cn from "../Utils/cn";

const TooltipProvider = TooltipPrimitive.Provider;

interface TooltipProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root> {
  delayDuration?: number;
}

const Tooltip = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Root>,
  TooltipProps
>(({ delayDuration = 350, ...props }, ref) => (
  <TooltipPrimitive.Root delayDuration={delayDuration} {...props} />
));

interface TooltipTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger> {

}

const TooltipTrigger = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Trigger>,
  TooltipTriggerProps
>((props, ref) => (
  <TooltipPrimitive.Trigger ref={ref} {...props} />
));

TooltipTrigger.displayName = TooltipPrimitive.Trigger.displayName;

interface TooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
  className?: string;
}

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md bg-white px-3 py-1.5 text-xs animate-in",
      "fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2",
      "data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
export type { TooltipProps, TooltipContentProps, TooltipTriggerProps };
