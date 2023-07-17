import type { HTMLAttributes } from "react";
import React from "react";
import cn from "../../Utils/cn";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      `border-b border-b-neutral-600 bg-white odd:bg-neutral-700 `,
      className
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

export { TableRow };
