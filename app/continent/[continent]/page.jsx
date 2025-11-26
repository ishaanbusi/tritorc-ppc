import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { continents } from '@/lib/continents';
import { getCountriesByContinent, countries } from '@/lib/countries';

export async function generateStaticParams() {
  return continents.map((continent) => ({
    continent: continent.id
  }));
}

export default function ContinentPage({ params }) {
  const { continent } = params;
  const continentData = continents.find((c) => c.id === continent);
  const continentCountries = getCountriesByContinent(continent);

  if (!continentData) {
    return <div>Continent not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-[#D6312F] mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Regions
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            {continentData.name}
          </h1>
          <p className="text-xl text-gray-600">
            Select your country to access Tritorc solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {continentCountries.map((country) => (
            <Link
              key={country.code}
              href={`/${country.code}/${country.defaultLang}`}
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-[#D6312F] hover:-translate-y-2"
            >
              <div className="text-center space-y-3">
                <div className="text-5xl mb-3">{country.flag}</div>
                <h2 className="text-lg font-bold text-gray-900 group-hover:text-[#D6312F] transition-colors">
                  {country.name}
                </h2>
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  {country.languages.map(l => l.toUpperCase()).join(' • ')}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
