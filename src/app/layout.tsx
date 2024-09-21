import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer/footer";
import TopHeader from "@/components/Header/header";
import SideHeader from "@/components/Header/side-header";
import ChatNow from "@/components/Home/chat";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MK Autos - Premium Car Rental Services",
  description: "Experience luxury and convenience with MK Autos. Discover a diverse range of vehicles for every occasion, from compact cars to premium SUVs."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <TopHeader />
        <SideHeader />
        <ChatNow />
        {children}
        <Footer />
      </body>
    </html>
  );
}
