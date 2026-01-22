"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/section/SectionHeader";
import { FeaturedProjectCard } from "./FeaturedProjectCard";
import { FeaturedProjectModal } from "./FeaturedProjectModal";
import {
  featuredProjects,
  FeaturedProject,
} from "@/constants/featured-projects.data";
import { useTranslation } from "react-i18next";

export function FeaturedProjectsSection() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] =
    useState<FeaturedProject | null>(null);

  return (
    <section className="min-h-[60vh] sm:min-h-[65vh] xl:min-h-[80vh] w-full max-w-6xl py-14 md:py-20 flex flex-col items-center gap-12">
      <SectionHeader
        title={t("featured.title")}
        subtitle={t("featured.subtitle")}
      />

      <div className="grid w-full justify-center gap-4 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <FeaturedProjectCard
            key={project.id}
            project={project}
            onPreview={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <FeaturedProjectModal
        project={selectedProject}
        open={!!selectedProject}
        onOpenChange={(open) =>
          !open && setSelectedProject(null)
        }
      />
    </section>
  );
}
