import React from "react";
import cn from "../Utils/cn";

interface VideoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  coverImageURL: string;
  showTitle?: boolean;
}

const VideoCard = React.forwardRef<HTMLDivElement, VideoCardProps>(
  ({ className, title, coverImageURL, showTitle = true, ...props }, ref) => (
    <figure ref={ref} className={cn(`aspect-video `, className)} {...props}>
      <div className="w-full h-full block relative overflow-hidden ">
        <img
          className="absolute top-0 left-0 w-full h-auto object-cover brightness-75"
          src={coverImageURL}
          alt={title}
        />
        <span className="absolute top-1/2 left-1/2 w-[25%] h-[25%] transform -translate-x-1/2 -translate-y-1/2">
          <svg
            className="fill-white w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
          >
            <path d="M25,50C11.2,50,0,38.8,0,25S11.2,0,25,0s25,11.2,25,25S38.8,50,25,50z M25,2C12.3,2,2,12.3,2,25c0,12.7,10.3,23,23,23c12.7,0,23-10.3,23-23C48,12.3,37.7,2,25,2z M37.3,23.9l-17.6-8.8C19.6,15,19.4,15,19.2,15c-0.3,0-0.6,0.1-0.9,0.4c-0.2,0.2-0.4,0.5-0.4,0.9v17.6c0,0.7,0.5,1.2,1.2,1.2c0.2,0,0.4,0,0.5-0.1l17.6-8.8C38.2,25.6,38.2,24.3,37.3,23.9" />
          </svg>
        </span>
      </div>
      {showTitle && (
        <figcaption className="text-md font-sans text-granite py-4 text-start">
          {title}
        </figcaption>
      )}
    </figure>
  ),
);
VideoCard.displayName = "VideoCard";

export { VideoCard };
