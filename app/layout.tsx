import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  fallback: ["monospace"],
  preload: true,
  adjustFontFallback: true,
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Arc8 - Fun Activities Booking",
  description: "Book your next adventure with Arc8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body cz-shortcut-listen="true" className={`${spaceMono.variable} ${spaceMono.className} antialiased`}>
        <Navbar />
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
