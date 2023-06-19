import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import React from "react";
import { cn } from "../utils";

const fundCardTitleVariants = cva(
  "py-1 font-proxima text-base font-bold leading-6 tracking-tight text-gray-900",
  {
    variants: {},
  }
);

export interface FundCardTitleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fundCardTitleVariants> {}

const FundCardTitle = React.forwardRef<HTMLDivElement, FundCardTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h4
        ref={ref}
        className={cn(fundCardTitleVariants({ className }))}
        {...props}
      >
        {children}
      </h4>
    );
  }
);

FundCardTitle.displayName = "FundCardTitle";

export { FundCardTitle };
