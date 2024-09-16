"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import cn from "../Utils/cn";

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  id: string;
  children: React.ReactNode;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ children, id, className, ...props }, ref) => (
  <div
    className={cn("grid grid-cols-[30px_auto] items-center gap-4", className)}
  >
    <CheckboxPrimitive.Root
      ref={ref}
      id={id}
      className={cn(
        "focus:outline-orange peer grid aspect-square h-8 w-8 gap-4 border-2  border-neutral-300 disabled:cursor-not-allowed disabled:opacity-50",
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator>
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
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    <label
      htmlFor={id}
      className="text-md text-granite col-start-2 w-full font-medium"
    >
      {children}
    </label>
  </div>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
