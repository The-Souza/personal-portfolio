"use client";

import ScrollReveal from "@/components/effects/ScrollReveal";
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
      <h2 className="font-heading text-4xl md:text-5xl leading-tight">
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur={true}
          baseRotation={0}
          blurStrength={4}
        >
          {title}
        </ScrollReveal>
      </h2>

      {subtitle && (
        <GlassCard>
          <p className="text-lg leading-relaxed">
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur={true}
              baseRotation={0}
              blurStrength={4}
            >
              {subtitle}
            </ScrollReveal>
          </p>
        </GlassCard>
      )}
    </header>
  );
}
