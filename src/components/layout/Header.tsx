"use client";

import { ToggleTheme } from "@/components/ui/themeToggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { CodeXml, FileDown } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export function Header() {
const { t, i18n } = useTranslation();

  function toggleLanguage() {
    const next = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(next);
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-6 py-4 bg-background/70 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Button asChild variant="ghost">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold hover:text-primary"
          >
            <CodeXml className="w-5 h-5 opacity-80" />
            Guilherme Campos
          </Link>
        </Button>

        {/* Navigation */}
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <NavigationMenu>
            <NavigationMenuList>
              {["home", "projects", "about", "contact"].map((item) => (
                <NavigationMenuItem key={item}>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link
                      href={item === "home" ? "/" : `/${item}`}
                      className="border bg-background shadow-xs hover:bg-accent hover:text-primary dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
                    >
                      {t(`navigation.${item}`)}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ToggleTheme />

          <Button size="icon" variant="outline" onClick={toggleLanguage} className="hover:text-primary transition-transform">
            {i18n.language?.toUpperCase()}
          </Button>

          <Button asChild>
            <Link href="/Guilherme_Campos_Frontend_Jr.pdf" download>
              <FileDown className="w-4 h-4" />
              {t("actions.downloadCv")}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
