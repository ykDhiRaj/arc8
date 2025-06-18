import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
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
      <body
        cz-shortcut-listen="true" className={spaceMono.className}>
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
