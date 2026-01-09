import { ThemeProvider } from "@/providers/ThemeProvider";
import { I18NextProvider } from "@/providers/I18NextProvider";
import { Header } from "@/components/layout/Header";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { GradientBackground } from "@/components/animate-ui/components/backgrounds/gradient";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
            <Header />
            <main className="pt-17 flex-1 px-6 pb-6 flex flex-col items-center">
              {children}
            </main>
            <Footer />
          </I18NextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
