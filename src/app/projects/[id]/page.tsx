import { notFound } from "next/navigation";
import { projects } from "@/constants/projects.data";
import { ProjectHero, ProjectDetails, ProjectVideo, ProjectOutcome, ProjectNavigation } from "@/components/projects";

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
    <div className="w-full max-w-6xl flex flex-col flex-1 gap-14 md:gap-20 items-center py-14 md:py-20">
      <ProjectHero project={project} />

      {project.media?.video && (
        <section className="w-full">
          <ProjectVideo src={project.media.video} />
        </section>
      )}

      {project.outcome && <ProjectOutcome project={project} />}

      <ProjectDetails project={project} />

      <ProjectNavigation projects={projects} id={id} />
    </div>
  );
}
