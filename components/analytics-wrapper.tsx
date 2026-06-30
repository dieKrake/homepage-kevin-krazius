"use client";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useCookieConsent } from "@/context/cookie-context";
import Script from "next/script";

export default function AnalyticsWrapper() {
  const { consent } = useCookieConsent();

  return (
    <>
      {consent.analytics && (
        <>
          <Analytics />
          <SpeedInsights />
        </>
      )}
      {consent.marketing && (
        <Script
          src="https://calendar.google.com/calendar/scheduling-button/index.js"
          strategy="lazyOnload"
        />
      )}
    </>
  );
}
