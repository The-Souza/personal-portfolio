import type { SVGProps } from "react";
import { IconBase } from "./IconBase";
import { ICON_PATHS } from "../constants/icon-path";

export function PrismaIcon(props: SVGProps<SVGSVGElement>) {
  const { title, path } = ICON_PATHS.prisma;

  return (
    <IconBase {...props} title={title}>
      <path d={path} />
    </IconBase>
  );
}
