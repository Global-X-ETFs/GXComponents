import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { cn } from "../utils";

const fundCardTitleVariants = cva(
    "text-base leading-6 text-gray-900 py-1 font-bold tracking-tight font-proxima",
    {
        variants: {}
    }
);

export interface FundCardTitleProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof fundCardTitleVariants> { }


const FundCardTitle = React.forwardRef<HTMLDivElement, FundCardTitleProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <h4 ref={ref} className={cn(fundCardTitleVariants({ className }))} {...props}>
                {children}
            </h4>
        );
    }
);


export {FundCardTitle};