import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import React from "react";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header() {
  const t = useTranslations("Navigation");

  return (
    <header className="p-4">
      <nav className="flex items-center justify-between">
        <div className="flex gap-4 font-bold">
          <Link href="/">{t("home")}</Link>
          <Link href="/about">{t("about")}</Link>
        </div>
        <LocaleSwitcher />
      </nav>
    </header>
  );
}
