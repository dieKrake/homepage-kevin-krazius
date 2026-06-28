import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KI-Chatbots & Automatisierung",
  description: "Optimieren Sie Ihren Kundensupport mit intelligenten RAG-Chatbots. 24/7 Lead-Erfassung und automatisierte Kundenkommunikation für Ihr Unternehmen.",
  alternates: {
    canonical: "/chatbots",
  },
  openGraph: {
    title: "KI-Chatbots für Ihr Unternehmen | Krazius Solutions",
    description: "Automatisieren Sie Ihre Kundenbetreuung mit modernster KI-Technologie (RAG, GPT-4).",
    url: "https://krazius-solutions.com/chatbots",
  },
};

export default function ChatbotsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
