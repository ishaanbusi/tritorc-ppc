import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTASection({ country, lang, translations }) {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-[#D6312F] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {translations.cta.title}
        </h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          {translations.cta.subtitle}
        </p>
        <Link
          href={`/${country}/${lang}/contact`}
          className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
        >
          {translations.cta.button}
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </section>
  );
}
