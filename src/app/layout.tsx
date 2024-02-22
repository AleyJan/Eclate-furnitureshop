import type { Metadata } from "next";
import Navbar from "@/components/Navbar/page";
import { Inter } from "next/font/google";
import {Bai_Jamjuree} from "next/font/google";
import "./globals.css";

const bai_init = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ['200',  '300', '400'],
  variable: '--font-bai_jaijuree'

})
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Éclaté",
  description: "Furniture Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" scroll-smooth">
      <body className={`${inter.className} ${bai_init.variable}`}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}