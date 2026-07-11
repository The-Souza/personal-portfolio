"use client";

import { Badge } from "@/components/ui/badge";
import { Project } from "@/constants/projects/types";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProjectDescriptionProps {
  project: Project;
}

export function ProjectDescription({ project }: ProjectDescriptionProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 flex-1 p-1">
      <div className="flex flex-col gap-2">
        <h2 className="font-heading text-2xl leading-tight">
          {t(project.titleKey)}
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          {t(project.longDescriptionKey)}
        </p>
      </div>

      {project.features && project.architecture && (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold uppercase text-muted-foreground leading-tight">
              {t("projects.keyFeatures")}
            </h3>
            <ul className="list-disc flex flex-col gap-1 pl-4 text-base">
              {project.features.map((feature) => (
                <li key={feature}>{t(feature)}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold uppercase text-muted-foreground leading-tight">
              {t("projects.technicalDecisions")}
            </h3>
            <ul className="list-disc flex flex-col gap-1 pl-4 text-base">
              {project.architecture.map((item) => (
                <li key={item}>{t(item)}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="flex flex-col gap-2">
        <h3 className="text-base font-semibold uppercase text-muted-foreground leading-tight">
          {t("projects.techStack")}
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.techs.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="border-border py-1 px-3"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      <div className="flex gap-3">
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
    </div>
  );
}
