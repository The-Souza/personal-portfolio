import type { SVGProps } from "react";
import { IconBase } from "./IconBase";
import { ICON_PATHS } from "../constants/icon-path";

export function Html5Icon(props: SVGProps<SVGSVGElement>) {
  const { title, path } = ICON_PATHS.html5;

  return (
    <IconBase {...props} title={title}>
      <path d={path} />
    </IconBase>
  );
}
