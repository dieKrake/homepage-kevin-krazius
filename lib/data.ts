import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import digitalImage from "@/public/digital.webp";
import uiImage from "@/public/ui.webp";
import devicesImage from "@/public/devices.webp";
import modernImage from "@/public/modern.webp";

export const links = [
  {
    name: "Startseite",
    hash: "/",
  },
  {
    name: "Websites",
    hash: "/websites",
  },
  {
    name: "Pricing",
    hash: "/pricing",
  },
  {
    name: "Chatbots",
    hash: "/chatbots",
  },
  {
    name: "Über uns",
    hash: "/about",
  },
] as const;

// Experiences and Case Studies removed during cleanup

export const servicesData = [
  {
    title: "High-Performance Webseiten",
    description:
      "Maßgeschneiderte, pfeilschnelle Next.js-Websites mit perfektem Design. Voll optimiert für mobile Geräte und schnelle Ladezeiten für maximale Benutzererfahrung.",
    tags: ["Next.js", "React", "Mobile First", "Blitzschnell"],
    imageUrl: digitalImage,
  },
  {
    title: "Suchmaschinenoptimierung (SEO)",
    description:
      "Top-Rankings bei Google für relevante lokale Keywords. Optimierung Ihres Google Business Profils, damit Kunden in Ihrer Region Sie sofort finden.",
    tags: ["Local SEO", "Google Maps", "Keywords", "Sichtbarkeit"],
    imageUrl: devicesImage,
  },
  {
    title: "RAG KI-Chatbots & Automation",
    description:
      "Rund um die Uhr Kundenanfragen beantworten und Leads erfassen. Automatisierter Support, maßgeschneidert auf Ihr Firmenwissen, mit optionaler WhatsApp-Anbindung.",
    tags: ["RAG-Technologie", "24/7 Lead-Erfassung", "Support", "WhatsApp"],
    imageUrl: modernImage,
  },
  {
    title: "Rundum-Sorglos-Betreuung",
    description:
      "Sicheres Hosting, laufende Updates, Backups und DSGVO-konforme Pflege. Wir übernehmen die Technik, damit Sie sich voll auf Ihr Geschäft konzentrieren können.",
    tags: [
      "Hosting & SSL",
      "DSGVO-Konformität",
      "Regelmäßige Backups",
      "Wartung",
    ],
    imageUrl: uiImage,
  },
] as const;

export const skillsData = [
  "OpenAI GPT-4",
  "Claude AI",
  "RAG-Technologie",
  "LangChain",
  "LlamaIndex",
  "Pinecone",
  "Weaviate",
  "Vector Databases",
  "Prompt Engineering",
  "Python",
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "Tailwind",
  "Framer Motion",
] as const;
