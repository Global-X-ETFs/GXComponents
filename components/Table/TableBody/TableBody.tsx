import type { HTMLAttributes } from "react";
import React from "react";
import cn from "../../Utils/cn";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn(
      "[&_tr:first-child]:border-t [&_tr:first-child]:border-t-neutral-100 [&_tr:last-child]:border-0",
      className
    )}
    {...props}
  />
));
TableBody.displayName = "TableBody";

export { TableBody };
