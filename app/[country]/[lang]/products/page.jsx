import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { countries } from "@/lib/countries";
import { translations } from "@/lib/translations";
import { products } from "@/lib/products";

export async function generateStaticParams() {
  const params = [];
  Object.entries(countries).forEach(([code, country]) => {
    country.languages.forEach((lang) => {
      params.push({ country: code, lang });
    });
  });
  return params;
}

export default function ProductsPage({ params }) {
  const { country, lang } = params;
  const t = translations[lang] || translations.en;

  const categories = [...new Set(products.map((p) => p.category))];

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
            {t.productPage.backToProducts}
          </Link>

          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              {t.products.title}
            </h1>
            <p className="text-xl text-gray-600">{t.products.subtitle}</p>
          </div>

          {categories.map((category) => {
            const categoryProducts = products.filter(
              (p) => p.category === category
            );
            return (
              <div key={category} className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-[#D6312F] pb-3 inline-block">
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      country={country}
                      lang={lang}
                      translations={t}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer country={country} lang={lang} translations={t} />
    </div>
  );
}
