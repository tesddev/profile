import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tesleem Amuda | Software Developer and AI Automation engr.",
  description: "Software Developer and AI Automation engr. Portfolio showcasing mobile apps and intelligent automation systems.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Tesleem Amuda | Software Developer and AI Automation engr.",
    description: "Software Developer and AI Automation engr. Portfolio showcasing mobile apps and intelligent automation systems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tesleem Amuda | Software Developer and AI Automation engr.",
    description: "Software Developer and AI Automation engr. Portfolio showcasing mobile apps and intelligent automation systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
