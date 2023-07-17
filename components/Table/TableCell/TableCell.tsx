import type { TdHTMLAttributes } from "react";
import React from "react";
import cn from "../../Utils/cn";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-1.5 pt-2 align-middle text-ml text-granite ", className)}
    {...props}
  />
));
TableCell.displayName = "TableCell";

export { TableCell };
