"use client";

import { Project } from "@/constants/projects/types";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { statusConfig } from "@/constants/status-variants";

interface ProjectCardProps {
  project: Project;
  titleAs?: "h2" | "h3";
}

export function ProjectCard({ project, titleAs = "h3" }: ProjectCardProps) {
  const { t } = useTranslation();

  const statusLabel = project.status
    ? t(`projects.data.${project.id}.status.${project.status}`)
    : null;
  const roleLabel = project.role ? t(`projects.role.${project.role}`) : null;
  const accessibleName = [t(project.titleKey), roleLabel, statusLabel]
    .filter(Boolean)
    .join(" — ");

  return (
    <Link
      href={`/projects/${project.id}`}
      aria-label={accessibleName}
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        "transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary shadow-md hover:shadow-primary",
        "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "z-1 pt-0 gap-4 group flex flex-col justify-between h-full",
      )}
    >
      <div className="relative aspect-video w-full max-h-48 sm:max-h-52 lg:max-h-56 xl:max-h-60 overflow-hidden bg-muted rounded-t-xl">
        {project.media?.previewImage && (
          <Image
            src={project.media.previewImage}
            alt={t(project.titleKey)}
            loading="lazy"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
          />
        )}
      </div>
      <CardContent className="flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-2">
          <CardTitle as={titleAs} className="font-heading">
            {t(project.titleKey)}
          </CardTitle>
          {roleLabel && (
            <Badge variant="outline" className="border-border py-1 px-3">
              {roleLabel}
            </Badge>
          )}
        </div>

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

        <span
          aria-hidden="true"
          className={buttonVariants({ variant: "outline", size: "sm" })}
        >
          {t("previewProject")}
        </span>
      </CardFooter>
    </Link>
  );
}
