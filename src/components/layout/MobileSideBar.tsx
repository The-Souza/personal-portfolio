"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import { FileDown, FileText, Github, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { ToggleTheme } from "@/components/ui/themeToggle";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import { menuItems } from "@/constants/menu-items";

export function MobileSidebar() {
  const { t, i18n } = useTranslation();
  const { toggleSidebar } = useSidebar();
  const pathname = usePathname();

  function toggleLanguage() {
    const next = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(next);
  }

  return (
    <Sidebar>
      <SidebarHeader>
        {/* Actions */}
        <div className="items-center justify-center gap-2 flex">
          <ToggleTheme />

          <Button size="icon" variant="outline" onClick={toggleLanguage}>
            {i18n.language?.toUpperCase()}
          </Button>

          <Button asChild>
            <Link
              href={
                i18n.language === "pt"
                  ? "/doc/Guilherme_Campos_Frontend_Jr.pdf"
                  : "/doc/Guilherme_Campos_Frontend_Jr_En.pdf"
              }
              download
            >
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
                    isActive={pathname === item.url}
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
            href="https://github.com/The-Souza"
            target="_blank"
            className="flex items-center gap-2 hover:text-primary"
          >
            <Github className="w-4 h-4" />
            GitHub
          </Link>

          <Link
            href="https://linkedin.com/in/guilherme-campos-frontend"
            target="_blank"
            className="flex items-center gap-2 hover:text-primary"
          >
            <LinkedinIcon className="w-4 h-4" />
            LinkedIn
          </Link>

          <Link
            href="/doc/Guilherme_Campos_Frontend_Jr.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary"
          >
            <FileText className="w-4 h-4" />
            {t("viewCv")}
          </Link>
        </div>
        <span className="text-xs opacity-70 mt-2">© 2026 Guilherme Souza</span>
      </SidebarFooter>
    </Sidebar>
  );
}
