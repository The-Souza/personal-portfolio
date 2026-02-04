"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import pt from "./locales/pt.json";
import en from "./locales/en.json";

function getInitialLanguage() {
  if (typeof document === "undefined") return "pt";

  const match = document.cookie.match(/lang=(pt|en)/);
  return match?.[1] ?? "pt";
}

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
    },
    lng: getInitialLanguage(),
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
}

export default i18n;
