import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "School Street Salon | Luxury Hair Salon in Lebanon, NH",
  description: "A women-owned luxury hair salon in Lebanon, New Hampshire. Professional cuts, color, and styling in an intimate, welcoming environment. Book at (603) 727-9377.",
  keywords: "luxury salon, hair salon, beauty salon, Lebanon NH, haircuts, hair color, balayage, highlights, women owned, Vermont, New Hampshire",
  openGraph: {
    title: "School Street Salon | Lebanon, NH",
    description: "A women-owned luxury hair salon in the heart of Lebanon, NH.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
