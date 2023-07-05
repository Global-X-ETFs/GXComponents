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
  promptMessage?: string;
  errorMessage?: string;
}

/**
 * Input component
 * @param {string} type - Type of the input (text, password, email, etc...)
 * @param {string} label - Label for the input
 * @param {string} promptMessage - Prompt message for the input
 * @param {string} errorMessage - Error message for the input
 * @param {string} variant - Variant of the input (primary, secondary)
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, variant, label, errorMessage, promptMessage, ...props },
    ref
  ) => {
    return (
      <div className="preflight">
        <div className="flex flex-col">
          {label && (
            <div className="text-md leading-5">
              <label className="text-granite">{label}</label>
              {props.required && <span className="ml-1 text-orange">*</span>}
            </div>
          )}

          <input
            ref={ref}
            type={props.type}
            className={cn(inputVariants({ variant, className }))}
          />

          {promptMessage && (
            <p
              className={`block not-italic text-orange peer-invalid:hidden peer-focus:invisible`}
            >
              {promptMessage}
            </p>
          )}
          {errorMessage && (
            <p className={`hidden not-italic text-orange peer-invalid:block`}>
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
