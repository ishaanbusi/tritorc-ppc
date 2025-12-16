"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { countries } from "@/lib/countries";

export default function Navigation({ country, lang, translations }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const pathname = usePathname();

  const currentCountry = countries[country];
  const availableLanguages = currentCountry?.languages || ["en"];

  // ✅ EMAIL BY REGION
  let contactEmail = "";
  if (pathname.startsWith("/en-gcc")) {
    contactEmail = "reach.ses@tritorc.com";
  } else if (pathname.startsWith("/en-casp")) {
    contactEmail = "reach.casp@tritorc.com";
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <Link
            href={`/${country}/${lang}`}
            className="flex items-center space-x-2"
          >
            <img
              src="/logo.png"
              alt="Tritorc Logo"
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href={`/${country}/${lang}/products`}
              className="text-gray-700 hover:text-[#D6312F] font-medium"
            >
              {translations.nav.products}
            </Link>

            <Link
              href={`/${country}/${lang}/services`}
              className="text-gray-700 hover:text-[#D6312F] font-medium"
            >
              {translations.nav.services}
            </Link>

            <Link
              href={`/${country}/${lang}/industries`}
              className="text-gray-700 hover:text-[#D6312F] font-medium"
            >
              {translations.nav.industries}
            </Link>

            <Link
              href={`/${country}/${lang}/contact`}
              className="text-gray-700 hover:text-[#D6312F] font-medium"
            >
              {translations.nav.contact}
            </Link>

            {/* EMAIL */}
            {contactEmail && (
              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#D6312F]"
              >
                <Mail className="w-4 h-4" />
                {contactEmail}
              </a>
            )}

            {/* PHONE */}
            <a
              href="tel:+918850076944"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D6312F]/10 text-[#D6312F] font-bold hover:bg-[#D6312F] hover:text-white transition"
            >
              <Phone className="w-4 h-4" />
              +91 88500 76944
            </a>

            {/* LANGUAGE */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-[#D6312F] font-medium"
              >
                <span>{lang.toUpperCase()}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border py-1">
                  {availableLanguages.map((l) => (
                    <Link
                      key={l}
                      href={`/${country}/${l}`}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => setLangDropdownOpen(false)}
                    >
                      {l.toUpperCase()}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <span className="text-2xl">{currentCountry?.flag}</span>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <Link
              href={`/${country}/${lang}/products`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations.nav.products}
            </Link>

            <Link
              href={`/${country}/${lang}/services`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations.nav.services}
            </Link>

            <Link
              href={`/${country}/${lang}/industries`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations.nav.industries}
            </Link>

            <Link
              href={`/${country}/${lang}/contact`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations.nav.contact}
            </Link>

            {/* MOBILE EMAIL */}
            {contactEmail && (
              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center gap-2 pt-3 text-gray-700"
              >
                <Mail className="w-5 h-5" />
                {contactEmail}
              </a>
            )}

            {/* MOBILE PHONE */}
            <a
              href="tel:+918850076944"
              className="flex items-center gap-2 px-4 py-3 rounded-lg bg-[#D6312F] text-white font-bold"
            >
              <Phone className="w-5 h-5" />
              Call +91 88500 76944
            </a>

            {/* LANGUAGES */}
            <div className="pt-4 border-t">
              {availableLanguages.map((l) => (
                <Link
                  key={l}
                  href={`/${country}/${l}`}
                  className="block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {l.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
