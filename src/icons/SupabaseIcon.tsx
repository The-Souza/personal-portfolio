import type { SVGProps } from "react";
import { IconBase } from "./IconBase";
import { ICON_PATHS } from "@/constants/icon-path";

export function SupabaseIcon(props: SVGProps<SVGSVGElement>) {
  const { title, path } = ICON_PATHS.supabase;
  return (
    <IconBase {...props} viewBox="0 0 109 113" title={title}>
      <path d={path} />
    </IconBase>
  );
}
