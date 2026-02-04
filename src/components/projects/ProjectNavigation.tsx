"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { getProjectNavigation } from "@/utils/projects-utils";
import { Project } from "@/constants/projects/types";
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
    <nav
      className="w-full flex gap-4"
      aria-label={t("projects.navigation.label.nav")}
    >
      {(navigation.previous || navigation.next) && (
        <div className="w-full flex justify-between">
          {navigation.previous ? (
            <Link
              aria-label={`${t("projects.navigation.label.link.previous")} ${t(navigation.previous.titleKey)}`}
              href={`/projects/${navigation.previous.id}`}
              className="text-lg underline z-1 flex items-center gap-2 font-semibold hover:scale-105 transition-transform hover:text-primary active:scale-[0.97]"
            >
              <ChevronsLeft className="w-7 h-7" />

              <span className="inline md:hidden">
                {t("projects.navigation.previous")}
              </span>

              <span className="hidden md:inline">
                {t(navigation.previous.titleKey)}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {navigation.next && (
            <Link
              aria-label={`${t("projects.navigation.label.link.next")} ${t(navigation.next.titleKey)}`}
              href={`/projects/${navigation.next.id}`}
              className="text-lg underline z-1 flex items-center gap-2 font-semibold hover:scale-105 transition-transform hover:text-primary active:scale-[0.97]"
            >
              <span className="inline md:hidden">
                {t("projects.navigation.next")}
              </span>

              <span className="hidden md:inline">
                {t(navigation.next.titleKey)}
              </span>

              <ChevronsRight className="w-7 h-7" />
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
