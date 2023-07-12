import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import React from "react";
import cn from "../Utils/cn";

const inputVariants = cva(
  "peer p-2 font-proxima text-granite outline-none ring-0",
  {
    variants: {
      variant: {
        primary:
          "bg-neutral-700 invalid:text-orange hover:bg-neutral-600 active:bg-neutral-600",
        secondary: "bg-blue-500 hover:bg-blue-600",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  hintMessage?: string;
  promptMessage?: string;
  errorMessage?: string;
}

/**
 * Input component
 * @param {string} type - Type of the input (text, password, email, etc...)
 * @param {string} label - Label for the input
 * @param {string} hintMessage - Hint message for the input
 * @param {string} promptMessage - Prompt message for the input
 * @param {string} errorMessage - Error message for the input
 * @param {string} variant - Variant of the input (primary, secondary)
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      label,
      hintMessage,
      errorMessage,
      promptMessage,
      required,
      ...props
    },
    ref
  ) => {
    return (
      <div className="preflight">
        <div className="flex flex-col">
          {label && (
            <div className="text-md leading-5">
              <label className="text-granite">{label}</label>
              {required && <span className="ml-1 text-orange">*</span>}
            </div>
          )}

          <input
            ref={ref}
            {...props}
            className={cn(inputVariants({ variant, className }))}
          />

          {hintMessage && (
            <p className={`hidden text-sm text-orange peer-focus:block`}>
              {hintMessage}
            </p>
          )}

          {promptMessage && (
            <p
              className={`block text-orange peer-invalid:hidden peer-focus:invisible`}
            >
              {promptMessage}
            </p>
          )}
          {errorMessage && (
            <p className={`hidden text-orange peer-invalid:block`}>
              {errorMessage}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
