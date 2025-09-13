"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCookieConsent } from "@/context/cookie-context";
import { BsX, BsGear, BsShield, BsBarChart, BsBullseye } from "react-icons/bs";

export default function CookieBanner() {
  const { showBanner, consent, acceptAll, acceptNecessary, updateConsent } =
    useCookieConsent();
  const [showDetails, setShowDetails] = useState(false);
  const [tempConsent, setTempConsent] = useState(consent);

  const handleSavePreferences = () => {
    updateConsent(tempConsent);
    setShowDetails(false);
  };

  const toggleConsent = (type: "analytics" | "marketing") => {
    setTempConsent((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-[1000] bg-gray-900/95 backdrop-blur-sm border-t border-gray-700"
      >
        {!showDetails ? (
          // Simple Banner
          <div className="max-w-7xl mx-auto p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <BsShield className="text-blue-400 text-xl" />
                  <h3 className="text-lg font-semibold text-white">
                    Cookie-Einstellungen
                  </h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Wir verwenden Cookies, um Ihnen die beste Erfahrung auf
                  unserer Website zu bieten. Notwendige Cookies sind für die
                  Funktionalität erforderlich. Optional können Sie
                  Analytics-Cookies zulassen, um uns bei der Verbesserung zu
                  helfen.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 min-w-fit">
                <button
                  onClick={() => setShowDetails(true)}
                  className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors text-gray-300 hover:text-white"
                >
                  <BsGear className="text-sm" />
                  Einstellungen
                </button>
                <button
                  onClick={acceptNecessary}
                  className="px-4 py-2 text-sm border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors text-gray-300 hover:text-white"
                >
                  Nur Notwendige
                </button>
                <button
                  onClick={acceptAll}
                  className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-white font-medium"
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Detailed Settings
          <div className="max-w-4xl mx-auto p-4 sm:p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <BsShield className="text-blue-400 text-xl" />
                <h3 className="text-xl font-semibold text-white">
                  Cookie-Einstellungen
                </h3>
              </div>
              <button
                onClick={() => setShowDetails(false)}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors text-gray-400 hover:text-white"
              >
                <BsX className="text-xl" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {/* Necessary Cookies */}
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <BsShield className="text-green-400" />
                    <h4 className="font-medium text-white">
                      Notwendige Cookies
                    </h4>
                  </div>
                  <div className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                    Immer aktiv
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  Diese Cookies sind für die Grundfunktionen der Website
                  erforderlich und können nicht deaktiviert werden. Sie
                  speichern keine persönlichen Informationen.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <BsBarChart className="text-blue-400" />
                    <h4 className="font-medium text-white">
                      Analytics Cookies
                    </h4>
                  </div>
                  <button
                    onClick={() => toggleConsent("analytics")}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      tempConsent.analytics ? "bg-blue-600" : "bg-gray-600"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        tempConsent.analytics
                          ? "translate-x-6"
                          : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
                <p className="text-gray-400 text-sm">
                  Helfen uns zu verstehen, wie Besucher mit der Website
                  interagieren. Alle Informationen sind anonymisiert und dienen
                  der Verbesserung unserer Services.
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <BsBullseye className="text-purple-400" />
                    <h4 className="font-medium text-white">
                      Marketing Cookies
                    </h4>
                  </div>
                  <button
                    onClick={() => toggleConsent("marketing")}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      tempConsent.marketing ? "bg-purple-600" : "bg-gray-600"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        tempConsent.marketing
                          ? "translate-x-6"
                          : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
                <p className="text-gray-400 text-sm">
                  Werden verwendet, um Ihnen relevante Werbung zu zeigen.
                  Aktuell verwenden wir keine Marketing-Cookies, aber diese
                  Option ist für zukünftige Features vorbereitet.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={acceptNecessary}
                className="px-6 py-2 border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors text-gray-300 hover:text-white"
              >
                Nur Notwendige
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-white font-medium"
              >
                Einstellungen speichern
              </button>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-xs text-gray-500 text-center">
                Weitere Informationen finden Sie in unserer{" "}
                <a
                  href="/datenschutz"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Datenschutzerklärung
                </a>
              </p>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
