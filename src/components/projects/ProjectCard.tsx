"use client";

import { Project } from "@/constants/projects-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { statusConfig } from "@/constants/status-variants";

interface ProjectCardProps {
  project: Project;
  onSelect: () => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const { t } = useTranslation();

  return (
    <Card
      role="button"
      tabIndex={0}
      onClick={onSelect}
      aria-label={t(project.titleKey)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      className="z-1 pt-0 gap-4 group flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary shadow-md hover:shadow-primary"
    >
      <div className="relative aspect-video w-full max-h-48 sm:max-h-52 lg:max-h-56 xl:max-h-60 overflow-hidden bg-muted rounded-t-xl">
        {project.media?.previewImage && (
          <Image
            src={project.media.previewImage}
            alt={t(project.titleKey)}
            loading="eager"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
          />
        )}
      </div>
      <CardContent className="flex flex-col gap-3">
        <CardTitle className="font-heading flex items-center gap-2">
          {t(project.titleKey)}
          {project.role && (
            <Badge variant="outline" className="border-border py-1 px-3">
              {project.role}
            </Badge>
          )}
        </CardTitle>

        {/* HIGHLIGHTS */}
        {project.highlights && (
          <div className="flex flex-wrap gap-2">
            {project.highlights.map((badge) => (
              <Badge
                key={badge}
                variant="secondary"
                className="border-border py-1 px-3"
              >
                {t(badge)}
              </Badge>
            ))}
          </div>
        )}

        <CardDescription>{t(project.descriptionKey)}</CardDescription>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        {project.status && (
          <Badge
            variant={statusConfig[project.status].variant}
            className="border-border py-1 px-3"
          >
            {t(`projects.data.${project.id}.status.${project.status}`)}
          </Badge>
        )}

        <Button
          variant="outline"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
        >
          {t("previewProject")}
        </Button>
      </CardFooter>
    </Card>
  );
}
