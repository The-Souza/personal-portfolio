"use client";

import { Project } from "@/constants/projects/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { TextAnimate } from "@/components/effects/text-animate";
import { BlurFade } from "@/components/effects/blur-fade";
import { GlassCard } from "@/components/ui/glass-card";
import Link from "next/link";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  const { t, i18n } = useTranslation();

  return (
    <section className="w-full flex flex-col gap-6 items-center">
      <div className="flex flex-col gap-4 text-center">
        <TextAnimate
          key={i18n.language}
          as="h1"
          animation="blurInUp"
          by="word"
          once
          className="text-[clamp(2rem,3.5vw+1rem,3.25rem)] font-bold font-heading"
        >
          {t(project.titleKey)}
        </TextAnimate>

        <GlassCard>
          <BlurFade inView delay={0.15}>
            <p className="text-lg leading-relaxed max-w-prose mx-auto">
              {t(project.longDescriptionKey)}
            </p>
          </BlurFade>
        </GlassCard>
      </div>

      <BlurFade inView delay={0.2} duration={0.25} blur="3px" offset={4}>
        <div className="z-1 flex flex-wrap gap-2 items-center justify-center max-w-2xl mx-auto">
          {project.techs.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="transition-colors border-border hover:border-primary hover:text-primary dark:hover:border-chart-2 dark:hover:text-chart-2 py-1 px-3 bg-sidebar"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </BlurFade>

      <BlurFade inView delay={0.3}>
        <div className="z-1 flex gap-3 pt-2">
          {project.links?.demo && (
            <Button asChild>
              <Link
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
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
              >
                GitHub
              </Link>
            </Button>
          )}
        </div>
      </BlurFade>
    </section>
  );
}
