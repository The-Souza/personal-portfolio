"use client";

import { Project } from "@/constants/projects.data";
import { useTranslation } from "react-i18next";

interface ProjectOutcomeProps {
  project: Project;
}

export function ProjectOutcome({ project }: ProjectOutcomeProps) {
  const { t } = useTranslation();

  if (!project.outcome) return null;

  return (
    <section className="w-full max-w-6xl flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="z-1 text-xl sm:text-2xl font-semibold uppercase">
          {t(`projects.data.${project.id}.outcome.contextTitle`)}
        </h3>
        <p className="z-1 text-lg leading-relaxed">
          {t(project.outcome.context)}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="z-1 text-xl sm:text-2xl font-semibold uppercase">
          {t(`projects.data.${project.id}.outcome.solutionTitle`)}
        </h3>
        <p className="z-1 text-lg leading-relaxed">
          {t(project.outcome.solution)}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="z-1 text-xl sm:text-2xl font-semibold uppercase">
          {t(`projects.data.${project.id}.outcome.resultTitle`)}
        </h3>
        <p className="z-1 text-lg leading-relaxed">
          {t(project.outcome.result)}
        </p>
      </div>
    </section>
  );
}
