import Link from "next/link";

export default function Footer({ country, lang, translations }) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/logo.png" // ← use white/light version if on dark background
                alt="Tritorc Logo"
                className="h-8 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-gray-400">
              Precision bolting solutions for critical applications worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              {translations.footer.products}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${country}/${lang}/products`}
                  className="hover:text-[#D6312F] transition-colors"
                >
                  Hydraulic Wrenches
                </Link>
              </li>
              <li>
                <Link
                  href={`/${country}/${lang}/products`}
                  className="hover:text-[#D6312F] transition-colors"
                >
                  Hydraulic Pumps
                </Link>
              </li>
              <li>
                <Link
                  href={`/${country}/${lang}/products`}
                  className="hover:text-[#D6312F] transition-colors"
                >
                  Digital Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              {translations.footer.industries}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${country}/${lang}/industries`}
                  className="hover:text-[#D6312F] transition-colors"
                >
                  Oil & Gas
                </Link>
              </li>
              <li>
                <Link
                  href={`/${country}/${lang}/industries`}
                  className="hover:text-[#D6312F] transition-colors"
                >
                  Power Generation
                </Link>
              </li>
              <li>
                <Link
                  href={`/${country}/${lang}/industries`}
                  className="hover:text-[#D6312F] transition-colors"
                >
                  Wind Energy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              {translations.footer.about}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${country}/${lang}/contact`}
                  className="hover:text-[#D6312F] transition-colors"
                >
                  {translations.footer.contact}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${country}/${lang}/services`}
                  className="hover:text-[#D6312F] transition-colors"
                >
                  {translations.footer.services}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {translations.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
