import type { SVGProps } from "react";

type IconBaseProps = SVGProps<SVGSVGElement> & {
  title?: string;
};

export function IconBase({ title, children, ...props }: IconBaseProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={!title}
      {...props}
    >
      {title && <title>{title}</title>}
      {children}
    </svg>
  );
}
