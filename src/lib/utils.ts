import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


// Utility function that merges class names using the clsx and twMerge libraries.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

