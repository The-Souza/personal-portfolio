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
import { CodeXml, FileDown, Menu } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useSidebar } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { items } from "@/constants/menuItems";

export function Header() {
  const { t, i18n } = useTranslation();
  const { toggleSidebar } = useSidebar();
  const pathname = usePathname();

  function toggleLanguage() {
    const next = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(next);
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-6 py-4 bg-header backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Button
            className="lg:hidden"
            onClick={toggleSidebar}
            size="icon"
            variant="hover"
            asChild
          >
            <Menu className="w-5 h-5" />
          </Button>

          <Button asChild variant="hover">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold lg:hover:scale-105 transition-transform"
            >
              <CodeXml className="w-5 h-5 opacity-80" />
              Guilherme Campos
            </Link>
          </Button>
        </div>

        {/* Navigation */}
        <nav
          id="mobile-menu"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex"
        >
          <NavigationMenu>
            <NavigationMenuList>
              {items.map((item) => {
                const isActive = pathname === item.url;

                return (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink
                      asChild
                      data-active={isActive}
                      aria-current={isActive ? "page" : undefined}
                      className={navigationMenuTriggerStyle()}
                    >
                      <Link
                        href={item.url}
                        className="border hover:scale-105 hover:bg-accent dark:bg-input/30 border-input dark:hover:bg-input/50"
                      >
                        {t(`navigation.${item.title}`)}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Actions */}
        <div className="items-center gap-2 hidden sm:flex">
          <div className="flex items-center gap-1">
            <ToggleTheme />

            <Button
              size="icon"
              variant="outline"
              onClick={toggleLanguage}
              className="hover:scale-105 transition-transform"
            >
              {i18n.language?.toUpperCase()}
            </Button>
          </div>

          <Button asChild>
            <Link
              href="/Guilherme_Campos_Frontend_Jr.pdf"
              className="hover:scale-105 transition-transform"
              download
            >
              <FileDown className="w-4 h-4" />
              {t("actions.downloadCv")}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
