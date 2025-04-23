import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Por Waiwitlikhit | Portfolio",
  description: "Portfolio, about me, projects, and professional work",
  keywords: ["portfolio", "about me", "projects", "professional work"],
  authors: [{ name: "Por Waiwitlikhit" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${ebGaramond.variable} font-sans antialiased`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
