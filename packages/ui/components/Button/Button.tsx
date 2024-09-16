import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import React from "react";
import cn from "../Utils/cn";

const buttonVariants = cva(
  "disabled:text-orange-hover focus:outline-orange disabled:hover:text-orange-hover relative rounded-md font-bold leading-7 tracking-normal disabled:cursor-not-allowed ",
  {
    variants: {
      variant: {
        link: "text-orange hover:text-orange-hover",
        caps: "text-orange hover:text-orange-hover uppercase font-proximatight tracking-widest leading-7 text-sm",
        black: "text-black hover:text-neutral-100",
        transparent:
          "hover:border-orange hover:text-orange border border-white bg-transparent px-[22px] py-2 tracking-wide text-white transition-colors duration-200 text-[17px] font-normal",
        full: "text-ml bg-orange hover:bg-orange-hover rounded-none px-12 py-3 uppercase tracking-widest text-white transition-colors duration-200",
        "full-white":
          "text-[15px] bg-white hover:bg-neutral-700 before:align-middle rounded-none px-4 py-3 font-proxima text-black text-nowrap transition-colors duration-200 shadow-lg border-neutral-500 border w-full text-left",
        border:
          "border border-marine rounded-none font-sans font-bold text-sm md:text-lg text-marine px-8 py-3 hover:text-orange",
        white: "after:text-orange text-white",
        footer:
          "text-md p-0 font-sans font-normal leading-8 tracking-widest text-neutral-500 hover:text-neutral-600",
        dim: " text-lx font-sans font-normal text-neutral-200 transition-colors duration-300 hover:text-neutral-600",
        orange:
          "bg-orange hover:bg-orange-hover font-proxima place-items-center rounded-none px-12 py-1.5 font-medium text-black transition-colors duration-300",
        marine:
          "text-md text-marine hover:text-opacity-80 font-bold tracking-wide",
        "marine-header":
          "text-md text-marine font-proxima hover:text-opacity-80 font-bold tracking-wide hover:text-orange-hover disabled:text-marine disabled:hover:text-marine disabled:cursor-default",
        "badge-white":
          "text-sm leading-none md:text-lg py-2 md:py-2.5 px-5 md:px-7.5 border border-white text-white font-bold rounded-full hover:bg-white hover:text-marine",
        "badge-marine":
          "text-sm leading-none md:text-lg py-2 md:py-2.5 px-5 md:px-7.5 border border-marine text-marine font-bold rounded-full hover:bg-marine hover:text-white",
        "badge-orange":
          "text-sm leading-none md:text-lg py-2 md:py-2.5 px-5 md:px-7.5 border border-orange text-orange font-bold rounded-full hover:bg-orange hover:text-white",
        "badge-orange-full":
          "text-sm leading-none md:text-lg py-2 md:py-2.5 px-5 md:px-7.5 border border-orange text-white font-bold rounded-full bg-orange hover:bg-orange-hover hover:border-orange-hover",
        "badge-neutral-600-full":
          "leading-none text-lg py-2 md:py-2.5 px-5 md:px-7.5  text-marine font-bold rounded-md bg-neutral-700 hover:text-orange-hover font-proximatight ",
        "fund-tab":
          "data-[state=active]:text-orange text-white font-normal text-[13px] sm:text-lg md:text-xl transition-colors duration-300 hover:text-orange-hover",
        "invest-tab": "blur-0  z-20 bg-orange text-white rounded-md px-6",
        "orange-spaced":
          "text-orange hover:text-orange-hover before:align-middle text-[13px] font-bold font-proximatight tracking-widest py-2 transition-colors duration-200 uppercase",
      },
      beforeContent: {
        arrowup:
          "pl-4 ease-in-out before:absolute before:-left-2 before:bottom-4 before:top-1 before:h-4  before:w-4 before:-rotate-90 before:transition-all before:content-['→'] hover:before:top-0 before:hover:duration-300",
        arrowback:
          "pl-4 ease-in-out before:absolute before:-left-1 before:top-2 before:h-4 before:w-4 before:-rotate-180 before:transition-all before:content-['→'] hover:before:-left-3 before:hover:duration-300",
        arrowdown:
          "before:content-[url('https://staging-assets.globalxetfs.com/icons/arrowDown.svg')] before:inline-block before:h-3.5 before:w-3.5 before:mr-1",
        bigArrowDown:
          "before:content-[url('https://staging-assets.globalxetfs.com/icons/arrowDown.svg')]  before:inline-block before:w-4 before:mr-2.5",
        arrowdownwhite:
          "before:content-[url('https://staging-assets.globalxetfs.com/icons/arrowDownWhite.svg')] before:inline-block before:h-3.5 before:w-3.5 before:mr-1",
        default: "",
      },
      afterContent: {
        arrow:
          "hover:after:duration-600 ease-in-out after:relative after:left-0 after:ml-1 after:transition-all after:content-['→'] hover:after:left-3 ",
        arrowdown:
          "after:content-[url('https://staging-assets.globalxetfs.com/icons/arrowDown.svg')] after:inline-block after:h-3.5 after:w-3.5 after:ml-1",
        arrowdownwhite:
          "after:content-[url('https://staging-assets.globalxetfs.com/icons/arrowDownWhite.svg')] after:inline-block after:h-3.5 after:w-3.5 after:ml-1",
        moveDown:
          "after:relative after:-top-1 after:left-4 after:content-[''] after:inline-block after:w-2 after:h-2 after:border-r-2 after:border-b-2 after:border-orange after:transform after:rotate-45 after:animate-arrow-jump-down",
        chevronRight:
          "after:relative after:-top-0.5 after:left-2 after:content-[''] after:inline-block after:w-1.5 after:h-1.5 after:border-r after:border-b after:border-marine after:transform after:-rotate-45 after:hover:border-orange",
        chevronDown:
          "after:relative after:-top-1 after:left-2 after:content-[''] after:inline-block after:w-1.5 after:h-1.5 after:border-r after:border-b after:border-marine after:transform after:rotate-45 after:hover:border-orange",
        default: "",
      },
    },
    defaultVariants: {
      variant: "link",
      beforeContent: "default",
      afterContent: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> { }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, afterContent, beforeContent, ...props }, ref) => {
    return (
      <button
        className={cn(
          "",
          buttonVariants({ variant, afterContent, beforeContent }),
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button };
