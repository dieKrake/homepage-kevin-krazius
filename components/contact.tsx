"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center md:text-left scroll-mt-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Kontakt</SectionHeading>
      <div className="flex justify-center sm:gap-32 gap-x-10 text-white/80">
        <div className="text-left">
          <p className="mb-1">Telefon:</p>
          <p className="mb-1">Öffnungszeiten:</p>
          <p className="mb-1">E-Mail:</p>
          <p className="mb-1">Adresse:</p>
        </div>
        <div className="text-left">
          <p className="mb-1">
            <a href="tel:+491624059165" className="underline">
              +49 162 405 9165
            </a>
          </p>
          <p className="mb-1">09 - 17Uhr</p>
          <p className="mb-1">
            <a href="mailto:kevin@krazius-solutions.de" className="underline">
              kevin@krazius-solutions.de
            </a>
          </p>
          <p className="mb-1">Hauptstraße 60</p>
          <p className="mb-1">73489 Jagstzell</p>
        </div>
      </div>

      <p className="text-white/80 mt-12 text-center">
        Bitte kontaktieren Sie mich direkt per Whatsapp, Telefon, E-Mail oder
        über folgendes Formular.
      </p>

      <form
        className="mt-10 flex flex-col text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="text-center h-14 px-4 rounded-lg borderBlack bg-white bg-opacity-80 focus:bg-opacity-100 transition-all outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Ihre E-Mail Adresse..."
        />
        <textarea
          className="text-center h-52 my-3 rounded-lg borderBlack p-4 bg-white bg-opacity-80 focus:bg-opacity-100 transition-all outline-none"
          name="message"
          placeholder="Ihre Nachricht..."
          required
          maxLength={5000}
        />
        <div className="flex justify-center">
          <SubmitBtn />
        </div>
      </form>
    </motion.section>
  );
}
