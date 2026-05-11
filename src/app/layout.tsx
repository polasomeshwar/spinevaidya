import type { Metadata } from "next";
import { Playfair_Display, Inter, Noto_Sans_Telugu } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoTelugu = Noto_Sans_Telugu({
  variable: "--font-noto-telugu",
  subsets: ["telugu"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SpineVaidya — Best Ayurvedic Spine Treatment in Telangana & AP",
  description:
    "Find lasting relief from Back Pain, Sciatica, and Slip Disc through authentic Vedic Panchakarma treatments. Top rated in Hyderabad, Vizag, Vijayawada, Warangal, Karimnagar, Nizamabad, Bhongir & Kodad.",
  keywords: [
    "Ayurvedic spine treatment Hyderabad",
    "Best spine doctor in Telangana",
    "Sciatica treatment AP",
    "Slip disc treatment without surgery Vizag",
    "Back pain Ayurvedic doctor Vijayawada",
    "Spine specialist Karimnagar",
    "Panchakarma for back pain Warangal",
    "Ayurvedic hospital Nizamabad",
    "Spine care Bhongir Kodad",
    "Non-surgical spine treatment",
    "SpineVaidya",
    "Dr. Someshwar",
  ],
  openGraph: {
    title: "SpineVaidya — Best Ayurvedic Spine Treatment in Telangana & AP",
    description: "Find lasting relief from Back Pain, Sciatica, and Slip Disc through authentic Vedic Panchakarma treatments.",
    url: "https://beingvaidya.com", // Assuming beingvaidya.com or spinevaidya.com
    siteName: "SpineVaidya",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpineVaidya — Ayurvedic Spine Treatment",
    description: "Non-surgical, authentic Vedic Panchakarma treatments for spine issues across Telangana & AP.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${playfair.variable} ${inter.variable} ${notoTelugu.variable} antialiased`}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
          <FloatingWhatsApp />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
