"use client";

import { Project } from "@/constants/projects-data";
import { useTranslation } from "react-i18next";
import { GlassCard } from "@/components/ui/glass-card";

interface ProjectOutcomeProps {
  project: Project;
}

export function ProjectOutcome({ project }: ProjectOutcomeProps) {
  const { t } = useTranslation();

  if (!project.outcome) return null;

  return (
    <section className="w-full flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="z-1 text-xl sm:text-2xl font-semibold uppercase leading-tight">
          {t(`projects.data.${project.id}.outcome.contextTitle`)}
        </h3>
        <GlassCard>
          <p className="text-lg leading-relaxed">
            {t(project.outcome.context)}
          </p>
        </GlassCard>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="z-1 text-xl sm:text-2xl font-semibold uppercase leading-tight">
          {t(`projects.data.${project.id}.outcome.solutionTitle`)}
        </h3>
        <GlassCard>
          <p className="text-lg leading-relaxed">
            {t(project.outcome.solution)}
          </p>
        </GlassCard>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="z-1 text-xl sm:text-2xl font-semibold uppercase leading-tight">
          {t(`projects.data.${project.id}.outcome.resultTitle`)}
        </h3>
        <GlassCard>
          <p className="text-lg leading-relaxed">{t(project.outcome.result)}</p>
        </GlassCard>
      </div>
    </section>
  );
}
