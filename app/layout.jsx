import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://youcineapk.app"),

  title: {
    default: "YouCine APK Download – Watch Movies & Anime HD",
    template: "%s | YouCine APK",
  },

  description:
    "YouCine APK Latest Version (Updated) with Download & Installation Guide. Download for Android, iOS, TV, and PC.",

  applicationName: "YouCine APK",

  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      en: "/en",
    },
  },

  openGraph: {
    type: "website",
    siteName: "YouCine APK",
    url: "https://youcineapk.app",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "YouCine APK Oficial",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "YouCine APK – Download Oficial 2026",
    description:
      "Baixe YouCine APK atualizado. Guia completo de instalação e uso.",
    images: ["/YouCine-APK-for-Android-TV.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
