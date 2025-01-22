import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import React from "react";
import cn from "../Utils/cn";

const fundCardVariants = cva(
  "flex cursor-pointer content-center w-full bg-white px-5 py-2.5 shadow-card hover:scale-105 hover:bg-neutral-700 transition ease-in-out duration-300",
  {
    variants: {
      border: {
        top_accent: "border-t-2 border-orange",
      },
    },
  },
);

export interface FundCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fundCardVariants> {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  imgClassName?: string;
}

const FundCard = React.forwardRef<HTMLDivElement, FundCardProps>(
  ({ className, border, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(fundCardVariants({ border, className }))}>
        <div className="mr-2 flex h-auto w-17.5 flex-none flex-col justify-center">
          <img
            src={props.src}
            alt={props.alt}
            className={cn(
              "max-h-[70px]",
              props.imgClassName,
            )}
            style={!props.imgClassName ? { filter: "invert(14%) sepia(31%) saturate(2874%) hue-rotate(156deg) brightness(93%) contrast(103%)" } : null} //converting from black to marine
          />
        </div>
        <div ref={ref} className="self-center overflow-hidden px-3.75 py-3">
          {props.title && (
            <h4
              ref={ref}
              className="py-0 font-proximatight text-base font-bold leading-6 tracking-tight text-marine"
            >
              {props.title}
            </h4>
          )}
          {/* sub title */}
          <h4
            ref={ref}
            className="py-0 text-4xl font-sans font-bold leading-none tracking-normal text-orange"
          >
            {props.subtitle}
          </h4>
        </div>
      </div>
    );
  },
);

FundCard.displayName = "FundCard";

export { FundCard };
