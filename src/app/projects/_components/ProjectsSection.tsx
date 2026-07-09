"use client";

import { projects } from "@/constants/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { TextAnimate } from "@/components/effects/text-animate";
import { BlurFade } from "@/components/effects/blur-fade";
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
          className="text-[clamp(2rem,3.5vw+1rem,3.25rem)] font-bold font-heading"
        >
          {t("projects.title")}
        </TextAnimate>
        <BlurFade inView delay={0.15}>
          <GlassCard>
            <p className="text-lg leading-relaxed">
              {t("projects.subtitle")}
            </p>
          </GlassCard>
        </BlurFade>
      </div>

      <div className="grid w-full justify-center gap-4 md:grid-cols-2">
        {projects.map((project, i) => (
          <BlurFade key={project.id} inView delay={0.1 + i * 0.1} className="h-full">
            <ProjectCard
              project={project}
              onSelect={() => router.push(`/projects/${project.id}`)}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
