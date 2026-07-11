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
      <BlurFade inView delay={0.1} className="flex flex-col gap-2">
        <h2 className="z-1 text-xl sm:text-2xl font-semibold uppercase leading-tight">
          {t(`projects.data.${project.id}.outcome.contextTitle`)}
        </h2>
        <GlassCard>
          <p className="text-lg leading-relaxed">
            {t(project.outcome.context)}
          </p>
        </GlassCard>
      </BlurFade>

      <BlurFade inView delay={0.2} className="flex flex-col gap-2">
        <h2 className="z-1 text-xl sm:text-2xl font-semibold uppercase leading-tight">
          {t(`projects.data.${project.id}.outcome.solutionTitle`)}
        </h2>
        <GlassCard>
          <p className="text-lg leading-relaxed">
            {t(project.outcome.solution)}
          </p>
        </GlassCard>
      </BlurFade>

      <BlurFade inView delay={0.3} className="flex flex-col gap-2">
        <h2 className="z-1 text-xl sm:text-2xl font-semibold uppercase leading-tight">
          {t(`projects.data.${project.id}.outcome.resultTitle`)}
        </h2>
        <GlassCard>
          <p className="text-lg leading-relaxed">{t(project.outcome.result)}</p>
        </GlassCard>
      </BlurFade>
    </section>
  );
}
