import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import React from "react";
import cn from "../Utils/cn";

const printHeroVariants = cva("flex space-x-8 bg-darkblue px-8", {
  variants: {},
});

export interface PrintHeroProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof printHeroVariants> {
  title?: string;
  rhs?: { title: string; subtitle: string };
  imageURL?: string;
}

const PrintHero = React.forwardRef<HTMLDivElement, PrintHeroProps>(
  ({ className, title, rhs, imageURL, ...props }, ref) => {
    return (
      <div className="preflight">
        <div
          ref={ref}
          className={cn(printHeroVariants({ className }))}
          {...props}
        >
          <div className="before:notch relative flex flex-grow flex-col justify-center py-8">
            <h1 className="text-6xl text-orange">{title}</h1>
          </div>
          <div className="before:notch relative flex flex-grow flex-col justify-center gap-2 py-8">
            <h2 className="text-2xl  text-white">{rhs?.title}</h2>
            <p className="text-lg text-white">{rhs?.subtitle}</p>
          </div>
          <div className="flex items-center">
            <img src={imageURL} className="max-h-[8rem] object-contain p-8" />
          </div>
        </div>
      </div>
    );
  }
);

PrintHero.displayName = "PrintHero";

export { PrintHero };
