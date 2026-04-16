"use client";

import { useTranslations } from "next-intl";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const t = useTranslations("nav");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function switchLocale() {
    startTransition(async () => {
      const current = document.cookie
        .split("; ")
        .find((row) => row.startsWith("locale="))
        ?.split("=")[1] || "en";
      const next = current === "en" ? "te" : "en";
      document.cookie = `locale=${next};path=/;max-age=31536000`;
      router.refresh();
    });
  }

  return (
    <button
      onClick={switchLocale}
      disabled={isPending}
      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-medium rounded-full border border-sage/20 bg-white/60 backdrop-blur-sm text-charcoal hover:border-gold hover:text-gold-light transition-all duration-300 disabled:opacity-50 cursor-pointer"
    >
      <Globe size={14} />
      {t("languageToggle")}
    </button>
  );
}
