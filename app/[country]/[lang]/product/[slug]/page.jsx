import Link from "next/link";
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { countries } from "@/lib/countries";
import { translations } from "@/lib/translations";
import { products, getProductBySlug } from "@/lib/products";
import CountryScroller from "@/components/CountryScroller";

export async function generateStaticParams() {
  const params = [];
  Object.entries(countries).forEach(([code, country]) => {
    country.languages.forEach((lang) => {
      products.forEach((product) => {
        params.push({ country: code, lang, slug: product.id });
      });
    });
  });
  return params;
}

export default function ProductPage({ params }) {
  const { country, lang, slug } = params;
  const t = translations[lang] || translations.en;
  const product = getProductBySlug(slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation country={country} lang={lang} translations={t} />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href={`/${country}/${lang}/products`}
            className="inline-flex items-center text-gray-600 hover:text-[#D6312F] mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {t.productPage.backToProducts}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-[#D6312F] uppercase tracking-wide mb-3">
                {product.category}
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {product.shortDescription}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">Torque Range</div>
                  <div className="text-lg font-bold text-gray-900">
                    {product.torqueRange}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">Weight</div>
                  <div className="text-lg font-bold text-gray-900">
                    {product.weight}
                  </div>
                </div>
              </div>

              <Link
                href={`/${country}/${lang}/contact`}
                className="inline-flex items-center px-8 py-4 bg-[#D6312F] text-white rounded-lg font-semibold hover:bg-red-700 transition-all hover:scale-105 shadow-lg"
              >
                {t.productPage.requestProposal}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-[#D6312F] pb-3 inline-block">
                {t.productPage.features}
              </h2>
              <ul className="space-y-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#D6312F] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-[#D6312F] pb-3 inline-block">
                {t.productPage.applications}
              </h2>
              <ul className="space-y-4">
                {product.applications.map((app, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#D6312F] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t.productPage.specifications}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between items-center py-3 border-b border-gray-200"
                >
                  <span className="font-semibold text-gray-700">{key}</span>
                  <span className="text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CountryScroller />
      <Footer country={country} lang={lang} translations={t} />
    </div>
  );
}
