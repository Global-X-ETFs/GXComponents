import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import React from "react";
import cn from "../Utils/cn";

const loadingSpinnerVariants = cva(" ", {
  variants: {
    colour: {
      white: "fill-white",
      black: "fill-black",
      orange: "fill-orange",
      marine: "fill-marine",
      earth: "fill-earth",
    },
  },
  defaultVariants: {
    colour: "white",
  },
});

export interface LoadingSpinnerProps
  extends React.HTMLAttributes<SVGElement>,
    VariantProps<typeof loadingSpinnerVariants> {}

const LoadingSpinner = ({
  className,
  colour,
  ...props
}: LoadingSpinnerProps) => {
  return (
    <svg
      className={cn(loadingSpinnerVariants({ colour }), className)}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="30"
    >
      <circle cx="15" cy="15" r="15">
        <animate
          attributeName="r"
          begin="0s"
          calcMode="linear"
          dur="0.8s"
          from="15"
          repeatCount="indefinite"
          to="15"
          values="15;9;15"
        />
        <animate
          attributeName="fill-opacity"
          begin="0s"
          calcMode="linear"
          dur="0.8s"
          from="1"
          repeatCount="indefinite"
          to="1"
          values="1;.5;1"
        />
      </circle>
      <circle cx="60" cy="15" r="9">
        <animate
          attributeName="r"
          begin="0s"
          calcMode="linear"
          dur="0.8s"
          from="9"
          repeatCount="indefinite"
          to="9"
          values="9;15;9"
        />
        <animate
          attributeName="fill-opacity"
          begin="0s"
          calcMode="linear"
          dur="0.8s"
          from=".5"
          repeatCount="indefinite"
          to=".5"
          values=".5;1;.5"
        />
      </circle>
      <circle cx="105" cy="15" r="15">
        <animate
          attributeName="r"
          begin="0s"
          calcMode="linear"
          dur="0.8s"
          from="15"
          repeatCount="indefinite"
          to="15"
          values="15;9;15"
        />
        <animate
          attributeName="fill-opacity"
          begin="0s"
          calcMode="linear"
          dur="0.8s"
          from="1"
          repeatCount="indefinite"
          to="1"
          values="1;.5;1"
        />
      </circle>
    </svg>
  );
};

LoadingSpinner.displayName = "loadingSpiner";

export { LoadingSpinner };
