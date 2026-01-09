"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Github, LinkedinIcon, FileText } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full px-6 py-8 flex flex-col items-center gap-2 text-sm text-muted-foreground">
      <p>© 2026 Guilherme Souza</p>

      <div className="flex gap-4">
        <Link
          href="https://github.com/The-Souza"
          target="_blank"
          className="group flex items-center gap-2 transition-colors hover:text-primary"
        >
          <Github className="w-5 h-5 transition-transform group-hover:scale-105" />
          GitHub
        </Link>
        <Link
          href="https://linkedin.com/in/guilherme-campos-frontend"
          target="_blank"
          className="group flex items-center gap-2 transition-colors hover:text-primary"
        >
          <LinkedinIcon className="w-5 h-5 transition-transform group-hover:scale-105" />
          LinkedIn
        </Link>

        <Link
          href="/Guilherme_Campos_Frontend_Jr.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 transition-colors hover:text-primary"
        >
          <FileText className="w-5 h-5 transition-transform group-hover:scale-105" />
          {t("footer.viewCv")}
        </Link>
      </div>

      <p className="opacity-80">{t("footer.creating")}</p>
    </footer>
  );
}
