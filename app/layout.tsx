import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "@/components/scroll-to-top";
import CookieProvider from "@/context/cookie-context";
import CookieBanner from "@/components/cookie-banner";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Krazius Solutions | Webdesign, SEO & KI-Automatisierung",
  description:
    "Ihre Agentur für hochperformante Next.js Webseiten, Local SEO und intelligente KI-Chatbots. Wir steigern Ihre Online-Sichtbarkeit und gewinnen automatisiert neue Kunden.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="!scroll-smooth">
      <body
        className={`${inter.className} relative pt-[4.5rem] bg-gray-950 text-gray-50 text-opacity-90 overflow-x-hidden`}
      >
        <CookieProvider>
          <ScrollToTop />

          <Header />
          {children}
          <div className="flex flex-col items-center px-4 sm:px-0">
            <Contact />
          </div>
          <Footer />

          <Toaster position="top-right" />
          <CookieBanner />
          <Analytics />
          <SpeedInsights />
        </CookieProvider>
      </body>
    </html>
  );
}
