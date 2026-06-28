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
    title: "Intelligente Kundenbetreuung",
    description:
      "RAG-basierte Chatbots für präzise Antworten auf Kundenfragen. 24/7 Verfügbarkeit mit Integration in Ihre bestehende Website.",
    tags: ["RAG-Technologie", "24/7 Support", "Website Integration"],
    imageUrl: digitalImage,
  },
  {
    title: "Branchenspezifische Lösungen",
    description:
      "Anpassung an Ihre Fachterminologie und Schulung mit Unternehmensdaten.",
    tags: ["Fachterminologie", "Unternehmensdaten"],
    imageUrl: devicesImage,
  },
  {
    title: "Nahtlose Integration",
    description:
      "Verbindung zu WhatsApp, Website und Social Media Kanälen. CRM-Anbindung möglich mit einfacher, zentraler Verwaltung.",
    tags: ["WhatsApp", "Social Media", "CRM-Integration"],
    imageUrl: modernImage,
  },
  {
    title: "Kontinuierliche Optimierung",
    description:
      "Lernende Systeme mit Performance-Monitoring und regelmäßigen Updates. Ihr Chatbot wird kontinuierlich intelligenter.",
    tags: ["Machine Learning", "Performance-Monitoring"],
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
