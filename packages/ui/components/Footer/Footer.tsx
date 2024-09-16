import React from "react";
import cn from "../Utils/cn";

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode[];
}

const Footer = React.forwardRef<HTMLDivElement, FooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div className="w-full bg-marine">
        <div
          className={cn(
            "flex mx-auto flex-wrap md:flex-nowrap max-w-1268 md:gap-4 px-4 md:px-8 py-12  items-start justify-between divide-teal md:divide-none",
            className,
          )}
          ref={ref}
          {...props}
        >
          {...children}
        </div>
      </div>
    );
  },
);

Footer.displayName = "Footer";

export interface FooterSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  isVisibleMobile?: boolean;
  isGroupedVerticallyMobile?: boolean;
}

const FooterSection = React.forwardRef<HTMLDivElement, FooterSectionProps>(
  (
    {
      children,
      className,
      isVisibleMobile = false,
      isGroupedVerticallyMobile,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={cn(
          " ",
          `${isVisibleMobile ? "flex" : "hidden"} md:flex`,
          `${isGroupedVerticallyMobile ? "w-full md:w-auto" : "pt-8 md:pt-0"}`,
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);

FooterSection.displayName = "FooterSection";

export { Footer, FooterSection };
