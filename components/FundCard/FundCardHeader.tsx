import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../utils";

const fundCardHeaderVariants = cva(
  "self-center overflow-hidden px-[15px] py-[12px] ",
  {
    variants: {},
  }
);

export interface FundCardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fundCardHeaderVariants> {}
const FundCardHeader = React.forwardRef<HTMLDivElement, FundCardHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(fundCardHeaderVariants({ className }))}>
        {props.children}
      </div>
    );
  }
);

FundCardHeader.displayName = "FundCardHeader";

export { FundCardHeader };
