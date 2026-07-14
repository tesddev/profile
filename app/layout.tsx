import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tesleem Amuda | Software Developer, DevOps Engineer, and AI Automation engr.",
  description: "Software Developer, DevOps Engineer, and AI Automation engr. Portfolio showcasing mobile apps, cloud infrastructure, and intelligent automation systems.",
  icons: {
    icon: "https://res.cloudinary.com/tesweb/image/upload/v1779822766/Personals/personalIcon_ioyyla.png",
    shortcut: "https://res.cloudinary.com/tesweb/image/upload/v1779822766/Personals/personalIcon_ioyyla.png",
    apple: "https://res.cloudinary.com/tesweb/image/upload/v1779822766/Personals/personalIcon_ioyyla.png",
  },
  openGraph: {
    title: "Tesleem Amuda | Software Developer, DevOps Engineer, and AI Automation engr.",
    description: "Software Developer, DevOps Engineer, and AI Automation engr. Portfolio showcasing mobile apps, cloud infrastructure, and intelligent automation systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
