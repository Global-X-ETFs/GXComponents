import type { HTMLAttributes } from "react";
import React from "react";
import cn from "../../Utils/cn";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn("bg-neutral-500 font-medium", className)}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

export { TableFooter };
