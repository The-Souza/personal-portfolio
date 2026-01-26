"use client";

import { Badge } from "@/components/ui/badge";
import { Project } from "@/constants/projects.data";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import Link from "next/link";

interface ProjectDescriptionProps {
  project: Project;
}

export function ProjectDescription({ project }: ProjectDescriptionProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-heading text-2xl">{t(project.titleKey)}</h1>
      <p className="text-sm text-muted-foreground">
        {t(project.longDescriptionKey)}
      </p>

      {project.features && project.architecture && (
        <section className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold uppercase text-muted-foreground">
              {t("projects.keyFeatures")}
            </h4>
            <ul className="list-disc space-y-1 pl-4 text-sm">
              {project.features.map((feature) => (
                <li key={feature}>{t(feature)}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold uppercase text-muted-foreground">
              {t("projects.technicalDecisions")}
            </h4>
            <ul className="list-disc space-y-1 pl-4 text-sm">
              {project.architecture.map((item) => (
                <li key={item}>{t(item)}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="space-y-2">
        <h4 className="text-sm font-semibold uppercase text-muted-foreground">
          {t("projects.techStack")}
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.techs.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      <div className="flex gap-3 pt-2">
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
    </div>
  );
}
