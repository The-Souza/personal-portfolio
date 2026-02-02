"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { getProjectNavigation } from "@/utils/projects-utils";
import { Project } from "@/constants/projects-data";
import { ChevronsRight, ChevronsLeft } from "lucide-react";

export function ProjectNavigation({
  projects,
  id,
}: {
  projects: Project[];
  id: string;
}) {
  const { t } = useTranslation();
  const navigation = getProjectNavigation(projects, id);

  return (
    <nav className="w-full flex gap-4">
      {(navigation.previous || navigation.next) && (
        <div className="w-full flex flex-col gap-4 sm:flex-row sm:justify-between">
          {navigation.previous ? (
            <Link
              aria-label={`Previous project ${t(navigation.previous.titleKey)}`}
              href={`/projects/${navigation.previous.id}`}
              className="text-lg underline z-1 flex items-center gap-2 font-semibold hover:scale-105 transition-transform hover:text-primary active:scale-[0.97]"
            >
              <ChevronsLeft className="w-7 h-7" />
              {t(navigation.previous.titleKey)}
            </Link>
          ) : (
            <div />
          )}

          {navigation.next && (
            <Link
              aria-label={`Next project ${t(navigation.next.titleKey)}`}
              href={`/projects/${navigation.next.id}`}
              className="text-lg underline z-1 flex items-center gap-2 font-semibold hover:scale-105 transition-transform hover:text-primary active:scale-[0.97]"
            >
              {t(navigation.next.titleKey)}
              <ChevronsRight className="w-7 h-7" />
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
