"use client";

import * as React from "react";

interface HighlightProps extends React.HTMLAttributes<HTMLDivElement> {
  trigger: unknown;
  duration: number;
}

const Highlight = React.forwardRef<HTMLDivElement, HighlightProps>(
  ({ trigger, duration, children, ...props }, ref) => {
    const [previous, setPrevious] = React.useState(trigger);
    const [didHighlight, setDidHighlight] = React.useState(false);

    React.useEffect(() => {
      const handler = setTimeout(() => {
        if (previous !== trigger) {
          setDidHighlight(true);
        }
        setPrevious(trigger);
      }, duration);

      return () => {
        clearTimeout(handler);
      };
    }, [duration, previous, trigger]);

    return (
      <div
        data-highlight={
          previous !== trigger ? "on" : didHighlight ? "off" : null
        }
        {...props}
        className="group"
        ref={ref}
      >
        {children}
      </div>
    );
  },
);

Highlight.displayName = "Highlight";

export { Highlight };
export type { HighlightProps };
