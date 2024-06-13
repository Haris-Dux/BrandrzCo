import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BrandrsCo",
  description: "YOUR BUDDY IS CREATING & GROWING BRANDS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="light">
        <div className="relative w-full flex justify-center items-center">
          <Navbar />
        </div>
        {children}
        <div className="w-full">
          <Footer />
        </div>
      </body>
    </html>
  );
}
