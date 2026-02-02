"use client";

import { projects } from "@/constants/projects-data";
import { ProjectCard } from "./ProjectCard";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { TextAnimate } from "@/components/effects/text-animate";
import { GlassCard } from "@/components/ui/glass-card";

export function ProjectsSection() {
  const { t, i18n } = useTranslation();
  const router = useRouter();

  return (
    <section className="w-full py-14 md:py-20 flex flex-col items-center gap-12">
      <div className="flex flex-col gap-4 text-center">
        <TextAnimate
          key={i18n.language}
          as="h1"
          animation="blurInUp"
          by="word"
          once
          className="text-4xl md:text-5xl font-bold font-heading"
        >
          {t("projects.title")}
        </TextAnimate>
        <GlassCard>
          <p className="text-lg leading-relaxed">
            {t("projects.subtitle")}
          </p>
        </GlassCard>
      </div>

      <div className="grid w-full justify-center gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={() => router.push(`/projects/${project.id}`)}
          />
        ))}
      </div>
    </section>
  );
}
