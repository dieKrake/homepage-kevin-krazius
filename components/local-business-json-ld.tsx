import React from "react";

export default function LocalBusinessJSONLD() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Krazius Solutions",
    image: "https://krazius-solutions.com/Krazius-Solutions-Logo_cut.png",
    "@id": "https://krazius-solutions.com",
    url: "https://krazius-solutions.com",
    telephone: "+49 162 405 9165",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hauptstraße 60",
      addressLocality: "Jagstzell",
      postalCode: "73489",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.0308,
      longitude: 10.0931,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: ["https://www.linkedin.com/in/kevin-krazius/"],
    priceRange: "€€",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  );
}
