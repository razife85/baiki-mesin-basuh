import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

import Providers from "../components/ThemeProvider";
import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({
                  'gtm.start': new Date().getTime(),
                  event:'gtm.js'
                });
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KWWTLVCK');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>

      <body suppressHydrationWarning>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KWWTLVCK"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}