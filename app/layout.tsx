import type { Metadata } from "next";
import { Archivo, Geist } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  axes: ["wdth"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
  weight: ["500"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | DFW, Tyler & San Angelo Roofers`,
    template: `%s | ${site.name}`,
  },
  description:
    "Residential and commercial roofing with white-glove service — inspections, storm claims, installs, and cleanup. Free on-site estimate. Call (817) 401-6440.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${geist.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
