// Google Analytics Integration
// Uncomment and configure when ready to use analytics

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Replace with your actual Google Analytics Measurement ID
// const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

export const initGoogleAnalytics = (measurementId: string) => {
  // Load Google Analytics script
  const script1 = document.createElement("script");
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  // Initialize gtag
  const script2 = document.createElement("script");
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}', {
      page_title: document.title,
      page_location: window.location.href,
    });
  `;
  document.head.appendChild(script2);
};

export const trackEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, parameters);
  }
};

export const trackPageView = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Usage examples:
// trackEvent('contact_form_submit', { method: 'email' });
// trackEvent('button_click', { button_name: 'hero_cta' });
// trackPageView('/services');
