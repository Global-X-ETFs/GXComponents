import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../utils";

const fundCardVariants = cva(
    "flex content-center cursor-pointer py-[5px] px-[20px] bg-white shadow-card hover:bg-white-hover",
    {
    variants: {
        border: {
            top_accent: "border-accent border-t-2"
        },
    }
});

export interface FundCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof fundCardVariants> { }

const FundCard = React.forwardRef<HTMLDivElement, FundCardProps>(
    ({ className, border, ...props }, ref) => {
        return (
            <div ref={ref} className={cn(fundCardVariants({ border, className }))}>
                {props.children}
            </div>
        );
    }
);


export { FundCard };