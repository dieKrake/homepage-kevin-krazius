import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modernes Webdesign & Next.js Websites",
  description: "Hochperformante, mobile-optimierte Websites für Unternehmen in Jagstzell, Ellwangen und Aalen. Blitzschnelle Ladezeiten und Local SEO inklusive.",
  alternates: {
    canonical: "/websites",
  },
  openGraph: {
    title: "Webdesign & Next.js Entwicklung | Krazius Solutions",
    description: "Wir erstellen Websites, die verkaufen. Modernste Technik, DSGVO-konform und für Google optimiert.",
    url: "https://krazius-solutions.com/websites",
  },
};

export default function WebsitesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
