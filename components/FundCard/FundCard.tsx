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

export interface FundCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof fundCardVariants> {
    src: string;
    alt: string;
    title: string;
    subtitle: string;
 }

const FundCard = React.forwardRef<HTMLDivElement, FundCardProps>(
    ({ className, border, ...props }, ref) => {
        return (
            <div ref={ref} className={cn(fundCardVariants({ border, className }))}>
                <div className="h-auto flex flex-col justify-center mr-2 flex-none w-[70px]">
                    <img src={props.src} alt={props.alt} />
                </div>
                <div ref={ref} className="py-[12px] px-[15px] self-center overflow-hidden">
                    <h4 ref={ref} className="text-base leading-6 text-gray-900 py-1 font-bold tracking-tight font-proxima">
                        {props.title}
                    </h4>
                    {/* sub title */}
                    <h4 ref={ref} className="text-4xl font-bold tracking-normal text-accent">
                        {props.subtitle}
                    </h4>
                </div>  
            </div>
        );
    }
);


export default FundCard;