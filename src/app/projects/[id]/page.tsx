import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/constants/projects";
import {
  ProjectHero,
  ProjectDetails,
  ProjectVideo,
  ProjectOutcome,
  ProjectNavigation,
} from "@/components/projects";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Projeto não encontrado",
    };
  }

  return {
    title: project.nameProject,
    description: project.descriptionKey,
    openGraph: {
      title: project.nameProject,
      description: project.descriptionKey,
      images: project.media?.previewImage
        ? [{ url: project.media.previewImage }]
        : undefined,
    },
  };
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
