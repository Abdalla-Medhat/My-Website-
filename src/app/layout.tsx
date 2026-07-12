import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdallah Medhat Kamel | Junior Flutter Developer",
  description:
    "Junior Flutter Developer with hands-on experience in building robust mobile applications for the Android platform. Proficient in REST API integration, data management, and UI implementation.",
  keywords: [
    "Flutter",
    "Dart",
    "Mobile Developer",
    "Android",
    "Junior Developer",
    "Portfolio",
    "Abdallah Medhat",
  ],
  openGraph: {
    title: "Abdallah Medhat Kamel | Junior Flutter Developer",
    description:
      "Junior Flutter Developer with hands-on experience in building robust mobile applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-primary-bg text-text-primary">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
