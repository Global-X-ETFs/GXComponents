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
      search:
        "inline-flex w-full rounded-lg p-1 bg-marine text-neutral-400 justify-start text-2xl md:text-4xl mb-4 md:h-24",
      fund: "inline-flex border-b border-neutral-400 w-full px-2 ",
      simple: "inline-flex items-center gap-x-6",
    },
    tabTriggerStyle: {
      app: `inline-flex items-center justify-center 
          whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all        
          disabled:pointer-events-none disabled:opacity-50 
        data-[state=active]:bg-orange data-[state=active]:text-white data-[state=active]:shadow`,
      corp: "hover:text-marine transition-colors data-[state=active]:text-marine data-[state=active]:border-b-orange w-full max-w-64 py-8 data-[state=active]:border-b-4",
      search:
        "transition-colors data-[state=active]:border-b-orange border-b-transparent border-b-[3px] data-[state=active]:text-white hover:text-white md:px-2 mr-8 py-2 md:py-8 font-proxima",
      fund: ` font-proximatight font-bold px-4 md:text-xl pt-1 pb-2 relative top-[2px]
              data-[state=active]:pt-[3px] data-[state=active]:px-[15px]
              data-[state=active]:border-x data-[state=active]:border-neutral-400 data-[state=active]:border-t
              data-[state=active]:bg-white
             `,
      simple:
        "font-bold text-neutral-400 py-2 md:py-3 tracking-wide hover:text-marine transition-colors data-[state=active]:text-marine data-[state=active]:border-b-orange w-fit data-[state=active]:border-b-3",
      explore:
        "py-6 hover:text-orange data-[state=active]:border-b-orange text-nowrap pt-0 uppercase font-semibold text-xs sm:text-sm md:text-md tracking-widest data-[state=active]:border-b-3 text-marine",
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
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabGroupVariants({ tabListStyle }), className)}
    {...props}
  />
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

const tabsContentVariants = cva("", {
  variants: {
    variant: {
      corp: "mt-4",
      fund: "-mt-2",
    },
  },
  defaultVariants: {
    variant: "corp",
  },
});

interface TabsContentProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>,
  VariantProps<typeof tabsContentVariants> {
  className?: string;
}

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ className, variant, ...props }, ref) => {
  return (
    <TabsPrimitive.Content
      ref={ref}
      className={cn("", tabsContentVariants({ variant }), className)}
      {...props}
    />
  );
});

TabsContent.displayName = TabsPrimitive.Content.displayName;

export {
  TabGroup, TabsList, TabsTrigger, TabsContent
};
export type { TabGroupProps, TabsListProps, TabsTriggerProps };
