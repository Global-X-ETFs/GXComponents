import React from "react";
import cn from "../Utils/cn";
import { VariantProps, cva } from "class-variance-authority";

const rtcBlockVariants = cva("", {
  variants: {
    variant: {
      home: "items-center",
      fund: "",
    },
  },
  defaultVariants: {
    variant: "home",
  },
});

export interface RTCBlockProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof rtcBlockVariants> { }

const RTCBlock = React.forwardRef<HTMLDivElement, RTCBlockProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col w-full mb-7",
          rtcBlockVariants({ variant }),
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

RTCBlock.displayName = "RTCBlock";

interface RTCBlockIconProps extends React.HTMLAttributes<HTMLDivElement> {
  imageURL: string;
  fillOrange?: boolean;
}

const RTCBlockIcon = React.forwardRef<HTMLDivElement, RTCBlockIconProps>(
  ({ children, imageURL, className, fillOrange, ...props }, ref) => {
    return (
      <div ref={ref} className="w-32 object-cover mb-5" {...props}>
        <img
          alt="Global RTC Icon"
          className="max-w-32 max-h-32"
          style={fillOrange ? { filter: 'brightness(0) saturate(100%) invert(44%) sepia(76%) saturate(3950%) hue-rotate(0deg) brightness(98%) contrast(109%)' } : {}}
          src={imageURL}
        />
      </div>
    );
  },
);

RTCBlockIcon.displayName = "RTCBlockIcon";

const rtcBlockTitleVariants = cva("", {
  variants: {
    variant: {
      home: "text-center max-w-44 font-semibold text-lg ",
      fund: "border-b border-b-black pb-3 font-proximatight text-xl",
    },
  },
  defaultVariants: {
    variant: "home",
  },
});

interface RTCBlockTitleProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof rtcBlockTitleVariants> { }

const RTCBlockTitle = React.forwardRef<HTMLDivElement, RTCBlockTitleProps>(
  ({ children, variant, className, ...props }, ref) => {
    return (
      <h3
        className={cn(
          "font-sans font-bold text-marine w-full ",
          rtcBlockTitleVariants({ variant }),
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </h3>
    );
  },
);

RTCBlockTitle.displayName = "RTCBlockTitle";

const rtcBlockDescriptionVariants = cva("", {
  variants: {
    variant: {
      home: "text-md",
      fund: "text-lg",
    },
  },
  defaultVariants: {
    variant: "home",
  },
});

interface RTCBlockDescriptionProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof rtcBlockDescriptionVariants> { }

const RTCBlockDescription = React.forwardRef<
  HTMLDivElement,
  RTCBlockDescriptionProps
>(({ children, className, variant, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        " text-granite font-proxima my-4 flex-1",
        rtcBlockDescriptionVariants({ variant }),
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});

RTCBlockDescription.displayName = "RTCBlockDescription";

export { RTCBlock, RTCBlockIcon, RTCBlockTitle, RTCBlockDescription };
