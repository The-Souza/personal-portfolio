import { ThemeProvider } from "@/providers/ThemeProvider";
import { I18NextProvider } from "@/providers/I18NextProvider";
import { IntroProvider } from "@/providers/IntroProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileSidebar } from "@/components/layout/MobileSideBar";
import { Background } from "@/components/layout/Backgound";
import { IntroGate } from "@/components/layout/IntroGate";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { inter, poppins } from "./fonts";
import { cookies } from "next/headers";
import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Guilherme Campos | Frontend Developer",
    template: "%s | Guilherme Campos",
  },
  description:
    "Frontend Developer especializado em React, Next.js e TypeScript. Portfólio com projetos, experiências e contato.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Guilherme Campos" }],
  creator: "Guilherme Campos",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Guilherme Campos | Frontend Developer",
    description:
      "Portfólio profissional com projetos em React, Next.js e TypeScript.",
    siteName: "Guilherme Campos Portfolio",
    images: [
      {
        url: "/images/portfolio-preview.png",
        width: 1200,
        height: 630,
        alt: "Guilherme Campos Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guilherme Campos | Frontend Developer",
    description:
      "Portfólio profissional com projetos em React, Next.js e TypeScript.",
    images: ["/images/portfolio-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
  applicationName: "Portfólio",
  appleWebApp: {
    title: "Portfólio",
    statusBarStyle: "black-translucent",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  const lang = cookieStore.get("lang")?.value ?? "pt";

  return (
    <html
      lang={lang === "pt" ? "pt-BR" : "en"}
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col relative overflow-x-hidden font-sans">
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
