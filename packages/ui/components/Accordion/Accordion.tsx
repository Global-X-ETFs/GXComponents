import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import type { VariantProps } from "class-variance-authority";
import cn from "../Utils/cn";
import { cva } from "class-variance-authority";

const Accordion = AccordionPrimitive.Root;

const accordionVariants = cva("", {
  variants: {
    variant: {
      standard: "border-b",
      mobileNav: "",
    },
  },
  defaultVariants: {
    variant: "standard",
  },
});

interface AccordionItemProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>,
  VariantProps<typeof accordionVariants> {
  className?: string;
}

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>(({ className, variant, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("", variant, className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const accordionTriggerVariants = cva("", {
  variants: {
    triggerStyle: {
      standard: "hover:bg-neutral-700 text-marine py-4 ",
      mobileNav: "text-white",
      card: "h-full",
      leftAligned: "flex-row-reverse items-center justify-end gap-3 text-orange font-bold font-proxima text-[15px] h-6 -ml-1",
    },
    chevronStyle: {
      standard: "shrink-0 text-orange",
      large: "w-6 h-6 text-orange",
      mobileNav: " shrink-0 w-6 h-6 ml-2 text-white",
      card: "hidden",
      leftAligned: "shrink-0 w-6 h-6 text-orange",
    },
  },
});

interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>,
  VariantProps<typeof accordionTriggerVariants> { }

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, triggerStyle, chevronStyle, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 h-4 w-full flex-nowrap items-center transition-all cursor-pointer [&[data-state=open]>svg]:rotate-180",
        accordionTriggerVariants({ triggerStyle: triggerStyle }),
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon
        className={cn(
          "transition-transform duration-200",
          accordionTriggerVariants({ chevronStyle: chevronStyle }),
        )}
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

interface AccordionContentProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {
  className?: string;
}

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  AccordionContentProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("py-4", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
