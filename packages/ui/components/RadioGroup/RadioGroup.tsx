"use client";

import * as React from "react";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import cn from "../Utils/cn";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn(
        " grid grid-cols-[30px_auto] my-4 items-center gap-4 lg:grid-cols-[30px_auto_30px_auto]",
        className,
      )}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "focus-visible:ring-orange my-1.5 shrink-1 focus-visible:outline-orange-hover peer h-8  w-8 border-2  border-neutral-300 disabled:cursor-not-allowed disabled:opacity-50  ",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex aspect-square items-center justify-center">
        <svg
          className="text-orange h-full w-full px-1 pb-1 pt-1.5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.55 15.39"
        >
          <polyline
            points="1.41 6.99 6.99 12.56 18.13 1.41"
            fill="none"
            stroke="#ff5400"
            strokeMiterlimit="10"
            strokeWidth="4"
          />
        </svg>
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

interface RadioGroupLabelProps extends React.ComponentPropsWithoutRef<"label"> {
  children: React.ReactNode;
}

const RadioGroupLabel = React.forwardRef<
  React.ElementRef<"label">,
  RadioGroupLabelProps & { htmlFor: string }
>(({ children, htmlFor, ...props }, ref) => {
  return (
    <label
      ref={ref}
      htmlFor={htmlFor}
      className="text-md text-granite cursor-pointer font-medium"
      {...props}
    >
      {children}
    </label>
  );
});

RadioGroupLabel.displayName = "RadioGroupLabel";

export { RadioGroup, RadioGroupItem, RadioGroupLabel };
