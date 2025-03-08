"use client";

import React, { useState, useEffect, useMemo } from "react";

export default function WaveBackground() {
  const [isMounted, setIsMounted] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setIsMounted(true);

    // Bildschirmbreite ermitteln und bei Änderung aktualisieren
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    // Initial setzen
    updateScreenWidth();

    // Event-Listener für Bildschirmgrößenänderungen
    window.addEventListener("resize", updateScreenWidth);

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  // Erstellt einen fließenden Wellenpfad mit nahtlosen Übergängen
  const createWavePath = (totalPoints: number, offset: number = 0) => {
    const points = [];
    // Wir nutzen eine feste Breite für ein Wellensegment (wie auf einem Handy)
    const segmentWidth = 1200;
    const step = segmentWidth / totalPoints;

    for (let i = 0; i < totalPoints; i++) {
      const x = i * step + offset;
      // Erstelle eine sanfte S-förmige Wellenbewegung
      // Wir nutzen modulo, um die Position innerhalb eines Segments zu ermitteln
      const segmentProgress = (x % segmentWidth) / segmentWidth;

      // Spezielle Sinus-Funktion für nahtlosen Übergang (eine volle Periode)
      // sine(0) = 0 und sine(1) = 0, daher gibt es keinen Versatz am Übergang
      const y = 300 + Math.sin(segmentProgress * Math.PI * 2) * 80;

      points.push({ x, y });
    }

    return points;
  };

  // Berechne, wie viele Segmente wir benötigen, um den Bildschirm zu füllen
  const totalSegments = useMemo(() => {
    if (!screenWidth) return 1;

    // Ein Segment ist etwa 1200px breit (Handy-Referenz)
    const segmentWidth = 1200;
    // Berechne, wie viele Segmente benötigt werden, um den Bildschirm zu füllen
    return Math.ceil(screenWidth / segmentWidth) + 1; // +1 für Sicherheit
  }, [screenWidth]);

  // Erstelle mehrere Wellenpfade, die nahtlos aneinander anschließen
  const paths = useMemo(() => {
    // Erzeuge einen einzelnen nahtlosen Pfad für die gesamte Breite
    // anstatt separate Segmente zu erstellen
    const totalPoints = totalSegments * 100;
    return createWavePath(totalPoints, 0);
  }, [totalSegments]);

  // Erstellt die sichtbaren Linien über und unter dem Hauptpfad
  const createVisibleLines = (mainPath: any[], totalLinesPerSide: number) => {
    const allLines = [];

    // Bestimme die Gesamtbreite für das Fade-In/Out an den Rändern
    const totalWidth =
      mainPath.length > 0
        ? mainPath[mainPath.length - 1].x
        : totalSegments * 1200;
    const fadeWidth = 500; // Breite des Verblassens an den Rändern

    // Erstelle Linien oberhalb und unterhalb mit gleichmäßigen Abständen
    for (let side = -1; side <= 1; side += 2) {
      // -1 für unten, 1 für oben
      for (let lineIdx = 0; lineIdx < totalLinesPerSide; lineIdx++) {
        const line = [];
        // Konstanter Abstand zwischen den Linien
        const baseOffset = 15 + lineIdx * 15 * side;

        // Punktgröße basierend auf Position: unten größer, oben kleiner
        // Speichere die Basisgröße pro Linie
        const basePointSize =
          side === -1
            ? 3.5 - lineIdx * 0.3 // Untere Linien: großer Durchmesser, sanft abnehmend
            : 3 - lineIdx * 0.3; // Obere Linien: kleiner Durchmesser, sanft abnehmend

        for (let i = 0; i < mainPath.length; i++) {
          const point = mainPath[i];
          // Berechne die Position innerhalb eines Segments für den Farbverlauf
          // Dies stellt sicher, dass der Farbverlauf sich für jedes Segment wiederholt
          const segmentWidth = 1200;
          const segmentProgress = (point.x % segmentWidth) / segmentWidth;

          // Definiere Farbübergang basierend auf X-Position
          let color;
          if (segmentProgress < 0.45) {
            // Violett/Lila-Bereich (links)
            color = "#9333ea";
          } else if (segmentProgress > 0.55) {
            // Blau/Türkis-Bereich (rechts)
            color = "#22d3ee";
          } else {
            // Übergangsbereich in der Mitte
            // Normalisiere den Fortschritt innerhalb des Übergangsbereichs
            const transitionProgress = (segmentProgress - 0.45) / 0.1;
            // Interpoliere zwischen den Farben
            color = interpolateColor("#9333ea", "#22d3ee", transitionProgress);
          }

          // Spreizfaktor mit nahtlosem Übergang (eine volle Sinuswelle)
          // sin(0) = 0, sin(2π) = 0, daher gleicher Wert am Anfang und Ende
          const spreadFactor =
            0.7 + Math.sin(segmentProgress * Math.PI * 2) * 0.3;

          // Berechne Offset für die aktuelle Position
          const offset = baseOffset * spreadFactor;

          // Berechne Tangente zur Kurve
          let dx = 0,
            dy = 0;
          if (i > 0 && i < mainPath.length - 1) {
            dx = mainPath[i + 1].x - mainPath[i - 1].x;
            dy = mainPath[i + 1].y - mainPath[i - 1].y;
            const len = Math.sqrt(dx * dx + dy * dy);
            if (len > 0) {
              dx /= len;
              dy /= len;
            }
          } else if (i === 0) {
            // Ersten Punkt ähnlich behandeln wie die anderen Punkte
            dx = mainPath[1].x - mainPath[0].x;
            dy = mainPath[1].y - mainPath[0].y;
            const len = Math.sqrt(dx * dx + dy * dy);
            if (len > 0) {
              dx /= len;
              dy /= len;
            }
          } else if (i === mainPath.length - 1) {
            // Letzten Punkt ähnlich behandeln
            dx = mainPath[i].x - mainPath[i - 1].x;
            dy = mainPath[i].y - mainPath[i - 1].y;
            const len = Math.sqrt(dx * dx + dy * dy);
            if (len > 0) {
              dx /= len;
              dy /= len;
            }
          }

          // Orthogonale Richtung zur Kurve
          const nx = -dy;
          const ny = dx;

          // Position des Punktes mit Offset
          const x = point.x + nx * offset;
          const y = point.y + ny * offset;

          // Berechne Fade-Faktor basierend auf der Position
          // Am linken und rechten Rand soll die Welle verblassen
          let fadeFactor = 1.0;

          // Linker Rand: Fade-In
          if (x < fadeWidth) {
            fadeFactor = Math.max(0.1, x / fadeWidth);
          }

          // Rechter Rand: Fade-Out - beginnt früher
          const viewBoxWidth = totalSegments * 1200;
          if (x > viewBoxWidth - fadeWidth) {
            fadeFactor = Math.max(0.1, (viewBoxWidth - x) / fadeWidth);
          }

          // Basis-Opazität (wie zuvor)
          const baseOpacity = 0.8 - (lineIdx / totalLinesPerSide) * 0.3;

          // Finale Opazität mit Fade-Faktor
          const finalOpacity = baseOpacity * fadeFactor;

          line.push({
            x,
            y,
            color,
            pointSize: basePointSize, // Speichere die Punktgröße für diese Linie
            opacity: finalOpacity, // Mit Verblassen an den Rändern
          });
        }

        allLines.push(line);
      }
    }

    return allLines;
  };

  // Hilfsfunktion zur Farbinterpolation (HEX zu HEX)
  const interpolateColor = (color1: string, color2: string, factor: number) => {
    // Konvertiere HEX zu RGB
    const r1 = parseInt(color1.substring(1, 3), 16);
    const g1 = parseInt(color1.substring(3, 5), 16);
    const b1 = parseInt(color1.substring(5, 7), 16);

    const r2 = parseInt(color2.substring(1, 3), 16);
    const g2 = parseInt(color2.substring(3, 5), 16);
    const b2 = parseInt(color2.substring(5, 7), 16);

    // Interpoliere die RGB-Werte
    const r = Math.round(r1 + factor * (r2 - r1));
    const g = Math.round(g1 + factor * (g2 - g1));
    const b = Math.round(b1 + factor * (b2 - b1));

    // Konvertiere zurück zu HEX
    return `#${r.toString(16).padStart(2, "0")}${g
      .toString(16)
      .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  };

  // Erstelle die sichtbaren Linien basierend auf dem Wellenpfad
  const visibleLines = useMemo(() => {
    return createVisibleLines(paths, 8);
  }, [paths, totalSegments]); // totalSegments als Abhängigkeit hinzugefügt

  if (!isMounted) return null;

  // Der viewBox-Bereich muss genügend Raum für alle Segmente bieten
  const viewBoxWidth = totalSegments * 1200;

  return (
    <div className="absolute top-0 left-0 right-0 w-full h-full overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox={`0 0 ${viewBoxWidth} 800`}
        preserveAspectRatio="xMinYMid slice" // Zeigt den Anfang des SVGs und schneidet den Rest ab
      >
        <defs>
          {/* Gradient-Maske für sanftes Ein-/Ausblenden an den Rändern */}
          <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "white", stopOpacity: 0.1 }}
            />
            <stop offset="2%" style={{ stopColor: "white", stopOpacity: 1 }} />
            <stop offset="98%" style={{ stopColor: "white", stopOpacity: 1 }} />
            <stop
              offset="100%"
              style={{ stopColor: "white", stopOpacity: 0.1 }}
            />
          </linearGradient>
          <mask id="fadeMask">
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#fadeGradient)"
            />
          </mask>
        </defs>

        <g mask="url(#fadeMask)">
          {visibleLines.map((line, lineIndex) => (
            <g key={lineIndex}>
              {line.map((point, pointIndex) => {
                // Gleichmäßigere Verteilung der Punkte
                if (pointIndex % 2 === 0) {
                  // Jeden zweiten Punkt für dichtere Darstellung
                  return (
                    <circle
                      key={`${lineIndex}-${pointIndex}`}
                      cx={point.x}
                      cy={point.y}
                      r={point.pointSize}
                      fill={point.color}
                      opacity={point.opacity}
                    />
                  );
                }
                return null;
              })}
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
