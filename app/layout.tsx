import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "School Street Salon | Hair Salon in Lebanon, NH",
  description:
    "A women-owned hair salon in Lebanon, New Hampshire. Cuts, color, and styling in a welcoming space. Book at (603) 727-9377.",
  keywords:
    "hair salon, beauty salon, Lebanon NH, haircuts, hair color, balayage, highlights, women owned, Upper Valley, New Hampshire",
  openGraph: {
    title: "School Street Salon | Lebanon, NH",
    description:
      "A women-owned hair salon in the heart of Lebanon, NH.",
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
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
