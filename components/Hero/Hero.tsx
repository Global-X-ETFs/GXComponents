import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import React from "react";
import cn from "../Utils/cn";

const heroVariants = cva("flex content-center bg-red py-8", {
  variants: {
    backgroundColour: {
      marine: "bg-marine",
      transparent: "bg-transparent",
    },
  },
});

export interface HeroProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof heroVariants> {
  children?: React.ReactNode;
  backgroundImageURL?: string;
  headers?: { title: string; subtitle: string };
}

const Hero = React.forwardRef<HTMLDivElement, HeroProps>(
  ({ children, className, backgroundImageURL, headers, ...props }, ref) => {
    return (
      <div
        className="preflight -mt-[105px] pt-[105px]"
        style={{
          background: `#002F37 url('${backgroundImageURL}') center no-repeat`,
          backgroundSize: "cover",
        }}
        {...props}
      >
        <div ref={ref} className={cn(heroVariants({ className }))}>
          <div className="flex flex-grow flex-col justify-center text-white py-8">
            <div className="mt-28 mb-14 mx-auto xs:before:notchHero relative">
              <h1 className="md:text-8xl xs:text-7xl text-center">
                {headers?.title}
                <sup className="md:text-3xl xs:text-ml md:-top-9 xs:-top-5">
                  ™
                </sup>
              </h1>
            </div>
            <div className="font-proxima text-xl text-center max-w-xl mt-0 mx-auto mb-18 whitespace-pre-wrap">
              <p>{headers?.subtitle}</p>
            </div>
            {children}
          </div>
        </div>
      </div>
    );
  },
);

Hero.displayName = "Hero";

export { Hero };
