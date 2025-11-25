import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Capital V Solutions",
  description: "Build a technology backbone that actually powers your business. Capital V Solutions helps enterprises design and implement robust platforms, intelligent data foundations, and AI-driven automation.",
  icons: {
    icon: "/logo.png.PNG",
    shortcut: "/logo.png.PNG",
    apple: "/logo.png.PNG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(headingFont.variable, bodyFont.variable, "min-h-screen bg-brand-light dark:bg-brand-dark antialiased font-body")}>
        {children}
      </body>
    </html>
  );
}
