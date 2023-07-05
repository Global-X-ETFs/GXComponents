import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import React from "react";
import cn from "../Utils/cn";

const cardVariants = cva(
  "flex content-center bg-white px-12 py-8 shadow-card",
  {
    variants: {
      border: {
        top_accent: "border-t-2 border-orange",
      },
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  children?: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, border, ...props }, ref) => {
    return (
      <div className="preflight">
        <div ref={ref} className={cn(cardVariants({ border, className }))}>
          {props.children}
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };
