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
    name: "Leistungen",
    hash: "#services",
  },
  {
    name: "Über mich",
    hash: "#about",
  },

  {
    name: "Kontakt",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
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

export const caseStudiesData = [
  {
    title: "Handwerksbetrieb Chatbot",
    description:
      "Intelligenter Chatbot für einen Elektrikerbetrieb mit 24/7 Terminbuchung, Kostenvoranschlägen und technischer Beratung. Reduzierte Anrufe um 60% und steigerte Online-Anfragen um 40%.",
    features: [
      "Terminbuchung",
      "Kostenvoranschläge",
      "Technische Beratung",
      "Notfall-Routing",
    ],
    industry: "Handwerk",
    results: "60% weniger Anrufe, 40% mehr Online-Anfragen",
  },
  {
    title: "FAQ-Automatisierung Steuerberater",
    description:
      "RAG-basierter Chatbot für Steuerberatungskanzlei mit Zugriff auf aktuelle Steuergesetze und Mandantenunterlagen. Automatisiert 80% der Standardanfragen und bietet 24/7 Erstberatung.",
    features: [
      "Steuerrecht-Datenbank",
      "Mandantenportal",
      "Dokumentenupload",
      "Terminvereinbarung",
    ],
    industry: "Steuerberatung",
    results: "80% automatisierte Anfragen, 24/7 Verfügbarkeit",
  },
  {
    title: "Praxis-Terminbuchung",
    description:
      "Intelligentes Terminmanagement für Zahnarztpraxis mit automatischer Terminvorschlägen, Erinnerungen und Behandlungsberatung. Integriert in bestehende Praxissoftware.",
    features: [
      "Terminbuchung",
      "Automatische Erinnerungen",
      "Behandlungsberatung",
      "Praxissoftware-Integration",
    ],
    industry: "Gesundheitswesen",
    results: "50% weniger No-Shows, 30% mehr Terminauslastung",
  },
] as const;
