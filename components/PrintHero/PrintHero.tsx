import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import React from "react";
import cn from "../Utils/cn";

const printHeroVariants = cva(
  "flex flex-col overflow-hidden px-8 md:flex-row md:space-x-8",
  {
    variants: {
      backgroundColour: {
        darkblue: "bg-darkblue",
        transparent: "bg-transparent",
      },
    },
    defaultVariants: {
      backgroundColour: "transparent",
    },
  },
);

export interface PrintHeroProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof printHeroVariants> {
  title?: string;
  rhs?: { title: string; subtitle: string };
  imageURL?: string;
  backgroundImageURL?: string;
}

const PrintHero = React.forwardRef<HTMLDivElement, PrintHeroProps>(
  (
    {
      className,
      title,
      rhs,
      imageURL,
      backgroundColour,
      backgroundImageURL,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={cn("preflight", backgroundImageURL ? "bg-cover" : "")}
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url('${backgroundImageURL}')`,
        }}
      >
        <div
          ref={ref}
          className={cn(printHeroVariants({ className, backgroundColour }))}
          {...props}
        >
          <div className="md:before:notch relative flex flex-grow flex-col justify-center py-8">
            <h1 className="text-6xl text-orange">{title}</h1>
          </div>
          <div className="before:notch relative flex flex-grow flex-col justify-center gap-2 py-8">
            <h2 className="text-2xl  text-white">{rhs?.title}</h2>
            <p className="text-lg text-white">{rhs?.subtitle}</p>
          </div>
          <div className="hidden items-center md:flex">
            <img src={imageURL} className="h-2/3 w-16 object-contain " />
          </div>
        </div>
      </div>
    );
  },
);

PrintHero.displayName = "PrintHero";

export { PrintHero };
