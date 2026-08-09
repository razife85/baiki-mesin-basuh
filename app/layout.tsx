import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

import Providers from "../components/ThemeProvider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.baikimesinbasuh.com"),

  title: {
    default: "Baiki Mesin Basuh & Peti Sejuk Rawang | Servis Ke Rumah",
    template: "%s | Baiki Mesin Basuh Rawang",
  },

  description:
    "Servis baiki mesin basuh dan peti sejuk sekitar Rawang, Sungai Buloh, Kuang, Kundang, Ijok, Selayang dan Gombak. Datang ke rumah. Hubungi sekarang.",

  keywords: [
    "Baiki Mesin Basuh Rawang",
    "Baiki Peti Sejuk Rawang",
    "Repair Washing Machine Rawang",
    "Repair Refrigerator Rawang",
    "Servis Mesin Basuh",
    "Servis Peti Sejuk",
    "Mesin Basuh Rosak",
    "Peti Sejuk Rosak",
  ],

  authors: [{ name: "Razif" }],

  verification: {
    google: "Wl8dyJ4ZX3W_Z2yw_fLM03xWTBeklQsKlSkWEmUKUxE",
  },

  openGraph: {
    title: "Baiki Mesin Basuh & Peti Sejuk Rawang",
    description:
      "Servis ke rumah sekitar Rawang, Sungai Buloh, Kuang, Kundang, Ijok, Selayang dan Gombak.",
    url: "https://www.baikimesinbasuh.com",
    siteName: "Baiki Mesin Basuh Rawang",
    locale: "ms_MY",
    type: "website",

    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}