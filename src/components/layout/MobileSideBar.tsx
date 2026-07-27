"use client";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import { ToggleTheme } from "@/components/ui/toggle-theme";
import { menuItems } from "@/constants/menu-items";
import { socialLinks } from "@/constants/social-links";
import { useCvPath } from "@/hooks/use-cv-path";
import { useLanguage } from "@/hooks/use-language";
import { isNavItemActive } from "@/lib/utils";
import { FileDown, FileText, Github, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

export function MobileSidebar() {
  const { t } = useTranslation();
  const { toggleSidebar, isMobile } = useSidebar();
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();
  const cvPath = useCvPath();

  if (!isMobile) return null;

  return (
    <Sidebar>
      <SidebarHeader>
        {/* Actions */}
        <div className="items-center justify-center gap-2 flex">
          <ToggleTheme />

          <Button
            size="icon"
            variant="outline"
            aria-label={t("actions.switchLanguage", {
              lang: language?.toUpperCase(),
            })}
            onClick={toggleLanguage}
          >
            {language?.toUpperCase()}
          </Button>

          <Button asChild>
            <Link href={cvPath} prefetch={false} download>
              <FileDown className="w-4 h-4" />
              {t("actions.downloadCv")}
            </Link>
          </Button>
        </div>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="min-h-11 transition-colors duration-150"
                    isActive={isNavItemActive(pathname, item.url)}
                    onClick={() => {
                      toggleSidebar();
                    }}
                  >
                    <Link href={item.url}>
                      <item.icon className="size-4 transition-transform group-hover:translate-x-0.5" />
                      {t(`navigation.${item.title}`)}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <div className="flex items-center justify-evenly gap-2 opacity-80 hover:opacity-100">
          <Link
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-2 hover:text-primary before:absolute before:-inset-y-3 before:-inset-x-1 before:content-['']"
          >
            <Github className="w-4 h-4" />
            GitHub
          </Link>

          <Link
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-2 hover:text-primary before:absolute before:-inset-y-3 before:-inset-x-1 before:content-['']"
          >
            <LinkedinIcon className="w-4 h-4" />
            LinkedIn
          </Link>

          <Link
            href={cvPath}
            target="_blank"
            prefetch={false}
            rel="noopener noreferrer"
            className="relative flex items-center gap-2 hover:text-primary before:absolute before:-inset-y-3 before:-inset-x-1 before:content-['']"
          >
            <FileText className="w-4 h-4" />
            {t("viewCv")}
          </Link>
        </div>
        <span className="text-xs opacity-70 mt-2">© 2026 Guilherme Campos</span>
      </SidebarFooter>
    </Sidebar>
  );
}
