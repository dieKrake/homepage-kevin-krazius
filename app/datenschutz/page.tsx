"use client";

import React from "react";
import { motion } from "motion/react";

export default function Datenschutz() {
  return (
    <main className="flex flex-col items-center px-4 pt-32 pb-20 bg-gray-950 min-h-screen">
      <div className="w-full max-w-4xl">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold mb-12 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Datenschutzerklärung
        </motion.h1>

        <motion.section
          className="text-gray-400 leading-relaxed space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div>
            <h2 className="text-xl font-bold text-white mb-4">1. Datenschutz auf einen Blick</h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-4">2. Datenerfassung auf dieser Website</h2>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen. Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-4">3. Analyse-Tools und Tools von Drittanbietern</h2>
            <p>
              Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen zurückverfolgt werden.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-4">4. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
            </p>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
