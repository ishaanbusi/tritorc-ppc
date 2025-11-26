import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import IndustryCard from '@/components/IndustryCard';
import CTASection from '@/components/CTASection';
import { countries } from '@/lib/countries';
import { translations } from '@/lib/translations';
import { industries } from '@/lib/industries';

export async function generateStaticParams() {
  const params = [];
  Object.entries(countries).forEach(([code, country]) => {
    country.languages.forEach((lang) => {
      params.push({ country: code, lang });
    });
  });
  return params;
}

export default function IndustriesPage({ params }) {
  const { country, lang } = params;
  const t = translations[lang] || translations.en;

  return (
    <div className="min-h-screen bg-white">
      <Navigation country={country} lang={lang} translations={t} />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href={`/${country}/${lang}`}
            className="inline-flex items-center text-gray-600 hover:text-[#D6312F] mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              {t.industries.title}
            </h1>
            <p className="text-xl text-gray-600">
              {t.industries.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </div>
      </div>

      <CTASection country={country} lang={lang} translations={t} />

      <Footer country={country} lang={lang} translations={t} />
    </div>
  );
}
