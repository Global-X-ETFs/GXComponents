import type { HTMLAttributes } from "react";
import React from "react";
import cn from "../../Utils/cn";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn(
      "mt-4 text-left font-proxima text-ms text-neutral-200",
      className
    )}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

export { TableCaption };
