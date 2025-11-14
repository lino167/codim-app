import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { AppProviders } from "@/components/providers/AppProviders";
import { CodimNavbar } from "@/components/layout/CodimNavbar";
import { CodimFooter } from "@/components/layout/CodimFooter";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-orbitron",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
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
      <body className={`${orbitron.variable} ${inter.variable} codim-body`}>
        <AppProviders>
          <div className="codim-app">
            <CodimNavbar />
            <main className="codim-main">{children}</main>
            <CodimFooter />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
