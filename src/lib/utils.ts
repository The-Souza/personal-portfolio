import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isNavItemActive(pathname: string, url: string) {
  return url === "/"
    ? pathname === "/"
    : pathname === url || pathname.startsWith(`${url}/`)
}
