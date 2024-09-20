import type { ThHTMLAttributes } from "react";
import React from "react";
import cn from "../../Utils/cn";

interface TableGroupHeadProps extends ThHTMLAttributes<HTMLTableCellElement> {}

const TableGroupHead = React.forwardRef<
  HTMLTableCellElement,
  TableGroupHeadProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "h-full  border-black flex px-4 text-nowrap justify-center items-center text-xs md:text-md font-extralight font-proximatight text-granite",
      className,
    )}
    {...props}
  />
));
TableGroupHead.displayName = "TableGroupHead";

export { TableGroupHead };
