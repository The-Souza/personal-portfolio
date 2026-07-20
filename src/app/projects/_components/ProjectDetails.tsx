"use client";

import { Project } from "@/constants/projects/types";
import { useTranslation } from "react-i18next";
import { GlassCard } from "@/components/ui/glass-card";
import { BlurFade } from "@/components/effects/blur-fade";

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const { t } = useTranslation();

  return (
    <section className="w-full flex flex-col gap-6 items-center">
      <div className="flex flex-col sm:flex-row justify-between gap-6 w-full">
        {/* Features */}
        {project.features && (
          <div className="flex flex-col gap-2">
            <BlurFade inView delay={0.1}>
              <h2 className="z-1 text-xl sm:text-2xl font-semibold uppercase leading-tight">
                {t("projects.keyFeatures")}
              </h2>
            </BlurFade>
            <GlassCard>
              <BlurFade inView delay={0.1}>
                <ul className="list-disc pl-4 flex flex-col gap-1 text-lg">
                  {project.features.map((feature) => (
                    <li key={feature}>{t(feature)}</li>
                  ))}
                </ul>
              </BlurFade>
            </GlassCard>
          </div>
        )}

        {/* Architecture */}
        {project.architecture && (
          <div className="flex flex-col gap-2">
            <BlurFade inView delay={0.2}>
              <h2 className="z-1 text-xl sm:text-2xl font-semibold uppercase leading-tight">
                {t("projects.technicalDecisions")}
              </h2>
            </BlurFade>
            <GlassCard>
              <BlurFade inView delay={0.2}>
                <ul className="list-disc pl-4 flex flex-col gap-1 text-lg">
                  {project.architecture.map((item) => (
                    <li key={item}>{t(item)}</li>
                  ))}
                </ul>
              </BlurFade>
            </GlassCard>
          </div>
        )}
      </div>
    </section>
  );
}
