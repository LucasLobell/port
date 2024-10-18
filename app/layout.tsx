import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollHandler from "@/components/ScrollHandler"; 

export const metadata: Metadata = {
  title: "Lucas Lobell",
  description: "Web Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-auto h-screen scrollbar-custom bg-black">
        <ScrollHandler />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
