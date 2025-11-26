"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { getTranslation } from "@/lib/translations";
import { countries } from "@/lib/countries";

export default function Navigation({ country, lang, translations }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const currentCountry = countries[country];
  const availableLanguages = currentCountry?.languages || ["en"];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href={`/${country}/${lang}`}
            className="flex items-center space-x-2"
          >
            <img
              src="/logo.png" // ← replace with your actual path
              alt="Tritorc Logo"
              className="h-8 w-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href={`/${country}/${lang}/products`}
              className="text-gray-700 hover:text-[#D6312F] transition-colors font-medium"
            >
              {translations.nav.products}
            </Link>
            <Link
              href={`/${country}/${lang}/services`}
              className="text-gray-700 hover:text-[#D6312F] transition-colors font-medium"
            >
              {translations.nav.services}
            </Link>
            <Link
              href={`/${country}/${lang}/industries`}
              className="text-gray-700 hover:text-[#D6312F] transition-colors font-medium"
            >
              {translations.nav.industries}
            </Link>
            <Link
              href={`/${country}/${lang}/contact`}
              className="text-gray-700 hover:text-[#D6312F] transition-colors font-medium"
            >
              {translations.nav.contact}
            </Link>

            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-[#D6312F] transition-colors font-medium"
              >
                <span>{lang.toUpperCase()}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
                  {availableLanguages.map((l) => (
                    <Link
                      key={l}
                      href={`/${country}/${l}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#D6312F]"
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

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <Link
              href={`/${country}/${lang}/products`}
              className="block text-gray-700 hover:text-[#D6312F] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations.nav.products}
            </Link>
            <Link
              href={`/${country}/${lang}/services`}
              className="block text-gray-700 hover:text-[#D6312F] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations.nav.services}
            </Link>
            <Link
              href={`/${country}/${lang}/industries`}
              className="block text-gray-700 hover:text-[#D6312F] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations.nav.industries}
            </Link>
            <Link
              href={`/${country}/${lang}/contact`}
              className="block text-gray-700 hover:text-[#D6312F] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations.nav.contact}
            </Link>

            <div className="pt-3 border-t border-gray-200">
              <div className="text-sm text-gray-500 mb-2">
                {translations.nav.selectLanguage}
              </div>
              {availableLanguages.map((l) => (
                <Link
                  key={l}
                  href={`/${country}/${l}`}
                  className="block py-2 text-gray-700 hover:text-[#D6312F]"
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
