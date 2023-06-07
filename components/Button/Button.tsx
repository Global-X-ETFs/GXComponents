import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../utils";

const buttonVariants = cva(
    "text-white p-2 rounded-md text-black p-2 rounded-md",
    {
    variants: {
        variant: {
            primary: "bg-red-500 hover:bg-red-600",
            secondary:
                "bg-blue-500 hover:bg-blue-600",
        },
    },
    defaultVariants: {
        variant: "primary",
    },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
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
