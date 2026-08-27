import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MindSpace",
  description: "App for psychologists services",
  icons: {
    icon: "/favicon.svg",
  },

  openGraph: {
    title: "MindSpace",
    description: "App for psychologists services",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MindSpace",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} `}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
