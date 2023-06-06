"use client";

import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../utils";

const buttonVariants = cva(
    "Button",
    {
    variants: {
        variant: {
            primary: "bg-red-500 text-white p-2 rounded-md hover:bg-red-600",
            secondary:
                "bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600",
        },
    },
    defaultVariants: {
        variant: "primary",
    },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);

export { Button, buttonVariants };
