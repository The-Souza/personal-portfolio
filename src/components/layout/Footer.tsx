"use client";

import { socialLinks } from "@/constants/social-links";
import { useCvPath } from "@/hooks/use-cv-path";
import { FileText, Github, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  const cvPath = useCvPath();

  return (
    <footer className="w-full py-6 flex flex-col items-center gap-3 text-sm text-muted-foreground">
      <div className="flex items-center justify-center gap-4">
        <Link
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-primary transition-colors z-1"
        >
          <Github className="w-4 h-4" />
          GitHub
        </Link>

        <Link
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-primary transition-colors z-1"
        >
          <LinkedinIcon className="w-4 h-4" />
          LinkedIn
        </Link>

        <Link
          href={cvPath}
          target="_blank"
          prefetch={false}
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-primary transition-colors z-1"
        >
          <FileText className="w-4 h-4" />
          {t("viewCv")}
        </Link>
      </div>

      <span>© 2026 Guilherme Campos</span>
    </footer>
  );
}
