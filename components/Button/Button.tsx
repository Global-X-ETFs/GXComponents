import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import React from "react";
import cn from "../Utils/cn";

const buttonVariants = cva(
  "rounded-md p-2 font-bold leading-7  tracking-normal disabled:text-orange-hover disabled:hover:text-orange-hover disabled:cursor-not-allowed ",
  {
    variants: {
      variant: {
        link: "text-green-500 hover:text-orange-hover",
        transparent:
          "border border-white bg-transparent px-6 py-2 tracking-wide text-white transition-colors duration-200 hover:border-orange hover:text-orange ",
      },
      afterContent: {
        arrow:
          "hover:after:duration-600 ease-in-out after:relative after:left-0 after:ml-1 after:transition-all after:content-['→'] hover:after:left-3 ",
        default: "",
      },
    },
    defaultVariants: {
      variant: "link",
      afterContent: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, afterContent, ...props }, ref) => {
    return (
      <div className="preflight">
        <button
          className={cn(buttonVariants({ variant, afterContent, className }))}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);

Button.displayName = "Button";

export { Button };
