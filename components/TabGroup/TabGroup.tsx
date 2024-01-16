"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import cn from "../Utils/cn";
import { VariantProps, cva } from "class-variance-authority";

const tabGroupVariants = cva("", {
  variants: {
    tabGroupStyle: {
      app: "",
      corp: "w-full",
    },
    tabListStyle: {
      app: "inline-flex h-9 items-center justify-center rounded-lg bg-neutral-400 p-1 text-black",
      corp: "inline-flex h-9 w-full justify-evenly rounded-lg bg-white p-1 text-neutral-200",
    },
    tabTriggerStyle: {
      app: `inline-flex items-center justify-center 
          whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all        
          disabled:pointer-events-none disabled:opacity-50 
        data-[state=active]:bg-orange data-[state=active]:text-white data-[state=active]:shadow`,
      corp: "hover:text-black transition-colors data-[state=active]:text-black data-[state=active]:border-b-orange px-10 py-8 data-[state=active]:border-b-4",
    },
  },
});

interface TabGroupProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>,
    VariantProps<typeof tabGroupVariants> {
  className?: string;
}

const TabGroup = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabGroupProps
>(({ className, tabGroupStyle = "app", ...props }, ref) => (
  <TabsPrimitive.Root
    ref={ref}
    className={cn(tabGroupVariants({ tabGroupStyle }), className)}
    {...props}
  />
));

interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
    VariantProps<typeof tabGroupVariants> {
  className?: string;
}

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, tabListStyle = "app", ...props }, ref) => (
  <div className="preflight">
    <TabsPrimitive.List
      ref={ref}
      className={cn(tabGroupVariants({ tabListStyle }), className)}
      {...props}
    />
  </div>
));

TabsList.displayName = TabsPrimitive.List.displayName;

interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof tabGroupVariants> {
  className?: string;
}

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, tabTriggerStyle = "app", ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(tabGroupVariants({ tabTriggerStyle }), className)}
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

export {
  TabGroup,
  TabGroupProps,
  TabsList,
  TabsListProps,
  TabsTrigger,
  TabsTriggerProps,
  TabsContent,
};
