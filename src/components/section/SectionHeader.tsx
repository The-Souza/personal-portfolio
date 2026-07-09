"use client";

import { BlurFade } from "@/components/effects/blur-fade";
import { cn } from "@/lib/utils";
import { GlassCard } from "@/components/ui/glass-card";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  const alignmentClasses =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <header
      className={cn(
        "w-full max-w-4xl flex flex-col gap-4",
        alignmentClasses,
        className,
      )}
    >
      <BlurFade inView>
        <h2 className="font-heading text-[clamp(1.5rem,2.5vw+0.75rem,2.25rem)] leading-tight">
          {title}
        </h2>
      </BlurFade>

      {subtitle && (
        <BlurFade inView delay={0.1}>
          <GlassCard>
            <p className="text-lg leading-relaxed">{subtitle}</p>
          </GlassCard>
        </BlurFade>
      )}
    </header>
  );
}
