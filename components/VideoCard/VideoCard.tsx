import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import React from "react";
import cn from "../Utils/cn";

const videoCardVariants = cva("", {
  variants: {
    textdirection: {
      default: "text-left",
      rtl: "text-right",
    },
  },
  defaultVariants: {
    textdirection: "default",
  },
});

export interface VideoCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof videoCardVariants> {
  title: string;
  link: string;
  imageSrc: string;
  imageAlt: string;
}

const VideoCard = React.forwardRef<HTMLDivElement, VideoCardProps>(
  ({ className, textdirection, ...props }, ref) => {
    return (
      <div className="preflight">
        <figure ref={ref} className={cn("max-w-[300px]", className)}>
          <a
            href={props.link}
            className="container relative flex justify-center"
          >
            <img src={props.imageSrc} alt={props.imageAlt} />
            <span className="absolute flex h-[70px] w-[70px] justify-center rounded-full bg-gray-200/80 p-4">
              {" "}
              <img src="/PlayButton.svg" alt="play button" />
            </span>
          </a>
          <figcaption
            className={cn(videoCardVariants({ textdirection, className }))}
          >
            {props.title}
          </figcaption>
        </figure>
      </div>
    );
  }
);

VideoCard.displayName = "VideoCard";

export { VideoCard };
