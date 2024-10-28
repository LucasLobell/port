import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollHandler from "@/components/ScrollHandler"; 
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Lucas Lobell",
  description: "Web Development",
};

export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
// Ensure that the incoming `locale` is valid
if (!routing.locales.includes(locale as any)) {
  notFound();
}

// Providing all messages to the client
// side is the easiest way to get started
const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="overflow-auto h-screen scrollbar-custom bg-black">
        <NextIntlClientProvider messages={messages} >
        <ScrollHandler />
        <Header />
        {children}
        <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
