"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/section/SectionHeader";
import { ProjectCard } from "@/components/projects";
import { FeaturedProjectModal } from "./FeaturedProjectModal";
import { projects, Project } from "@/constants/projects-data";
import { useTranslation } from "react-i18next";

export function FeaturedProjectsSection() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="min-h-[60vh] sm:min-h-[65vh] xl:min-h-[80vh] w-full py-14 md:py-20 flex flex-col items-center gap-12">
      <SectionHeader
        title={t("projects.featuredTitle")}
        subtitle={t("projects.featuredSubtitle")}
      />

      <div className="grid w-full justify-center gap-4 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <FeaturedProjectModal
        project={selectedProject}
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      />
    </section>
  );
}
