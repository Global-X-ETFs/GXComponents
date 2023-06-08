import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../utils";

const fundCardImageVariants = cva(
    "h-auto flex flex-col justify-center mr-2 flex-none w-[70px]"
);


export interface FundCardImageProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof fundCardImageVariants> {
    src: string;
    alt: string;
}

const FundCardImage = React.forwardRef<HTMLDivElement, FundCardImageProps>(
    ({ className, ...props }, ref) => {
        return (
            <div ref={ref} className={cn(fundCardImageVariants({ className }))}>
                <img src={props.src} alt={props.alt} />
            </div>
        );
    }
);

export {FundCardImage};
