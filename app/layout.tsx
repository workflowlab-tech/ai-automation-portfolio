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

const SITE_URL = "https://portfolio.workflowlab.site";
const SITE_TITLE = "MJ Ablanque — AI Automation Specialist | Finance, E-Commerce & Business Process Automation";
const SITE_DESCRIPTION =
  "AI automation specialist with a BS Accountancy background, hands-on e-commerce operations, and CRM/lead automation experience. See Idol Fairies, a working e-commerce + finance automation ecosystem, and Idol Air & Electrical, a GoHighLevel lead-to-job system — both built end-to-end as portfolio demonstrations.";
const SHARE_IMAGE = "/videos/ghl-idol-air-demo-thumbnail.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "MJ Ablanque — AI Automation Portfolio",
    type: "website",
    images: [{ url: SHARE_IMAGE, width: 1920, height: 1080, alt: SITE_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [SHARE_IMAGE],
  },
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
