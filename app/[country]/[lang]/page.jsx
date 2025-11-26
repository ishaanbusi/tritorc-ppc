import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import IndustryCard from '@/components/IndustryCard';
import CTASection from '@/components/CTASection';
import { countries } from '@/lib/countries';
import { translations } from '@/lib/translations';
import { products } from '@/lib/products';
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

export default function CountryHomePage({ params }) {
  const { country, lang } = params;
  const countryData = countries[country];
  const t = translations[lang] || translations.en;

  if (!countryData) {
    return <div>Country not found</div>;
  }

  const featuredProducts = products.slice(0, 6);
  const featuredIndustries = industries.slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      <Navigation country={country} lang={lang} translations={t} />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-6xl">{countryData.flag}</span>
                <div>
                  <div className="text-sm font-semibold text-[#D6312F] uppercase tracking-wide">
                    {countryData.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {lang.toUpperCase()}
                  </div>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href={`/${country}/${lang}/products`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#D6312F] text-white rounded-lg font-semibold hover:bg-red-700 transition-all hover:scale-105 shadow-lg"
                >
                  {t.hero.ctaPrimary}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href={`/${country}/${lang}/contact`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 border-2 border-gray-300 rounded-lg font-semibold hover:border-[#D6312F] hover:text-[#D6312F] transition-all"
                >
                  {t.hero.ctaSecondary}
                </Link>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 inline-block">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#D6312F] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 font-medium">
                    {t.hero.technicalHighlight}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Tritorc Products"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D6312F] rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-center text-white">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-xs">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.products.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.products.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                country={country}
                lang={lang}
                translations={t}
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              href={`/${country}/${lang}/products`}
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all hover:scale-105"
            >
              {t.products.viewAll}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.industries.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.industries.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredIndustries.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      <CTASection country={country} lang={lang} translations={t} />

      <Footer country={country} lang={lang} translations={t} />
    </div>
  );
}
