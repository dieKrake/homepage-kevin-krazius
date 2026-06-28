import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preise & Pakete",
  description: "Transparente Preise für Webdesign, SEO und KI-Chatbots. Website-Miete (WaaS) oder Einmalkauf - finden Sie das passende Paket für Ihr Budget.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Preise & Web-Abos | Krazius Solutions",
    description: "Professionelle Websites und KI-Lösungen zum fairen monatlichen Festpreis.",
    url: "https://krazius-solutions.com/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
