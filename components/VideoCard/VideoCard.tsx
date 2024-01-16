import React from "react";
import cn from "../Utils/cn";

interface VideoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  videoURL: string;
  title: string;
  coverImageURL: string;
}

const VideoCard = React.forwardRef<HTMLDivElement, VideoCardProps>(
  ({ className, videoURL, title, coverImageURL, ...props }, ref) => (
    <figure ref={ref} className={cn(`aspect-video `, className)} {...props}>
      <a
        href={videoURL}
        className="w-full h-full block relative overflow-hidden "
      >
        <img
          className="absolute top-0 left-0 w-full h-auto object-cover"
          src={coverImageURL}
          alt={title}
        />
        <span className="absolute top-1/2 left-1/2 w-16 h-16 transform -translate-x-1/2 -translate-y-1/2">
          <svg
            className="w-full h-full fill-neutral-500"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8S12.42 0 8 0zm3.5 8.5l-6 4V4l6 4z" />
          </svg>
        </span>
      </a>

      <figcaption className="text-md font-proxima py-4">{title}</figcaption>
    </figure>
  ),
);
VideoCard.displayName = "VideoCard";

export { VideoCard };
