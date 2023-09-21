"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import cn from "../Utils/cn";

const TabGroup = TabsPrimitive.Root;

interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {
  className?: string;
}

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, ...props }, ref) => (
  <div className="preflight">
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        "inline-flex h-9 items-center justify-center rounded-lg bg-neutral-400 p-1 text-black",
        className,
      )}
      {...props}
    />
  </div>
));

TabsList.displayName = TabsPrimitive.List.displayName;

interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
  className?: string;
}

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      `inline-flex items-center justify-center 
        whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all        
        disabled:pointer-events-none disabled:opacity-50 
        data-[state=active]:bg-orange data-[state=active]:text-white data-[state=active]:shadow`,
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ ...props }, ref) => {
  return <TabsPrimitive.Content ref={ref} className={"mt-4"} {...props} />;
});

TabsContent.displayName = TabsPrimitive.Content.displayName;

export { TabGroup, TabsList, TabsTrigger, TabsContent };
