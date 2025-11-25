import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Capital V Solutions | Enterprise Technology Consulting",
  description: "Build a technology backbone that actually powers your business. Capital V Solutions helps enterprises design and implement robust platforms, intelligent data foundations, and AI-driven automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, "min-h-screen bg-brand-light dark:bg-brand-dark antialiased")}>
        {children}
      </body>
    </html>
  );
}
