import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import React from "react";
import cn from "../Utils/cn";

const fundCardVariants = cva(
  "flex cursor-pointer content-center bg-white px-5 py-1 shadow-card hover:bg-neutral-700",
  {
    variants: {
      border: {
        top_accent: "border-t-2 border-orange",
      },
    },
  }
);

export interface FundCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fundCardVariants> {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}

const FundCard = React.forwardRef<HTMLDivElement, FundCardProps>(
  ({ className, border, ...props }, ref) => {
    return (
      <div className="preflight">
        <div ref={ref} className={cn(fundCardVariants({ border, className }))}>
          <div className="mr-2 flex h-auto w-17.5 flex-none flex-col justify-center">
            <img src={props.src} alt={props.alt} />
          </div>
          <div ref={ref} className="self-center overflow-hidden px-3.75 py-3">
            {props.title && (
              <h4
                ref={ref}
                className="py-1 font-proxima text-base font-bold leading-6 tracking-tight text-gray-900"
              >
                {props.title}
              </h4>
            )}
            {/* sub title */}
            <h4
              ref={ref}
              className="text-4xl font-bold tracking-normal text-orange"
            >
              {props.subtitle}
            </h4>
          </div>
        </div>
      </div>
    );
  }
);

FundCard.displayName = "FundCard";

export { FundCard };
