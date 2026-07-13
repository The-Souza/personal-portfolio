"use client";

import { SectionHeader } from "@/components/section/SectionHeader";
import { BlurFade } from "@/components/effects/blur-fade";
import { GlassCard } from "@/components/ui/glass-card";
import { CATEGORY_META } from "@/constants/stack-category";
import { STACKS } from "@/constants/stacks";
import { useTranslation } from "react-i18next";

const entries = Object.entries(STACKS) as [
  keyof typeof STACKS,
  (typeof STACKS)[keyof typeof STACKS],
][];

export function AboutStackSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-14 md:py-20 flex flex-col items-center gap-12">
      <SectionHeader title={t("about.stacks")} />

      <div className="w-full max-w-4xl flex flex-col gap-3">
        {entries.map(([category, stacks], i) => {
          const meta = CATEGORY_META[category];

          return (
            <BlurFade key={category} inView delay={0.1 + i * 0.1}>
              <GlassCard className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-4 sm:p-5">
                <h3 className="flex items-center gap-2 sm:w-44 shrink-0 uppercase font-heading text-sm tracking-wide text-muted-foreground">
                  <meta.icon className="w-5 h-5 text-primary" />
                  {t(meta.labelKey)}
                </h3>

                <ul className="flex flex-wrap gap-2">
                  {Object.values(stacks).map(({ name, icon: Icon }) => (
                    <li
                      key={`${category}-${name}`}
                      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-sidebar px-2.5 py-1 text-sm transition-colors hover:border-primary hover:text-primary"
                    >
                      <Icon className="w-4 h-4" />
                      {name}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
}
