import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import React from "react";
import { cn } from "../utils";

const fundCardSubTitleVariants = cva(
  "text-4xl font-bold tracking-normal text-accent",
  {
    variants: {},
  }
);

export interface FundCardSubTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof fundCardSubTitleVariants> {}

const FundCardSubTitle = React.forwardRef<
  HTMLHeadingElement,
  FundCardSubTitleProps
>(({ className, ...props }, ref) => {
  return (
    <h4
      ref={ref}
      className={cn(fundCardSubTitleVariants({ className }))}
      {...props}
    >
      {props.children}
    </h4>
  );
});

FundCardSubTitle.displayName = "FundCardSubTitle";

export { FundCardSubTitle };
