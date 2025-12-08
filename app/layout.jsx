import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tritorc - Precision Bolting Solutions Worldwide",
  description:
    "Engineering-grade hydraulic torque tools for critical applications worldwide. Trusted by Fortune 500 companies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* LinkedIn Insight Tag */}
      <Script id="linkedin-insight" strategy="afterInteractive">
        {`
          _linkedin_partner_id = "8987961";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        `}
      </Script>

      <Script
        id="linkedin-insight-lib"
        strategy="afterInteractive"
        src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
      />

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src="https://px.ads.linkedin.com/collect/?pid=8987961&fmt=gif"
        />
      </noscript>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
