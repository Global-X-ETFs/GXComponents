import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import React from "react";
import cn from "../Utils/cn";

const inputVariants = cva(
  "font-proxima text-granite peer p-2 outline-none ring-0",
  {
    variants: {
      variant: {
        primary:
          "invalid:text-orange bg-neutral-700 hover:bg-neutral-600 active:bg-neutral-600",
      },
      textTransform: {
        uppercase: "uppercase",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
  VariantProps<typeof inputVariants> {
  label?: string;
  labelClassName?: string;
  outerClassName?: string;
  hintMessage?: string;
  promptMessage?: string;
  errorMessage?: string;
  afterContent?: React.ReactNode;
}

/**
 * Input component
 * @param {string} type - Type of the input (text, password, email, etc...)
 * @param {string} label - Label for the input
 * @param {string} outerClassName - Class name for the outer container
 * @param {string} hintMessage - Hint message for the input
 * @param {string} promptMessage - Prompt message for the input
 * @param {string} errorMessage - Error message for the input
 * @param {string} variant - Variant of the input (primary, secondary)
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      labelClassName,
      outerClassName,
      variant,
      textTransform,
      label,
      name,
      hintMessage,
      errorMessage,
      promptMessage,
      afterContent,
      required,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn("relative flex flex-col", outerClassName)}>
        {label && (
          <div className="text-md py-1 leading-5">
            <label htmlFor={name} className={cn("text-granite", labelClassName)}>{label}</label>
            {required && <span className="text-orange ml-1">*</span>}
          </div>
        )}

        <input
          ref={ref}
          id={name}
          name={name}
          {...props}
          className={cn(inputVariants({ variant, textTransform }), className)}
        />

        {afterContent && (
          <div className="absolute right-2 top-1/2 h-4 w-4">{afterContent}</div>
        )}

        {hintMessage && (
          <p className={`text-orange hidden text-sm peer-focus:block`}>
            {hintMessage}
          </p>
        )}

        {promptMessage && (
          <p
            className={`text-orange block peer-invalid:hidden peer-focus:invisible`}
          >
            {promptMessage}
          </p>
        )}
        {errorMessage && (
          <p className={`text-orange text-md peer-invalid:block`}>
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
