import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { countries } from "@/lib/countries";
import { translations } from "@/lib/translations";

/* ================================
   STATIC PARAMS (SSG)
================================ */
export async function generateStaticParams() {
  const params = [];
  Object.entries(countries).forEach(([code, country]) => {
    country.languages.forEach((lang) => {
      params.push({ country: code, lang });
    });
  });
  return params;
}

/* ================================
   CONTACT PAGE
================================ */
export default function ContactPage({ params }) {
  const { country, lang } = params;

  const countryData = countries[country];
  const t = translations[lang] || translations.en;

  /* ================================
     REGION-BASED CONTACT DETAILS
     (CASP | US | GCC)
  ================================ */
  const isCASP = country === "casp";
  const isUS = country === "us";

  const regionContact = isCASP
    ? {
        email: "reach.casp@tritorc.com",
        phone: "+971 565095820",
        phoneHref: "tel:+971565095820",
      }
    : isUS
    ? {
        email: "reach.usa@tritorc.com",
        phone: "+17047494050", // change if needed
        phoneHref: "tel:+17047494050",
      }
    : {
        // GCC (default)
        email: "reach.ses@tritorc.com",
        phone: "+971 506304582",
        phoneHref: "tel:+971506304582",
      };

  const contactEmail = regionContact.email;
  const contactPhone = regionContact.phone;
  const contactPhoneHref = regionContact.phoneHref;

  return (
    <div className="min-h-screen bg-white">
      <Navigation country={country} lang={lang} translations={t} />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* ================================
             BACK LINK
          ================================ */}
          <Link
            href={`/${country}/${lang}`}
            className="inline-flex items-center text-gray-600 hover:text-[#D6312F] mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          {/* ================================
             HEADER
          ================================ */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              {t.nav.contact}
            </h1>
            <p className="text-xl text-gray-600">
              Get in touch with our engineering specialists
            </p>
          </div>

          {/* ================================
             CONTENT GRID
          ================================ */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* ================================
               CONTACT FORM
            ================================ */}
            <div className="lg:col-span-2">
              <ContactForm email={contactEmail} />
            </div>

            {/* ================================
               CONTACT INFO
            ================================ */}
            <div className="space-y-6">
              {/* EMAIL */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-[#D6312F] rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-gray-600 hover:text-[#D6312F]"
                >
                  {contactEmail}
                </a>
              </div>

              {/* PHONE */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-[#D6312F] rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                <a
                  href={contactPhoneHref}
                  className="text-gray-600 hover:text-[#D6312F]"
                >
                  {contactPhone}
                </a>
              </div>

              {/* LOCATION */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-[#D6312F] rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {countryData?.name}
                </h3>
                <p className="text-gray-600">Local representative available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer country={country} lang={lang} translations={t} />
    </div>
  );
}
