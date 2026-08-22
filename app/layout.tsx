import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatWidgetPlaceholder from "@/components/ChatWidgetPlaceholder";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MJ Ablanque — AI Automation Specialist | Finance & E-commerce Systems",
  description:
    "AI automation specialist with a BS Accountancy background and hands-on e-commerce experience. See Idol Fairies, a working e-commerce + finance automation ecosystem built end-to-end as a portfolio demonstration.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-[var(--color-ink)]">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidgetPlaceholder />
      </body>
    </html>
  );
}
