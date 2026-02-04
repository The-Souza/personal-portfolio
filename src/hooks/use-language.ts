"use client";

import { useTranslation } from "react-i18next";

export function useLanguage() {
  const { i18n } = useTranslation();

  function toggleLanguage() {
    const next = i18n.language === "pt" ? "en" : "pt";

    i18n.changeLanguage(next);
    document.cookie = `lang=${next}; path=/; max-age=604800`;
  }

  return {
    language: i18n.language,
    toggleLanguage,
  };
}
