import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* WARNING FOR THE BELOW
 ************************************************************************************
 * These are just for testing purposes - don't use these in production
 */

 /**
  * @scope private
  * @description DON'T USE THIS IN PRODUCTION
  * @returns Pin Icon
  */
export const __PinSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 14">
    <path d="M4.5,0C2.08,0,.12,1.96,.12,4.38,.12,8.75,4.5,14,4.5,14c0,0,4.38-5.25,4.38-9.62C8.88,1.96,6.92,0,4.5,0Zm0,7c-1.45,0-2.62-1.18-2.62-2.62S3.05,1.75,4.5,1.75s2.62,1.18,2.62,2.62-1.18,2.62-2.62,2.62Z" />
  </svg>
);

/**
 *  @scope private
  * @description DON'T USE THIS IN PRODUCTION
  * @returns Phone Icon
  */
export const __ContactSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 12">
    <path d="M12.41 6.45l-.71-1.4 4.54-2.3.76 1.4zM6.14 9.61l-.72-1.44-4.58 2.3.71 1.41zm5.07-5.38l4.66-2.34c-.51-.94-1.68-3.63-9.52.31S-.07 8.6.42 9.65l4.65-2.33c-.74-1.51 5.34-4.56 6.14-3.09z"></path>
  </svg>
);
