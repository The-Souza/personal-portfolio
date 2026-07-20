"use client";

import { Project } from "@/constants/projects/types";
import { useTranslation } from "react-i18next";
import { GlassCard } from "@/components/ui/glass-card";
import { BlurFade } from "@/components/effects/blur-fade";

interface ProjectOutcomeProps {
  project: Project;
}

export function ProjectOutcome({ project }: ProjectOutcomeProps) {
  const { t } = useTranslation();

  if (!project.outcome) return null;

  return (
    <section className="w-full flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <BlurFade inView delay={0.1}>
          <h2 className="z-1 text-xl sm:text-2xl font-semibold uppercase leading-tight">
            {t(`projects.data.${project.id}.outcome.contextTitle`)}
          </h2>
        </BlurFade>
        <GlassCard>
          <BlurFade inView delay={0.1}>
            <p className="text-lg leading-relaxed">
              {t(project.outcome.context)}
            </p>
          </BlurFade>
        </GlassCard>
      </div>

      <div className="flex flex-col gap-2">
        <BlurFade inView delay={0.2}>
          <h2 className="z-1 text-xl sm:text-2xl font-semibold uppercase leading-tight">
            {t(`projects.data.${project.id}.outcome.solutionTitle`)}
          </h2>
        </BlurFade>
        <GlassCard>
          <BlurFade inView delay={0.2}>
            <p className="text-lg leading-relaxed">
              {t(project.outcome.solution)}
            </p>
          </BlurFade>
        </GlassCard>
      </div>

      <div className="flex flex-col gap-2">
        <BlurFade inView delay={0.3}>
          <h2 className="z-1 text-xl sm:text-2xl font-semibold uppercase leading-tight">
            {t(`projects.data.${project.id}.outcome.resultTitle`)}
          </h2>
        </BlurFade>
        <GlassCard>
          <BlurFade inView delay={0.3}>
            <p className="text-lg leading-relaxed">{t(project.outcome.result)}</p>
          </BlurFade>
        </GlassCard>
      </div>
    </section>
  );
}
