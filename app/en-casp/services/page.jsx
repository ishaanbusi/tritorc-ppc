import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Wrench,
  Settings,
  Zap,
  Shield,
  Clock,
  Award,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { translations } from "@/lib/translations";

// Metadata for SEO
export const metadata = {
  title: "Industrial Services | Tritorc Caspian Region",
  description:
    "Comprehensive industrial services across the Caspian region. Hot tapping, line stopping, torque solutions, and technical support for oil & gas, petrochemical, and power generation industries.",
};

export default function ServicesPage({ params }) {
  const { country = "casp", lang = "en" } = params || {};
  const t = translations[lang] || translations.en;

  const services = [
    {
      id: "hot-tapping",
      title: "Hot Tapping & Line Stopping",
      description:
        "Seamless system modifications, maintenance, and expansions while operations continue uninterrupted. Zero downtime solutions for critical infrastructure.",
      icon: Zap,
      image: "/images/services/hot-tapping.jpg",
      features: [
        "Rated up to 1,450 psig and 280°C",
        "API 2201 & DNP certified",
        "Zero operational downtime",
        "Environmental responsibility",
      ],
      link: "/en-casp/services/hot-tapping-and-line-stopping",
      badge: "Most Popular",
    },
    {
      id: "pipe-freezing",
      title: "Pipe Freezing Services",
      description:
        "Safe, non-intrusive pipeline isolation for industries where shutdowns are costly. ISO-certified freezing procedures for live-line work.",
      icon: Settings,
      image: "/images/services/pipe-freezing.jpg",
      features: [
        "Pipe sizes ½″ to 30″+",
        "Up to 6000 PSI pressure",
        "ISO-certified procedures",
        "Zero system drainage",
      ],
      link: "/en-casp/services/pipe-freezing",
      badge: null,
    },
    {
      id: "torque-solutions",
      title: "Hydraulic Torque Solutions",
      description:
        "Precision hydraulic torque wrenches and tensioning systems for critical bolting applications. ASME PCC-1 compliant with ±3% accuracy.",
      icon: Wrench,
      image: "/images/services/torque-solutions.jpg",
      features: [
        "±3% precision accuracy",
        "ASME PCC-1 compliance",
        "Calibration certificates",
        "Global 24h delivery",
      ],
      link: "/en-casp/products",
      badge: null,
    },
    {
      id: "technical-support",
      title: "Technical Support & Training",
      description:
        "Comprehensive on-site technical support, equipment training, and certification programs for your maintenance teams.",
      icon: Clock,
      image: "/images/services/technical-support.jpg",
      features: [
        "24/7 emergency support",
        "On-site training programs",
        "Equipment certification",
        "Maintenance planning",
      ],
      link: "/en-casp/contact",
      badge: null,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation country={country} lang={lang} translations={t} />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#D6312F]/10 via-transparent to-blue-600/10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center max-w-4xl mx-auto text-white space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
              <Shield className="w-5 h-5 text-[#D6312F]" />
              <span className="text-sm font-bold uppercase tracking-wider">
                Comprehensive Industrial Services
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Expert Services for
              </span>
              <br />
              <span className="text-[#D6312F]">Caspian Region</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Delivering specialized industrial services across Azerbaijan,
              Kazakhstan, and Turkmenistan with unmatched expertise, safety
              standards, and 24/7 support for oil & gas, petrochemical, and
              power generation sectors.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-3xl mx-auto border-t border-white/20">
              <StatBadge label="Countries" value="3+" />
              <StatBadge label="Years Experience" value="35+" />
              <StatBadge label="Industries Served" value="10+" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-red-50 text-[#D6312F] rounded-full text-sm font-bold mb-4">
              Our Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Complete Industrial Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From hot tapping to hydraulic torque solutions, we provide
              end-to-end services for critical industrial operations
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                country={country}
                lang={lang}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Why Choose Tritorc
            </h2>
            <p className="text-xl text-gray-600">
              Trusted partner for critical industrial operations across the
              Caspian region
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Safety First",
                desc: "API, ASME, and DNP certified procedures with zero-compromise approach",
              },
              {
                icon: Clock,
                title: "24/7 Support",
                desc: "Emergency response teams available round the clock",
              },
              {
                icon: Award,
                title: "Proven Expertise",
                desc: "35+ years of field-proven performance in critical operations",
              },
              {
                icon: Zap,
                title: "Zero Downtime",
                desc: "Innovative solutions that keep your operations running",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#D6312F] hover:shadow-xl transition-all"
              >
                <benefit.icon className="w-12 h-12 text-[#D6312F] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Trusted across critical sectors in the Caspian region
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Oil & Gas", icon: "🛢️" },
              { name: "Petrochemical", icon: "⚗️" },
              { name: "Power Generation", icon: "⚡" },
              { name: "Marine & Offshore", icon: "🚢" },
              { name: "Pharmaceuticals", icon: "💊" },
              { name: "Food Processing", icon: "🏭" },
              { name: "Water Treatment", icon: "💧" },
              { name: "HVAC Systems", icon: "❄️" },
              { name: "Manufacturing", icon: "⚙️" },
              { name: "Infrastructure", icon: "🏗️" },
            ].map((industry, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-xl p-6 text-center hover:border-[#D6312F] hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <div className="font-semibold text-gray-900 text-sm">
                  {industry.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#D6312F]/10 via-transparent to-blue-600/10" />

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-white">
              Expert Team Available 24/7
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            Ready to Get Started?
          </h2>

          <p className="text-2xl text-gray-300 mb-8">
            Contact our team for expert consultation and tailored solutions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/en-casp/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#D6312F] to-red-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              Contact Us Today
              <ArrowRight className="ml-2 w-6 h-6" />
            </Link>
            <a
              href="tel:+994XXXXXXXX"
              className="inline-flex items-center justify-center px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
            >
              Call: +994 XXX XXXX
            </a>
          </div>
        </div>
      </section>

      <Footer country={country} lang={lang} translations={t} />
    </div>
  );
}

/* ====================== Helper Components ====================== */

function StatBadge({ label, value }) {
  return (
    <div>
      <div className="text-3xl lg:text-4xl font-bold text-[#D6312F] mb-1">
        {value}
      </div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );
}

function ServiceCard({ service, index, country, lang }) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
        !isEven ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image Side */}
      <div className={`relative ${!isEven ? "lg:order-2" : ""}`}>
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-200 group">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {service.badge && (
            <div className="absolute top-4 right-4 bg-[#D6312F] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              {service.badge}
            </div>
          )}
        </div>
      </div>

      {/* Content Side */}
      <div className={`space-y-6 ${!isEven ? "lg:order-1" : ""}`}>
        <div className="inline-flex items-center space-x-3 bg-gray-100 rounded-full px-4 py-2">
          <service.icon className="w-5 h-5 text-[#D6312F]" />
          <span className="text-sm font-semibold text-gray-700">
            Service #{index + 1}
          </span>
        </div>

        <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
          {service.title}
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed">
          {service.description}
        </p>

        <div className="space-y-3">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-[#D6312F] flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <Link
          href={service.link}
          className="inline-flex items-center px-8 py-4 bg-[#D6312F] text-white rounded-xl font-semibold hover:bg-red-700 transition-all hover:shadow-xl group"
        >
          Learn More
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
