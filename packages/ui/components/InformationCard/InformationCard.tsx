import React from "react";
import cn from "../Utils/cn";
import { VariantProps, cva } from "class-variance-authority";

export interface InformationCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const InformationCard = React.forwardRef<HTMLDivElement, InformationCardProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        className={cn("bg-white px-4 pt-8 font-proxima", className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);

const informationCardHeaderVariants = cva("", {
  variants: {
    variant: {
      default: "flex-row items-baseline gap-4",
      sans: "flex-col items-start flex-wrap",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface InformationCardHeaderProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof informationCardHeaderVariants> { }

const InformationCardHeader = React.forwardRef<
  HTMLDivElement,
  InformationCardHeaderProps
>(({ children, className, variant, ...props }, ref) => {
  return (
    <div
      className={cn(
        "flex pb-2 ",
        informationCardHeaderVariants({ variant }),
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

const informationCardTitleVariants = cva("", {
  variants: {
    variant: {
      default: "font-proximatight font-bold text-xl",
      sans: "font-sans text-[26px] text-nowrap",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface InformationCardTitleProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof informationCardTitleVariants> {
  children?: React.ReactNode;
}

const InformationCardTitle = React.forwardRef<
  HTMLHeadingElement,
  InformationCardTitleProps
>(({ className, variant, ...props }, ref) => {
  return (
    <h2
      className={cn(
        "text-marine",
        informationCardTitleVariants({ variant }),
        className,
      )}
      ref={ref}
      {...props}
    >
      {props.children}
    </h2>
  );
});

const InformationCardSubtitle = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  return (
    <span
      className={cn("text-[13px] text-neutral-200", className)}
      ref={ref}
      {...props}
    ></span>
  );
});

export interface InformationCardContentProps
  extends React.HTMLAttributes<HTMLDivElement> { }

const InformationCardContent = React.forwardRef<
  HTMLDivElement,
  InformationCardContentProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      className={cn("border-t-4 border-neutral-600 ", className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

export interface InformationCardTextBoxProps
  extends React.HTMLAttributes<HTMLDivElement> { }

const InformationCardTextBox = React.forwardRef<
  HTMLDivElement,
  InformationCardTextBoxProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      className={cn("text-lg py-3 text-granite font-proxima", className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

const InformationCardRow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      className={cn(
        "flex flex-row justify-between items-center h-full py-1.5 border-b border-neutral-600 pl-1",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

export interface InformationCardNameProps
  extends React.HTMLAttributes<HTMLTableCellElement> { }

const InformationCardName = React.forwardRef<
  HTMLTableCellElement,
  InformationCardNameProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        "text-[15px] font-semibold text-marine font-proximatight",
        className,
      )}
    >
      {children}
    </div>
  );
});

export interface InformationCardValueProps
  extends React.HTMLAttributes<HTMLTableCellElement> { }

const InformationCardValue = React.forwardRef<
  HTMLTableCellElement,
  InformationCardValueProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        "text-[15px] text-marine font-normal font-proximatight",
        className,
      )}
    >
      {children}
    </div>
  );
});

export interface InformationCardFooterProps
  extends React.HTMLAttributes<HTMLDivElement> { }

const InformationCardFooter = React.forwardRef<
  HTMLDivElement,
  InformationCardFooterProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        "text-neutral-200 font-proxima text-[13px] py-2",
        className,
      )}
    >
      {children}
    </div>
  );
});

export {
  InformationCard,
  InformationCardHeader,
  InformationCardTitle,
  InformationCardSubtitle,
  InformationCardContent,
  InformationCardTextBox,
  InformationCardRow,
  InformationCardName,
  InformationCardValue,
  InformationCardFooter,
};
