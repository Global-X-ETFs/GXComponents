"use client";

import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import cn from "../Utils/cn";

const HoverCard = HoverCardPrimitive.Root;

interface HoverCardTriggerProps
  extends React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Trigger> {
  className?: string;
}

const HoverCardTrigger = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Trigger>,
  HoverCardTriggerProps
>(({ className, children, ...props }, ref) => (
  <HoverCardPrimitive.Trigger
    ref={ref}
    className={cn("font-sans", className)}
    {...props}
  >
    {children}
  </HoverCardPrimitive.Trigger>
));
HoverCardTrigger.displayName = HoverCardPrimitive.Trigger.displayName;

interface HoverCardContentProps
  extends React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content> {
  className?: string;
}

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  HoverCardContentProps
>(({ className, children, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn("z-50", className)}
    {...props}
  >
    {children}
  </HoverCardPrimitive.Content>
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
