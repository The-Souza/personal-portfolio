import { ThemeProvider } from "@/providers/ThemeProvider";
import { I18NextProvider } from "@/providers/I18NextProvider";
import { Header } from "@/components/layout/Header";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { GradientBackground } from "@/components/animate-ui/components/backgrounds/gradient";
import { SidebarProvider } from "@/components/ui/sidebar";
import { MobileSidebar } from "@/components/layout/MobileSideBar";
import { cookies } from "next/headers";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen flex flex-col relative overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <I18NextProvider>
            <GradientBackground className="absolute inset-0 -z-50 flex items-center justify-center" />
            <SidebarProvider defaultOpen={defaultOpen}>
              <MobileSidebar />
              <Header />
              <main className="pt-17 flex-1 px-6 pb-6 flex flex-col items-center">
                {children}
              </main>
              <Footer />
            </SidebarProvider>
          </I18NextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
