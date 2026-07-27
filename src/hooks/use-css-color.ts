"use client";

import * as React from "react";

function resolveCssColorToRgb(rawColor: string): string | null {
  if (!rawColor) return null;

  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  ctx.fillStyle = rawColor;
  ctx.fillRect(0, 0, 1, 1);
  const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;

  return `rgb(${r}, ${g}, ${b})`;
}

export function useCssColor(cssVar: string, fallback: string) {
  const [color, setColor] = React.useState(fallback);

  React.useEffect(() => {
    const raw = getComputedStyle(document.documentElement)
      .getPropertyValue(cssVar)
      .trim();
    const resolved = resolveCssColorToRgb(raw);
    if (resolved) setColor(resolved);
  }, [cssVar]);

  return color;
}
