import { Project } from "@/constants/projects/types";

interface ProjectNavigation {
  previous: Project | null;
  next: Project | null;
}

export function getProjectNavigation(
  projects: Project[],
  currentId: string,
): ProjectNavigation {
  const index = projects.findIndex((p) => p.id === currentId);

  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: projects[index - 1] ?? null,
    next: projects[index + 1] ?? null,
  };
}
