import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Globe,
  Award,
  Shield,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import IndustryCard from "@/components/IndustryCard";
import CTASection from "@/components/CTASection";
import { products } from "@/lib/products";
import { industries } from "@/lib/industries";

export default function GCCHomePage() {
  const featuredProducts = products.slice(0, 6);
  const featuredIndustries = industries.slice(0, 6);

  // Comprehensive translations object for all components
  const translations = {
    nav: {
      products: "Products",
      services: "Services",
      industries: "Industries",
      about: "About Us",
      contact: "Contact",
    },
    cta: {
      title: "Ready to Transform Your Operations?",
      subtitle:
        "Get in touch with our GCC team for expert consultation and tailored solutions",
      button: "Contact Us Today",
    },
    footer: {
      company: "Company",
      products: "Products",
      support: "Support",
      legal: "Legal",
      description:
        "Leading provider of precision torque tools across the GCC region",
    },
  };

  // Set default values for country and lang if your Navigation expects them
  const country = "gcc";
  const lang = "en";

  return (
    <div className="min-h-screen bg-white">
      {/* Pass all required props to Navigation */}
      <Navigation country={country} lang={lang} translations={translations} />

      {/* Enhanced Hero Section with Gradient & Animation */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-orange-50">
          <div className="absolute top-20 right-20 w-72 h-72 bg-[#D6312F]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* GCC Badge */}
              <div className="inline-flex items-center space-x-3 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-100">
                <Globe className="w-5 h-5 text-[#D6312F]" />
                <span className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                  GCC Region Excellence
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Precision Tools for{" "}
                <span className="text-[#D6312F] relative">
                  Industrial Excellence
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="8"
                    viewBox="0 0 300 8"
                  >
                    <path
                      d="M0,4 Q150,8 300,4"
                      stroke="#D6312F"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl">
                Delivering world-class torque solutions across UAE, Saudi
                Arabia, Kuwait, Qatar, Bahrain, and Oman.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/en-gcc/products"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-[#D6312F] text-white rounded-xl font-semibold hover:bg-red-700 transition-all hover:shadow-2xl hover:-translate-y-1 shadow-lg"
                >
                  Explore Products
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/en-gcc/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 border-2 border-gray-300 rounded-xl font-semibold hover:border-[#D6312F] hover:text-[#D6312F] hover:shadow-lg transition-all"
                >
                  Request Quote
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { icon: Award, label: "ISO Certified", value: "9001:2015" },
                  { icon: Globe, label: "GCC Coverage", value: "6 Countries" },
                  { icon: Shield, label: "Warranty", value: "2 Years" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    <item.icon className="w-8 h-8 text-[#D6312F] mb-2" />
                    <div className="text-xs text-gray-500 mb-1">
                      {item.label}
                    </div>
                    <div className="text-sm font-bold text-gray-900">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Content */}
            <div className="relative">
              {/* Main Image with Enhanced Styling */}
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/images/hottapping/gcc-home.webp"
                  alt="Tritorc Industrial Solutions"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Floating Stats Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-gray-900">
                        50+
                      </div>
                      <div className="text-sm text-gray-600">
                        Countries Served
                      </div>
                    </div>
                    <div className="h-12 w-px bg-gray-300" />
                    <div>
                      <div className="text-3xl font-bold text-gray-900">
                        25+
                      </div>
                      <div className="text-sm text-gray-600">
                        Years Experience
                      </div>
                    </div>
                    <div className="h-12 w-px bg-gray-300" />
                    <div>
                      <div className="text-3xl font-bold text-[#D6312F]">
                        10k+
                      </div>
                      <div className="text-sm text-gray-600">Happy Clients</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#D6312F]/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-200/30 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-full mb-4">
              <TrendingUp className="w-4 h-4 text-[#D6312F]" />
              <span className="text-sm font-semibold text-[#D6312F] uppercase tracking-wide">
                Our Solutions
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industry-Leading Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Engineered for precision, built for reliability across diverse
              industrial applications
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                country={country}
                lang={lang}
                translations={translations}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link
              href="/en-gcc/products"
              className="inline-flex items-center px-10 py-5 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              View All Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-4 shadow-sm">
              <Globe className="w-4 h-4 text-[#D6312F]" />
              <span className="text-sm font-semibold text-[#D6312F] uppercase tracking-wide">
                Industries
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted Across Sectors
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From oil & gas to automotive manufacturing, we power critical
              operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredIndustries.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why GCC Trusts Tritorc
            </h2>
            <p className="text-xl text-gray-600">
              Commitment to excellence backed by decades of expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Local Support",
                desc: "Dedicated teams across all GCC nations",
                icon: Globe,
              },
              {
                title: "Fast Delivery",
                desc: "Regional warehouses for quick dispatch",
                icon: TrendingUp,
              },
              {
                title: "Quality Assured",
                desc: "ISO certified manufacturing processes",
                icon: Award,
              },
              {
                title: "Expert Guidance",
                desc: "Technical support from industry veterans",
                icon: Shield,
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-[#D6312F] hover:shadow-xl transition-all"
              >
                <feature.icon className="w-12 h-12 text-[#D6312F] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pass translations prop to CTASection and Footer */}
      <CTASection country={country} lang={lang} translations={translations} />
      <Footer country={country} lang={lang} translations={translations} />
    </div>
  );
}
