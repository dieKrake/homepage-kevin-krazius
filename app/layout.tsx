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
import LocalBusinessJSONLD from "@/components/local-business-json-ld";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://krazius-solutions.com"),
  title: {
    default: "Krazius Solutions | Webdesign, SEO & KI-Automatisierung",
    template: "%s | Krazius Solutions",
  },
  description:
    "Krazius Solutions - Ihre Agentur für Next.js Webseiten, Local SEO und KI-Chatbots in Jagstzell, Ellwangen & Aalen. Wir steigern Ihre Sichtbarkeit im Ostalbkreis.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Krazius Solutions | Webdesign, SEO & KI-Automatisierung",
    description:
      "Krazius Solutions - Ihre Agentur für Next.js Webseiten, Local SEO und KI-Chatbots in Jagstzell, Ellwangen & Aalen. Wir steigern Ihre Sichtbarkeit im Ostalbkreis.",
    url: "https://krazius-solutions.com",
    siteName: "Krazius Solutions",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krazius Solutions | Webdesign, SEO & KI-Automatisierung",
    description:
      "Krazius Solutions - Ihre Agentur für Next.js Webseiten, Local SEO und KI-Chatbots in Jagstzell, Ellwangen & Aalen. Wir steigern Ihre Sichtbarkeit im Ostalbkreis.",
  },
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
        <LocalBusinessJSONLD />
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
