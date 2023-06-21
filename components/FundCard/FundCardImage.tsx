import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../utils";

const fundCardImageVariants = cva(
  "mr-2 flex h-auto w-[70px] flex-none flex-col justify-center "
);

export interface FundCardImageProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fundCardImageVariants> {
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

FundCardImage.displayName = "FundCardImage";

export { FundCardImage };
