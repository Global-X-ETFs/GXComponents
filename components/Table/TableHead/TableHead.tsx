import type { ThHTMLAttributes } from "react";
import React from "react";
import cn from "../../Utils/cn";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-10 border-b border-b-neutral-400 bg-white px-1 pb-2 pt-3 text-left align-middle font-proxima text-md font-bold text-granite",
      className
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

export { TableHead };
