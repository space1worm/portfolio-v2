import type { Metadata, Viewport } from "next";

import "./globals.css";

import { SiteMetaData } from "@/config/siteMetaData";
import { SiteViewPort } from "@/config/siteViewPort";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/providers/ThemeProvider";

import Header from "@/components/Header/Header";
import TailwindIndicator from "@/components/TailwindIndicator";
import Toaster from "@/components/Toaster";

export const metadata: Metadata = SiteMetaData;
export const viewport: Viewport = SiteViewPort;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex-1 p-12">{children}</div>
          </main>
          <TailwindIndicator />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
