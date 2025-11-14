import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { AppProviders } from "@/components/providers/AppProviders";
import { CodimNavbar } from "@/components/layout/CodimNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codim",
  description: "Site institucional e plataforma da Codim.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppProviders>
          <CodimNavbar />
          <main className="py-4">{children}</main>
        </AppProviders>
      </body>
    </html>
  );
}
