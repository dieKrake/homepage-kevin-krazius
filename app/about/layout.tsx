import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über mich",
  description: "Erfahren Sie mehr über Kevin Krazius - Ihren Experten für Webentwicklung, Local SEO und KI-Automatisierung in Jagstzell und der Region Ostalb.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Über Kevin Krazius | Krazius Solutions",
    description: "Webentwicklung & KI-Expertise aus Jagstzell. Ich helfe Unternehmen bei der digitalen Transformation.",
    url: "https://krazius-solutions.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
