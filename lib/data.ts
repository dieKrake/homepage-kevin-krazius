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
    title: "Digital werden",
    description:
      "Digitale Transformation durch moderne Webanwendungen. Mit Next.js und Supabase entwickle ich skalierbare Lösungen für Ihre Geschäftsprozesse.",
    tags: ["Next.js", "Supabase", "Digitalisierung"],
    imageUrl: digitalImage,
  },
  {
    title: "Für jeden Endnutzer",
    description:
      "Responsive Anwendungen für alle Geräte. TypeScript und Tailwind sorgen für optimale Benutzererfahrung auf Desktop, Tablet und Smartphone.",
    tags: ["TypeScript", "Tailwind", "Responsive Design", "Cross-Platform"],
    imageUrl: devicesImage,
  },
  {
    title: "Modernes Auftreten",
    description:
      "Professionelle Webauftritte mit modernen Animationen. Framer Motion und zeitgemäßes Design stärken Ihre Marke und steigern Conversions.",
    tags: ["Framer Motion", "Branding", "Animation"],
    imageUrl: modernImage,
  },
  {
    title: "Einfache Bedienung",
    description:
      "Intuitive Benutzeroberflächen reduzieren Schulungsaufwand. Durchdachtes UX-Design erhöht die Nutzerakzeptanz Ihrer digitalen Lösungen.",
    tags: ["UX Design", "Usability", "Interface Design"],
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
