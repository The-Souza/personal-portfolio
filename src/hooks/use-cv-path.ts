"use client";

import { useTranslation } from "react-i18next";

export function useCvPath() {
  const { i18n } = useTranslation();

  return i18n.language === "pt"
    ? "/doc/Guilherme_Campos_Frontend_Jr.pdf"
    : "/doc/Guilherme_Campos_Frontend_Jr_En.pdf";
}
