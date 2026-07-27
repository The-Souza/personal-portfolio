"use client";

import { BlurFade } from "@/components/effects/blur-fade";
import { SectionHeader } from "@/components/section/SectionHeader";
import { GlassCard } from "@/components/ui/glass-card";
import { processSteps } from "@/constants/process-data";
import { useTranslation } from "react-i18next";

export function ProcessSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-14 md:py-20 flex flex-col items-center gap-12">
      <SectionHeader
        title={t("process.title")}
        subtitle={t("process.subtitle")}
      />

      <GlassCard className="p-6">
        <ol className="relative w-full max-w-5xl flex flex-col lg:flex-row gap-10 lg:gap-6">
          <BlurFade
            aria-hidden="true"
            inView
            delay={0.1}
            className="absolute left-7 top-2 bottom-2 w-px lg:left-0 lg:right-0 lg:top-7 lg:bottom-auto lg:h-px lg:w-auto"
          >
            <div className="w-full h-full bg-primary" />
          </BlurFade>

          {processSteps.map((step, i) => (
            <BlurFade
              key={step.step}
              inView
              delay={0.1 + i * 0.1}
              className="relative flex-1"
            >
              <li className="flex flex-row lg:flex-col items-start lg:items-center gap-4 lg:text-center">
                <div className="relative z-1 shrink-0 flex items-center justify-center size-14 rounded-full bg-background border-2 border-primary dark:border-chart-2 text-primary dark:text-chart-2">
                  <step.icon className="w-6 h-6" />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-primary dark:text-chart-2 tracking-wide">
                    {step.step}
                  </span>
                  <h3 className="font-heading text-lg font-semibold">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(step.descriptionKey)}
                  </p>
                </div>
              </li>
            </BlurFade>
          ))}
        </ol>
      </GlassCard>
    </section>
  );
}
