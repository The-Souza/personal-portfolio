"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Project } from "@/constants/projects/types";
import { ProjectContentTabs } from "@/components/projects";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface FeaturedProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FeaturedProjectModal({
  project,
  open,
  onOpenChange,
}: FeaturedProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="w-[90vw] max-w-5xl max-h-[70vh] sm:max-h-[90vh] flex flex-col"
      >
        <VisuallyHidden>
          <DialogTitle />
          <DialogDescription />
        </VisuallyHidden>

        <ProjectContentTabs project={project} />
      </DialogContent>
    </Dialog>
  );
}
