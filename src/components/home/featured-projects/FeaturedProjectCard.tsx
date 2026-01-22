"use client";

import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { FeaturedProject } from "@/constants/featured-projects.data";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface FeaturedProjectCardProps {
  project: FeaturedProject;
  onPreview: () => void;
}

export function FeaturedProjectCard({
  project,
  onPreview,
}: FeaturedProjectCardProps) {
  const { t } = useTranslation();

  return (
    <Card className="z-1 pt-0 gap-4 group flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary shadow-md hover:shadow-primary">
      <div className="relative aspect-video w-full max-h-48 sm:max-h-52 lg:max-h-56 xl:max-h-60 overflow-hidden bg-muted rounded-t-xl">
        {project.media?.previewImage && (
          <Image
            src={project.media.previewImage}
            alt={t(project.titleKey)}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
          />
        )}
      </div>

      <CardContent className="flex flex-col gap-3">
        <CardTitle className="font-heading">{t(project.titleKey)}</CardTitle>

        {/* HIGHLIGHTS */}
        {project.highlights && (
          <div className="flex flex-wrap gap-2">
            {project.highlights.map((badge) => (
              <Badge key={badge} variant="secondary" className="text-xs">
                {t(badge)}
              </Badge>
            ))}
          </div>
        )}

        <CardDescription>{t(project.descriptionKey)}</CardDescription>
      </CardContent>

      <CardFooter className="flex justify-end">
        <Button variant="outline" size="sm" onClick={onPreview}>
          {t("featured.previewProject")}
        </Button>
      </CardFooter>
    </Card>
  );
}
