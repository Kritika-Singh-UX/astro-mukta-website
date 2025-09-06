import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Mukta Tyagi - Vedic Astrologer",
  description: "A Vedic astrologer with 25 years of experience, specializing in career, vastu, relationships, health, business, and legal matters",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Dr. Mukta Tyagi - Vedic Astrologer",
    description: "A Vedic astrologer with 25 years of experience, specializing in career, vastu, relationships, health, business, and legal matters",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Dr. Mukta Tyagi - Vedic Astrologer",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Dr. Mukta Tyagi - Vedic Astrologer",
    description: "A Vedic astrologer with 25 years of experience, specializing in career, vastu, relationships, health, business, and legal matters",
    images: ["/favicon.png"],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
