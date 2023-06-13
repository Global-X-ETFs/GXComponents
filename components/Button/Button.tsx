import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../utils";

const buttonVariants = cva(
    "p-2 rounded-md leading-7 font-bold tracking-normal",
    {
    variants: {
        variant: {
            link: "text-accent hover:text-accent-hover",
            transparent: "tracking-wide bg-transparent border py-2 px-6 border-white text-white hover:text-accent hover:border-accent transition-colors duration-200 ",
        },
        afterContent: {
            arrow: "after:content-['→'] after:transition-all after:relative after:left-0 hover:after:left-3 after:ml-1 ease-in-out hover:after:duration-600 ",
            default: "",
        },
    },
    defaultVariants: {
        variant: "link",
        afterContent: "default"
    },
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, afterContent, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, afterContent, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);

export { Button, buttonVariants };
