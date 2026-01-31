import { ThemeProvider } from "@/providers/ThemeProvider";
import { I18NextProvider } from "@/providers/I18NextProvider";
import { Header } from "@/components/layout/Header";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { SidebarProvider } from "@/components/ui/sidebar";
import { MobileSidebar } from "@/components/layout/MobileSideBar";
import { cookies } from "next/headers";
import { Separator } from "@/components/ui/separator";
import { Background } from "@/components/layout/Backgound";
import { IntroGate } from "@/components/layout/IntroGate";
import { IntroProvider } from "@/providers/IntroProvider";
import { inter, poppins } from "./fonts";
import { Toaster } from "@/components/ui/sonner";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} antialiased`}
    >
      <head />
      <body className="min-h-screen flex flex-col relative overflow-x-hidden font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <I18NextProvider>
            <IntroProvider>
              <Background />
              <IntroGate>
                <SidebarProvider defaultOpen={defaultOpen}>
                  <MobileSidebar />
                  <Header />
                  <Toaster />
                  <main className="pt-17.5 flex-1 px-6 pb-6 sm:px-10 flex flex-col items-center">
                    {children}
                  </main>
                  <Separator />
                  <Footer />
                </SidebarProvider>
              </IntroGate>
            </IntroProvider>
          </I18NextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
