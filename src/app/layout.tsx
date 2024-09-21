import type { Metadata } from "next";

import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import TopHeader from "@/components/Header/header";
import SideHeader from "@/components/Header/side-header";
import ChatNow from "@/components/Home/chat";



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
        className={`${poppins.className} antialiased`}
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
