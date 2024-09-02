import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Porfolio",
  description: "Porfolio de Saúl",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={cn("min-h-screen  font-sans antialiased max-w-5xl mx-auto pt-12 px-6 bg-[#ffffff] text-[#373234]", fontSans.variable)}>{children}
      <Footer/>
      </body>
    </html>
  );
}
