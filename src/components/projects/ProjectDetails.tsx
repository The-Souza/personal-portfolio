"use client";

import { Project } from "@/constants/projects.data";
import { useTranslation } from "react-i18next";
import { GlassCard } from "@/components/ui/glass-card";

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const { t } = useTranslation();

  return (
    <section className="w-full max-w-6xl flex flex-col gap-6 items-center">
      <div className="flex flex-col sm:flex-row justify-between gap-6 w-full">
        {/* Features */}
        {project.features && (
          <div className="flex flex-col gap-2">
            <h4 className="z-1 text-xl sm:text-2xl font-semibold uppercase">
              {t("projects.keyFeatures")}
            </h4>
            <GlassCard>
              <ul className="list-disc pl-4 flex flex-col gap-1 text-lg">
                {project.features.map((feature) => (
                  <li key={feature}>{t(feature)}</li>
                ))}
              </ul>
            </GlassCard>
          </div>
        )}

        {/* Architecture */}
        {project.architecture && (
          <div className="flex flex-col gap-2">
            <h4 className="z-1 text-xl sm:text-2xl font-semibold uppercase">
              {t("projects.technicalDecisions")}
            </h4>
            <GlassCard>
              <ul className="list-disc pl-4 flex flex-col gap-1 text-lg">
                {project.architecture.map((item) => (
                  <li key={item}>{t(item)}</li>
                ))}
              </ul>
            </GlassCard>
          </div>
        )}
      </div>
    </section>
  );
}
