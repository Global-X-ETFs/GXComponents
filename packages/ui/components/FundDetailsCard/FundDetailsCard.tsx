import React from "react";
import cn from "../Utils/cn";

export interface FundDetailsCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const FundDetailsCard = React.forwardRef<HTMLDivElement, FundDetailsCardProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        className={cn("bg-white px-4 py-12 font-proxima", className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);

const FundDetailsCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      className={cn(
        "flex flex-row flex-wrap items-baseline pb-6 gap-4",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

export interface FundDetailsCardTitleProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const FundDetailsCardTitle = React.forwardRef<
  HTMLHeadingElement,
  FundDetailsCardTitleProps
>(({ className, ...props }, ref) => {
  return (
    <h2
      className={cn("text-marine font-sans text-3.5xl", className)}
      ref={ref}
      {...props}
    >
      {props.children}
    </h2>
  );
});

const FundDetailsCardSubtitle = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  return (
    <span
      className={cn("text-neutral-100 text-[13px]", className)}
      ref={ref}
      {...props}
    ></span>
  );
});

export interface FundDetailsCardContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const FundDetailsCardContent = React.forwardRef<
  HTMLDivElement,
  FundDetailsCardContentProps
>(({ children, className, ...props }, ref) => {
  return (
    <div
      className={cn(
        "border-t-4 border-neutral-600 divide-y divide-neutral-600 text-granite font-proxima text-md",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

export interface FundDetailsCardFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const FundDetailsCardFooter = React.forwardRef<
  HTMLDivElement,
  FundDetailsCardFooterProps
>(({ children, className, ...props }, ref) => {
  return (
    <footer
      className={cn(
        "text-neutral-200 font-proximatight mt-8 text-md gap-4 flex flex-col ",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </footer>
  );
});

export {
  FundDetailsCard,
  FundDetailsCardHeader,
  FundDetailsCardTitle,
  FundDetailsCardSubtitle,
  FundDetailsCardContent,
  FundDetailsCardFooter,
};
