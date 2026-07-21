import { cookies } from "next/headers";
import { Spinner } from "@/components/ui/spinner";

const LOADING_TEXT = {
  pt: "Carregando…",
  en: "Loading…",
};

export default async function Loading() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value === "en" ? "en" : "pt";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <Spinner aria-hidden="true" className="size-16 text-primary" />

        <span
          role="status"
          aria-live="polite"
          className="text-lg text-primary"
        >
          {LOADING_TEXT[lang]}
        </span>
      </div>
    </div>
  );
}
