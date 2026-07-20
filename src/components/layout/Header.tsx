"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useSidebar } from "@/components/ui/sidebar";
import { ToggleTheme } from "@/components/ui/toggle-theme";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { menuItems } from "@/constants/menu-items";
import { useCvPath } from "@/hooks/use-cv-path";
import { useLanguage } from "@/hooks/use-language";
import { CodeXml, FileDown, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

export function Header() {
  const { t } = useTranslation();
  const { toggleSidebar } = useSidebar();
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();
  const cvPath = useCvPath();

  return (
    <header className="fixed top-0 left-0 z-50 w-full h-17.5 px-6 py-4 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between mx-auto max-w-6xl">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Button
            className="lg:hidden"
            onClick={toggleSidebar}
            size="icon"
            variant="hover"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </Button>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button asChild variant="hover">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold hover:text-primary"
                >
                  <CodeXml className="w-5 h-5 opacity-80" />
                  Guilherme Campos
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="leading-relaxed">{t(`navigation.button`)}</p>
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Navigation */}
        <nav
          id="mobile-menu"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex"
        >
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {menuItems.map((item) => {
                const isActive = pathname === item.url;

                return (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink
                      asChild
                      data-active={isActive}
                      aria-current={isActive ? "page" : undefined}
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-ring/50 outline-none focus-visible:ring-[3px] data-[active=true]:text-primary dark:data-[active=true]:text-chart-2 data-[active=true]:font-semibold"
                    >
                      <Link href={item.url} className="z-1 relative">
                        {t(`navigation.${item.title}`)}
                        {isActive && (
                          <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-primary dark:bg-chart-2" />
                        )}
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
              variant="ghost"
              aria-label="Switch language"
              onClick={toggleLanguage}
            >
              {language?.toUpperCase()}
            </Button>
          </div>

          <Button asChild>
            <Link href={cvPath} prefetch={false} download>
              <FileDown className="w-4 h-4" />
              {t("actions.downloadCv")}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
