"use client";

import React from "react";

export default function SimpleWave() {
  // Farben für die Welle
  const primaryColor = "#9333ea"; // Violett/Lila
  const secondaryColor = "#22d3ee"; // Blau/Türkis

  // Definiere die Basiskurve als Array von Punkten, um alle 5 Linien zu generieren
  const basePath =
    "M0,300 C200,300 300,110 400,110 C500,110 550,230 650,230 C750,230 800,50 950,50 C1050,50 1100,100 1200,100";

  // Vertikale Offsets für die 5 Linien (2 oben, Hauptlinie, 2 unten)
  const offsets = [-35, -20, 0, 22, 50];

  // Strichstärken für die Linien (schmaler als vorher)
  const strokeWidths = [2, 3, 3.5, 4, 4.5];

  // Opazitäten für die Linien (Hauptlinie am stärksten, andere schwächer)
  const opacities = [0.2, 0.4, 0.6, 0.8, 1];

  return (
    <div className="w-full h-full overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Hauptgradient für die Linienfarben */}
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>

          {/* Gradient für den Fade-Effekt an den Enden */}
          <linearGradient
            id="strokeOpacityGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor={primaryColor} stopOpacity="0" />
            <stop offset="10%" stopColor={primaryColor} stopOpacity="1" />
            <stop offset="90%" stopColor={secondaryColor} stopOpacity="1" />
            <stop offset="100%" stopColor={secondaryColor} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Alle 5 Wellenlinien mit verschiedenen Offsets */}
        {offsets.map((offset, index) => (
          <path
            key={index}
            // Wir verschieben die Kurve vertikal entsprechend dem Offset
            d={basePath}
            fill="none"
            // Verwende den Opacity-Gradienten direkt für den Stroke, um Fade-Effekt zu erzeugen
            stroke="url(#strokeOpacityGradient)"
            strokeWidth={strokeWidths[index]}
            strokeLinecap="round"
            opacity={opacities[index]}
            // Verschieben der Pfade mit transform
            transform={`translate(0, ${offset})`}
            className="transition-all duration-300"
          />
        ))}
      </svg>
    </div>
  );
}
