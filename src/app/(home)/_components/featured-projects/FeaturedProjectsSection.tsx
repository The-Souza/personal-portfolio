"use client";

import { SectionHeader } from "@/components/section/SectionHeader";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/constants/projects";
import { useTranslation } from "react-i18next";
import { BlurFade } from "@/components/effects/blur-fade";

export function FeaturedProjectsSection() {
  const { t } = useTranslation();
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="min-h-[60vh] sm:min-h-[65vh] xl:min-h-[80vh] w-full py-14 md:py-20 flex flex-col items-center gap-12">
      <SectionHeader
        title={t("projects.featuredTitle")}
        subtitle={t("projects.featuredSubtitle")}
      />

      <div className="grid w-full justify-center gap-4 md:grid-cols-2">
        {featuredProjects.map((project, i) => (
          <BlurFade key={project.id} inView delay={0.1 + i * 0.1} className="h-full">
            <ProjectCard project={project} />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
