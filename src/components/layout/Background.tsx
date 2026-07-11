"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const PixelBlast = dynamic(() => import("@/components/effects/PixelBlast"), {
  ssr: false,
});

export function Background() {
  const reducedMotion = useReducedMotion();

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        overflow: "hidden",
      }}
    >
      {!reducedMotion && (
        <PixelBlast
          variant="diamond"
          pixelSize={4}
          color="#7f22fe"
          patternScale={2}
          patternDensity={1}
          enableRipples
          rippleSpeed={0.3}
          rippleThickness={0.1}
          rippleIntensityScale={1}
          speed={0.5}
          transparent
          edgeFade={0.25}
        />
      )}
    </div>
  );
}
