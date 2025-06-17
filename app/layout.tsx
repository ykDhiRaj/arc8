import type { Metadata } from "next";
import { Inter, Poppins, Press_Start_2P } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const pixelFont = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pixel",
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
      cz-shortcut-listen="true" className={`${inter.variable} ${poppins.variable} ${pixelFont.variable} font-sans antialiased`}>
          {children}
          <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
