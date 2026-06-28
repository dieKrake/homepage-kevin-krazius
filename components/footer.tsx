import Link from "next/link";
import React from "react";
import Image from "next/image";
import { links } from "@/lib/data";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-950 border-t border-white/5 pt-20 pb-10 px-4">
      <div className="max-w-[72rem] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="cursor-pointer group">
              <Image
                src="/Krazius-Solutions-Logo.webp"
                alt="Krazius Solutions Logo"
                width={150}
                height={150}
                className="h-16 w-auto transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Ihre Agentur für moderne Next.js Webentwicklung, Local SEO und
              intelligente KI-Automatisierungslösungen.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.hash}>
                  <Link
                    href={link.hash}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">
              Rechtliches
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/impressum"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/agb"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  AGB
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Datenschutzerklärung
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Summary Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">
              Kontakt
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <FaPhone className="text-blue-500" />
                <span>+49 162 405 9165</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <FaEnvelope className="text-amber-500" />
                <span className="break-all">kevin@krazius-solutions.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <FaMapMarkerAlt className="text-rose-500 mt-1" />
                <span>Hauptstraße 60, 73489 Jagstzell</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-gray-500 text-xs">
            &copy; {currentYear} Krazius Solutions. Alle Rechte vorbehalten.
          </p>
          <p className="text-gray-500 text-xs">
            Entwickelt mit Leidenschaft für den digitalen Erfolg lokaler
            Unternehmen.
          </p>
        </div>
      </div>
    </footer>
  );
}
