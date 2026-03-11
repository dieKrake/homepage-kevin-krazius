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
      "RAG-basierte Chatbots für präzise Antworten auf Kundenfragen. 24/7 Verfügbarkeit mit nahtloser Integration in Ihre bestehende Website.",
    tags: ["RAG-Technologie", "24/7 Support", "Website Integration"],
    imageUrl: digitalImage,
  },
  {
    title: "Branchenspezifische Lösungen",
    description:
      "Anpassung an Ihre Fachterminologie und Schulung mit Unternehmensdaten. Vollständige Compliance und Datenschutz nach deutschen Standards.",
    tags: ["Fachterminologie", "Unternehmensdaten", "DSGVO-konform"],
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
    tags: ["Machine Learning", "Performance-Monitoring", "Updates"],
    imageUrl: uiImage,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
