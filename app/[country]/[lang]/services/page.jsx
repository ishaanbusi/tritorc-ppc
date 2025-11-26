import Link from 'next/link';
import { ArrowLeft, Wrench, GraduationCap, HeadphonesIcon, Settings } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { countries } from '@/lib/countries';
import { translations } from '@/lib/translations';

export async function generateStaticParams() {
  const params = [];
  Object.entries(countries).forEach(([code, country]) => {
    country.languages.forEach((lang) => {
      params.push({ country: code, lang });
    });
  });
  return params;
}

const services = [
  {
    id: 'rental',
    icon: Wrench,
    title: 'Equipment Rental',
    description: 'Flexible rental programs for short-term and long-term projects with complete technical support.',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'training',
    icon: GraduationCap,
    title: 'Technical Training',
    description: 'Comprehensive training programs for operators and technicians on proper torque tool usage and safety.',
    image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'support',
    icon: HeadphonesIcon,
    title: '24/7 Technical Support',
    description: 'Round-the-clock expert support for troubleshooting, maintenance guidance, and emergency assistance.',
    image: 'https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'calibration',
    icon: Settings,
    title: 'Calibration Services',
    description: 'ISO-certified calibration services ensuring accuracy and compliance with international standards.',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function ServicesPage({ params }) {
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
              {t.nav.services}
            </h1>
            <p className="text-xl text-gray-600">
              Complete support throughout your project lifecycle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <div className="w-14 h-14 bg-[#D6312F] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <CTASection country={country} lang={lang} translations={t} />

      <Footer country={country} lang={lang} translations={t} />
    </div>
  );
}
