import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Erfahren Sie mehr über Krazius Solutions - Ihre Experten für Webentwicklung, Local SEO und KI-Automatisierung in Jagstzell und der Region Ostalb.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Über Krazius Solutions | Webentwicklung & KI-Expertise",
    description:
      "Webentwicklung & KI-Expertise aus Jagstzell. Wir helfen Unternehmen bei der digitalen Transformation.",
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
