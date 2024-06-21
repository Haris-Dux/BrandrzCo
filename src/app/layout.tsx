import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

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
      <head>
        <link
          rel="icon"
          href="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/download.png?v=1718314438"
          sizes="any"
        />
        <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap" rel="stylesheet"/>
        <script src="https://embed.tawk.to/6675d6219d7f358570d21dc4/1i0u4otj0" async />
      </head>
     
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
