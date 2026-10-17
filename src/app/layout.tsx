import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import AmbientBackground from "@/components/animations/AmbientBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Full-stack developer crafting robust backend systems and refined web experiences — MERN, SaaS, and creative engineering.";

export const metadata: Metadata = {
  title: "Md Ehtesham — Full Stack Developer",
  description,
  keywords:
    "full stack developer, MERN, React, Next.js, TypeScript, SaaS, portfolio",
  authors: [{ name: "Md Ehtesham", url: "https://github.com/md-ehtesham57" }],
  metadataBase: new URL("https://md-ehtesham.vercel.app"),
  openGraph: {
    title: "Md Ehtesham — Full Stack Developer",
    description,
    url: "https://md-ehtesham.vercel.app",
    siteName: "Md Ehtesham Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Md Ehtesham Portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="relative min-h-screen overflow-x-hidden">
        <AmbientBackground />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
