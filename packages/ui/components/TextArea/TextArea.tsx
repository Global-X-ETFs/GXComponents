import React from "react";
import cn from "../Utils/cn";

interface TextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
  label?: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, label, required, id, ...props }, ref) => {
    return (
      <div className={cn("flex flex-col", className)}>
        {label ? (
          <>
            <label className="text-granite text-md py-1 leading-5" htmlFor={id}>
              {label} {required && <span className="text-orange">*</span>}
            </label>
          </>
        ) : null}
        <textarea
          ref={ref}
          id={id}
          className="text-granite font-proxima bg-neutral-700 p-2 outline-none ring-0 active:bg-neutral-600 "
          {...props}
        />
      </div>
    );
  },
);

TextArea.displayName = "TextArea";

export { TextArea };
