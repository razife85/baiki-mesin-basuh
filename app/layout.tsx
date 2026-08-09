import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import Providers from "../components/ThemeProvider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baiki Mesin Basuh & Peti Sejuk Rawang | Servis Ke Rumah",
  description:
    "Servis membaiki mesin basuh dan peti sejuk sekitar Rawang, Sungai Buloh, Kundang, Kuang, Ijok, Selayang dan Gombak sejak 2016.",
  keywords: [
    "Baiki Mesin Basuh Rawang",
    "Baiki Peti Sejuk Rawang",
    "Repair Washing Machine Rawang",
    "Repair Refrigerator Rawang",
    "Mesin Basuh Rosak",
    "Peti Sejuk Rosak",
  ],
  authors: [{ name: "Razif" }],
  verification: {
    google: "Wl8dyJ4ZX3W_Z2yw_fLM03xWTBeklQsKlSkWEmUKUxE",
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