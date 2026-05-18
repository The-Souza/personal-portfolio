import type { SVGProps } from "react";
import { IconBase } from "./IconBase";
import { ICON_PATHS } from "@/constants/icon-path";

export function PnpmIcon(props: SVGProps<SVGSVGElement>) {
  const { title, path } = ICON_PATHS.pnpm;
  return (
    <IconBase {...props} title={title}>
      <path d={path} />
    </IconBase>
  );
}
