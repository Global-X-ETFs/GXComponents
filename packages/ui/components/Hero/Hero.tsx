import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import React from "react";
import cn from "../Utils/cn";
import { Button } from "../Button";
import { StarFilledIcon } from "@radix-ui/react-icons";

const heroVariants = cva("", {
  variants: {
    variant: {
      home: "-mt-24 pb-8 md:pb-16 pt-20 md:pt-28 bg-[center_top_2rem] sm:bg-[length:1110px] ",
      basic: "-mt-24 pb-8 md:pb-16 pt-20 md:pt-28 bg-cover ",
      fund: "-mt-24 pt-20 lg:pt-28 pb-60 md:pb-80",
      empty: "-mt-24 pt-20 md:pt-28 pb-4 bg-cover",
      roadshow: "pb-8 bg-neutral-500 ",
    },
  },
});

export interface HeroProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof heroVariants> {
  children?: React.ReactNode;
  backgroundImageURL?: string;
}

const Hero = React.forwardRef<HTMLDivElement, HeroProps>(
  ({ children, className, backgroundImageURL, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-marine flex bg-top bg-no-repeat",
          heroVariants({ variant }),
        )}
        style={{
          backgroundImage: `url('${backgroundImageURL}')`,
        }}
        {...props}
      >
        <div
          className={cn(
            "flex flex-grow mx-auto max-w-1268 flex-col justify-center text-white px-[30px] gap-12 lg:gap-0",
            className,
          )}
        >
          {children}
        </div>
      </div>
    );
  },
);

Hero.displayName = "Hero";

const heroHeaderVariants = cva("", {
  variants: {
    variant: {
      home: "",
      basic: "",
      fund: "lg:flex items-baseline flex-wrap",
    },
  },
});

interface HeroHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof heroHeaderVariants> {}

const HeroHeader = React.forwardRef<HTMLDivElement, HeroHeaderProps>(
  ({ children, className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("", heroHeaderVariants({ variant }), className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

HeroHeader.displayName = "HeroHeader";

const heroTitleVariants = cva("", {
  variants: {
    variant: {
      home: "mx-auto content-center px-12 text-center before:notchHero",
      basic: "text-left before:notchHeroStatic",
      "basic-indented": "text-left before:notchHeroStatic md:ml-[11.5%]",
      fund: "text-left text-10xl basis-64 lg:my-4 mb-12 font-bold",
      search: "before:notchHeroStatic mr-auto text-left",
    },
  },
});

interface HeroTitleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof heroTitleVariants> {
  sup?: string;
}

const HeroTitle = React.forwardRef<HTMLDivElement, HeroTitleProps>(
  ({ children, sup, className, variant, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(
          "mb-14 mt-14 font-sans md:text-10xl text-8xl relative ",
          heroTitleVariants({ variant }),
          className,
        )}
      >
        {children}
        {sup && (
          <sup className="text-ml -top-5 md:-top-9 md:text-3xl">{sup}</sup>
        )}
      </h1>
    );
  },
);

HeroTitle.displayName = "HeroTitle";

const heroSubtitleVariants = cva("", {
  variants: {
    variant: {
      default: "px-6 mx-auto text-center",
      fund: "text-left before:notchHeroStatic before:-top-4 before:left-[2px] relative font-sans text-4xl flex-grow ",
      page: "font-sans text-xl text-left max-w-full mx-0 px-0",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface HeroSubtitleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof heroSubtitleVariants> {}

const HeroSubtitle = React.forwardRef<HTMLDivElement, HeroSubtitleProps>(
  ({ children, className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "font-proxima mb-18  mt-0 max-w-2xl text-pretty md:text-balance  text-xl",
          heroSubtitleVariants({ variant }),
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

HeroSubtitle.displayName = "HeroSubtitle";

const heroContentVariants = cva("", {
  variants: {
    variant: {
      home: "",
      basic: "",
      fund: "sm:flex items-center",
    },
  },
});

interface HeroContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof heroContentVariants> {}

const HeroContent = React.forwardRef<HTMLDivElement, HeroContentProps>(
  ({ children, className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("", heroContentVariants({ variant }), className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

HeroContent.displayName = "HeroContent";

interface HeroActionButtonProps extends React.HTMLAttributes<HTMLDivElement> {}

const HeroActionButton = React.forwardRef<
  HTMLDivElement,
  HeroActionButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("mt-3 basis-64 flex-shrink-0", className)}
      {...props}
    >
      <Button variant="transparent">{children}</Button>
    </div>
  );
});

HeroActionButton.displayName = "HeroActionButton";

interface HeroFilterByButtonProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const HeroFilterByButton = React.forwardRef<
  HTMLDivElement,
  HeroFilterByButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("mt-3 basis-60 flex-shrink-0 mr-3", className)}
      {...props}
    >
      <Button
        afterContent="chevronDown"
        className="text-lg rounded-md"
        variant="border"
      >
        {children}
      </Button>
    </div>
  );
});

HeroFilterByButton.displayName = "HeroFilterByButton";

interface HeroRatingProps extends React.HTMLAttributes<HTMLDivElement> {
  rating: number;
  rater: string;
}

const HeroRating = React.forwardRef<HTMLDivElement, HeroRatingProps>(
  ({ children, className, rating, rater, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("mt-8 md:mt-3", className)} {...props}>
        <div className="-ml-0.5 inline sm:block relative h-6">
          {[...Array(rating)].map((_, i) => (
            <StarFilledIcon
              key={i}
              className="w-4 h-4 mx-0.5 text-white inline-block"
            />
          ))}
        </div>
        <h3 className="  sm:ml-0 ml-1 text-white inline relative text-md">
          {rater}{" "}
          <small className="text-sea text-sm text-wrap  block sm:inline">
            {children}
          </small>
        </h3>
      </div>
    );
  },
);

HeroRating.displayName = "HeroRating";

export {
  Hero,
  HeroTitle,
  HeroSubtitle,
  HeroActionButton,
  HeroFilterByButton,
  HeroRating,
  HeroHeader,
  HeroContent,
};
