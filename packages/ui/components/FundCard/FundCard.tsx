import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import React from "react";
import cn from "../Utils/cn";

const fundCardVariants = cva("", {
  variants: {
    border: {
      top_accent: "border-t-2 border-orange",
    },
  },
});

export interface FundCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fundCardVariants> {}

const FundCard = React.forwardRef<HTMLDivElement, FundCardProps>(
  ({ className, border, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mr-2 flex h-auto w-full items-center justify-start",
          "cursor-pointer content-center bg-white px-5 py-2.5 shadow-card hover:scale-105 hover:bg-neutral-700 transition ease-in-out duration-300",
          fundCardVariants({ border }),
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

FundCard.displayName = "FundCard";

interface FundCardImageProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  filter?: "black" | "marine"; 
}

const FundCardImage = React.forwardRef<HTMLImageElement, FundCardImageProps>(
  ({ className, src, alt, filter, ...props }, ref) => {
    let filterStyles;
    switch (filter) {
      case "black":
        filterStyles = { filter: "brightness(0) saturate(100)" };
        break;
      case "marine":
        filterStyles = { filter: "invert(14%) sepia(31%) saturate(2874%) hue-rotate(156deg) brightness(93%) contrast(103%)" };
        break;
      default:
        filterStyles = {};
    }

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={cn("max-h-[70px] w-17.5 items-center", className)}
        style={filterStyles}
        
        {...props}
      />
    );
  }
);

FundCardImage.displayName = "FundCardImage";

interface FundCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const FundCardHeader = React.forwardRef<HTMLDivElement, FundCardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex ml-2 items-start flex-col", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

interface FundCardTitleProps extends React.HTMLAttributes<HTMLDivElement> {}

const FundCardTitle = React.forwardRef<HTMLDivElement, FundCardTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h4
        ref={ref}
        className={cn(
          "py-0 font-proximatight text-base font-bold leading-6 tracking-tight text-marine",
          className
        )}
        {...props}
      >
        {children}
      </h4>
    );
  }
);

FundCardTitle.displayName = "FundCardTitle";

interface FundCardSubtitleProps extends React.HTMLAttributes<HTMLDivElement> {}

const FundCardSubtitle = React.forwardRef<
  HTMLDivElement,
  FundCardSubtitleProps
>(({ className, children, ...props }, ref) => {
  return (
    <h4
      ref={ref}
      className={cn(
        "py-0 text-4xl font-sans font-bold leading-none tracking-normal text-orange",
        className
      )}
      {...props}
    >
      {children}
    </h4>
  );
});

FundCardSubtitle.displayName = "FundCardSubtitle";

export {
  FundCard,
  FundCardImage,
  FundCardHeader,
  FundCardTitle,
  FundCardSubtitle,
};
