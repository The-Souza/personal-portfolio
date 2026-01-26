import { notFound } from "next/navigation";
import { projects } from "@/constants/projects.data";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectDetails } from "@/components/projects/ProjectDetails";
import { ProjectVideo } from "@/components/projects/ProjectVideo";
import { ProjectOutcome } from "@/components/projects/ProjectOutcome";
import ProjectNavigation from "@/components/projects/ProjectNavigation";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;

  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col flex-1 gap-14 md:gap-20 items-center py-14 md:py-20">
      <ProjectHero project={project} />

      {project.media?.video && (
        <section className="w-full max-w-6xl">
          <ProjectVideo src={project.media.video} />
        </section>
      )}

      {project.outcome && <ProjectOutcome project={project} />}

      <ProjectDetails project={project} />

      <ProjectNavigation projects={projects} id={id} />
    </div>
  );
}
