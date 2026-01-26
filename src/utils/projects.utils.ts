import { Project } from "@/constants/projects.data";

export function getProjectNavigation(projects: Project[], currentId: string) {
  const index = projects.findIndex((p) => p.id === currentId);

  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: projects[index - 1] ?? null,
    next: projects[index + 1] ?? null,
  };
}