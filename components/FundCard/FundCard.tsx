import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../utils";

const fundCardVariants = cva(
  "flex cursor-pointer content-center bg-white px-[20px] py-[5px] shadow-card hover:bg-white-hover",
  {
    variants: {
      border: {
        top_accent: "border-t-2 border-accent",
      },
    },
  }
);

export interface FundCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fundCardVariants> {}

const FundCard = React.forwardRef<HTMLDivElement, FundCardProps>(
  ({ className, border, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(fundCardVariants({ border, className }))}>
        {props.children}
      </div>
    );
  }
);

FundCard.displayName = "FundCard";

export { FundCard };
