
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../utils";

const inputVariants = cva(
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

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, variant, ...props }, ref) => {
        return (
            <input
                className={cn(inputVariants({ variant, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);

export { Input, inputVariants };
