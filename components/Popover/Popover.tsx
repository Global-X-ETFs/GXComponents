"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import cn from "../Utils/cn";

const Popover = PopoverPrimitive.Root;

interface PopoverTriggerProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger> {
  className?: string;
}

const PopoverTrigger = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Trigger>,
  PopoverTriggerProps
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Trigger
    ref={ref}
    className={cn("border-0 bg-transparent cursor-pointer", className)}
    {...props}
  />
));

PopoverTrigger.displayName = PopoverPrimitive.Trigger.displayName;

interface PopoverContentProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
  className?: string;
}

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 shadow-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
        "data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2",
        "data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
