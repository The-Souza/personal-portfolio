"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProjectVideoProps {
  src: string;
}

export function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <AspectRatio
        ratio={16 / 9}
        className="w-full max-h-full rounded-lg bg-muted"
      >
        <video
          src={src}
          controls
          preload="none"
          playsInline
          className="h-full w-full object-contain"
        >
          <source src={src} type="video/mp4" />
        </video>
      </AspectRatio>
    </div>
  );
}
