"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { gaMeasurementId } from "@/lib/site";

function hasAnalyticsConsent() {
  return localStorage.getItem("cookies-accepted") === "true";
}

export default function GoogleAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!gaMeasurementId) return;

    if (hasAnalyticsConsent()) {
      setEnabled(true);
    }

    const onConsent = () => setEnabled(true);
    window.addEventListener("cookies-accepted", onConsent);
    return () => window.removeEventListener("cookies-accepted", onConsent);
  }, []);

  if (!gaMeasurementId || !enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaMeasurementId}', {
            anonymize_ip: true,
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
