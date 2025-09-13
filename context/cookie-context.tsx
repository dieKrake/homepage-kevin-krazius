"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type CookieConsent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

type CookieContextType = {
  consent: CookieConsent;
  showBanner: boolean;
  acceptAll: () => void;
  acceptNecessary: () => void;
  updateConsent: (newConsent: CookieConsent) => void;
  resetConsent: () => void;
};

const CookieContext = createContext<CookieContextType | null>(null);

export function useCookieConsent() {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error("useCookieConsent must be used within CookieProvider");
  }
  return context;
}

export default function CookieProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
  });

  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem("cookie-consent");
    if (savedConsent) {
      setConsent(JSON.parse(savedConsent));
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }
  }, []);

  const saveConsent = (newConsent: CookieConsent) => {
    setConsent(newConsent);
    localStorage.setItem("cookie-consent", JSON.stringify(newConsent));
    setShowBanner(false);

    // Trigger analytics loading if accepted
    if (newConsent.analytics) {
      loadGoogleAnalytics();
    }
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const acceptNecessary = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const updateConsent = (newConsent: CookieConsent) => {
    saveConsent(newConsent);
  };

  const resetConsent = () => {
    localStorage.removeItem("cookie-consent");
    setConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    });
    setShowBanner(true);
  };

  // Function to load Google Analytics (when ready)
  const loadGoogleAnalytics = () => {
    // TODO: Implement when you add Google Analytics
    // Example:
    // const GA_TRACKING_ID = 'GA_MEASUREMENT_ID';
    // gtag('config', GA_TRACKING_ID);
    console.log("Analytics consent given - ready to load Google Analytics");
  };

  return (
    <CookieContext.Provider
      value={{
        consent,
        showBanner,
        acceptAll,
        acceptNecessary,
        updateConsent,
        resetConsent,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
}
