"use client";

import { Project } from "@/constants/projects.data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { TextAnimate } from "@/components/effects/text-animate";
import { GlassCard } from "@/components/ui/glass-card";
import Link from "next/link";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  const { t, i18n } = useTranslation();

  return (
    <section className="w-full max-w-6xl flex flex-col gap-6 items-center">
      <div className="flex flex-col gap-4 text-center">
        <TextAnimate
          key={i18n.language}
          as="h1"
          animation="blurInUp"
          by="word"
          once
          className="text-4xl md:text-5xl font-bold font-heading"
        >
          {t(project.titleKey)}
        </TextAnimate>

        <GlassCard>
          <p className="text-lg leading-relaxed">
            {t(project.longDescriptionKey)}
          </p>
        </GlassCard>
      </div>

      <div className="z-1 flex flex-wrap gap-2 items-center justify-center">
        {project.techs.map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
            className="transition-colors border-border hover:border-primary hover:text-primary py-1 px-3 bg-sidebar"
          >
            {tech}
          </Badge>
        ))}
      </div>

      <div className="z-1 flex gap-3 pt-2">
        {project.links?.demo && (
          <Button asChild>
            <Link
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform active:scale-[0.97]"
            >
              {t("projects.liveDemo")}
            </Link>
          </Button>
        )}

        {project.links?.github && (
          <Button asChild variant="outline">
            <Link
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform active:scale-[0.97]"
            >
              GitHub
            </Link>
          </Button>
        )}
      </div>
    </section>
  );
}
