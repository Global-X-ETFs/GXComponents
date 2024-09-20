import type { HTMLAttributes } from "react";
import React from "react";
import cn from "../../Utils/cn";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(
      " group border-b border-t border-b-neutral-400 border-t-neutral-400  ",
      className
    )}
    {...props}
  />
));
TableHeader.displayName = "TableHeader";

export { TableHeader };
