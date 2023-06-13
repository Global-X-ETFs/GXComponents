import { cva, VariantProps} from "class-variance-authority";
import React from "react";
import { cn } from "../utils";


const videoCardVariants = cva(
    "",
    {
        variants: {
            textdirection: {
                default: "text-left",
                rtl: "text-right",
            }
        },
        defaultVariants: {
            textdirection: "default",
        },
    }
)

export interface VideoCardProps extends React.HTMLAttributes<HTMLDivElement> , VariantProps<typeof videoCardVariants> { 
    title: string;
    link: string;
    imageSrc: string;    
    imageAlt: string;
}

const VideoCard = React.forwardRef<HTMLDivElement, VideoCardProps>(
    ({ className, textdirection, ...props }, ref) => {
        return (
            <figure ref={ref} className={cn("max-w-[300px]", className)}>
                <a href={props.link} className="relative container flex justify-center">
                    <img src={props.imageSrc} alt={props.imageAlt} />
                    <span className="absolute bg-gray-200/80 rounded-full w-[70px] h-[70px] flex justify-center p-4"> <img src="/PlayButton.svg" alt="play button"/></span>
                </a>
                <figcaption className={cn(videoCardVariants({ textdirection, className }))}>
                    {props.title}
                </figcaption>
            </figure>
        );
    }
);

export { VideoCard };