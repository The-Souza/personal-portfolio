"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideoIcon, AlignLeftIcon } from "lucide-react";
import { Project } from "@/constants/projects/types";
import { ProjectVideo } from "./ProjectVideo";
import { ProjectDescription } from "./ProjectDescription";
import { useTranslation } from "react-i18next";

interface ProjectContentTabsProps {
  project: Project;
}

export function ProjectContentTabs({ project }: ProjectContentTabsProps) {
  const { media } = project;
  const { t } = useTranslation();

  const hasVideo = Boolean(media?.video);

  return (
    <Tabs
      defaultValue={hasVideo ? "video" : "description"}
      className="w-full flex flex-col flex-1 min-h-0"
    >
      <TabsList className="shrink-0">
        {hasVideo && (
          <TabsTrigger value="video">
            <VideoIcon className="h-4 w-4" />
            {t("projects.video")}
          </TabsTrigger>
        )}
        <TabsTrigger value="description">
          <AlignLeftIcon className="h-4 w-4" />
          {t("projects.description")}
        </TabsTrigger>
      </TabsList>

      <div className="flex-1 min-h-0 overflow-hidden">
        {hasVideo && (
          <TabsContent value="video" className="h-full">
            <ProjectVideo src={media!.video!} />
          </TabsContent>
        )}

        <TabsContent
          value="description"
          className="flex-1 min-h-0 overflow-y-auto overscroll-contain touch-pan-y"
        >
          <ProjectDescription project={project} />
        </TabsContent>
      </div>
    </Tabs>
  );
}
