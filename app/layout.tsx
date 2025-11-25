import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";
import ThemeToggle from "@/components/ThemeToggle";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harish M | Full Stack Developer & AI Solutions Engineer",
  description: "Portfolio of Harish M, a Full Stack Developer and AI Solutions Engineer specializing in Agentic AI and modern web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <CursorGlow />
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
