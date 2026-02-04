import { ProjectsSection } from "@/components/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Projetos desenvolvidos por Guilherme Campos utilizando React, Next.js e TypeScript. Portfólio com foco em performance e UX.",
};

export default function Projects() {
  return (
    <div className="w-full max-w-6xl flex flex-col flex-1 gap-14 md:gap-20 items-center">
      <ProjectsSection />
    </div>
  );
}
